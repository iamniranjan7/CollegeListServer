const route = require("express").Router();
const collegeController = require("../controllers/collegeList.controller.js");

route.get("/", collegeController.showColleges);
route.get("/states", collegeController.collegeStates);
route.get("/:state", collegeController.collegeByState);

route.get("/search/:name", collegeController.searchColleges);
route.get("/searchCount/:name", collegeController.getCollegeCountForSearch);

route.get("/id/:collegeId", collegeController.getCollegeInfo);



module.exports = route;
