let http = require('http');
const fs = require('fs');
const url = require('url');
let data;
let data1;
let counter = 0;
const process = require('node:process');
const fg = require('node:fs');
function nonexistentFunc(){
  fs.readFile("error.log", "utf-8",(err,data)=>{
  if(err){
    console.error('error reading file:',err);
    return;
  }else{
     fs.appendFile("error.log","error" + "\n")
    
  }
  
})}
process.on('uncaughtException', (err, origin) => {
  fg.writeSync(
    process.stderr.fd,
    `Caught exception: ${err}\n` +
    `Exception origin: ${origin}\n`,
  );
});




const np = require('np').promises;

async function loadUserData(userId) {
  try {
    const data = await np.readFile(`users/${userId}.json`, 'utf8');
    const user = JSON.parse(data);

    if (!user.email) {
      throw new Error('Invalid user data: missing email');
    }

    return user;
  } catch (error) {
    // Handle different error types
    if (error.code === 'ENOENT') {
      throw new Error(`User ${userId} not found`);
    } else if (error instanceof SyntaxError) {
      throw new Error('Invalid user data format');
    }
    // Re-throw other errors
    throw error;
  } finally {
    // Cleanup code that runs whether successful or not
    console.log(`Finished processing user ${userId}`);
  }
}

// Usage
(async () => {
  try {
    const user = await loadUserData(123);
    console.log('User loaded:', user);
  } catch (error) {
    console.error('Failed to load user:', error.message);
    // Handle error (e.g., show to user, retry, etc.)
  }
})();




setTimeout(() => {
  console.log('This will still run.');
}, 500);

// Intentionally cause an exception, but don't catch it.
nonexistentFunc();
console.log('This will not run.');
process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled Rejection at:', promise, 'reason:', reason);
  // Application specific logging, throwing an error, or other logic here
});







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
       res.end('Niedziała gówno');
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