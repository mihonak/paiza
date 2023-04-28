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
  const num = lines[0];
  for (let i = 0; i < num; i++) {
    const [n,o,b,s] = lines[i+1].split(' ');
    console.log('User{');
    console.log('nickname : '+n);
    console.log('old : '+o);
    console.log('birth : '+b);
    console.log('state : '+s);
    console.log('}');
  }
});