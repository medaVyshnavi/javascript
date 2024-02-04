// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P1 is success"), 3000);
// });

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("P2 is rejected"), 1000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P2 is success"), 1000);
// });

// Promise.all([p1, p2, p3])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("1");
//   }, 1000);
// });

// function getData() {
//   p.then((res) => console.log(res));
//   console.log("2");
// }

// getData();

// async function handlePromise() {
//   const res = await p;
//   console.log("3");
//   console.log(res);
// }

// handlePromise();
