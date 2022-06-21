import {Sequelize} from "sequelize";

const db = new Sequelize('heroku_e567a4ff2c97edd', 'b1cdd098182478', '8f32a79a',
    {
        host: "us-cdbr-east-05.cleardb.net",
        dialect: "mysql",
        // port: '8080'
    });

export default db;
