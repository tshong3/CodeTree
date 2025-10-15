const fs = require("fs");
let score = Number(fs.readFileSync(0).toString().trim());
print("Your score is", score, "point.")