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
    class SuperCar {
        constructor (fuel_amount, efficiency) {
            this.fuel_amount = parseInt(fuel_amount);
            this.efficiency = parseInt(efficiency);
            this.distance = 0;
        }
        run() {
            if (this.fuel_amount > 0) {
                this.fuel_amount -= 1;
                this.distance += this.efficiency;
            }
        }
    }
    class SuperCar_v2 extends SuperCar {
        constructor (fuel_amount, efficiency) {
            super(fuel_amount, efficiency);
        }
        fly() {
            if (this.fuel_amount < 5) {
                this.run();
            } else {
                this.fuel_amount -= 5;
                this.distance += Math.pow(this.efficiency, 2);
            }
        }
    }
    class SuperCar_v3 extends SuperCar {
        constructor (fuel_amount, efficiency) {
            super(fuel_amount, efficiency);
        }
        fly() {
            if (this.fuel_amount < 5) {
                this.run();
            } else {
                this.fuel_amount -= 5;
                this.distance += 2 * Math.pow(this.efficiency, 2);
            }
        }
        teleport() {
            if(this.fuel_amount < Math.pow(this.efficiency, 2)) {
                this.fly();
            } else {
                this.fuel_amount -= Math.pow(this.efficiency, 2);
                this.distance += Math.pow(this.efficiency, 4);
            }
        }
    }
    const [N,K] = lines[0].split(' ').map((d) => {return parseInt(d)});
    let cars = {};
    for (let i = 0; i < N; i++) {
        const [model_name, fuel_amount, efficiency] = lines[i+1].split(' ');
        switch (model_name) {
            case 'supercar':
                cars[i+1] = new SuperCar(fuel_amount, efficiency);
                break;
            case 'supersupercar':
                cars[i+1] = new SuperCar_v2(fuel_amount, efficiency);
                break;
            case 'supersupersupercar':
                cars[i+1] = new SuperCar_v3(fuel_amount, efficiency);
                break;
        }
    }
  for (let i = 0; i < K; i++) {
      const [model_num, command] = lines[i+N+1].split(' ');
      switch (command) {
          case 'run':
              cars[model_num].run();
              break;
          case 'fly':
              cars[model_num].fly();
              break;
          case 'teleport':
              cars[model_num].teleport();
              break;
      }
  }
  for (let keys in cars){
      console.log(cars[keys].distance);
  }
});