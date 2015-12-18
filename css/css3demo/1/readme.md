# css3demo
## 2015.12.17

> Transition 强调过渡，Transition ＋ Transform ＝ 两个关键帧的。
> AnimationAnimation 强调流程与控制，Duration ＋ TransformLib ＋ Control ＝ 多个关键帧的Animation。
> 如果只有两个关键帧我会选择Transition ＋ Transform。
> 复杂动画就要考虑把变换写成TranformLib以Class方式调用，Control与Duration写到AppClass。
> 说明：Transform指所有CSS属性变换，TransformLib指所有Animate创建的变换，Control包括动画次数，关键帧与时间的设定等。著名的Animate.css就是把过渡，变换，控制三个分离，构成可以复用动画库。

### animation: name duration timing-function delay iteration-count direction;
动画属性合写：名称 花费时间 速度曲线 开始延迟时间 播放次数 是否逆向播放

- **@keyframes**	
规定动画
- **animation**	
所有动画属性的简写属性，除了 animation-play-state 属性。	
- **animation-name**	
规定 @keyframes 动画的名称。
- **animation-duration**	
规定动画完成一个周期所花费的秒或毫秒。默认是 0。
- **animation-timing-function**
规定动画的速度曲线。默认是 "ease"。
 - **linear**	动画从头到尾的速度是相同的。
 - **ease**  默认。动画以低速开始，然后加快，在结束前变慢。
 - **ease-in**	动画以低速开始。
 - **ease-out**	动画以低速结束。
 - **ease-in-out**	动画以低速开始和结束。
 - **cubic-bezier(n,n,n,n)**在 cubic-bezier 函数中自己的值。可能的值是从 0 到 1 的数值。
- **animation-delay**
规定动画何时开始。默认是 0。
- **animation-iteration-count**
规定动画被播放的次数。默认是 1。
 - **n**	定义动画播放次数的数值。
 - **infinite**	规定动画应该无限次播放。
- **animation-direction**
规定动画是否在下一周期逆向地播放。默认是 "normal"。
 - **normal**	默认值。动画应该正常播放。
 - **alternate**	动画应该轮流反向播放。
- **animation-play-state**
规定动画是否正在运行或暂停。默认是 "running"。
- **animation-fill-mode**
规定对象动画时间之外的状态。
 - **none**	不改变默认行为。
 - **forwards**	当动画完成后，保持最后一个属性值（在最后一个关键帧中定义）。
 - **backwards**	在 animation-delay 所指定的一段时间内，在动画显示之前，应用开始属性值（在第一个关键帧中定义）。
 - **both**	向前和向后填充模式都被应用。

## demo
项目之余做一些css3的简单小效果。

四行文字都有渐显渐隐效果，通过设置opacity的动画效果来实现。

第一个2d移动效果，利用tansform中的tanslate实现。

第二个2d旋转效果，利用transform中的rotate实现。

第三个3d旋转效果，利用transform中的rotateY实现。

第四个放大效果，利用transform中的scale实现。

整体效果为四句歌词的显示效果，配以一张背景图。

html:

		<div class="container">
			<span class = "text text1">夜把心洋葱般剥落</span>
			<span class = "text text2">拿掉防卫剩下什么</span>
			<span class = "text text3">为什么脆弱时候</span>
			<span class = "text text4">想你更多</span>
		</div>

css:

		.text{
			position: absolute;
			opacity: 0;
		}
		.text1{
			-webkit-animation:text1 2s linear forwards;
			top: 5%;
			right: 30%;
		}
		@keyframes text1{
			0% {opacity: 0;}
			50% {
				opacity: 1;
				-webkit-transform: translate(100px,0);
			}
			100% {opacity: 0;}
		}
		.text2{
			-webkit-animation:text2 2s linear 2s forwards;
			top: 15%;
			right: 25%;
		}
		@keyframes text2{
			0% {opacity: 0;}
			50% {
				opacity: 1;
				-webkit-transform: rotate(20deg);
			}
			100% {
				opacity: 0;
				-webkit-transform: rotate(-20deg);
			}
		}
		.text3{
			-webkit-animation:text3 2s linear 4s forwards;
			top: 25%;
			right: 20%;
		}
		@keyframes text3{
			0% {opacity: 0;}
			50% {
				opacity: 1;
				-webkit-transform: rotateY(180deg);
			}
			100% {opacity: 0;}
		}
		.text4{
			-webkit-animation:text4 2s linear 6s forwards;
			top: 50%;
			margin-top: -15px;
			right: 50%;
			margin-right: -60px;
		}
		@keyframes text4{
			0% {opacity: 0;}
			50% {
				opacity: 1;
				-webkit-transform: scale(2,2);
			}
			100% {opacity: 0;}
		}