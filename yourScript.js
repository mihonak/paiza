export const yourScript = (lines) => {

  // write your script

  const [H,W] = lines[0].split(" ").map(n => parseInt(n));
  let data = [];
  for ( let i = 0; i < H; i++) {
      data.push(lines[i+1].split(''));
  }
  const [x,y] = lines[H+1].split(' ');
  data[x][y] = data[x][y] == '.' ? '#' : '.';

  let result_lines = '';

  for ( let i = 0; i < H; i++) {
      console.log(data[i].join(''));
      result_lines += data[i].join('');
      result_lines += '\n';
  }

  return result_lines;
};