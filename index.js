const express = require("express");

const mongoose = require("mongoose");

const app = express();

app.use(express.urlencoded({ extended: false }));

mongoose.connect("mongodb://localhost:27017/api")
.then(() => {
        console.log("Connected to MongoDB");
    }
)
.catch((err) => {
        console.log(err);
})

const userSchema = new mongoose.Schema(
    {
        name: String,
        team: String,
        role: String,
        password: String
    }
)

const collection = new mongoose.model('user', userSchema);


app.get("/", (req, res) => {
    res.send("hello world");
});


app.post("/register", (req, res) => {
    // const { name, email, password } = req.body;
    collection.create(req.body).then((result) => {
        res.json(result);
    })
        .catch((err) => {
            res.json(err);
        })

});

app.get("/show", (req, res) => {
    collection.find({})
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.json(err);
        });
});

// app.get("/delete/:name", (req, res) => {
//     collection.deleteOne({ name: req.params.name })
//         .then(() => {
//             res.send("Data successfully deleted");
//         })
//         .catch((err) => {
//             res.send("Error");
//         });
// })

app.post("/delete", (req, res) => {
    collection.deleteOne({ name: req.body.name })
        .then(() => {
            res.send("Data successfully deleted");
        })
        .catch((err) => {
            res.send("Error");
        });
});

app.post("/update/:val", (req, res) => {
    collection.updateOne({ name: req.params.val }, { $set: req.body })
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.json(err);
        });
})

app.listen(2000);




