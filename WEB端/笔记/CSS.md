## BFC

# background

## linear-gradient 线性渐变

### 语法

background-image: linear-gradient(direction, color-stop1, color-stop2, ...);

- direction 用角度值指定渐变的方向（或角度）。
  - to right
  - to bottom right
- color-stop1, color-stop2,... 用于指定渐变的起止颜色。

> repeating-linear-gradient()函数用于重复线性渐变

## radial-gradient 径向渐变

### 语法

background-image: radial-gradient(shape size at position, start-color, ..., last-color);

shape : 确定圆的类型，可能值：

- ellipse (默认): 指定椭圆形的径向渐变。
- circle ：指定圆形的径向渐变

size : 定义渐变的大小，可能值：

- farthest-corner (默认) : 指定径向渐变的半径长度为从圆心到离圆心最远的角
- closest-side ：指定径向渐变的半径长度为从圆心到离圆心最近的边
- closest-corner ： 指定径向渐变的半径长度为从圆心到离圆心最近的角
- farthest-side ：指定径向渐变的半径长度为从圆心到离圆心最远的边

position : 定义渐变的位置。可能值：

- center（默认）：设置中间为径向渐变圆心的纵坐标值。
- top：设置顶部为径向渐变圆心的纵坐标值。
- bottom：设置底部为径向渐变圆心的纵坐标值。

repeating-radial-gradient() 函数用于重复径向渐变

## conic-gradient 锥形渐变

### 语法

background-image: conic-gradient( [ from <angle> ]? [ at <position> ]?, <angular-color-stop-list> )

- from：起始角度
- at：中心位置
- 角渐变断点

  例如

```css
background-image: conic-gradient(from 45deg at 25% 25%, white, bleck);
```

# text

## text-emphasis

### 介绍

text-emphasis 可以对文字进行强调修饰，他共有四个属性，分别是：

- text-emphasis
- text-emphasis-color
- text-emphasis-style
- text-emphasis-position
  其中 text-emphasis 是 text-emphasis-color 和 text-emphasis-style 这两个属性的缩写

### 使用

1. text-emphasis-color
   就是改变文字颜色的，例如：

```css
.box {
  text-emphasis-color: #fff;
}
```

2. text-emphasis-style
   主要包含：

   text-emphasis-style: none
   text-emphasis-style: [ filled | open ] || [ dot | circle | double-circle | triangle | sesame ]
   text-emphasis-style: <string>

   text-emphasis-style 内置了几个装饰符，他们是 dot（点）、circle（圆）、double-circle（双层圆）、triangle（三角）、sesame（芝麻点）。
   每一种装饰符都有实心和空心两种字符，是通过 filled 和 open 这两个关键字决定的。
   例如：

```css
/* 实心的圆点 */
text-emphasis: filled dot;
/* 空心的圆点 */
text-emphasis: open dot;
```
