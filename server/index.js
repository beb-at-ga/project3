//required
require("dotenv").config();
let cors = require("cors");
let express = require("express");
let expressJwt = require("express-jwt");
let morgan = require("morgan");
let rowdyLogger = require("rowdy-logger");

//instance
let app = express();
let rowdyResults = rowdyLogger.begin(app);

//middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: "10mb" }));

// routes
app.use(
  "/auth",
  expressJwt({
    secret: process.env.JWT_SECRET
  }).unless({
    path: [
      { url: "/auth/login", methods: ["POST"] },
      { url: "/auth/signup", methods: ["POST"] }
    ]
  }),
  require("./controllers/auth")
); 

app.use(
    "/messages",
    expressJwt({
        secret: process.env.JWT_SECRET
    }).unless({
        path: [
            { url: "/auth/login", methods: ["POST"] },
            { url: "/auth/signup", methods: ["POST"] }
        ]
    }),
    require("./controllers/messages")
);


app.use(
  "/profiles",
  expressJwt({
    secret: process.env.JWT_SECRET
  }).unless({
    path: [
      { url: "/auth/login", methods: ["POST"] },
      { url: "/auth/signup", methods: ["POST"] }
    ]
  }),
  require("./controllers/profiles")
);

//Catch-All route
app.get("*", (req, res) => {
  res.status(404).send({ message: "Not Found" });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Hear, Here!");
  rowdyResults.print();
});