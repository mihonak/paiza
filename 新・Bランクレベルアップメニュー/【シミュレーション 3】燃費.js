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
  const X = parseInt(lines[0]);
  const [F_1, F_2] = lines[1].split(" ").map((d) => parseInt(d));
  const [L, N] = lines[2].split(" ").map((d) => parseInt(d));
  const S = lines[3].split(" ").map((d) => parseInt(d));
  S.push(L);
  const terms = [];
  let [L_1, L_2] = [0, 0];

  S.map((breakPoint, index) => {
    if (index === 0) {
      terms.push(breakPoint);
    } else {
      terms.push(breakPoint - S[index - 1]);
    }
  });

  terms.map((term) => {
    if (term > X) {
      L_1 += X;
      L_2 += term - X;
    } else {
      L_1 += term;
    }
  });

  console.log(L_1 * F_1 + L_2 * F_2);
});
