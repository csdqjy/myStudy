## $router 和 $route 的区别
$router：Vue全局的router对象，包含了push等方法
$route：当前要跳转的路由对象，有name，path，params，query等属性


## slot 插槽 
用法
```javascript
<father>
    <son>
        .....
    </son>
</father>

<son>
    <slot><slot>
</son>
```
父组件中写入子组件的内容会被替代到slot上，例如：
```javascript
<father>
    <son>
        <span>子组件</span>
    </son>
</father>

<son>
    <slot><slot>
</son>
```
最后会类似于这样
```javascript
<father>
    <son>
        
    </son>
</father>

<son>
    <span>子组件</span>
</son>
```


