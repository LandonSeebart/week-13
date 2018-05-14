// Your apiRoutes.js file should contain two routes: 

// ===============================================================================
// LOAD DATA
// ===============================================================================
const friendArray = require("../data/friends.js");

// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function(app) {
  
  //Used to display a JSON of all possible friends.
  app.get("/api/friends", function(req, res) {
    res.send(friendArray);
  });

  // API POST Requests
  // ---------------------------------------------------------------------------
  // POST route /api/friends. Used to handle incoming survey results and compatibility logic.
  
  // app.post("/api/friends", function(req, res) {
  //   if (tableData.length < 5) {
  //     tableData.push(req.body);
  //     res.json(true);
  //   }
  //   else {
  //     waitListData.push(req.body);
  //     res.json(false);
  //   }
  // });
}

