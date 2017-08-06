const express = require('express');
const path = require("path");


module.exports = app => {

    // default root to home.html
    app.get("/", function(req, res) {
        res.render("index", { title: 'Friend Finder Home' });
    })
    app.get("/survey", function(req, res) {
        res.render("survey");
    })

    app.use((req, res) => { res.send('404') });
};