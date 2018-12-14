# writing-mode-test

利用CSS属性`writing-mode`的布局实验。

## content-fixed-height-vertical-split.html
- 内容高度固定，垂直平分高度。IE中出现问题，默认情况下布局用div无法在横向100%宽度，测试后发现是滚动条占用了宽度。需要滚动条时无问题，不需要滚动条时需要隐藏。

- IE11模拟的IE8用JavaScript添加新div布局不能正常显示，但是页面中已有的会正常渲染。

[点击查看](content-fixed-height-vertical-split.html)

## normal-vertical-split.html
- 普通垂直平分高度，IE中布局用td需要手动指定100%宽度，否则不自动占满滚动条宽度。

- IE11模拟的IE8用JavaScript添加新div布局不能正常显示，但是页面中已有的会正常渲染。

[点击查看](normal-vertical-split.html)
