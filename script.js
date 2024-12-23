function ballBounce(e) {
  var i = e;
  if (e.className.indexOf(" bounce") > -1) {
    return;
  }
  toggleBounce(i);
}

function toggleBounce(i){
  i.classList.add("bounce");
  function n() {
    i.classList.remove("bounce")
    i.classList.add("bounce1");
    function o() {
      i.classList.remove("bounce1")
      i.classList.add("bounce2");
      function p() {
        i.classList.remove("bounce2")
        i.classList.add("bounce3");
        function q() {
          i.classList.remove("bounce3");
        }
        setTimeout(q, 300)
      }
      setTimeout(p, 300)
    }
    setTimeout(o, 300)
  }
  setTimeout(n, 300)
}

var array1 = document.querySelectorAll('.b-ball_bounce')
var array2 = document.querySelectorAll('.b-ball_bounce .b-ball__right')

for(var i = 0; i < array1.length; i++) {
  array1[i].addEventListener('mouseenter', function() {
    ballBounce(this)
  })
}

for(var i = 0; i < array2.length; i++) {
  array2[i].addEventListener('mouseenter', function() {
    ballBounce(this)
  })
}

let l = ["49", "50", "51", "52", "53", "54", "55", "56", "57", "48", "189", "187", "81", "87", "69", "82", "84", "89", "85", "73", "79", "80", "219", "221", "65", "83", "68", "70", "71", "72", "74", "75", "76", "186", "222", "220"];
let k = ["90", "88", "67", "86", "66", "78", "77", "188", "190", "191"];
let a = {};
for (let e = 0, c = l.length; e < c; e++) {
    a[l[e]] = e
}
for (let e = 0, c = k.length; e < c; e++) {
    a[k[e]] = e
}

document.addEventListener('keydown', function (j) {
  let i = j.target;
  if (j.which in a) {
    let index = parseInt(a[j.which]);
    let ball = document.querySelector('[data-note="' + index + '"]');
    toggleBounce(ball);
  }
});
