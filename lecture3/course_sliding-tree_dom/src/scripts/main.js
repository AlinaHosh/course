const tree = document.getElementById('tree');

for (const elementOfList of tree.querySelectorAll('li')) {
  const span = document.createElement('span');

  elementOfList.prepend(span);
  span.append(span.nextSibling); 
}

tree.onclick = function() {

  if (event.target.tagName != 'SPAN') {
    return;
  }

  const expandingList = event.target.parentNode.querySelector('ul');

  if (!expandingList) {
    return;
  }

  expandingList.hidden = !expandingList.hidden;
};
