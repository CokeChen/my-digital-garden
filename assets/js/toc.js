function findParentListItem(heading, toc) {
  let currentLevel = parseInt(heading.tagName[1]);
  let currentNode = toc.lastElementChild;

  while (currentNode) {
    const parentHeadingLevel = parseInt(currentNode.querySelector('a').getAttribute('data-level'));
    if (parentHeadingLevel === currentLevel - 1) {
      return currentNode;
    }
    currentNode = currentNode.previousElementSibling;
  }

  return null;
}

function handleClick(event) {
  if (event.target.classList.contains('toggle-icon')) {
    const li = event.target.parentNode;
    li.classList.toggle('collapsed');
    event.target.textContent = li.classList.contains('collapsed') ? '➕' : '➖';
    const childList = li.querySelector('ul');
    childList.style.display = li.classList.contains('collapsed') ? 'none' : 'block';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const toc = document.getElementById('toc');
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

  headings.forEach((heading, index) => {
    const id = heading.id || heading.textContent.trim().toLowerCase().replace(/[\s]+/g, '-');
    heading.id = id;
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `#${id}`;
    a.textContent = heading.textContent;
    a.setAttribute('data-level', heading.tagName[1]);
    li.appendChild(a);

    if (index + 1 < headings.length) {
      const nextHeading = headings[index + 1];
      if (parseInt(heading.tagName[1]) < parseInt(nextHeading.tagName[1])) {
        const toggleIcon = document.createElement('span');
        toggleIcon.className = 'toggle-icon';
        toggleIcon.textContent = '➖';
        li.appendChild(toggleIcon);

        const ul = document.createElement('ul');
        li.appendChild(ul);
        li.classList.add('has-children');
      }
    }

    const parentListItem = findParentListItem(heading, toc);
    if (parentListItem) {
      const parentUl = parentListItem.querySelector('ul');
      parentUl.appendChild(li);
    } else {
      toc.appendChild(li);
    }
  });

  toc.addEventListener('click', handleClick);
});
