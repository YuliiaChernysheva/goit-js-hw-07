const listElem = document.querySelector('#categories');
const itemElems = listElem.querySelectorAll('.item');

console.log(`Number of categories: ${itemElems.length}`);

itemElems.forEach(elem => {
  const titleElem = elem.querySelector('h2').textContent;
  const numberElem = elem.querySelectorAll('ul li').length;

  console.log(`Category: ${titleElem}`);
  console.log(`Elements: ${numberElem}`);
});
