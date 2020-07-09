//console.log("PROCESS:",process);

// const  {sum} = require ("./helper");
// //var let const
// const http =require("http");
// const server = http.createServer((req,res) => {
//      res.end ('This is another nodejs local server');
// });
// server.listen(3000);
// const total =  sum(10,200);
// console.log("TOTAL:",total);

// const expree = require ('express')
// const app = express ()
// app.get('/',(req, res) => {
//      res.send('From the express server')
// } )

// app.listen(3000);

const fs = require ('fs')
const fileName = "target.txt"
const errHandler = err => console.log(err);
const dataHandler = data => console.log(data.toString());



// const data= fs.readFileSync(fileName)
// console.log(data.toString())

//fs.watch(fileName , () => console.log('file changed !'));
fs.readFile(fileName,(err ,data)=> {
      if (err) errHandler(err);
      dataHandler(data);
//      console.log(data.toString());
});

console.log('Node js is asyncronous.......?');