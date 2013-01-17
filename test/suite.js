var testrunner = require("qunit");

testrunner.run({
    deps: ["public/templates/jquery.js","public/templates/backbone.js"],
    code: ["models/models.js","models/collections.js"],
    tests: "tests.js"
}, function() {
    console.log("Testing done.")
});