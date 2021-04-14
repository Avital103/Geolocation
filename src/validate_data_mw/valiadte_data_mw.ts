import {body, validationResult, query} from 'express-validator';
import {NextFunction, Request, Response} from "express";

export const validateReqData = () => {
    return [
        query('source').exists().withMessage('source is missing'),
        query('destination').exists().withMessage('destination is missing')
    ]
}

export const validateReqBodyData = () => {
    return [
        body('source').exists().withMessage('source is missing')
            .isString().withMessage('source should be a string'),
        body('destination').exists().withMessage('destination is missing')
            .isString().withMessage('destination should be a string'),
        body('distance').exists().withMessage('distance is missing')
            .isNumeric().withMessage('distance should be a number'),

    ]
}

export function handleValidations(req: Request, res: Response, next: NextFunction) {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).send(errors);
    } else {
        next()
    }
}