// input
let T: number = 20;
let r: number = 4;

// kode disini
if (r % 7 == 0) {
  let pi: number = 22 / 7;
  let luas_tabung: number = 2 * pi * r * (r + T);
  console.log(luas_tabung);
} else {
  let pi: number = 3.14;
  let luas_tabung: number = 2 * pi * r * (r + T);
  console.log(luas_tabung);
}
