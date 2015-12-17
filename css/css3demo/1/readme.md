# css3demo
## 2015.12.17

Transition 强调过渡，Transition ＋ Transform ＝ 两个关键帧的AnimationAnimation 强调流程与控制，Duration ＋ TransformLib ＋ Control ＝ 多个关键帧的Animation如果只有两个关键帧我会选择Transition ＋ Transform复杂动画就要考虑把变换写成TranformLib以Class方式调用，Control与Duration写到AppClass说明：Transform指所有CSS属性变换，TransformLib指所有Animate创建的变换，Control包括动画次数，关键帧与时间的设定等。著名的Animate.css就是把过渡，变换，控制三个分离，构成可以复用动画库。我刚开始也很郁闷，为什么要搞两个动画属性。其实是有区别的，至于两种属性有功能重叠的部分就根据喜好来选择啦。

animation: name duration timing-function delay iteration-count direction;