var ans = parseInt(Math.random() * 100) + 1;
var btn = document.getElementById("btn");

// var p = document.getElementById("ans");
// p.innerHTML = ans;

btn.onclick = function() {
  var num = document.getElementById("num").value;
  if (num == "") {
    alert("請輸入數字");
    return;
  }
  if (num == ans) {
    alert("恭喜你！猜對了！");
  } else {
    if (num > ans) alert("太大了！");
    else if (num < ans) alert("太小了！");
  }
};
