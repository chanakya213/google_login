// const { spawn } = require("child_process");
// const path = require("path");
// const cron = require("node-cron");


// const DB_NAME = 'school'
// const ARCHIVE_PATH = path.join(__dirname,"public",`${DB_NAME}.gzip` )

// backupmongodb();

// function backupmongodb(){
//     const child = spawn('mongodump',[
//         `--db=${DB_NAME}`,
//         `--archive=${ARCHIVE_PATH}` ,
//         `--gzip`
//     ])

//     child.stdout.on("data",(data)=>{
//         console.log("stdout:",data)
//     })
//     child.stderr.on("data",(data)=>{
//         console.log("stderr:",data)
//     })
//     child.on("error",(error)=>{
//         console.log("err:",error)
//     })
//     child.on("exit",(code,signal)=>{
//         if(code) console.log("process exit with code :",code)
//         else if(signal) console.log("process killed with signal:",signal)
//         else console.log("backup is successfull : );") 
//     })
// };

// const express= require('express')
// var dbconnection=require('./db')
// const path=require('path')
// const {spawn}=require('child_process');
// const app=express()
// const DB_NAME='mern-ecommerce'
// const ARCHIVE_PATH=path.join(__dirname,`${DB_NAME}.gzip`)
// const cron = require('node-cron'); 
// cron.schedule('*/2 * * * * ',()=>backupMongoDB)
// backupMongoDB();
// function backupMongoDB(){
//     const child=spawn('mongodump',[
//         `--db=${DB_NAME}`,
//         `--archive=${ARCHIVE_PATH}`,
//         `--gzip`
//     ])
//     child.stdout.on('data',(data)=>{
//         console.log('stdout:\n',data)
//     })

//     child.stderr.on('data',(data)=>{
//         console.log('stderr:\n',Buffer.from(data).toString())
//     })

//     child.on('error',(error)=>{
//         console.log('errorL\n',error)
//     })
//     child.on('exit',(code,signal)=>{
//         if(code) console.log('Process exit with code:',code)
//         else if(signal) console.log('Process killed with signal:',signal)
//         else console.log('Backup is successfull')
//     })
// }
