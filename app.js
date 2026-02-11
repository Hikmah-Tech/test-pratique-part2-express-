const express = require("express");
const app = express();

// Set EJS as the view engine
app.set("view engine", "ejs");

// Serve static files from the "public" folder
app.use(express.static("public"));

// Middleware: check working hours (Monday to Friday, 9:00 to 18:00)
app.use((req, res, next) => {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 6 = Saturday
    const hour = now.getHours();
    // Check if it's a weekday (1-5) and within working hours (9-17, i.e. before 18)
    if (day >= 1 && day <= 5 && hour >= 9 && hour < 18) {
        next(); // Allow access
    } else {
        res.send(
            "<h1>Sorry, we are only available during working hours.</h1><p>Monday to Friday, from 9:00 to 18:00.</p>"
        );
    }
});

// Home page route => path : /
app.get("/", (req, res) => {
    res.render("home", { title: "Home" });
});

// Services page route => path : /services
app.get("/services", (req, res) => {
    res.render("services", { title: "Our Services" });
});

// Contact page route => path : /contact
app.get("/contact", (req, res) => {
    res.render("contact", { title: "Contact Us" });
});


app.listen(9202, () => {
    console.log("Server is running on http://localhost:9202");
});
