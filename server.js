let http = require('http');
const fs = require('fs');
const url = require('url');
let data;
let data1;
let counter = 0;
fs.readFile("plik.txt", "utf-8",(err,data)=>{
  if(err){
    console.error('error reading file:',err);
    return;
  }else{
     counter = parseInt(data);
    
  }
  
})

http.createServer(function (req, res) {
counter++;
  var x = 0;
 // res.writeHead(200, {'Content-Type': 'text/html'});
  const parsedUrl = url.parse(req.url,true);
  const path = parsedUrl.pathname;
 if(path === "/" ){ 
  res.writeHead(200, {'Content-Type': 'text/html'});res.end('Witaj na stronie.odwiedziles ja juz '+counter.toString()+ ' razy');}
  else if(path === "/add"){
    res.writeHead(200, {'Content-Type': 'text/html'});
  const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // Months are zero-indexed
const day = currentDate.getDate();
const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

fs.appendFile("guests.txt", "Jan "+ hours+ ":" + minutes + " "+ day +"."+ month +"."+ year  + "\n", (err) => {
    if (err) {
        console.log(err);
    }
    else {
        // Get the file contents after the append operation 
       
    }
});
 res.end('Dodano Jana');   
  }
   else if(path === "/list"){
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile("guests.txt", "utf-8",(err,data1)=>{
  if(err){
    console.error('error reading file:',err);
    return;
  }else{
   
   res.end(data1);
    
  }
  
})

    
  }
  
  fs.writeFileSync('plik.txt',counter.toString(),'utf8');
  console.log('Zapisano dane do pliku.');

})
.listen(3000);