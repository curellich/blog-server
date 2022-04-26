//importamos la conexion a la base de datos
import db from "../database/db.js";
//importamos sequelize
import {DataTypes} from "sequelize";

const BlogModel = db.define("Blogs", {
    title: {type: DataTypes.STRING},
    content: {type: DataTypes.STRING},
    createdAt: {type: DataTypes.DATE},
    updateAt: {type: DataTypes.DATE}

}, {
    timestamps: false,
})


export default BlogModel;