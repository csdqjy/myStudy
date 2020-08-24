# slot 插槽 
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


