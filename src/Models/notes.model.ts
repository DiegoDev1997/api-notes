import { title } from "process";
import { sequelizeConnection } from "../config/sequelize.config";
import sequelize, { DataTypes, Model } from "sequelize";
import { usersBd} from "./users.model";


interface NoteInterface extends Model{
    id:number,
    userid:number,
    name:string,
    title:string,
    content:string,
}



export const notesBd=sequelizeConnection.define('notesBd',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        userid:{
            type:DataTypes.INTEGER
        },
        title:{
            type:DataTypes.STRING,
        
        },

        content:{
            type:DataTypes.TEXT,   
        },
    },
  { tableName: 'notes', timestamps:false}
  
  )

  usersBd.hasMany(notesBd,{as:'notes',foreignKey:'userid'})
  notesBd.belongsTo(usersBd,{as:'user',foreignKey:'userid'})
 