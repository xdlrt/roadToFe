# css-sprite简单实现
## 2015.11.21

> CSS-sprite的基本原理是把网站上用到的一些图片整合到一张单独的图片中，从而减少网站的HTTP请求数量。该图片使用CSS的background和background-position属性渲染，图片是在CSS中定义，而非<img>标签。

> ### 缺点：
> - **影响浏览器的缩放功能**
> 
> 如果一个使用CSS雪碧的页面使用一些浏览器提供的整页缩放功能缩放了，浏览器就需要做一些额外的工作来纠正这些图片边缘的行为——基本上来说，是为了避免雪碧中相邻的图片被“露进来”。这对于小图片没有什么问题，但是对于大图片会是一个性能下降。
> 
> - **拼图维护比较麻烦**
> 
> 拼合这么多图片，需要耐心。同时还要时刻思考如何在使用这个图片是不会产生相互的影响。将又瘦又高的图片和又宽又矮的图片放到一起时，不容易操作。如果要修改雪碧中的一个图片，你就要修改整张图片，这无疑会增大工作量。

示例：css-sprite.html
登录界面中登录和注册按钮的实现。

**tips:**
- 坐标轴相当于第四象限那部分
- checkbox和label垂直方向上不对齐可设置`vertical-align：middle`来解决