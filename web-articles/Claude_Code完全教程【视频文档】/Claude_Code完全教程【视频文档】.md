# Claude Code完全教程【视频文档】
> 原文链接: https://my.feishu.cn/wiki/Takxwov60iO5OOkOmpEcpOGynac

---

header-v2

Claude Code完全教程【视频文档】

Last updated: May 13

Log In or Sign Up

-   [Claude Code完全教程【视频文档】](#OB5jdvosboyaHXxojklcwDMpnQb)
-   [一、初步上手](#doxcngVQ9k2qpxI1e8Gxl5pMdxg)
-   [1\. 部署前准备](#doxcnQIgssuFCk7Lygxuy1cvR8d)
-   [2\. 安装Claude Code](#doxcnk3EDWqncLWk2KCRiIuViGe)
-   [方式 1：终端命令行安装（需魔法上网）](#doxcnTxH158nGJHmsPTW7FGBmZc)
-   [Windows：](#doxcnXpBRlAPExxDMB1bNz9IV3d)
-   [macOS：](#doxcnd2AhnPZ4Pq4Z61dhzf2uVe)
-   [方式 2：Agent原生安装（需魔法上网）](#doxcnzju4v8pGrjayi2uxP4jvog)
-   [方式 3：无魔法安装Claude code](#doxcnn5DCH6BbXBA1petXHC8nyf)
-   [Windows：](#ASv3d1xLYoLto4xLvVecYLNEnNf)
-   [macOS：](#doxcnjDVb1ukHzU0zfvJthUPK3c)
-   [3\. 配置大模型](#doxcnVOi2L20Of476uoUsZh3uvg)
-   [4\. 基础实操](#doxcnp3RbhkmRd8jnPDM6ew2Djb)
-   [5\. 如何提供文件给CC](#doxcn7Lb3yEuogb3fbSHwN95qif)
-   [方式 1：本地文件](#doxcnFS2VgYHv9gBVfzeLluQ56c)
-   [方式 2：图片](#doxcnLJ0sAfpYiZ6wfDDHxmRDQe)
-   [方式 3：多行文本输入](#doxcnydvdQxGOYUUhJwihcuELy1)
-   [6\. 指令大全](#doxcniP2aKkk5zUyE90ZYlEaR1f)
-   [二、掌控与管理](#doxcnMCAgMU0PTB58wLoTGh9OP3)
-   [1\. Git下载与设置](#doxcnoHWSkGc5mkDkFstXfn7lXc)
-   [2.上下文管理](#doxcnsLZur0pf5EGqxNKnjdSpJe)
-   [三、个性化](#doxcng6Cau2ngAqEsebqYv2uP2d)
-   [1\. Claude.md 配置](#doxcnBvOntsSSZIz4UIbZfIkPtf)
-   [2\. Auto Memory](#doxcnAX76CRcqNWIaOLjf1fyFCe)
-   [四、能力扩展](#doxcnD2YHFApKjFbQVFZu4lMZic)
-   [1\. Skill 技能扩展](#doxcn5QI67RLMfaTqpIjadvd0Ef)
-   [2\. MCP 扩展](#doxcnd7dxp9cEge36YQIFDbe7uN)
-   [3\. CLI 命令行工具](#doxcn3GaL4mH3GZ0CJrCBQv6zTb)
-   [4\. 子Agent（SubAgent）](#doxcn1rRcSzKI787YWFiCbL8iZB)
-   [5\. Hook 钩子](#doxcnw8mnn6H21Q9bdvotkLwKgd)
-   [6\. 插件（Plugin）](#doxcn0gYULNhs0Mf1qGLZcxhRCq)

#

Claude Code完全教程【视频文档】​

Modified May 13

一、初步上手​

1\. 部署前准备​

首先需要下载和安装一个 Agent IDE（智能体集成开发环境）。​

推荐使用以下免费IDE，无需购买会员，使用免费额度即可完成后续CC部署：​

​

<table class="sticky-row-wrapper" style="border-spacing: 0px;"><tbody><tr class="row--100011 sticky-row first-row" data-index="0" style="--scroll-left: -0px; grid-template-columns: 236px 236px;"><td data-block-type="table_cell" data-block-id="7" data-record-id="doxcneW87VvrXdA57ZCq6iXi5dc" rowspan="1" colspan="1" data-cell-select="true" contenteditable="false" class="block docx-table_cell-block table-cell-block table-cell-block-host cell-7 table-cell-content-wrapper sticky-cell-vertical-align-polyfill" style="justify-content: center;"><div class="docx-block-zero-space"><span data-zero-space="true">​</span></div><div class="render-unit-wrapper"><div class="block docx-text-block" data-block-type="text" data-block-id="162" data-record-id="doxcn3hsRzGcgjf3Mb1E794qUtd"><div class="text-block-wrapper"><div class="text-block"><div class="zone-container text-editor hide-placeholder non-empty" data-zone-id="162" data-zone-container="*" data-slate-editor="true" contenteditable="false" style="text-align: center;"><div class="ace-line" data-node="true" dir="auto"><span data-string="true" style="font-weight:bold;" class=" author-7469640934045515795" data-leaf="true">Agent IDE</span><span data-string="true" data-enter="true" data-leaf="true">​</span></div></div></div></div></div></div><div class="docx-block-zero-space"><span data-zero-space="true">​</span></div></td><td data-block-type="table_cell" data-block-id="8" data-record-id="doxcnCpuHR70HNgNyRBMzB7nPWc" rowspan="1" colspan="1" data-cell-select="true" contenteditable="false" class="block docx-table_cell-block table-cell-block table-cell-block-host cell-8 table-cell-content-wrapper sticky-cell-vertical-align-polyfill" style="justify-content: center;"><div class="docx-block-zero-space"><span data-zero-space="true">​</span></div><div class="render-unit-wrapper"><div class="block docx-text-block" data-block-type="text" data-block-id="161" data-record-id="doxcnIRgOvyvUNKGHE0OaAF6nFc"><div class="text-block-wrapper"><div class="text-block"><div class="zone-container text-editor hide-placeholder non-empty" data-zone-id="161" data-zone-container="*" data-slate-editor="true" contenteditable="false" style="text-align: center;"><div class="ace-line" data-node="true" dir="auto"><span data-string="true" style="font-weight:bold;" class=" author-7469640934045515795" data-leaf="true">下载地址</span><span data-string="true" data-enter="true" data-leaf="true">​</span></div></div></div></div></div></div><div class="docx-block-zero-space"><span data-zero-space="true">​</span></div></td></tr></tbody></table>

<table class="table header-row" style="padding-top: 1px;"><colgroup><col width="236"><col width="236"></colgroup><tbody><tr class="row--100012 docx-table-tr should-hide-border-top" data-index="1"><td data-block-type="table_cell" data-block-id="9" data-record-id="doxcnPTzVwcSS6nSA3oYg9pyTjf" rowspan="1" colspan="1" data-cell-select="true" contenteditable="false" class="block docx-table_cell-block table-cell-block table-cell-block-host cell-9 table-cell-content-wrapper" style="vertical-align: middle;"><div class="docx-block-zero-space"><span data-zero-space="true">​</span></div><div class="render-unit-wrapper"><div class="block docx-text-block" data-block-type="text" data-block-id="158" data-record-id="doxcnwsm6door0vFmjG0LR0h74e"><div class="text-block-wrapper"><div class="text-block"><div class="zone-container text-editor hide-placeholder non-empty" data-zone-id="158" data-zone-container="*" data-slate-editor="true" contenteditable="false" style="text-align: center;"><div class="ace-line" data-node="true" dir="auto"><span data-string="true" class=" author-7469640934045515795" data-leaf="true">Cursor</span><span data-string="true" data-enter="true" data-leaf="true">​</span></div></div></div></div></div></div><div class="docx-block-zero-space"><span data-zero-space="true">​</span></div></td><td data-block-type="table_cell" data-block-id="10" data-record-id="doxcnhWOZ5E925paBDmNXleFOqd" rowspan="1" colspan="1" data-cell-select="true" contenteditable="false" class="block docx-table_cell-block table-cell-block table-cell-block-host cell-10 table-cell-content-wrapper" style="vertical-align: middle;"><div class="docx-block-zero-space"><span data-zero-space="true">​</span></div><div class="render-unit-wrapper"><div class="block docx-text-block" data-block-type="text" data-block-id="157" data-record-id="doxcnwBTV76792Zs4jqYNpLoHvz"><div class="text-block-wrapper"><div class="text-block"><div class="zone-container text-editor hide-placeholder non-empty" data-zone-id="157" data-zone-container="*" data-slate-editor="true" contenteditable="false" style="text-align: center;"><div class="ace-line" data-node="true" dir="auto"><span class="outer-u-container docx-outer-link-container" data-inline-wrapper="true"><span class=" author-7469640934045515795 link-wrapper link-text-color link-start link-end link-id-157-0-0" data-leaf="true"><a style="cursor:pointer;text-decoration-skip:none;" class="link contextmenu-without-copyperm" href="https://cursor.com/cn/download" data-href="https://cursor.com/cn/download" rel="noopener noreferrer" target="_blank" data-link-node="true"><span data-string="true">官网下载</span></a></span></span><span data-string="true" data-enter="true" data-leaf="true">​</span></div></div></div></div></div></div><div class="docx-block-zero-space"><span data-zero-space="true">​</span></div></td></tr><tr class="row--100013 docx-table-tr" data-index="2"><td data-block-type="table_cell" data-block-id="11" data-record-id="doxcnhq3biCxWqcClmKaQEetL2d" rowspan="1" colspan="1" data-cell-select="true" contenteditable="false" class="block docx-table_cell-block table-cell-block table-cell-block-host cell-11 table-cell-content-wrapper" style="vertical-align: middle;"><div class="docx-block-zero-space"><span data-zero-space="true">​</span></div><div class="render-unit-wrapper"><div class="block docx-text-block" data-block-type="text" data-block-id="160" data-record-id="doxcnOo0TIChxgIs8QVSLHweDuf"><div class="text-block-wrapper"><div class="text-block"><div class="zone-container text-editor hide-placeholder non-empty" data-zone-id="160" data-zone-container="*" data-slate-editor="true" contenteditable="false" style="text-align: center;"><div class="ace-line" data-node="true" dir="auto"><span data-string="true" class=" author-7469640934045515795" data-leaf="true">Google Anti-gravity</span><span data-string="true" data-enter="true" data-leaf="true">​</span></div></div></div></div></div></div><div class="docx-block-zero-space"><span data-zero-space="true">​</span></div></td><td data-block-type="table_cell" data-block-id="12" data-record-id="doxcnW6he29rzBxF74MsiUv0vuf" rowspan="1" colspan="1" data-cell-select="true" contenteditable="false" class="block docx-table_cell-block table-cell-block table-cell-block-host cell-12 table-cell-content-wrapper" style="vertical-align: middle;"><div class="docx-block-zero-space"><span data-zero-space="true">​</span></div><div class="render-unit-wrapper"><div class="block docx-text-block" data-block-type="text" data-block-id="159" data-record-id="doxcnWX0XRqj3EHgdyMhBoKzO66"><div class="text-block-wrapper"><div class="text-block"><div class="zone-container text-editor hide-placeholder non-empty" data-zone-id="159" data-zone-container="*" data-slate-editor="true" contenteditable="false" style="text-align: center;"><div class="ace-line" data-node="true" dir="auto"><span class="outer-u-container docx-outer-link-container" data-inline-wrapper="true"><span class=" author-7469640934045515795 link-wrapper link-text-color link-start link-end link-id-159-0-0" data-leaf="true"><a style="cursor:pointer;text-decoration-skip:none;" class="link contextmenu-without-copyperm" href="https://antigravity.google/download" data-href="https://antigravity.google/download" rel="noopener noreferrer" target="_blank" data-link-node="true"><span data-string="true">官网下载</span></a></span></span><span data-string="true" data-enter="true" data-leaf="true">​</span></div></div></div></div></div></div><div class="docx-block-zero-space"><span data-zero-space="true">​</span></div></td></tr><tr class="row--100014 docx-table-tr" data-index="3"><td data-block-type="table_cell" data-block-id="13" data-record-id="doxcnwIX9RUIaQWKbwVmXQ8EBbe" rowspan="2" colspan="1" data-cell-select="true" contenteditable="false" class="block docx-table_cell-block table-cell-block table-cell-block-host cell-13 table-cell-content-wrapper" style="vertical-align: middle;"><div class="docx-block-zero-space"><span data-zero-space="true">​</span></div><div class="render-unit-wrapper"><div class="block docx-text-block" data-block-type="text" data-block-id="156" data-record-id="doxcnqHaTRfjR6315mqACtP2Zxf"><div class="text-block-wrapper"><div class="text-block"><div class="zone-container text-editor hide-placeholder non-empty" data-zone-id="156" data-zone-container="*" data-slate-editor="true" contenteditable="false" style="text-align: center;"><div class="ace-line" data-node="true" dir="auto"><span data-string="true" class=" author-7469640934045515795" data-leaf="true">Trae</span><span data-string="true" data-enter="true" data-leaf="true">​</span></div></div></div></div></div></div><div class="docx-block-zero-space"><span data-zero-space="true">​</span></div></td><td data-block-type="table_cell" data-block-id="14" data-record-id="doxcnwXQqsx2SVzRDSCyIh6BovL" rowspan="1" colspan="1" data-cell-select="true" contenteditable="false" class="block docx-table_cell-block table-cell-block table-cell-block-host cell-14 table-cell-content-wrapper" style="vertical-align: middle;"><div class="docx-block-zero-space"><span data-zero-space="true">​</span></div><div class="render-unit-wrapper"><div class="block docx-text-block" data-block-type="text" data-block-id="155" data-record-id="doxcnN3dMMBrwaA4XbRGj2abeKh"><div class="text-block-wrapper"><div class="text-block"><div class="zone-container text-editor hide-placeholder non-empty" data-zone-id="155" data-zone-container="*" data-slate-editor="true" contenteditable="false" style="text-align: center;"><div class="ace-line" data-node="true" dir="auto"><span class="outer-u-container docx-outer-link-container" data-inline-wrapper="true"><span class=" author-7469640934045515795 link-wrapper link-text-color link-start link-id-155-0-0" data-leaf="true"><a style="cursor:pointer;text-decoration-skip:none;" class="link contextmenu-without-copyperm" href="https://www.trae.cn/" data-href="https%3A%2F%2Fwww.trae.cn%2F" rel="noopener noreferrer" target="_blank" data-link-node="true"><span data-string="true">官网下载</span></a></span><span class=" author-7469640934045515795 link-wrapper link-text-color link-end link-id-155-0-0" data-leaf="true"><a style="cursor:pointer;text-decoration-skip:none;" class="link contextmenu-without-copyperm" href="https://www.trae.cn/" data-href="https%3A%2F%2Fwww.trae.cn%2F" rel="noopener noreferrer" target="_blank" data-link-node="true"><span data-string="true">（cn）</span></a></span></span><span data-string="true" data-enter="true" data-leaf="true">​</span></div></div></div></div></div></div><div class="docx-block-zero-space"><span data-zero-space="true">​</span></div></td></tr><tr class="row--100015 docx-table-tr" data-index="4"><td data-block-type="table_cell" data-block-id="15" data-record-id="doxcn4Ahzda0SYhdwUSjSkSf14g" rowspan="1" colspan="1" data-cell-select="true" contenteditable="false" class="block docx-table_cell-block table-cell-block table-cell-block-host cell-15 table-cell-content-wrapper" style="display: none;"><div class="docx-block-zero-space"><span data-zero-space="true">​</span></div><div class="render-unit-wrapper" style=""><div class="block docx-text-block isEmpty" data-block-type="text" data-block-id="164" data-record-id="doxcnEuTQEkemk3kTWluvlXJKFC"><div class="text-block-wrapper"><div class="text-block"><div class="zone-container text-editor hide-placeholder" data-zone-id="164" data-zone-container="*" data-slate-editor="true" contenteditable="false" style="text-align: center;"><div class="ace-line" data-node="true" dir="auto"><span data-string="true" data-enter="true" data-leaf="true">​</span></div></div></div></div></div></div><div class="docx-block-zero-space"><span data-zero-space="true">​</span></div></td><td data-block-type="table_cell" data-block-id="16" data-record-id="doxcnnoZStUMzxHoxD36RyzuGFd" rowspan="1" colspan="1" data-cell-select="true" contenteditable="false" class="block docx-table_cell-block table-cell-block table-cell-block-host cell-16 table-cell-content-wrapper"><div class="docx-block-zero-space"><span data-zero-space="true">​</span></div><div class="render-unit-wrapper"><div class="block docx-text-block" data-block-type="text" data-block-id="163" data-record-id="doxcnTuDsl3ZESJ0N9xoVP53oLB"><div class="text-block-wrapper"><div class="text-block"><div class="zone-container text-editor hide-placeholder non-empty" data-zone-id="163" data-zone-container="*" data-slate-editor="true" contenteditable="false" style="text-align: center;"><div class="ace-line" data-node="true" dir="auto"><span class="outer-u-container docx-outer-link-container" data-inline-wrapper="true"><span class=" author-7469640934045515795 link-wrapper link-text-color link-start link-end link-id-163-0-0" data-leaf="true"><a style="cursor:pointer;text-decoration-skip:none;" class="link contextmenu-without-copyperm" href="https://www.trae.ai/" data-href="https%3A%2F%2Fwww.trae.ai%2F" rel="noopener noreferrer" target="_blank" data-link-node="true"><span data-string="true">官网下载（en）</span></a></span></span><span data-string="true" data-enter="true" data-leaf="true">​</span></div></div></div></div></div></div><div class="docx-block-zero-space"><span data-zero-space="true">​</span></div></td></tr></tbody></table>

​

以 Cursor 为例，下载进入后，可以构建如图的开发环境布局：​

​

![Feishu Docs - Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/v2/cover/SbzrblahWoSQaIxlOfKcgf2Nn6c/?fallback_source=1&height=1280&mount_node_token=doxcnEKvkKXWBZWwKw3cxLv4T8f&mount_point=docx_image&policy=equal&width=1280)

​

## 来自 iframe: https://my.feishu.cn/wiki/Takxwov60iO5OOkOmpEcpOGynac

Comments (0)

Go to the first comment

0 words