import { Request,Response } from "express"


export const NotesController={
    getAllNotes:async(req:Request,res:Response)=>{
        try{
            res.json('server ok')
        }catch(e){

        }
    },
    getAllFromUser:async(req:Request,res:Response)=>{
        try{
            res.json('server ok')
        }catch(e){

        }
    },
    getNoteId:async(req:Request,res:Response)=>{
        try{
            res.json('server ok')
        }catch(e){

        }
    },
    addNote:async(req:Request,res:Response)=>{
        try{
            res.json('server ok')
        }catch(e){

        }
    },
   updateNoteId:async(req:Request,res:Response)=>{
        try{
            res.json('server ok')
        }catch(e){

        }
    },
    deleteNoteId:async(req:Request,res:Response)=>{
        try{
            res.json('server ok')
        }catch(e){

        }
    }
}