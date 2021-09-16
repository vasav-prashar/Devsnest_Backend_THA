const express = require("express");
const app = express();
const path = require("path");

console.log(__dirname); //complete path of dir

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use("/", (req, res) => {
  
//   res.sendFile(path.join(__dirname, "public/Hello.txt"), "test.txt"); //send
//   res.download(path.join(__dirname, "public/Hello.txt"), "test.txt"); // downloads
  res.render("index", { title: "Express Jade" }); 
  //dynamic file render

  
//cookies pipline using
  res
    .status(201)
    .cookie("token", "test", {
      expires: new Date(Date.now() + 8 * 3600000), // 8 hrs
    })
    .cookie("hello", "hello")
    .redirect(301, "/admin");
});

app.listen(5000);