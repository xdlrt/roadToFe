# 信息弹出层效果
## 2015.11.19

> 结构为最外层div包裹两个子div。
> **div.mask_transparent是为了禁用弹出层弹出后页面上元素。**
> div.the_toast是弹出层主题，包含一个用于显示符号的span标签和一个显示提示文字的p标签。

> 初始状态下最外层div的display属性应为none，为了便于演示不做设置。

### html源码：

		<div id="toast">
	    	<div class="mask_transparent"></div>
	    	<div class="the_toast">
	       		<span class="icon_toast"></span>
	        	<p class="toast_content">已完成</p>
	    	</div>
		</div>

### css源码：
		
		.mask_transparent {
			position: fixed;
			/*设置层次顺序，处于最下层*/
			z-index: 1;
			/*覆盖整个父级div*/
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			background: #000;
			/*设置背景透明度*/
			opacity: 0.5;
		}
		.the_toast {
			position: fixed;
			/*设置层次顺序，处于遮罩层上*/
			z-index: 2;
			top: 180px;
			/*水平居中*/
			width: 7.6em;
			min-height: 7.6em;
			left: 50%;
			margin-left: -3.8em;
			background: rgba(40, 40, 40, 0.75);
			text-align: center;
			border-radius: 5px;
			color: #FFFFFF;
		}
		.icon_toast {
			display: block;
			margin: 22px 0 0;
		}
		/*伪元素添加对号，此处无文字::before,::after均可*/
		.icon_toast::before {
			/*对号字符*/
			content: '\2714';
			color: #FFFFFF;
			/*设置字符大小*/
			font-size: 55px;
		}
		.toast_content {
			margin: 0 0 15px;
			font-size: 15px;
		}