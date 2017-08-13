const express = require('express');
const path = require("path");
var exphbs = require("express-handlebars");



module.exports = app => {

    // default root to home.html
    app.get("/", function(req, res) {
        res.render("hoe", { title: 'Friend Finder Home' });
    })
    app.get("/survey", function(req, res) {
        res.render("survey");
    })

    app.use((req, res) => { res.send('404') });
};