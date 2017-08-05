const express = require('express');
const path = require("path");

module.exports = app => {

    // default root to home.html
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"))
    })
    app.get("/survey", function(req, res) {
            res.sendFile(path.join(__dirname, "/../public/survey.html"))
        })
        // static files: CSS/Javascript - * not working *
    app.use('/assets', express.static(path.join(__dirname, '/app/public')));

    app.use((req, res) => { res.send('404') });
};