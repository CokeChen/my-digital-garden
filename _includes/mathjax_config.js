window.MathJax = {
    tex: {
      inlineMath: [['\\(', '\\)']],
      displayMath: [['$$', '$$'], ['\\[', '\\]']],
      processEscapes: true,
      packages: ['base', 'ams'],
      tagSide: 'right',
      extensions: ['tex2jax.js'],
      jax: ['input/TeX', 'output/HTML-CSS'],
      tex2jax: {
        inlineMath: [['$', '$']],
        displayMath: [['$$', '$$']],
        processEscapes: true
      }
    },
    options: {
      ignoreHtmlClass: '.*|',
      processHtmlClass: 'arithmatex'
    }
  };
  