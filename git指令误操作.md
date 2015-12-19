# git指令误操作
## 2015.12.18

不小心输入git commit -a而不是git commit -am "My commit message"，现在的cmd提示充满了我的（“请输入你的......”）的文件版本。我已经添加了顶端，但是现在我无法弄清楚如何保存并退出。我试着按CTRL+W+Q，但它不会做任何事情，但增加^光标所在。我也试过esc键，然后再Ctrl+W +Q，但它说，No write since last change (add ! to override)。

### 解决办法：
- 按ESC键，以确保您不在编辑模式，然后键入 :wq
- Esc键以确保您退出插入模式，然后:wq（冒号W Q）或ZZ（按住Shift Z偏移-Z）。 
- :q!将强制无条件不保存退出