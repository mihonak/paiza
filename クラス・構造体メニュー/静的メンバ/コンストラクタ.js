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
    class employee {
        constructor(number, name) {
            this.number = number;
            this.name = name;
        }
        get_num() {
            return this.number;
        }
        get_name() {
            return this.name;
        }
    }
    const num = parseInt(lines[0]);
    employees = [];
    for ( let i = 0; i < num; i++) {
        const order = lines[i+1].split(' ');
        if (order[0] == 'make') {
            employees.push(new employee(order[1], order[2]));
        } else if (order[0] == 'getnum') {
            console.log(employees[parseInt(order[1])-1].get_num());
        } else if (order[0] == 'getname') {
            console.log(employees[parseInt(order[1])-1].get_name());
        }
    }
});