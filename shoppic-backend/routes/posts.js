var express = require('express');
var router = express.Router();
// var controller // für DB Connection

// Route for all images
router.route('/')
    .get(function (req, res) {
        res.render('posts', {text: 'get all posts'})
    })
    .post(function (req, res) {
        res.render('posts', {text: 'new post'})
    });

router.route('/post_ID')
    .get(function (req, res) {
        res.render('posts', {text: 'get one post by ID '})
    })
    .put(function (req, res) {
        res.render('posts', {text: 'updated one post'})
    });

module.exports = router;
