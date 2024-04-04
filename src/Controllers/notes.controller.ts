import { Request,Response } from "express"
import { notesBd } from "../Models/notes.model"
import { schemaNotes, schemaNotesUpdate } from "../schemas/notes"


export const NotesController={
    getAllNotes:async(req:Request,res:Response)=>{
        try{
            const notesAll=await notesBd.findAll()
            res.json(notesAll)
        }catch(e){
            res.json('algo deu errado na requisição.Consulte o console')
            console.error(e)
        }
    },
    getAllNotesFromUser:async(req:Request,res:Response)=>{
        try{
            const {userid}=req.params
            const notesAll=await notesBd.findAll({where:{userid}})
            res.json(notesAll)
        }catch(e){
            res.json('algo deu errado na requisição.Consulte o console')
            console.error(e)
        }
    },
    getNoteId:async(req:Request,res:Response)=>{
        try{
            const {id}=req.params
            const noteId=await notesBd.findByPk(id)
           if(noteId){
              res.json(noteId)
           }else{
             res.json('anotação não encontrada')
           }
        }catch(e){
            res.json('algo deu errado na requisição.Consulte o console')
            console.error(e)
        }
    },
    addNote:async(req:Request,res:Response)=>{
        try{
            const data=req.body
            const result=schemaNotes.validate(data)
            if(result.error){
                res.json(result.error)
            }else{
                const newNote=await notesBd.create(data)
                res.json(newNote)
            }


        }catch(e){
        res.json('algo deu errado na requisição.Consulte o console')
        console.error(e)
     }
    },
    updateNoteId:async(req:Request,res:Response)=>{
        try{
            const {id}=req.params
            const data=req.body
            const result=schemaNotesUpdate.validate(data)
            if(result.error){
                res.json(result.error)
            }else{
                const noteId=await notesBd.findByPk(id)
                if(noteId){
                    await notesBd.update(data,{where:{id}})
                    res.json('anotação atualizada')
                }else{

                }
            }


          }catch(e){
            res.json('algo deu errado na requisição.Consulte o console')
            console.error(e)
          }
        },
    deleteNoteId:async(req:Request,res:Response)=>{
        try{
           const {id}=req.params
            await notesBd.destroy({where:{id}})
            res.json('anotação deletada')

        }catch(e){
            res.json('algo deu errado na requisição.Consulte o console')
            console.error(e)
        }
    }
}