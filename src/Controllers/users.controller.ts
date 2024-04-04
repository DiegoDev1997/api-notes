import { Request,Response, application } from "express"
import { usersBd} from "../Models/users.model"
import  jwt  from "jsonwebtoken"
import dotenv from 'dotenv'
import { schemaLogin, schemaRegister, schemaUpdate } from "../schemas/user"





dotenv.config()
export const userController={
    getAllUsers:async(req:Request,res:Response)=>{
        try{
            let users=await usersBd.findAll({
                include:[
                    
                ]
            })
            res.json(users)
    
        }catch(e){
            res.status(404).json(e)
            console.log(e)
         }
    },
    getUserById:async(req:Request,res:Response)=>{
        try{
            let {id}=req.params
            let user=await usersBd.findOne(
                {where:{id}}
            )
           if(user){
            res.json(user)
           }else{
            res.json({'message':'usuário não existe'})
        }
    
        }catch(e){
            res.json(e)
        }
    },
    register:async(req:Request,res:Response)=>{
        try{
            let data:{name:string,password:string,email:string}=req.body
            const result=schemaRegister.validate(data)
          
            if(result.error){
                res.json(result.error.message)
            }else{
                let hasUser=await usersBd.findOne({where:{email:data.email,password:data.password}})
                if(!hasUser){
                    try {
                       const user=await usersBd.create({...data})
                        const token=jwt.sign({email:user.email,password:user.password},process.env.JWT_KEY as string)
                        res.json({user,token,status:true})
                      } catch (error) {
                        res.json(error)
                        console.error('Erro de validação:', error);
                      }
                    
                }else{
                    res.json('usuário já existe')
                }
            }

        }catch(e){
            res.json(e)
            console.log(e)

           }
    },
    sigIn:async(req:Request,res:Response)=>{
            try{
                let data:{email:string,password:string}=req.body
                const result=schemaLogin.validate(data)
                if(result.error){
                    res.json(result.error.message)
                }else{
                    let user=await usersBd.findOne({
                        where:{email:data.email,password:data.password}
                    })
                    if(user){
                        const token=jwt.sign(
                            {email:user.email,password:user.password},
                            process.env.JWT_KEY as string
                        )
                     res.json({status:true,token,user})
                    }else{
                        res.json({message:'usuário não existe',status:false})
                    }
                }
    
            }catch(e){
                res.json(e)
                console.log(e)
    
        }
        
    },
    updateUserById:async(req:Request,res:Response)=>{
        const data=req.body
        const {id}=req.params
        const userid=await usersBd.findByPk(id) 
        const result=schemaUpdate.validate(data,{
            abortEarly: false,
        })
        if(result.error){
            res.json(result.error.message)
        }else{
            if(userid){
                await usersBd.update({...data},{where:{id}})
                res.json('usuário atualizado')
            }else{
            
                res.json('usuário não existe')
            }

        }

    },
    deleteUserById:async(req:Request,res:Response)=>{
        try{
            let {id}=req.params
            let user=await usersBd.findOne({where:{id}})
            if(user){
                await usersBd.destroy({
                    where:{id}
                })
                res.json({'message':'usuário deletado'})
            }else{
                res.json({'message':'usuário não existe'})
            }
    
    
        }catch(e){
            res.json(e)
        }
    }
}