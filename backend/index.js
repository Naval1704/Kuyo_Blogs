const express = require('express');
const cors = require('cors');
const app = express();
const mongodb=require("./db")
const bodyParser = require('body-parser');
app.use(bodyParser.json());

mongodb();

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})

app.get('/', async (req, res) => {
    res.send("Hello WOrld")
});

// for creating new user profile and for login purpose
app.use("/api",require("./routes/CreateUser"));

//for displaying the data on the frontend
app.use("/api",require("./routes/Display"));

// for performing CRUD application
app.use("/api",require("./routes/CreateBlogs"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
