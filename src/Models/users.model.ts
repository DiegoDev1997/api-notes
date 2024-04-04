
import { sequelizeConnection } from "../config/sequelize.config";
import sequelize, { DataTypes, Model } from "sequelize";


interface UserInterface extends Model{
    id:number,
    name:string,
    email:string,
    password:string,
}


export const usersBd=sequelizeConnection.define<UserInterface>('usersBd',
  {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
    
    },

    email:{
        type:DataTypes.STRING,   
    },
    password:{
        type:DataTypes.STRING,
         
    },
   
  },
    
       { tableName: 'users',
        timestamps:false}
    
)