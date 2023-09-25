process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", (line) => {
  lines.push(line);
});
reader.on("close", () => {
  const [N, X, K] = lines[0].split(" ").map((n) => parseInt(n));
  let additional_distance = 0;
  for (let i = 3; i <= K; i += 4) {
    if (i > 4 * N) {
      if (i < K) {
        additional_distance += X * 2;
      } else {
        additional_distance += X;
      }
    }
  }
  console.log(additional_distance);
});
