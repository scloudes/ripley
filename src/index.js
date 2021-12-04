import express from "express";
import helmet from "helmet";
import db from "./database";
import PeopleRoutes from "./routes/people.routes";

db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const app = express();

app.use(express.json());
app.use(helmet());
app.use(PeopleRoutes);

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log("Server started in http://localhost:3000");
});
