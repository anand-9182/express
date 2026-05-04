var express = require("express")
var bodyparser = require("body-parser")
var app = express()
app.use(express.static(__dirname + "/public"))
var fs = require("fs")
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json());
// var count = 0;
var todos = ["Go to iceland", "Eat prawns biryani", "Go for trip"]
// app.get("/add/:x/:y", (req, res) => {
//     var a = +req.params.x
//     var b = +req.params.y
//     res.send(a + b)
// })

// app.get("/sum", (req, res) => {
//     var a = +req.query.x
//     var b = +req.query.y
//     res.send(a + b)
//     console.log(req)
// })

// // taking input from form using get

// app.get("/form", (req, res) => {
//     var a = +req.query.a
//     var b = +req.query.b
//     res.send(a + b)
// })

// // taking input from form using post
// app.post("/form", (req, res) => {
//     var a = +req.body.a
//     var b = +req.body.b
//     res.send(a + b)
// })

// app.get("/inc", ((req, res) => {
//     res.send(++count)

// }))
// app.get("/dec", ((req, res) => {
//     res.send(--count)
// }))
// app.get("/getCount", (req, res) => {
//     res.send(count)
// })
// app.get("/todos", (req, res) => {
//     res.send(todos);
// })
// app.post("/todos/addtodo", (req, res) => {
//     todos.push(req.body.data)
//     res.send(todos)
// })
// app.post("/todos/deltodo", (req, res) => {
//     todos.splice(req.body.idx, 1);
//     res.send(todos);
// })
// app.post("/todos/searchtodo", (req, res) => {
//     let searchResults = todos.filter((todo) => (todo.toLowerCase().includes(req.body.sdata.toLowerCase()) || !(req.body.sdata)))
//     res.send(searchResults)
// })

// // todolist implimantation

// app.get("/moretodos", (req, res) => {
//     res.send(moretodos)
// })

// app.post("moretodos/addtodo", (req, res) => {
//     moretodos.push(req.body.data)
//     res.send(moretodos)
// })

// app.post("/moretodos/deletetodo", (req, res) => {
//     moretodos.splice(req.body.index, 1)
//     res.send(moretodos)
// })

app.get("/", (req, res) => {
    res.send("this is the enddddddddd.....")
})

app.post("/form", (req, res) => {
    var data = fs.readFileSync(__dirname + "/issues.txt")
    var issues = JSON.parse(data.toString())
    console.log(issues)
    issues.push(req.body)
    console.log(req.body)
    fs.writeFileSync(__dirname + "/issues.txt", JSON.stringify(issues))
    res.send({ msg: "push ayyindhiii" })
})



app.listen(3600, () => { console.log("server is runningg on 3600.......") })

