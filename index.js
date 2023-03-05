const express = require("express");
const fileupload = require("express-fileupload");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.use(fileupload());

app.get("/", (req, res) => {
  res.send("Up ANd Running");
});

app.post("/", (req, res) => {
  const filename = Date.now() + "_" + req.files.screenshot.name;
  const filename2 = Date.now() + "_" + req.files.ss2.name;
  const file = req.files.screenshot;
  const file2 = req.files.ss2;
  let uploadPath2 = __dirname + "/uploads" + filename2;
  file2.mv(uploadPath2);
  let uploadPath = __dirname + "/uploads" + filename;
  file.mv(uploadPath, (err) => {
    if (err) {
      return res.send(err);
    }
  });
  res.send(200);
});

app.listen(4000);
