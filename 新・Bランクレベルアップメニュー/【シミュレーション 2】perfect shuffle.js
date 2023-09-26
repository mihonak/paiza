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
  const num = lines[0];

  const PerfectShuffle = (n, ShuffledCard) => {
    let Cards = [];

    if (ShuffledCard === undefined) {
      Cards = "SHDC"
        .split("")
        .map((Suit) =>
          Array.from(new Array(13), (x, i) => Suit + "_" + (i + 1))
        )
        .flat();
      if (n == 0) {
        return Cards;
      }
    } else {
      Cards = ShuffledCard;
    }

    let result = [];

    if (n > 0) {
      const CardsAbove = Cards.slice(0, Cards.length / 2);
      const CardsBelow = Cards.slice(Cards.length / 2);

      for (let i = 0; i < Cards.length / 2; i++) {
        result.push(CardsAbove[i]);
        result.push(CardsBelow[i]);
      }

      return PerfectShuffle(n - 1, result);
    } else {
      return ShuffledCard;
    }
  };

  const data = PerfectShuffle(num);

  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
  }
});
