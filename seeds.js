var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment")

var data = [
    {
        name: "Cloud Rest",
        image: "https://cdn.pixabay.com/photo/2019/11/06/05/15/uav-4605203__480.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
        name: "Cloud Rest",
        image: "https://cdn.pixabay.com/photo/2019/11/06/05/15/uav-4605203__480.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
        name: "Cloud Rest",
        image: "https://cdn.pixabay.com/photo/2019/11/06/05/15/uav-4605203__480.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
        name: "Cloud Rest",
        image: "https://cdn.pixabay.com/photo/2019/11/06/05/15/uav-4605203__480.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    }
]

function seedDB () {
    // Remove All Campgrounds 
    Campground.remove({}, function(err) {
        // if(err) {
        //     console.log(err);
        // }
        // console.log("Removed");

        // // Add New Campgrounds
        // data.forEach(function(seed) {
        //     Campground.create(seed, function(err, campground){
        //         if(err) {
        //             console.log(err);
        //         } else {
        //             console.log("ADD CAMP");
        //             Comment.create(
        //                     {
        //                         text: "This PLACE IS GOOD",
        //                         author: "Homer"
        //                     }, function(err, comment) {
        //                         if(err) {
        //                             console.log(err);
        //                         } else {
        //                             campground.comments.push(comment);
        //                             campground.save();
        //                             console.log("Created New Comment");
        //                         }
        //             });
        //         }
        //     });
        // });
    });
}

module.exports = seedDB;