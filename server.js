var express = require("express")
var bodyparser = require("body-parser")
var app = express()
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json());
var count=0;
var todos=["Go to iceland","Eat prawns biryani","Go for trip"]
app.get("/add/:x/:y", (req, res) => {
    var a = +req.params.x
    var b = +req.params.y
    res.send(a + b)
})

app.get("/sum", (req, res) => {
    var a = +req.query.x
    var b = +req.query.y
    res.send(a + b)
    console.log(req)
})

app.use(express.static(__dirname + "/public"))
// taking input from form using get

// app.get("/form", (req, res) => {
//     var a = +req.query.a
//     var b = +req.query.b
//     res.send(a + b)
// })

// taking input from form using post
app.post("/form", (req, res) => {
    var a = +req.body.a
    var b = +req.body.b
    res.send(a + b)
})

app.get("/inc", ((req, res) => {
    res.send(++count)
    
}))
app.get("/dec", ((req, res) => {
    res.send(--count)
}))
app.get("/getCount",(req,res)=>{
    res.send(count)
})
app.get("/todos",(req,res)=>{
    res.send(todos);
})
app.post("/todos/addtodo",(req,res)=>{
    todos.push(req.body.data)
    res.send(todos)
})
app.post("/todos/deltodo",(req,res)=>{
    todos.splice(req.body.idx,1);
    res.send(todos);
})

app.listen(3600, (() => { console.log("server is runningg.......") }))

