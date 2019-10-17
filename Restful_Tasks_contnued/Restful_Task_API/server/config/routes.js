/* var tasks = require("../controllers/tasks.js");

module.exports = function(app){

    app.get("/tasks", tasks.index)

    app.get("/tasks/:id", tasks.details)

    app.post("/tasks", tasks.addTask)

    app.put("/tasks/:id", tasks.editTask)

    app.delete("/tasks/:id", tasks.deleteTask)
} */

var tasks = require("../controllers/tasks.js");

module.exports = function(app) {
  app.get("/tasks", (req, res) => {
    tasks.index(req, res);
  }),
    app.get("/tasks/:id", (req, res) => {
      tasks.id(req, res);
    });
};
