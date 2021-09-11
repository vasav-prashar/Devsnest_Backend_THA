var fs=require("fs");
fs.mkdirSync("Dayex");
fs.writeFileSync("Dayex/hello.txt","hello");
var test =require("./test");
var obj =new test();
console.log(obj.print())




// fs.writeFileSync('test/hello.txt','Hello awesome people',(err)=> {
//     ... if(err){
//     ..... console.log(err)
//     ..... }
//     ... });
//     fs.readFileSync("test/hello.txt", "utf-8");
//     fs.appendFileSync("test/hello.txt", " (appended part) ");
//     fs.renameSync("test/hello.txt", "test/hello1.txt");
//     fs.unlinkSync("test/hello1.txt");
//     fs.rmdirSync("test");
