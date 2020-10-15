const db = require('../data/db-config');

module.exports = {
    getAll,
    findById,
    add,
    update,
    remove
}

function getAll() {
    return db("students")
}

function findById(id) {
    return db("students")
    .where({ id })
    .first();
}

function add(student) {
    return db("students")
    .insert(student, "id")
    .then(ids => {
        const id = ids[0];

        return db("students").where({ id }).first();
    });
};

function update(id, changes) {
    return db("students")
    .where({ id })
    .update(changes)
    .then(student => {
        const studentId = id[0];

        return findById(studentId);
    });
};

function remove(id) {
    return db("students")
    .where({ id })
    .del();
};