---
title: 中文字体栈的选择
tags: [Web 开发, CSS]
d: 为什么我放弃了 Google Fonts，改用系统字体栈渲染中文。
---
为中文站点选择字体，一个常见误区是直接引入网页字体，比如 Google Fonts 提供的思源黑体。但对于国内访问者来说，Google Fonts 的加载极不稳定，可能拖慢页面首屏，甚至导致字体长时间显示为空白。

我最终选择的是系统字体栈：`-apple-system, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei"`。这套字体栈在 Windows 上会命中微软雅黑，在 macOS 和 iOS 上命中苹方，在 Linux 上退回无衬线字体，效果统一且零外部请求。

系统字体栈最大的优势是性能：字体文件随系统自带，页面加载无需等待字体下载，也完全没有跨域请求带来的不确定性。
