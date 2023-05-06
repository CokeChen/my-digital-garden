document.addEventListener('DOMContentLoaded', function () {
  var  sidebar = document.querySelector('#sidebar');
  var  sidebar_home = document.querySelector('#sidebar_home');
  var toggleButton = document.querySelector('#toggle-sidebar-button');

  // 获取设备宽度
  const deviceWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  // 设置初始隐藏状态
  if (sidebar) {
    sidebar.style.display = 'none';
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
  }
  if (sidebar_home) {
    sidebar_home.style.display = 'none';
    if (deviceWidth > 768) {
      toggleButton.addEventListener('click', function () {
        if (sidebar_home.style.display === 'none') {
          sidebar_home.style.display = 'block';
          toggleButton.innerText = '🙉'; // 改变按钮名字
        } else {
          sidebar_home.style.display = 'none';
          toggleButton.innerText = '🙈'; // 改变按钮名字
        }
      });
    }
  }

});
