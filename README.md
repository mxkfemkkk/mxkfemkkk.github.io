# mxkkkk 的个人博客

基于 Jekyll + GitHub Pages 搭建的个人博客。托管在 <https://mxkfemkkk.github.io>。

## 本地预览

```bash
bundle install
bundle exec jekyll serve
```

访问 <http://localhost:4000>。

## 写文章

在 `_posts/` 下新建文件，命名格式 `YYYY-MM-DD-slug.md`：

```markdown
---
title: 文章标题
tags: [标签一, 标签二]
d: 一句话短描述。
---
正文……
```

- `d`：自定义短描述，显示在文章列表和详情页
- 日期：以文件名为准（需 ≤ 当前日期，否则 Jekyll 不会生成）

## 分页维护规则

每页 10 篇，手写分页（GitHub Pages 安全模式无分页插件）。文章总数超过 `10 × N` 篇时：

1. 新建 `posts/page{N+1}/index.html`
2. 写入 front matter：`layout: posts`、`offset: 10 × N`

例如第 21-30 篇 → 新建 `posts/page3/index.html`，`offset: 20`。

## 站点配置

- 站点名 / 首页姓名：`_config.yml` 的 `title`
- 社交链接：`_includes/social.html`（B站/知乎/微博为 xxx 占位符，替换为真实 UID；邮箱用 `_config.yml` 的 `email`）
- 头像：替换 `assets/images/avatar.svg`
- 签名：`_config.yml` 的 `signature`
