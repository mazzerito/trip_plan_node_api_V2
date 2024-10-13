const { Sequelize } = require("sequelize");

// For PostgreSQL or MySQL:
const sequelize = new Sequelize("trip_plan_db", "trip_plan", "qcFIa74S5p6DToEJSGgsmlUPYAfWsVyI", {
    host: "dpg-cs60jm56l47c73f9a1ig-a",
    dialect: "postgres", 
});

// const sequelize = new Sequelize("trip_plan_db", "postgres", "150****", {
//     host: "localhost",
//     dialect: "postgres", 
// });
module.exports = sequelize;