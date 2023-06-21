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
    const [H, W] = lines[0].split(' ').map(n => parseInt(n));
    let data = [];
    for (let i = 0; i < H; i++) {
      data.push(lines[i + 1].split(''));
    }
    const [y, x] = lines[H + 1].split(' ').map(n => parseInt(n));

    const update_data = (y, x) => {
      if (y >= 0 && y < H && x >= 0 && x < W) {
        data[y][x] = data[y][x] == '.' ? '#' : '.';
      }
    };
    const patterns = [[y, x]];
    let offset_y = -y;
    while (offset_y + y < y) {
      patterns.push([y + offset_y, x]);
      patterns.push([y + offset_y, x + offset_y]);
      patterns.push([y + offset_y, x - offset_y]);
      offset_y++;
    }
    offset_y = 1;
    while (offset_y + y < H) {
      patterns.push([y + offset_y, x]);
      patterns.push([y + offset_y, x + offset_y]);
      patterns.push([y + offset_y, x - offset_y]);
      offset_y++;
    }
    let offset_x = -x;
    while (offset_x < W) {
      if (offset_x != 0) {
        patterns.push([y, x + offset_x]);
      }
      offset_x++;
    }
    for (let i = 0; i < patterns.length; i++) {
      update_data(...patterns[i]);
    }

    for (let i = 0; i < H; i++) {
      console.log(data[i].join(''));
    }
});