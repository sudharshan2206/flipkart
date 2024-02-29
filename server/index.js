const express = require("express")
const cors = require("cors")
const bodyparser = require("body-parser")
const database = require("mysql")
const connect = express()

connect.use(cors())
connect.use(bodyparser.json())
connect.use(express.json())
connect.use(express.static("public"))
connect.use(bodyparser.urlencoded({extended: true}))

let databaseconnection = database.createConnection({
    host: "localhost",
    port:3306,
    user:"root",
    password: "Sudhar2206@",
    database: "flipkart"
})

databaseconnection.connect(function(error){
    if(error){
        console.log(error)
    }
    else{
        console.log("database is connected")
    }
})

connect.post('/signup',(request,response)=>{
    let{fname,lname,mobileno,email,password}=request.body
    let sql='insert into signup(fname,lname,mobileno,email,password) values(?,?,?,?,?)'
    databaseconnection.query(sql,[fname,lname,mobileno,email,password],(error,result)=>{
        if(error){
            response.send({"status":"error"})
            console.log(error)
        }
        else{
            response.send({"status":"success"})
            console.log("ok")
        }
    })
})

connect.post('/login',(request,response)=>{
    let {email,password}=request.body
    let sql='select * from signup where email=?'
    databaseconnection.query(sql,[email],(error,result)=>{
        if(error){
            response.send({"status":"empty_set"})
            console.log(error)
        }
       else if(result.length>0){
        var dbemail=result[0].email
        var dbpassword=result[0].password
        var fid = result[0].fid
                  
        if(dbemail===email && dbpassword===password ){
            response.send({"status":"success","fid":fid,"email":email})
        }
        else{
            response.send({"status":"invalid_password"})
        
        }
        }
        else{
            response.send({"status":"both_are_invalid"})
        }
    })

})

connect.get('/user/:fid',(request,response)=>{
    let {fid} = request.params
    let sql='select * from signup where fid=?'
    databaseconnection.query(sql,[fid],(error,result)=>{
        if(error) {
            response.send(error)
            console.log(error)
        }
        else{
            response.send(result)
        }
        
    })
})


connect.post('/addmobile',(request,response)=>{
    let{image,model,price,description,rating,mname}=request.body
    let sql='insert into mobile(image,model,price,description,rating,mname) values(?,?,?,?,?,?)'
    databaseconnection.query(sql,[image,model,price,description,rating,mname],(error,result)=>{
        if(error) {
            response.send({"status":"error"})
            console.log(error)
        }
        else{
            response.send({"status":"success"})
           
        }
       
    })
})

// get all data from mobile
connect.get('/adminmobile',(request,response)=>{
    let sql='select * from mobile'
    databaseconnection.query(sql,(error,result)=>{
        if(error) {
            response.send(error)
            console.log(error)
        }
        else{
            response.send(result)
           
        }
       
    })
})
// get single data from mobile
connect.get('/singlemobile/:mid',(request,response)=>{
    let {mid} = request.params
    let sql='select * from mobile where mid=?'
    databaseconnection.query(sql,[mid],(error,result)=>{
        if(error) {
            response.send(error)
            console.log(error)
        }
        else{
            response.send(result)
        }
        
    })
})

//add dress data in list
connect.post('/addfashion',(request,response)=>{
    let{image,model,price,description,rating,hname}=request.body
    let sql='insert into fashion(image,model,price,description,rating,hname) values(?,?,?,?,?,?)'
    databaseconnection.query(sql,[image,model,price,description,rating,hname],(error,result)=>{
        if(error) {
            response.send({"status":"error"})
            console.log(error)
        }
        else{
            response.send({"status":"success"})
           
        }
       
    })
})

// get all data from fashion
connect.get('/adminfashion',(request,response)=>{
    let sql='select * from fashion'
    databaseconnection.query(sql,(error,result)=>{
        if(error) {
            response.send(error)
            console.log(error)
        }
        else{
            response.send(result)
           
        }
       
    })
})
// get single data from fashion
connect.get('/singlefashion/:did',(request,response)=>{
    let {did} = request.params
    let sql='select * from fashion where did=?'
    databaseconnection.query(sql,[did],(error,result)=>{
        if(error) {
            response.send(error)
            console.log(error)
        }
        else{
            response.send(result)
        }
        
    })
})

//add electronics data in list
connect.post('/addelectronics',(request,response)=>{
    let{image,model,price,description,rating,ename}=request.body
    let sql='insert into electronics(image,model,price,description,rating,ename) values(?,?,?,?,?,?)'
    databaseconnection.query(sql,[image,model,price,description,rating,ename],(error,result)=>{
        if(error) {
            response.send({"status":"error"})
            console.log(error)
        }
        else{
            response.send({"status":"success"})
           
        }
       
    })
})

// get all data from electronics
connect.get('/adminelectronics',(request,response)=>{
    let sql='select * from electronics'
    databaseconnection.query(sql,(error,result)=>{
        if(error) {
            response.send(error)
            console.log(error)
        }
        else{
            response.send(result)
           
        }
       
    })
})
// get single data from electronics
connect.get('/singleelectronics/:eid',(request,response)=>{
    let {eid} = request.params
    let sql='select * from electronics where eid=?'
    databaseconnection.query(sql,[eid],(error,result)=>{
        if(error) {
            response.send(error)
            console.log(error)
        }
        else{
            response.send(result)
        }
        
    })
})

