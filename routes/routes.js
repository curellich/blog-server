import express from 'express';
import {deleteBlog, getAllBlogs, getBlog, insertBlog, updateBlog} from "../controllers/BlogController.js";

const router = express.Router();


router.get('/', getAllBlogs);
router.get('/:id', getBlog);
router.post('/', insertBlog);
router.put('/:id', updateBlog);
router.delete('/:id', deleteBlog);

export default router;