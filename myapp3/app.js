const express = require("express")
const app = express();
const port = 3000;

app.use(express.urlencoded({extended:true}))
app.set("view engine", "ejs");

app.get('/create', (req, resp) => {
    console.log("Create Page")
    resp.render('form', {})
})

app.post('/user', (req, resp)=>{
    console.log("User Post")

    let data = req.body;
    console.log("Data", data)

    let username = data.username;
    let email = data.email;

    resp.render('user', {
        data1: username,
        data2: email
    })
})

app.get('/users', (req, res) =>{
    console.log("Users Page")

    const  users = [
        {
            "username": "marinos",
            "email": "mar@mar.com"
        },

        {
            "username": "sak",
            "email": "sak@sak.com"
        }

    ]

    res.render("users", {users})
})

app.listen(port, ()=> {
    console.log("Server is up");
})