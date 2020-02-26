var express        = require("express");
var bodyParser     = require("body-parser");
var mongoose       = require("mongoose");
var flash          = require("connect-flash");
var passport       = require("passport");
var localStrategy  = require("passport-local");
var Campground     = require("./models/campground");
var seedDB         = require("./seeds");
var Comment        = require("./models/comment");
var User           = require("./models/user");
var methodOverride = require("method-override");


var commentRoutes    = require("./routes/comments");
var campgroundRoutes = require("./routes/campgrounds");
var indexRoutes      = require("./routes/index");

var app = express();

// Set Different Database URL from Local and Heroku
mongoose.connect(process.env.DATABASEURL, { useNewUrlParser: true,  useCreateIndex: true, useUnifiedTopology: true}).then(() => {
    console.log("Connected to DB");
}).catch(err => {
    console.log("Error:", err.message);
});

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());
//seedDB();

// Passport Configure
app.use(require("express-session")({
    secret: "MO",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next) {
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

app.use(indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);

app.listen(process.env.PORT, process.env.IP, function() {
   console.log("Yelp Camp Server"); 
});
