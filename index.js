function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  var lis = document.querySelectorAll('.ranked-list');
  for (let i = 0; i < lis.length; i++) {
    var lisChildren = lis[i].children;
    for (let j = 0; j < lisChildren.length; j++) {
      var lisInnerChild = parseInt(lisChildren[j].innerHTML);
      lisChildren[j].innerHTML = lisInnerChild + n;
    }
  }
}

function deepestChild() {
  var lis = document.querySelector('div#grand-node');
  while(lis.children.length === 1) {
    lis = lis.children[0];
  }
  return lis;
 }
