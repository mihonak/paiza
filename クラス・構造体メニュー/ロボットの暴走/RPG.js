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
  const [N,K] = lines[0].split(' ').map((d) => {return parseInt(d)});
  let guys = [];
  for (let i = 0; i < N; i++) {
      const [l,h,a,d,s,c,f] = lines[i+1].split(' ').map((d) => {return parseInt(d)});
      guys.push({l:l,h:h,a:a,d:d,s:s,c:c,f:f});
  }
  let h,a,d,s,c,f = 0;
  for (let i = 0; i < K; i++){
      const command = lines[i+N+1].split(' ');
      const id_num = parseInt(command[0])-1;
      
      switch(command[1]){
          case 'levelup':
              [h,a,d,s,c,f] = command.slice(2).map((d) => {return parseInt(d)});
              guys[id_num].l++;
              guys[id_num].h += h;
              guys[id_num].a += a;
              guys[id_num].d += d;
              guys[id_num].s += s;
              guys[id_num].c += c;
              guys[id_num].f += f;
              break;
          case 'muscle_training':
              [h,a] = command.slice(2).map((d) => {return parseInt(d)});
              guys[id_num].h += h;
              guys[id_num].a += a;
              break;
          case 'running':
              [d,s] = command.slice(2).map((d) => {return parseInt(d)});
              guys[id_num].d += d;
              guys[id_num].s += s;
              break;
          case 'study':
              c = parseInt(command[2]);
              guys[id_num].c += c;
              break;
          case 'pray':
              f = parseInt(command[2]);
              guys[id_num].f += f;
              break;
      }
  }
  for (let i = 0; i < guys.length; i++) {
      console.log([guys[i].l,guys[i].h,guys[i].a,guys[i].d,guys[i].s,guys[i].c,guys[i].f].join(' '));
  }
});