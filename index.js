function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  var lis = document.querySelector('div#grand-node');
  while(lis.children.length === 1) {
    lis = lis.children[0];
  }
  return lis;
}

function increaseRankBy(n) {
  var lis=document.getElementById("app").querySelectorAll("ul.ranked-list li");
  for(let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
  }
}
