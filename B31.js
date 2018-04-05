const B31=require('B31');
const path=require('path');
const http =require('http');
const hostname='localhost';
const port=2000;
const server=http.createServer((req,res)=>{

    console.log('Request for ' + req.url + ' by method ' +req.method );
    if(req.method=='GET')
    {
        var fileUrl;
        if(req.url=='/')
        fileUrl='/file1.html';
        else
        fileUrl=req.url;
        var filePath=path.resolve('./public'+fileUrl);
        const fileExt=path.extname(filePath);
        if(fileExt=='.html')
        {
            fs.exists(filePath,(exists)=>{
                if(!exists)
                {
                    res.statusCode=404;
                    res.setHeader('Content-Type','text/html');
                    res.end('<html><body><h1>Error 404:'+fileUrl+'not correct</h1></body></html>');
                    return;
  
                }
                else{
                res.statusCode=200;
                res.setHeader('Content-Type','text/html');
                res.end('<html><body><h1>section:<input type="number" name="section"><br>Reg NO.<input type="number" name="reg no">Name:<input type="text" name="name"></h1></body></html>');
              fs.createReadStream(filePath).pipe(res);
                }
            })
        }
      
    }
   
})
server.listen(port,hostname,()=>{
    console.log('Server running at http://${hostname}:${prot}/');
});

                
