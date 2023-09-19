// 1 misol
// const son = +prompt("Son Kiriting: ");

// if (son % 2 === 0) {
//   alert(`Son Juft son`);
// } else {
//   alert(` Son toq `);
// }

// 2 misol
// const sonA = +prompt("Birinchi sonni kiriting: ");
// const sonB = +prompt("Ikkinchi sonni kiriting: ");

// if (sonA >= 0 && sonB < -2) {
//   alert(`Birinchi son 0 dan kotta, Ikkinchi son -2 dan kichik`);
// } else {
//   alert(`Sonlar unday emas`);
// }

// 4 misol
// const sonA = +prompt("Birinchi sonni kiriting: ");
// const sonB = +prompt("Ikkinchi sonni kiriting: ");

// if (sonA % 2 === 0 && sonB === 0) {
//   alert(`Sonlar juft sonlar`);
// } else if (sonA % 2 === 0) {
//   alert(`Birinchi son juft son`);
// } else if (sonB % 2 === 0) {
//   alert(`Ikkinchi son juft son`);
// } else {
//   alert(`Ikkala son ham toq`);
// }

// 5 and 6 misol
// const sonA = +prompt("Birinchi sonni kiriting: ");
// const sonB = +prompt("Ikkinchi sonni kiriting: ");

// if (sonA % 2 === 0 && sonB % 2 === 0) {
//   alert(`Sonlar juft sonlar`);
// } else if (sonA % 2 !== 0 || sonB !== 0) {
//   alert(`Sonlarning ikkalsi ham toq son`);
// } else {
//   alert(`Sonlarning bittasi toq son`);
// }

// 7 misol
// const sonA = +prompt("Birinchi sonni kiriting: ");
// const sonB = +prompt("Ikkinchi sonni kiriting: ");
// const sonC = +prompt("Uchinchi sonni kiriting: ");

// if (sonA > 0 && sonB > 0 && sonC > 0) {
//   alert(`Sonlarning hammasi musbat son`);
// } else {
//   alert(`Siz hammasini musbat kiritmadingiz`);
// }

// 8 misol
const sonA = +prompt("Birinchi sonni kiriting: ");
const sonB = +prompt("Ikkinchi sonni kiriting: ");
const sonC = +prompt("Uchinchi sonni kiriting: ");

if (sonA > 0 && sonB > 0 && sonC > 0) {
  alert(`Sonlarning hammasi musbat son`);
} else if (sonA > 0 || sonB > 0 || sonC > 0) {
  alert(`Sonlarning orasida musbat son bor`);
} else {
  alert(`Siz hammasini manfiy `);
}
