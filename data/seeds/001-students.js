
exports.seed = function(knex) {
      return knex("students").insert([
        { name: "Harry Potter", house: "Gryffindor", pet: "Hedwig the Owl"},
        { name: "Hermione Granger", house: "Gryffindor", pet: "Crookshanks the Cat"},
        { name: "Ron Weasley", house: "Gryffindor", pet: "Pigwideon the Owl"},
        { name: "Draco Malfoy", house: "Slytherin", pet: "Eagle Owl"},
      ]);
};
