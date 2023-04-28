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
    class Customer {
      constructor(old) {
        this.old = old;
        this.payment = 0;
        this.alcohol_discount = false;
        this.checked = false;
      }
      order(item = 'beer', price = 500) {
        if (item == 'alcohol' || item == 'beer') {
          price = 0;
        }
        this.payment += price;
      }
      check() {
          this.checked = true;
          return this.payment;
      }
    }
    class Adult_customer extends Customer {
      constructor(old) {
        super(old);
      }
      order(item = 'beer', price = 500) {
        if (item == 'alcohol' || item == 'beer') {
          this.alcohol_discount = true;
        }
        if (item == "food" && this.alcohol_discount == true) {
          price = price - 200;
        }
        this.payment += price;
      }
    }
    
    const [num, num_orders] = lines[0].split(' ').map((d) => {return parseInt(d)});
    let customers = [];
    
    for (let i = 0; i < num; i++) {
        const old = parseInt(lines[i+1]);
        if (old < 20) {
            customers.push( new Customer(old) );
        } else {
            customers.push( new Adult_customer(old) );
        }
    }
    
    for (let i = 0; i < num_orders; i++) {
        let [number, item, price] = lines[i+num+1].split(' ');
        number = parseInt(number);
        price = parseInt(price);
        if (item == '0') {
            customers[number-1].order();
        } else if (item == 'A') {
            console.log(customers[number-1].check());
        } else {
            customers[number-1].order(item, price);
        }
    }
    
    let checked_num = 0;
    for (let i = 0; i < customers.length; i++) {
        if (customers[i].checked == true) {
            checked_num++;
        }
    }
    console.log(checked_num);
});