//let count=8
//while(true){
// let week = Number(prompt("Gun daxil et"));

// switch (week) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wedndesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;

//   default:
//     console.log("Bele gun yoxdur.");
// }
// count--;
// if(count==0){
//   break;
// }
//}
//My BirthDay.05.09.2023 elave olaraq kolendar cixmasi
let timeBirthday = document.getElementById("day");

let birthday = new Date(prompt("Ay/gun/il"));
///console.log(birthday);
let second = 1000;
let minute = second * 60;
let hour = minute * 60;
let day = hour * 24;
let month = day * 30;
let year = month * 12;
let timerId;

function countDown() {
  let today = new Date();
  let timeSpan = birthday - today;
  //milliseconds
  console.log(timeSpan);

  const days = Math.floor(timeSpan / day);
  const hours = Math.floor((timeSpan % day) / hour);
  const minutes = Math.floor((timeSpan % hour) / minute);
  const seconds = Math.floor((timeSpan % minute) / second);

  timeBirthday.innerHTML =
    days + "gun " + hours + "saat " + minutes + "deqiqe " + seconds + "saniyye";
  //// console.log(timeBirthday);
}

timerId = setInterval(countDown, second);

// let num1 = 20;
// let num2 = 25;
// let num3 = 30;
// let num4 = 35;

// function toplam(num1, num2, num3, num4) {
//   return num1 + num2 + num3 + num4;
// }
// console.log(toplam(num1, num2, num3, num3, num4));

// function vurma(num1, num2, num3, num4) {
//   return num1 * num2 * num3 * num4;
// }
// console.log(vurma(num1, num2, num3, num4));
// function muqaise(num1, num2, num3, num4) {}
