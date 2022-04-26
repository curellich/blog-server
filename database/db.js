import {Sequelize} from "sequelize";

const db = new Sequelize('database_app', 'root', '4948Nino',
    {
        host: "localhost",
        dialect: "mysql"

    });

export default db;
