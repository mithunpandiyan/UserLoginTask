const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");

const app = express();

app.use(cors());
 
app.use(express.json());

 
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "mithun-session",
    keys: ["COOKIE_SECRET"],  
    httpOnly: true,
    sameSite: 'strict'
  })
);


const db = require("./app/models");
const Role = db.role;

db.sequelize.sync();

app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});


require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.Db connected`);
});

function initial() {
  Role.create({
    id: 1,
    name: "user",
  });

  Role.create({
    id: 2,
    name: "moderator",
  });

  Role.create({
    id: 3,
    name: "admin",
  });
}