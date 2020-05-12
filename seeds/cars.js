
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, year: 2001, vin: "P2345678901234567", make: "Porsche", model: "Boxster S", mileage: 90000, transmission: "6 spd", title_status:"clean"},
        {id: 2, year: 2003, vin: "P7654321098765432", make: "Geo", model: "Tracker", mileage: 130000, transmission: "5 spd", title_status:"rebuilt"},
      ]);
    });
};
