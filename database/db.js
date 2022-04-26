import {Sequelize} from "sequelize";
/*
const db = new Sequelize('database_app', 'root', '4948Nino',
    {
        host: "localhost",
        dialect: "mysql"

    });

 */
const db = new Sequelize('heroku_e567a4ff2c97edd', 'b1cdd098182478', '8f32a79a',
    {
        host: "us-cdbr-east-05.cleardb.net",
        dialect: "mysql"

    });

export default db;
