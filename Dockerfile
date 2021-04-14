FROM node:15.11.0-buster

#install odbc driver
#https://docs.microsoft.com/en-us/sql/connect/odbc/linux-mac/installing-the-microsoft-odbc-driver-for-sql-server?view=sql-server-ver15#debian17
RUN curl https://packages.microsoft.com/keys/microsoft.asc | apt-key add -
RUN curl https://packages.microsoft.com/config/debian/10/prod.list > /etc/apt/sources.list.d/mssql-release.list
RUN apt-get update
RUN ACCEPT_EULA=Y apt-get install -y msodbcsql17
RUN ACCEPT_EULA=Y apt-get install -y mssql-tools
RUN echo 'export PATH="$PATH:/opt/mssql-tools/bin"' >> ~/.bashrc
RUN apt-get install -y unixodbc-dev

#make sure that .so file is mapped also to x86 location
RUN ln -s /opt/microsoft/msodbcsql17/lib64/libmsodbcsql-17.7.so.2.1 /usr/lib/libmsodbcsql-17.so

#copy code to
COPY ./ /

#compile and download dependencies
RUN rm -f package-lock.json
RUN npm install
RUN npx tsc


#start app
ENTRYPOINT npm start
