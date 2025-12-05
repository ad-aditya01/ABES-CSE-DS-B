import express from 'express'
const app=express()
const port=4001

//middleware
app.use(express.json())

//create array for store data
const students=[
    {
        id:1,
        name:"aditya",
        class:"b.tech"
    }
]
//first route 
app.get('/',(req,res)=>{
    try{
        res.status(200).json({message:"show all student",data:students})
    }
    catch(errror){
        res.status(500).json({message:"data not fetch",error:err.message})
    }
})
//search data for student
app.get('/',(req,res)=>{
    try{
        const id=res.params.id;
        const student=students.find(s=>s.id);
        if(!student){
            return res.status(404).json({message:"student not found",data:student})

        }
        res.status(200).json({message:"found student"});


}catch(err){
    res.message(500).json({message:"failed to fetch",error})
}
    
})

//create data

app.post('/add',()=>{
try{
    const newStudent={
        id:students.length+1,
        ...req.body
    }
    students.push(newStudent);
    res.status(2001).json({message:"student create sucessfully",newStudent})
}catch(err){
    res.status(500).json({message:"data not save",error:err.message})
}
})
//edit data
app.put('/edit/:id',(req,res)=>{
    try{
        const id=req.params.id;
        const index=students.find(s=>s.id);
        if(index==-1){
            return res.status(400).json({message:"student not found"})
        }
        students[index]={
            ...students[index],
            ...req.body
           
        }
        res.status(200).json({message:"data successfully updated",...req.body})


    }catch(err){
    res.status(500).json({message:"data not save",error:err.message})
}
        
    
})
//delete data
app.delete('/delete/:id',(req,res)=>{
    try{
         const id=req.params.id;
        const index=students.find(s=>s.id);
        if(index==-1){
            return res.status(400).json({message:"student not found"})

    }
    students.splice(index,1);
    res.status(200).json({message:"data successfully deleted"})
}catch(err){
    res.status(500).json({message:"data not save",error:err.message})
}
})

app.listen(()=>{
    console.log(`server run at http://localhost:${port}`)
})