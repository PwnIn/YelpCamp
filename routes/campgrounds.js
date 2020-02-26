var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");
var middleware = require("../middleware");

// Index Route Show All Camp 
router.get("/", function(req, res) {
    //Get All CampGrounds from DB
    Campground.find({}, function(err, allcampground) {
        if (err) {
            console.log(err);
        } else {
            res.render("campgrounds/index", {campgrounds: allcampground});
        }
    });
});

// Create New Camp to DB
router.post("/", middleware.isLoggedIn, function(req, res) {
    var name = req.body.name;
    var price = req.body.price;
    var image = req.body.image;
    var description = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    };
    var newCamp = {name: name, price: price, image: image, description: description, author: author};

    // Create New Camp to DB
    Campground.create(newCamp, function(err, newCampground) {
        if (err) {
            console.log(err);
        } else {
            // Redirect to Main Page
            res.redirect("/campgrounds");
        }
    });
});

// New Show Form to Create a New Camp
router.get("/new", middleware.isLoggedIn, function(req, res) {
    res.render("campgrounds/new");
});

router.get("/:id", function(req, res) {
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCamp) {
        if (err || !foundCamp) {
            req.flash("error", "Campground Not Found");
            res.redirect("back");
        } else {
            console.log(foundCamp);
            res.render("campgrounds/show", {campground: foundCamp});
        }
    });
});

// Edit Campground Route
router.get("/:id/edit", middleware.checkCampgroundOwner, function(req, res) {
        Campground.findById(req.params.id, function(err, foundCamp) {
            res.render("campgrounds/edit", {campground: foundCamp});
        });
});

router.put("/:id/", middleware.checkCampgroundOwner, function(req, res) {
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCamp) {
        if(err) {
            res.redirect("/campgrounds");
        } else {
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
});

// Delete Campground Route
router.delete("/:id", middleware.checkCampgroundOwner, function(req, res) {
    Campground.findByIdAndRemove(req.params.id, function(err) {
        if(err) {
            res.redirect("/campgrounds");
        } else {
            res.redirect("/campgrounds");
        }
    });
});

module.exports = router;