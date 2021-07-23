const Pet = require("../models/pets.model");

module.exports = {
    //Create
    create(req, res) {
        console.log("Create method executed");
        Pet.create(req.body)
            .then((pet) => {
                res.json(pet)
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            })
    },

    //Retrieve
    getAll(req, res) {
        console.log("getAll method executed")

        Pet.find()
            .then((pets) => {
                res.json(pets)
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    getOne(req, res) {
        console.log("getOne method executed")

        Pet.findById(req.params.id)
            .then((pet) => {
                res.json(pet)
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    //Update
    update(req, res) {
        console.log("update method executed", "url params: ", req.params);

        Pet.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true, 
            new: true,
        })
            .then((updatedPet) => {
                res.json(updatedPet)
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err)
            })
    },

    //Delete
    delete(req, res) {
        console.log("delete method executed", "url params: ", req.params);

        Pet.findByIdAndDelete(req.params.id)
            .then((pet) => {
                res.json(pet)
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    },
};