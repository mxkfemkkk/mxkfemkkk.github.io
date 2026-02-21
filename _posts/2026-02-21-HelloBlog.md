---
layout: post
title: Hello MyBlog | 基于GitHub Page搭建的个人Blog
subtitle: Hello,World! Hello,My Blog!
date: 2026-02-21
author: mxkkkk
header-style: text
tag:
    - 技术
---

```C
#include <stdio.h>
int main(){
    printf("%s\n","Hello,World");
    return 0;
}
```

由于众所周知的原因，我的文章很容易被下架。但恰好我是计算机系的，懂点技术。

所以——我搭建了一个博客

**这篇文章是一篇技术贴**

![](https://pic2.zhimg.com/v2-7bc2a60e5fffd8b18c3a35a63eb046e1_r.jpg)

# 技术实现

博客采用GitHub Pages+Jekyll组合搭建。

- 模板：基于 @黄玄 的博客修改

# 准备工作

- 一个GitHub账号，地址 [https://github.com/](https://github.com/)
- VSCode编辑器，地址 [https://code.visualstudio.com/](https://code.visualstudio.com/)
- Git [https://git-scm.com/](https://git-scm.com/)

# 搭建博客

首先访问黄玄的博客主页https://github.com/Huxpro/huxpro.github.io

- fork黄玄的博客到自己的GitHub里面（注意将仓库名称改为`你的 <GitHub用户名>.github.io`）

![](https://picx.zhimg.com/v2-d5aafe1f46832c783a4610e25acc5d23_r.jpg)

2. 打开终端，输入
``` bash
git clone https://github.com/Huxpro/huxpro.github.io.git
```

# 修改你的博客首页

- 下载[VS Code](https://code.visualstudio.com/)，打开clone的文件夹，修改 `_config.yml`文件中的内容

```yaml
# Site settings
title: mxkkkk Blog # 这个是博客的大标题
SEOTitle: mxkkkk的博客 | mxkkkk Blog # 标签页的标题，类似于HTML中的<title></title>
header-img: img/home-bg.jpg #背景图，可以将自己的背景图放到img文件夹
email: xxxxx@xxx #邮箱
description: "这是mxkkkk的个人博客 | 不写BUG，开始写博客了" # 
keyword: ""
url: "https://mxkfemkkk.github.io" # 改成你的地址
baseurl: "" # for example, '/blog' if your blog hosted on 'host/blog'
```

- 修改你的关联社交平台

```yaml
# SNS settings
RSS: false
weibo_username:     username
zhihu_username:     username
github_username:    username
```

以知乎为例，将`username`字段更改为自己知乎账户的域名。如我的是`43fxma`，那么我的字段如下：
![](https://pic4.zhimg.com/v2-34832dfd6bd44ee5640235a2a5f04f29_r.jpg)

``` yaml
zhihu_username: 43fxma
```

微博、GitHub同理

- 修改你的座右铭

找到仓库根目录下的`index.html`，修改 `description:`字段可以修改主页的座右铭

比如这是我的

```yaml
---
layout: page
description: "「一个有志大一青年的个人blog」"
---
```

# 保存更改

- 在终端定位到本地仓库目录

- 先把文件加入缓冲区
``` bash
git add *
rem 注意，这个* 可以替换为你更改的文件名
```
- 再提交更改

```bash
git commit -m "提交说明，随便写"
```
- 将更改提交到远程仓库
```bash
git push origin -u master
rem 注，有时候需要将mster更改为main
```

![](https://pic4.zhimg.com/v2-60a27357a8e3f78387c8d3824bf2591d_r.jpg)  
🔺如果出现&quot;branch &#39;master&#39; set up to track &#39;origin/master&#39;.&quot;结果就是胜利

再去GitHub上被我们fork后的仓库里，如果出现"All checks have passed"就是成功

**再去GitHub上被我们fork过的仓库里，如果出现"All checks have passed"就是成功**

# 写文章

- 先使用git rm删除博客原主人的文章
```yaml
git rm _posts\*
```

> Tips：如果发现你不小心删除了"_posts"一整个文件夹，不要悲伤，不要心急，再建一个_posts文件夹，美好的日子总会来临

- 然后，我们需要将对应的markdown文件放在"_post"文件夹内

```
命名格式：
<年>-<月>-<日>-<随便命名>.md
```
**这里恭喜你，你创建了你的第一篇文章。**

- 但还没完，你需要在你的文章开头加入以下YAML字段

```yaml
layout:     post   #使用的布局（不需要改）
title:      驳斥唯物主义的医学？对迈克尔·埃格诺（Michael Egnor）反驳的解读 #标题 
subtitle:   教授的逻辑有问题啊！ #副标题
date:       2026-02-19	#时间
author:     mxkkkk 	#作者（替换为你的名字）
catalog: true 	# 是否归档，一般填是
tags: #标签，随便加
    - 医学
```


这里你定义了这篇文章的信息，对应的就是我们看到的以下字段

![](https://pic4.zhimg.com/v2-508816aad3c527b755db011aed780e1d_r.jpg)

- 正文，按照正常的markdown格式写。markdown的教程可见[Markdown 教程 菜鸟教程](https://www.runoob.com/markdown/md-tutorial.html)
- 请注意，如果你图片/链接使用的是相对路径，建议替换为绝对路径

```
比如将 ![image](./image/1.png) 替换为 ![image](<用户名>.github.io/_posts/image/1.png)，超链接同理
```

- 当然你也可以使用图床。大家可以移步至[2025 年，我们还有哪些免费图床可用？（长期更新）](https://www.cnblogs.com/dogma/articles/18859212)选择自己喜欢的图床
- 按照前文教的教程提交更改即可

# 更改About页面

- 找到`_includes/about/zh.md`文件。使用markdown修改其内容

就比如说这是我的`_includes/about/zh.md`文件

```markdown
Hey，我是mxkkkk（知乎新号用名maxkk26），是一个喜欢较真的略懂前端和对C++几乎一窍不通的有志青年。

本人了解（均为略懂，一窍不通）领域
- 医学 [驳斥唯物主义的医学？对迈克尔·埃格诺（Michael Egnor）反驳的解读](https://zhuanlan.zhihu.com/p/2007912411403928235)
- 性学 & 犯罪 [社会舆论为何更聚焦诬告而非真实存在的性侵隐案？](https://www.zhihu.com/question/2004147744298776153/answer/2005365142850926552)
- 计算机 ~~（哈哈我好像还没写过相关回答）~~

本人有以下账号
- [哔哩哔哩](https://space.bilibili.com/1344687531)
- ~~抖音~~（已注销）
- [知乎](https://zhihu.com/people/43fxma)
- [微博](https://weibo.com/u/7263553536)

**一起进步，加油叭**
```

- 找到仓库根目录下`about.html`文件，可以通过修改`description` 字段更改About页面的副标题

比如这是我的`about.html`

```yaml
---
layout: page
title: "About"
description: "「他只是要说实话」"
header-img: "img/bg-me-2022.jpg"
header-mask: 0.3
multilingual: true
---
```

最终效果图

![](https://pica.zhimg.com/v2-2dbbc7270aab058a4a28e01f7bc139cc_r.jpg)

# 常见问题解答

## Q1:我的博客为什么是404

请检查：

- fork的时候是否将repo的名字修改为<你的用户名>.github.io
- 点击“Settings” ，找到“Pages”

![img](https://pic4.zhimg.com/v2-7f683bafcb5e7b6f5c717557007adf31_r.jpg)

![img](https://pica.zhimg.com/v2-57f72df0b212fd38a6e4addee6fd8838_1440w.jpg)

![img](https://pic3.zhimg.com/v2-0b3d3bddc9feaf1ec3a8fe791f277036_1440w.jpg)

### Q2：我提交了更改，但是狂按F5刷新也没看见页面有何变化？

- GitHub+Jekyll搭建的博客比较特殊，页面**可以离线观看。**（这是优点）缺点是，如果你提交了更改，按F5刷新有时无效（一般要多次刷新）
- 但是Jekyll页面会自动检测网页是否有更新，检测到更新，左下角会有提示“Content updated”，点击REFRESH按钮即可刷新
- 还有一招，清除浏览器缓存即可

![img](https://pic1.zhimg.com/v2-0792ae9f83139e72f653beb7f2767134_1440w.jpg)

### Q3: GitHub无法访问怎么办？

- [Watt Toolkit](https://link.zhihu.com/?target=https%3A//steampp.net/)工具可以助我们访问GitHub
- 还有一个开源的小工具[FastGithub](https://link.zhihu.com/?target=https%3A//gitee.com/XingYuan55/FastGithub)，加速效果也不错

## THE END!

不写BUGs，开始写博客了是叭~


> 该文转自[我在知乎发表的文章](https://zhuanlan.zhihu.com/p/2008645472877836103)