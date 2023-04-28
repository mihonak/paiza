process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
    const [H,W] = lines[0].split(" ").map((n) => parseInt(n));
    let data = [];
    for ( let i = 0; i < H; i++) {
        data.push(lines[i+1].split(''));
    }
    const [x,y] = lines[H+1].split(' ');
    data[x][y] = data[x][y] == '.' ? '#' : '.';
    for ( let i = 0; i < H; i++) {
        console.log(data[i].join(''));
    }
});