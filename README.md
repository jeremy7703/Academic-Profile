# 🎓 个人学术主页模板 (Personal Academic Homepage)

本主页参照 [yimingli-page.github.io](https://yimingli-page.github.io/) 风格设计，具备响应式布局、学术论文交互筛选、深色/浅色主题一键切换、招聘/公告高亮框以及完整的 GitHub Pages 无缝上线配置。

---

## 📁 目录结构 (Directory Structure)

```text
personal_page/
├── index.html            # 主页面（包含个人简介、研究方向、论文列表、动态等）
├── style.css             # 样式文件（支持浅色/深色主题、CSS变量与响应式适配）
├── script.js             # 交互脚本（主题切换、论文标签筛选、BibTeX展开、滚动高亮）
├── assets/
│   └── images/           # 图片资源库
│       ├── profile.png   # 个人头像图片
│       ├── paper1.jpg    # 论文 1 预览图
│       ├── paper2.jpg    # 论文 2 预览图
│       └── paper3.jpg    # 论文 3 预览图
└── README.md             # 本说明文档
```

---

## 🛠️ 本地预览 (Local Preview)

你可以随时在本地启动简单的 Web 服务器来预览网页：

```bash
cd /home/rsjong/personal_page
python3 -m http.server 8000
```
启动后在浏览器访问 `http://localhost:8000` 即可实时预览。

---

## ✏️ 如何修改内容 (How to Edit Content)

### 1. 修改头像与论文图片
直接将你自己的图片放置在 `assets/images/` 目录下：
- 将你的个人照片重命名为 `profile.png` 替换原图（推荐比例 1:1 正方形或 4:5 肖像图）。
- 将你的论文 Teaser 成果图替换 `paper1.jpg`, `paper2.jpg` 等。

### 2. 修改文本与个人信息 (`index.html`)
打开 `index.html`，搜索并修改以下关键词：
- **姓名与头衔**：全局搜索 `YOUR NAME` 和 `Your Name` 替换为你自己的名字。
- **联系邮箱与社交链接**：
  - 搜索 `your_email` 替换为你的邮箱。
  - 替换 Google Scholar, GitHub, Twitter/X, LinkedIn, 小红书, CV PDF 等链接地址（若某个链接不需要，直接删除对应的 `<a class="btn-social">` 即可）。
- **About Me 简介**：修改 `<section id="about">` 中的个人背景描述。
- **招募与公告框**：修改 `.announcement-box` 中的招生/工作变动/博后招聘信息。
- **研究方向 (Research Thrusts)**：修改 3 大 Thrust 卡片的标题、描述与标签。
- **论文列表 (Publications)**：
  - 在 `.pub-list` 中复制/修改 `.pub-item` 块。
  - 修改论文标题、作者列表（你的名字保留 `<span class="me">你的名字</span>` 标签实现自动高亮）。
  - 修改 `CVPR 2025`, `Oral` 等 Badge 标签以及 `[Paper]`, `[Code]` 链接。
  - 修改 `bib1`, `bib2` 对应的 BibTeX 引用内容。

---

## 🚀 如何上线发布到 GitHub Pages (Deployment Guide)

部署到 GitHub Pages 完全免费，无需复杂的构建命令（Zero Build Step），只需 1 分钟：

### 方法 A：通过 Git 命令行部署 (推荐)

1. 在 GitHub 上新建一个公开仓库（Repository），仓库名为 `你的github用户名.github.io`（例如 `rsjong.github.io`）。
2. 在本地终端运行以下命令进行关联并提交代码：

```bash
cd /home/rsjong/personal_page
git init
git add .
git commit -m "Initial commit of my personal website"
git branch -M main
git remote add origin https://github.com/你的github用户名/你的github用户名.github.io.git
git push -u origin main
```

3. 提交完成后，GitHub Pages 会自动识别 `index.html` 并上线你的网页。几分钟后即可在浏览器访问：
   `https://你的github用户名.github.io/`

---

### 方法 B：新建子项目页面 (例如 personal-page)
如果你想把网站部署在 `https://你的github用户名.github.io/personal-page/` 路径下：
1. 在 GitHub 新建名为 `personal-page` 的仓库并 push 代码。
2. 进入 GitHub 仓库设置 `Settings` -> `Pages`。
3. 在 **Source** 下选择 `Deploy from a branch` -> `main` 分支 -> `/(root)` 文件夹，点击 **Save** 保存即可！
