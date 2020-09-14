## 自定义属性
1. Html5规范中规定自定义属性需要添加前缀data-,目的是提供与渲染无关的信息。
2. 使用getAttribute()方法以及setAttribute()方法操作自定义属性。
3. HTMLElement.dataset属性允许无论是在读取模式和写入模式下访问在 HTML或 DOM中的元素上设置的所有自定义数据属性(data-*)集。

##  HTML5 meta viewport属性说明

一个常用的针对移动网页优化过的页面的 viewport meta 标签大致如下：

```html
<meta name=”viewport” content=”width=device-width, initial-scale=1, maximum-scale=1″>
```
### content属性
>width：控制 viewport 的大小，可以指定的一个值，如果 600，或者特殊的值，如 device-width 为设备的宽度（单位为缩放为 100% 时的 CSS 的像素）。
>height：和 width 相对应，指定高度。
>initial-scale：初始缩放比例，也即是当页面第一次 load 的时候缩放比例。
>maximum-scale：允许用户缩放到的最大比例。
>minimum-scale：允许用户缩放到的最小比例。
>user-scalable：用户是否可以手动缩放