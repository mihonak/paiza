function fileChanged(input) {
  let file = input.files[0];
  let reader = new FileReader();
  let lines = [];
  reader.readAsText(file);
  reader.onload = function (e) {
    lines = reader.result.split("\n");

    /* Write your code here. */
    const [N, K] = lines[0].split(" ").map((n) => parseInt(n));
    console.log(N,K);
    /* ------------------------ */
  };
}
