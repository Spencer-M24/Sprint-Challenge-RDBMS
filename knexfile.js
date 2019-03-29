module.exports = {

    development: {

        client: "sqlite3",

        connection: { filename: "sqlite3" },

        useNullAsDefault: true,

        migrations: {

            directory: "./src/migrations",

            tableName: "databasemigrations"

        },

        seeds: { directory: "./src/seeds" }
    }
};
