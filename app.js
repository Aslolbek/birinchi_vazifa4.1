const http=require("http")
const fs=require("fs").promises 



http.createServer(async (req, res)=>{
  res.setHeader("Content-Type", "application/json");
    if(req.url==="/users" && req.method==="GET")
{
    const Group=JSON.parse(await fs.readFile(process.cwd()+ "/Group.json", "utf8"))
    const Teacher=JSON.parse(await fs.readFile(process.cwd()+ "/teacher.json", "utf8"))

for(let i=0; i<Group.length; i++)
{
    for(let j=0; j<Teacher.length; j++)
    {
      if(Group[i].teacher_id===Teacher[j].id) 
      {
        Group[i].teacher_id=Teacher[j]
      } 
    }
    
}

// await fs.writeFile(process.cwd() + "/Group.json", JSON.stringify(Group));
res.end(JSON.stringify(Group))

}
}).listen(400, ()=>{
    console.log(4000);
});