import express from "express";
const app = express();
app.get("/", (req, res) => {
  return res.status(200).json({
    data: "workinjefg",
  });
});
app.listen(5555, () => {
  console.log("app ruuning on 5555");
});
