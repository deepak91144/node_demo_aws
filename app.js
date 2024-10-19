import express from "express";
const app = express();
app.get("/", (req, res) => {
  return res.status(200).json({
    data: "workinjefg rei0rii hurraayyy",
  });
});
app.listen(5555, () => {
  console.log(`app running on ${5555}`);
});
