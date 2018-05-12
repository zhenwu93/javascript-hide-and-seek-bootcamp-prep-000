function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  var lis = document.querySelector('div#grand-node');
  while(lis.children.length === 0) {
    lis = lis.children[0];
  }
  return lis;
}
