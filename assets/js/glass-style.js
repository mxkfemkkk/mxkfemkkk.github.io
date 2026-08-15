/* 视觉风格切换：液态玻璃 / 高斯模糊高透明 / 纯色
   写入 <html data-glass> 并持久化到 localStorage；
   支持多组控件（导航栏 + /theme/ 设置页），任意一组点击全局生效；
   无依赖、defer 加载；head 内联脚本已预置 data-glass 防 FOUC */
(function () {
  'use strict';

  var STYLES = ['liquid', 'frost', 'solid'];   /* 合法值白名单 */
  var root = document.documentElement;
  var groups = document.querySelectorAll('.glass-switch');

  /* 应用指定风格：同步 data-glass、localStorage 与全部控件组的按钮态 */
  function setStyle(name) {
    if (STYLES.indexOf(name) === -1) { return; }   /* 非法值兜底，忽略 */
    root.dataset.glass = name;
    try { localStorage.setItem('glass-style', name); } catch (e) { /* 隐私模式忽略 */ }
    for (var g = 0; g < groups.length; g++) {
      var buttons = groups[g].querySelectorAll('button[data-style]');
      for (var i = 0; i < buttons.length; i++) {
        var on = buttons[i].getAttribute('data-style') === name;
        if (on) { buttons[i].classList.add('active'); }
        else    { buttons[i].classList.remove('active'); }
        buttons[i].setAttribute('aria-pressed', on ? 'true' : 'false');
      }
    }
  }

  /* 事件委托：每个控件组都绑定，点击任意风格按钮即切换 */
  for (var g = 0; g < groups.length; g++) {
    (function (group) {
      group.addEventListener('click', function (e) {
        var btn = e.target.closest ? e.target.closest('button[data-style]') : null;
        if (btn) { setStyle(btn.getAttribute('data-style')); }
      });
    })(groups[g]);
  }

  /* 初始化：与内联脚本写入的 data 属性保持一致（含按钮态同步） */
  setStyle(root.dataset.glass || 'liquid');
})();
