var express = require('express');
var router = express.Router();
// var controller // für DB Connection

// Route for all users
router.route('/')
    .get(function (req, res) {
        res.render('users', {user: 'all shoppic user'})
    })
    .post(function (req, res) {
       res.render('users', {user: 'new shoppic user'})
    });

// Route for one single user
router.route('/:user_ID')
    .get(function (req, res) {
        var params = req.params;
        console.log(params.user_ID);
        res.render('users', {user: 'get one shoppic user'})
    })
    .put(function (req, res) {
        res.render('users', {user: 'edited one shoppic user'})
    })
    .delete(function (req, res) {
        res.render('users', {user: 'deleted one shoppic user'})
    });

/* GET users listing.
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
    res.render('users', {user: 'shoppic user'});
});
*/

module.exports = router;
