const express = require("express");

const Students = require("./students-model");

const router = express.Router()

router.get('/', (req, res) => {
    Students.getAll()
    .then(students => {
        res.status(200).json({ data: students });
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to get Wizards." });
    });
});

router.get('/:id', (req, res) => {
    Students.findById(req.params.id)
    .then(student => {
        res.status(200).json({ data: student });
    });
});

router.post('/', (req, res) => {
    const studentData = req.body;
    Students.add(studentData)
    .then(student => {
        res.status(201).json({ data: student });
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to add new Wizard." })
    });
});

router.delete('/:id', (req, res) => {
    Students.remove(req.params.id)
    .then(count => {
        if(count) {
            res.json({ removed: count });
        }else {
            res.status(404).json({ message: "Could not find Wizard with given id."})
        }
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to delete Wizard."})
    })
})

module.exports = router;