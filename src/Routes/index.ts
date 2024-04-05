import { Router } from "express";
import { NotesController } from "../Controllers/notes.controller";
import { userController } from "../Controllers/users.controller";
import { Auth } from "../middelwares/auth.middlewares";

const Routes=Router()

Routes.get('/users',userController.getAllUsers)
Routes.post('/auth/sigin',userController.sigIn)
Routes.post('/auth/sigup',userController.register)
Routes.get('/users/:id',userController.getUserById)
Routes.put('/users/:id',userController.updateUserById)
Routes.delete('/users/:id',userController.deleteUserById)

Routes.get('/notes',NotesController.getAllNotes)
Routes.get('/users/:userid/notes',Auth.validateToken,NotesController.getAllNotesFromUser)
Routes.post('/notes',Auth.validateToken,NotesController.addNote)
Routes.get('/notes/:id',Auth.validateToken,NotesController.getNoteId)
Routes.put('/notes/:id',Auth.validateToken,NotesController.updateNoteId)
Routes.delete('/notes/:id',Auth.validateToken,NotesController.deleteNoteId)

export default Routes