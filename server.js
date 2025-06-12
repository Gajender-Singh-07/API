const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    data = [
        {
            name: "Rohit Sharma", team: "Mumbai", role: "Batter"
        },
        {
            name: "Virat Kohli", team: "Bengaluru", role: "Batter"
        },
        {
            name: "Sanju Samson", team: "Rajasthan", role: "WicketKeeper - Batter"
        },
        {
            name: "Shreyas Iyer", team: "Punjab", role: "Batter"
        },
        {
            name: "Pat Cummins", team: "Hyderabad", role: "Bowler"
        },
    ];
    // res.json(data);
    res.send(data);
});


app.post("/register", (req, res) => {
    res.send(req.body);
    // console.log(req.body)
})
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});