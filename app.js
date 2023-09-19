// BMI colculator
// const height = prompt("Bo'yingizni kiriting");
// const weight = prompt("Vazningizni kiriting");

// const bmi = weight / (height * height);

// if (bmi <= 18.4) {
//   alert(`Sizning vazningiz normadan kam ${bmi}`);
// } else if (bmi > 18.5 && bmi <= 24.9) {
//   alert(`Sizning vazningiz normal ${bmi}`);
// } else if (bmi >= 25 && bmi <= 39.9) {
//   alert(`Sizning vazningiz overweight ${bmi}`);
// } else {
//   alert(`Sizning vazningiz normadan yuqori ${bmi}`);
// }

// 1 masala
// const son1 = +prompt("Son kiriting");

// if (son1 > 0) {
//   alert(`Son ${son1 + 1}`);
// } else {
//   alert(`Siz manfiy son kiritdingiz ${son1}`);
// }

// 2 masala
// const son2 = +prompt("Son kiriting");

// if (son2 > 0) {
//   alert(`Son ${son2 + 1}`);
// } else {
//   alert(`Siz manfiy son kiritdingiz ${son2 - 2}`);
// }

// 3 masala
// const son3 = +prompt("Son kiriting");

// if (son3 > 0) {
//   alert(`Son ${son3 + 1}`);
// } else if (son3 === 0) {
//   alert(`Son ${10}`);
// } else {
//   alert(`Siz manfiy kiritdingiz ${son3 - 2}`);
// }

// 4 masala

// a = +prompt("Birinchi sonni kiriting: ");
// b = +prompt("Ikkinchi sonni kiriting: ");
// c = +prompt("Uchinchi sonni kiriting: ");

// if (a > 0 && b > 0 && c > 0) {
//   alert(`Siz uchta musbat son kiritdingiz`);
// } else if ((a > 0 && b > 0) || (a > 0 && c > 0) || (b > 0 && c > 0)) {
//   alert(`Siz ikta musbat son kiritdingiz`);
// } else if (a > 0 || b > 0 || c > 0) {
//   alert("Siz bitta musbat son kiritdingiz");
// } else {
//   alert(` Siz bitta ham musbat son kiritmadiz`);
// }

// 5 masala

// a = +prompt("Birinchi sonni kiriting: ");
// b = +prompt("Ikkinchi sonni kiriting: ");
// c = +prompt("Uchinchi sonni kiriting: ");

// let manfiySonlar = 0;

// if (a > 0 && b > 0 && c > 0) {
//   manfiySonlar = 0;
//   alert(
//     `Siz uchta musbat son kiritdingiz, Manfiy sonlar esa ${manfiySonlar} ta`
//   );
// } else if ((a > 0 && b > 0) || (a > 0 && c > 0) || (b > 0 && c > 0)) {
//   manfiySonlar = 1;
//   alert(
//     `Siz ikta musbat son kiritdingiz, Manfiy sonlar esa ${manfiySonlar} ta `
//   );
// } else if (a > 0 || b > 0 || c > 0) {
//   manfiySonlar = 2;
//   alert(
//     `Siz bitta musbat son kiritdingiz, Manfiy sonlar esa ${manfiySonlar} ta`
//   );
// } else {
//   manfiySonlar = 3;
//   alert(
//     ` Siz bitta ham musbat son kiritmadiz, Manfiy sonlar esa ${manfiySonlar} ta`
//   );
// }

// 6 masala

// const sona = +prompt("Birinchi sonni kiriting: ");
// const sonb = +prompt("Ikkinchi sonni kiriting: ");

// if (sona > sonb) {
//   alert(`${sona} kotta son ${sonb} dan`);
// } else {
//   alert(`${sonb} kotta son ${sona} dan`);
// }

// 7 masala

// const sonA = +prompt("Birinchi sonni kiriting: ");
// const sonB = +prompt("Ikkinchi sonni kiriting: ");

// if (sonA > sonB) {
//   alert(`${sonB} - son`);
// } else {
//   alert(`${sonA} - son`);
// }

// 8 masala

// const sonA = +prompt("Birinchi sonni kiriting: ");
// const sonB = +prompt("Ikkinchi sonni kiriting: ");

// if (sonA > sonB) {
//   alert(`${sonA} soni kotta`);
//   alert(`${sonB} soni kichik`);
// } else {
//   alert(`${sonB} soni kotta`);
//   alert(`${sonA} soni kichik`);
// }

// 9 masala

// let sonA = +prompt("Birinchi sonni kiriting: ");
// let sonB = +prompt("Ikkinchi sonni kiriting: ");

