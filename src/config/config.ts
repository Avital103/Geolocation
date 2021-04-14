require('dotenv').config();

export = {
    development: {
        database: {
            distance: {
                dialect: 'mssql',
                dialectModulePath: 'msnodesqlv8/lib/sequelize',
                dialectOptions: {
                    options: {
                        connectionString: process.env.DISTANCE_CONNECTION_STRING
                    }
                },
            },
        }
    },
    test: {
        database: {
            distance: {
                dialect: 'mssql',
                dialectModulePath: 'msnodesqlv8/lib/sequelize',
                dialectOptions: {
                    options: {
                        connectionString: process.env.DISTANCE_CONNECTION_STRING
                    }
                },
            },
        }
    },
    production: {
        database: {
            distance: {
                dialect: 'mssql',
                dialectModulePath: 'msnodesqlv8/lib/sequelize',
                dialectOptions: {
                    options: {
                        connectionString: process.env.DISTANCE_CONNECTION_STRING
                    }
                },
            },
        }
    },
}