//add furniture data in list
connect.post('/addfurniture',(request,response)=>{
    let{image,model,price,description,rating,sname}=request.body
    let sql='insert into furniture (image,model,price,description,rating,sname) values(?,?,?,?,?,?)'
    databaseconnection.query(sql,[image,model,price,description,rating,sname],(error,result)=>{
        if(error) {
            response.send({"status":"error"})
            console.log(error)
        }
        else{
            response.send({"status":"success"})
           
        }
       
    })
})

// get all data from furniture
connect.get('/adminfurniture',(request,response)=>{
    let sql='select * from furniture'
    databaseconnection.query(sql,(error,result)=>{
        if(error) {
            response.send(error)
            console.log(error)
        }
        else{
            response.send(result)
           
        }
       
    })
})
// get single data from furniture
connect.get('/singlefurniture/:hid',(request,response)=>{
    let {hid} = request.params
    let sql='select * from furniture where hid=?'
    databaseconnection.query(sql,[hid],(error,result)=>{
        if(error) {
            response.send(error)
            console.log(error)
        }
        else{
            response.send(result)
        }
        
    })
})


//update mobile 
connect.put('/updatemobile/:mid',(request,response)=>{
    let {mid}=request.params
    let {image,model,price,description,rating,mname} = request.body
    let sql='update mobile set image=?,model=?,price=?,description=?,rating=?,mname=? where mid=?'
    databaseconnection.query(sql,[image,model,price,description,rating,mname,mid],(error,result)=>{
        if(error){
            response.send({"status":"not_updated"})
            console.log(error)
        }
        else{
            response.send({"status":"success","mid":mid})
            console.log("ok")
        }
    })
})

connect.put('/updatefashion/:did',(request,response)=>{
    let {did}=request.params
    let {image,model,price,description,rating,hname} = request.body
    let sql='update fashion set image=?,model=?,price=?,description=?,rating=?,hname=? where did=?'
    databaseconnection.query(sql,[image,model,price,description,rating,hname,did],(error,result)=>{
        if(error){
            response.send({"status":"not_updated"})
            console.log(error)
        }
        else{
            response.send({"status":"success","did":did})
            console.log("ok")
        }
    })
})

connect.put('/updateelectronics/:eid',(request,response)=>{
    let {eid}=request.params
    let {image,model,price,description,rating,ename} = request.body
    let sql='update electronics set image=?,model=?,price=?,description=?,rating=?,ename=? where eid=?'
    databaseconnection.query(sql,[image,model,price,description,rating,ename,eid],(error,result)=>{
        if(error){
            response.send({"status":"not_updated"})
            console.log(error)
        }
        else{
            response.send({"status":"success","eid":eid})
            console.log("ok")
        }
    })
})

connect.put('/updatefurniture/:hid',(request,response)=>{
    let {hid}=request.params
    let {image,model,price,description,rating,sname} = request.body
    let sql='update furniture set image=?,model=?,price=?,description=?,rating=?,sname=? where hid=?'
    databaseconnection.query(sql,[image,model,price,description,rating,sname,hid],(error,result)=>{
        if(error){
            response.send({"status":"not_updated"})
            console.log(error)
        }
        else{
            response.send({"status":"success","hid":hid})
            console.log("ok")
        }
    })
})

// delete the mobile
connect.post('/deletemobile',(request,response)=>{
    let mid = request.body.mid  
    let sql='delete from mobile where mid=?'
    databaseconnection.query(sql,[mid],(error,result)=>{
        if(error){
            response.send({"status":"error"})
            console.log(error)
        }
        else{
            response.send({"status":"success"})
            console.log("okay")
        }
    })
})

// delete the fashion
connect.post('/deletefashion',(request,response)=>{
    let did = request.body.did  
    let sql='delete from fashion where did=?'
    databaseconnection.query(sql,[did],(error,result)=>{
        if(error){
            response.send({"status":"error"})
            console.log(error)
        }
        else{
            response.send({"status":"success"})
            console.log("okay")
        }
    })
})
// delete the electronics
connect.post('/deleteelectronics',(request,response)=>{
    let eid = request.body.eid  
    let sql='delete from electronics where eid=?'
    databaseconnection.query(sql,[eid],(error,result)=>{
        if(error){
            response.send({"status":"error"})
            console.log(error)
        }
        else{
            response.send({"status":"success"})
            console.log("okay")
        }
    })
})

// delete the furniture
connect.post('/deletefurniture',(request,response)=>{
    let hid = request.body.hid  
    let sql='delete from furniture where hid=?'
    databaseconnection.query(sql,[hid],(error,result)=>{
        if(error){
            response.send({"status":"error"})
            console.log(error)
        }
        else{
            response.send({"status":"success"})
            console.log("okay")
        }
    })
})

connect.listen(2611,()=>{
    console.log("your server is running in port 2611")
}) 