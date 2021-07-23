const petsController = require("../controllers/pets.controller");

module.exports = (app) => {
    //Create
    app.post("/api/pets/new", petsController.create);
    //Retrieve
    app.get("/api/pets", petsController.getAll);
    app.get("/api/pets/:id", petsController.getOne);
    //Update
    app.put("/api/pets/:id", petsController.update);
    //Delete
    app.delete("/api/pets/:id", petsController.delete);
}