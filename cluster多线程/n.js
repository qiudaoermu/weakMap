const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/:n", function (req, res) {
  let n = parseInt(req.params.n);
  console.log(n);
  let count = 0;

  if (n > 5000000000) n = 5000000000;
  console.log(n, "n");
  for (let i = 0; i <= n; i++) {
    console.log(count);
    count += i;
  }

  res.send(`Final count is ${count}`);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
