var express = require('express');
var router = express.Router();
var ObjectID = require('mongodb').ObjectID;

// Route for all users
router.route('/')
    .get(function (req, res) {
        //res.render('users', {user: 'all shoppic user'})

        var collection = req.db.collection('users');
        collection.find({}).toArray(function(err, docs){
           res.json(docs);
        });
;
    })
    .post(function (req, res) {
        var values = req.body;

        var collection = req.db.collection('users');
        collection.insertOne(values)
            .then(function(result){
               console.log(result);
            });

       res.render('users', {user: 'new shoppic user'})
    });

// Route for one single user
router.route('/:user_ID')
    .get(function (req, res) {
        var params = req.params;
        var uid = params.user_ID;
        var objectID = new ObjectID(uid);


        var collection = req.db.collection('users');
        collection.find({_id: objectID}).toArray(function(err, docs){
            res.json(docs);
        });
        // res.render('users', {user: 'get one shoppic user'})
    })
    .put(function (req, res) {
        var params = req.params;
        var uid = params.user_ID;
        var objectID = new ObjectID(uid);
        var values = req.body;

        var collection = req.db.collection('users');
        collection.updateOne({_id: objectID}, {$set: values})
            .then(function(result){
                console.log(result);
            });
        //res.render('users', {user: 'edited one shoppic user'})
    })
    .delete(function (req, res) {
        var params = req.params;
        var uid = params.user_ID;
        var objectID = new ObjectID(uid);

        var collection = req.db.collection('users');
        collection.deleteOne({_id: objectID})
            .then(function (result) {
                console.log(result);
            });
        //res.render('users', {user: 'deleted one shoppic user'})
    });

/* GET users listing.
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
    res.render('users', {user: 'shoppic user'});
});
*/

module.exports = router;
