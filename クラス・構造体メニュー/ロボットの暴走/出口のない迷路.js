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
    
    let result = '';

    const guide = (n, length, root) => {
        if (length < 0) {
            return;
        } else {
            result += letters[n - 1].letter;
            length--;
            root++;
            guide(letters[n - 1][roots[root]], length, root);
        }
    };

    const [N,K,S] = lines[0].split(' ').map((d) => {return parseInt(d)});
    let letters = [];
    for (let i = 0; i < N; i++) {
        const [letter, r1, r2] = lines[i+1].split(' ');
        letters.push({'letter':letter,'1':r1,'2':r2});
    }
    let roots = [];
    for (let i = 0; i < K; i++) {
        roots.push(lines[i+N+1]);
    }
    
    guide(S,K,-1);
    console.log(result);
    
});