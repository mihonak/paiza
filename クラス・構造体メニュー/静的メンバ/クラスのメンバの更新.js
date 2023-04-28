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
        change_num(number) {
            this.number = number;
        }
        change_name(name) {
            this.name = name;
        }
    }
    const num = parseInt(lines[0]);
    employees = [];
    for ( let i = 0; i < num; i++) {
        const order = lines[i+1].split(' ');
        switch (order[0]) {
            case 'make':
                employees.push(new employee(order[1], order[2]));
                break;
            case 'getnum':
                console.log(employees[parseInt(order[1])-1].get_num());
                break;
            case 'getname':
                console.log(employees[parseInt(order[1])-1].get_name());
                break;
            case 'change_num':
                employees[parseInt(order[1])-1].change_num(order[2]);
                break;
            case 'change_name':
                employees[parseInt(order[1])-1].change_name(order[2]);
                break;
        }
    }
});