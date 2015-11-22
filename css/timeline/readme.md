# 纯css时间轴效果
## 2015.11.18

最近做一个小项目，需要用到时间轴效果，搜索后得到的结果大多是jquery封装好的插件，显得有些臃肿。自己在查询过一些资料后，就萌生了用纯css写一个简单的时间轴的想法。

实现思路是利用无序列表来顺序排布。

### html结构：

		<ul class = "timeline">
		<li>
			<div class = "time" id = "time"></div>
			<div class = "round"></div>
			<div class = "content">
				<p></p>
			</div>
		</li>
		</ul>
### 时间轴竖线：
**通过一个小像素块在y轴重复实现成线**

		.timeline{
			background: url(1.png) repeat-y scroll 10% 0;
			margin-top: 5%;
		}
### 小圆点的定位：

		.timeline li{
			position: relative;
		}	
		.round{
			position: absolute;
			width: 30px;
			height: 30px;
			background: url(4.png) no-repeat scroll 0 0;
			left: 10%;
			/*margin-left=-(width/2-timeline.width/2)*/
			margin-left: -10px;
		}

### 时间的定位：

		.timeline li{
			position: relative;
		}
		.time{
			position: absolute;
			font-size: 0.5em;
			left: 10%;
			margin-left: -65px;
			top:20px;
			color: #a3a3a3;
		}

### 自适应处理：

		@media(max-width: 640px){
			#time{
				position: absolute;
				left: 73px;
				top:29px;
				color: black;
			}
		}

### tips：

		word-warp:break-word;
		//用来标明是否允许浏览器在单词内进行断句，这是为了防止当一个字符串太长而找不到它的自然断句点时产生溢出现象。

		word-break:break-all;
		//css的 word-break 属性用来标明怎么样进行单词内的断句,避免浪费空间。