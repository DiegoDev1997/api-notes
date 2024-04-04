import { Router } from "express";
import { NotesController } from "../Controllers/notes.controller";

const Routes=Router()
Routes.get('/notes',NotesController.getAllNotes)
Routes.post('/notes',NotesController.addNote)
Routes.get('/notes/:id',NotesController.getNoteId)
Routes.put('/notes/:id',NotesController.updateNoteId)
Routes.delete('/notes/:id',NotesController.deleteNoteId)

export default Routes