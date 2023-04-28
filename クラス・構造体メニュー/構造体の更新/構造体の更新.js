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
  const [num, num_k] = lines[0].split(' ').map((d) => {return parseInt(d)});
  let students = [];
  for (let i = 0; i < num; i++){
    const [n,o,b,s] = lines[i+1].split(' ');
    let student = {};
    student.nickname = n;
    student.old = o;
    student.birth = b;
    student.state = s;
    students.push(student);
  }
  for (let i = 0; i < num_k; i++) {
    const [target_num, target_name] = lines[i+num+1].split(' ');
    students[parseInt(target_num)-1].nickname = target_name;
  }
  for (let i = 0; i < num; i++) {
    console.log([
        students[i].nickname,
        students[i].old,
        students[i].birth,
        students[i].state
    ].join(' '));
  }
});