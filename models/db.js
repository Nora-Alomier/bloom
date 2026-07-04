const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: "mysql",
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            }
        },
        logging: false
    }
);

sequelize.authenticate()
    .then(() => console.log("Connected to Aiven Cloud MySQL"))
    .catch((err) => console.error("DB ERROR:", err));

module.exports = { sequelize };
