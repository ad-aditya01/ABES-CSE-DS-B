const express=require('express')
const app=express()
const port=8080
app.get('/',(req,res)=>{
    res.send("this is my first server")

})
app.get('/about',(req,res)=>{
    const students=[
        {
            id:1,
            name: "aditya",
            class:"10"
        },
        {
             id:2,
            name: "anubhav",
            class:"10"
            
        },
        {
             id:3,
            name: "aman",
            class:"10"
        },
        {
             id:4,
            name: "akash",
            class:"10"
        }
    ]
   res.send(students);

})
app.get('/content',(req,res)=>{
    res.send("7240126948")

})


app.listen(port,()=>{
    console.log(`server is run at: http://localhost:${port}`)
})