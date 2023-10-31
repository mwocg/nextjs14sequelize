import { Sequelize } from "sequelize";
import tedious from "tedious";

let sequelize;

const getConnectionToDb = async () => {
  if (!sequelize) {
    sequelize = new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: "localhost",
        dialect: "mssql",
        dialectModule: tedious,
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000,
        },
      }
    );
    await sequelize.authenticate();
  }
  return sequelize;
};


export default async function GET(req, res) {
  const  seq = await getConnectionToDb();
  return res.json({msg: seq ? "sequelize works" :  "sequelize is falsy"})
}
