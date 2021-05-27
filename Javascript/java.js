star();
function star() {
  const noofC = 10;
  const nooR = 5;
  for (let i = 1; i <= nooR; i++) {
    for (let i = 1; i <= noofC; i++) {
      document.write("*");
    }
    document.write("<br>");
  }
}
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
for (let i = 0; i < 5; i++) {
  let str = "";
  for (let j = 5; j > i; j--) {
    str += "";
  }
  for (let k = 0; k <= i; k++) {
    str += "*";
  }
  for (let l = 1; l <= i; l++) {
    str += "*";
  }
  console.log(str);
  document.write(str);
  document.write("<br>");
}
for (var i = 5; i >= 0; i--) {
  var str = "";
  for (var j = 5; j > i; j--) {
    str += "";
  }
  for (var k = 0; k <= i; k++) {
    str += "*";
  }
  for (var l = 1; l <= i; l++) {
    str += "*";
  }
  console.log(str);
  document.write(str);
  document.write("<br>");
}
//............................
var i, j, k;
for (i = 1; i <= 5; i++) {
  for (k = 1; k <= 5 - i; k++) {
    document.write("&nbsp");
  }
  for (j = 1; j <= i; j++) {
    document.write("*");
  }
  document.write("<br/>");
}
var i, j, k;
for (i = 5; i >= 0; i--) {
  for (k = 1; k <= 5 - i; k++) {
    document.write("&nbsp");
  }
  for (j = 1; j <= i; j++) {
    document.write("*");
  }
  document.write("<br/>");
}
