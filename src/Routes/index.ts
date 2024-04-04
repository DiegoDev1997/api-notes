import { Router } from "express";
import { NotesController } from "../Controllers/notes.controller";
import { userController } from "../Controllers/users.controller";

const Routes=Router()

Routes.get('/users',userController.getAllUsers)
Routes.post('/auth/sigin',userController.sigIn)
Routes.post('/auth/sigup',userController.register)
Routes.get('/users/:id',userController.getUserById)
Routes.put('/users/:id',userController.updateUserById)
Routes.delete('/users/:id',userController.deleteUserById)
Routes.get('/notes',NotesController.getAllNotes)
Routes.get('/users/:userid/notes',NotesController.getAllNotesFromUser)
Routes.post('/notes',NotesController.addNote)
Routes.get('/notes/:id',NotesController.getNoteId)
Routes.put('/notes/:id',NotesController.updateNoteId)
Routes.delete('/notes/:id',NotesController.deleteNoteId)

export default Routes