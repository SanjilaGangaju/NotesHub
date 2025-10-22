import express from "express"
import { createNote, deleteNotes, getAllNtoes, getNoteById, updateNotes } from "../controllers/notesController.js";

const router = express.Router();
router.get('/', getAllNtoes)
router.get('/:id', getNoteById)
router.post('/', createNote)
router.put("/:id", updateNotes)
router.delete("/:id", deleteNotes)

export default router