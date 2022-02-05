const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  class Movie extends Sequelize.Model {}
  Movie.init({
    // Set custom primary key column
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please provide a value for "title"',
        },
        notEmpty: {
          //Custom error message
          msg: 'Please provide a value for "title"' ,
        },
       },
    },
    runtime: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        min: {
          args: 1,
          msg: 'Please provide a value greater than "0" for "runtime"',
        },
        notNull : {
          msg: 'Please provide a value for "runtime"',
        },
       },
     },
    releaseDate: {
      type: Sequelize.DATEONLY,
      allowNull: false,
      validate: {
        notNull: 'Please provide a value for "releaseDate"',
       },
       isAfter: {
         args: '1895-12-27',
         msg: 'Please provide a value on of after "1895-12-28" for "releaseDate"',
       },
     },
    isAvailableOnVHS: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
     },
  }, { sequelize });

  return Movie;
};