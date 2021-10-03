
const {Sequelize}= require("sequelize");

const sequelize =new Sequelize(
    "postgres",
    "root",
    "vasav",
    {
        host:"localhost",
        dialect:"mysql"
    }
)
sequelize.sync();

{async()=>{
    try{
        await sequelize.authenciate();
        console.log("ESTABLISHED CONNECTION WITH DATA BASE");

    }
    catch(err){
        console.log("NOT CONNECTED");
    }
}}

module.exports=sequelize;