document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.querySelector('#sidebar');
    const toggleButton = document.querySelector('#toggle-sidebar-button');
  
    // 设置初始隐藏状态
    sidebar.style.display = 'none';
  
    // 获取设备宽度
    const deviceWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  
    // 如果设备宽度大于某个阈值（例如768像素，您可以根据需要调整），则添加点击事件
    if (deviceWidth > 768) {
      toggleButton.addEventListener('click', function () {
        if (sidebar.style.display === 'none') {
          sidebar.style.display = 'block';
          toggleButton.innerText = '🙉'; // 改变按钮名字
        } else {
          sidebar.style.display = 'none';
          toggleButton.innerText = '🙈'; // 改变按钮名字
        }
      });
    }
  });
  