window.MathJax = {
    tex: {
      inlineMath: [['\\(', '\\)']],
      displayMath: [['\\[', '\\]']],
      processEscapes: true,
      packages: ['base', 'ams', 'noundefined', 'config'],
      config: ['MMLorHTML.js', { MathMenu: { showRenderer: false } }]
    },
    options: {
      ignoreHtmlClass: '.*|',
      processHtmlClass: 'arithmatex'
    }
  };
  