document.addEventListener('DOMContentLoaded', () => {
  const toc = document.getElementById('toc');
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

  headings.forEach((heading) => {
    const id = heading.id || heading.textContent.trim().toLowerCase().replace(/[\s]+/g, '-');
    heading.id = id;
    const li = document.createElement('li');
    li.className = `toc-level-${heading.tagName.toLowerCase()}`;
    const a = document.createElement('a');
    a.href = `#${id}`;
    a.textContent = heading.textContent;
    li.appendChild(a);
    toc.appendChild(li);
  });
});