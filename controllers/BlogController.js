//importamos el modelo
import BlogModel from "../models/BlogModel.js";

//Métodos del CRUD

//Mostrar todos los registros

export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await BlogModel.findAll()
        res.json(blogs)
    } catch (e) {
        res.json({message: e.message})
    }
}

//Mostrar un registro

export const getBlog = async (req, res) => {
    try {
        const blog = await BlogModel.findAll({
            where: {
                id: req.params.id
            }
        })
        res.json(blog[0])
    } catch (e) {
        res.json({message: e.message})
    }
}

//Insertar un registro

export const insertBlog = async (req, res) => {
    try {
        await BlogModel.create(req.body)
        res.json({
            "message": "El registro fue creado correctamente"
        })
    } catch (e) {
        res.json({message: e.message})
    }
}

//Actualizar un registro

export const updateBlog = async (req, res) => {
    try {
        await BlogModel.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.json({"message": "Registro actualizado correctamente"})
    } catch (e) {
        res.json({message: e.message})
    }
}

//Eliminar un registro

export const deleteBlog = async (req, res) => {
    try {
        await BlogModel.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json({"message": "Registro eliminado correctamente"})
    } catch (e) {
        res.json({message: e.message})
    }
}