// if (sonA > sonB) {
//   alert(`Ikkinchi son = ${(sonB += sonA)} , Birinchi son = ${sonA} `);
// } else {
//   alert(`Birinchi son = ${sonA} ,Ikkinchi son = ${sonB} `);
// }

// 10 masala

// let sonA = +prompt("Birinchi sonni kiriting: ");
// let sonB = +prompt("Ikkinchi sonni kiriting: ");
// let sum = 0;

// if (sonA === sonB) {
//   alert(` ${sum} `);
// } else {
//   alert(`${(sum = sonA + sonB)}`);
// }

// 11 masala

// let sonA = +prompt("Birinchi sonni kiriting: ");
// let sonB = +prompt("Ikkinchi sonni kiriting: ");
// let sum = 0;

// if (sonA === sonB) {
//   alert(` ${sum} `);
// } else {
//   if (sonA > sonB) {
//     alert(`${sonA}`);
//   } else {
//     alert(`${sonB}`);
//   }
// }

// 12 masala a= 1 b = 2 c = 3 21 2 56 .. 12 123 2   { 3 ta son kichigi

// const a = +prompt("Birinchi sonni kiriting: ");
// const b = +prompt("Ikkinchi sonni kiriting: ");
// const c = +prompt("Uchinchi sonni kiriting: ");

// if (a > b && a > c && b > c) {
//   alert(`Eng kichik son ${c}`);
// } else if (b > a && b > c && c > a) {
//   alert(`Eng kichik son ${a}`);
// } else if (c > a && c > b && a > b) {
//   alert(`Eng kichik son ${b}`);
// } else {
//   if (a > c) {
//     alert(`Eng kichik son ${c}`);
//   } else {
//     alert(`Eng kichik son ${a}`);
//   }
// }

// 13 masala a= 3 b = 2 c = 1      21 2 56 .. 12 123 2  { 3 ta son ortachasi

// const a = +prompt("Birinchi sonni kiriting: ");
// const b = +prompt("Ikkinchi sonni kiriting: ");
// const c = +prompt("Uchinchi sonni kiriting: ");

// if (a > b && a > c && b > c) {
//   alert(`O'rtacha son ${b}`);
// } else if (b > a && b > c && a > c) {
//   alert(`O'rtacha son ${a}`);
// } else if (b > a && b > c && c > a) {
//   alert(`O'rtacha son ${c}`);
// } else if (b > a && c > a && b > a) {
//   alert(`O'rtacha son ${b}`);
// }

// 14 masala a= 1 b = 3 c = 12  21 11 34     21 2 56 .. 12 123 2  { 3 ta son kattasi

// const a = +prompt("Birinchi sonni kiriting: ");
// const b = +prompt("Ikkinchi sonni kiriting: ");
// const c = +prompt("Uchinchi sonni kiriting: ");

// if (a > b && a > c) {
//   alert(`Katta son ${a}`);
// } else if (b > a && b > c) {
//   alert(`Katta son ${b}`);
// } else if (c > b && c > a) {
//   alert(`Katta son ${c}`);
// }

// if (a > b && a > c && b > c) {
//   alert(`Eng kichik son ${c}`);
// } else if (b > a && b > c && c > a) {
//   alert(`Eng kichik son ${a}`);
// } else if (c > a && c > b && a > b) {
//   alert(`Eng kichik son ${b}`);
// } else {
//   if (a > c) {
//     alert(`Eng kichik son ${c}`);
//   } else {
//     alert(`Eng kichik son ${a}`);
//   }
// }

// 15 masala a= 1 b = 3 c = 12  21 11 34     21 2 56 .. 12 123 2  { 3 ta son kattasi

// const a = +prompt("Birinchi sonni kiriting: ");
// const b = +prompt("Ikkinchi sonni kiriting: ");
// const c = +prompt("Uchinchi sonni kiriting: ");

// if (a > b && a > c) {
//   alert(`Katta son ${a}`);
// } else if (b > a && b > c) {
//   alert(`Katta son ${b}`);
// } else if (c > b && c > a) {
//   alert(`Katta son ${c}`);
// }

// if (a > b && a > c && b > c) {
//   alert(`O'rtacha son ${b}`);
// } else if (b > a && b > c && a > c) {
//   alert(`O'rtacha son ${a}`);
// } else if (b > a && b > c && c > a) {
//   alert(`O'rtacha son ${c}`);
// } else if (b > a && c > a && b > a) {
//   alert(`O'rtacha son ${b}`);
// }
