document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.querySelector('#sidebar');
    const toggleButton = document.querySelector('#toggle-sidebar-button');
    
    sidebar.style.display = 'none';     // 设置初始隐藏状态
    toggleButton.addEventListener('click', function () {
      if (sidebar.style.display === 'none') {
        sidebar.style.display = 'block';
      } else {
        sidebar.style.display = 'none';
      }
    });
  });
  