module.exports = {

    development: {
      client: "sqlite3",
      connection: {
        filename: "./data/cars.db3",
      },
      seeds:{
          directory: "./seeds"
      },
      useNullAsDefault: true, // for SQLite only
    },
  
  
    production: {
      client: "sqlite3",
      connection: {
        filename: "./data/cars.db3",
      },
      useNullAsDefault: true, // for SQLite only
    }
  }