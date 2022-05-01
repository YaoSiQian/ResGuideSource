(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{420:function(t,a,s){"use strict";s.r(a);var n=s(56),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"猫猫-生存模式物品栏"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#猫猫-生存模式物品栏"}},[t._v("#")]),t._v(" 猫猫——生存模式物品栏")]),t._v(" "),s("p",[t._v("这次我们要实现如下效果：")]),t._v(" "),s("iframe",{attrs:{src:"//player.bilibili.com/player.html?bvid=BV1WK411H7o4&page=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true",width:"650",height:"450"}}),s("p",[t._v("和一般的动态纹理没多少区别，首先，都要逐帧制作动画，拼接成一个长条胶卷：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.loli.net/2020/07/28/PQT1yerzMc3VwdD.png",alt:"image-20200714191628590"}})]),t._v(" "),s("p",[t._v("然后在optifine文件夹下新建一个名为anim的文件夹，将做好的纹理放进去。")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("1.13之前anim文件夹应该放在mcpatcher文件夹下。")])]),t._v(" "),s("p",[t._v("新建一个properties文件，为了方便辨识，我将其取名为inventory.properties:")]),t._v(" "),s("p",[s("strong",[t._v("inventory.properties")])]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# form是动态纹理的文件路径")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("from")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("./inventory_anim.png")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# to是将动态纹理用于哪张图片，我将这张图片称为目标纹理。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# form和to连起来就是，将inventory_anim.png作为inventory.png的动态纹理。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 当游戏显示inventory.png时，其部分区域会变成inventory_anim.png的动态纹理。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 注意，只是部分区域，和普通的动态纹理不同，optifine的动态纹理不是将整张图片动态化，而是将某个区域动态化。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 一张很大的图片，也可以动态化它的一个小区域。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("to")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("textures/gui/container/inventory.png")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 动态化区域是目标纹理的一个长方形区域，它的左上角称为动态化区域的原点，x和y是原点在目标纹理中的坐标。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("x")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("y")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# w和h是动态化区域的长和宽。这个尺寸要和动态纹理的一帧的尺寸吻合。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("w")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("256")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("h")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("256")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# duration是每帧的持续时长，相当于原版动态纹理的frametime。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("duration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("2")]),t._v("\n")])])]),s("p",[t._v("如果对图片的坐标不太理解，我简单解释一下，png图片最左上方的点坐标为(0,0)，如果图片的尺寸是16×16，那最右下方的点的坐标为(15,15)。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.loli.net/2020/07/28/cIzAo35ufqJBKUE.png",alt:"image-20200714193642457"}})]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("一件非常怪异的事是，似乎必须把目标纹理放在资源包内，optifine才会识别出目标纹理。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.loli.net/2020/07/28/9BJRtfaOF7kH8GM.png",alt:"image-20200714202330498"}})]),t._v(" "),s("p",[t._v("上图说的“长啥样并不影响结果”并不准确，它的分辨率必须得和属性文件里的保持一致。")]),t._v(" "),s("p",[t._v("我猜测这样做是为了防止单打独斗的动态纹理覆盖到分辨率和画风完全不同的资源包上而出现非常离谱的画面，于是强制资源包作者放上一张纹理。")])]),t._v(" "),s("p",[t._v("进入游戏看看效果，效果是很好的：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.loli.net/2020/07/28/zUNB1FHRPbL79yI.png",alt:"image-20200714193844702"}})]),t._v(" "),s("p",[t._v("既然这张纹理的动态化区域实际上只有右上方的流水和右下角的猫猫，那么我们就可以压缩一下动态纹理占用的空间。用某一帧覆盖掉原先的GUI，然后用两个属性文件分别将两段小的动态纹理贴到GUI上。")]),t._v(" "),s("p",[t._v("在aseprite里，分割动态纹理的某个区域的方式是调整画布大小，将画布外的给剔除掉，得到的就是裁切后的动态纹理了，然后导出动画的每一帧，拼接成一张小的长条形图片。"),s("img",{attrs:{src:"https://i.loli.net/2020/07/28/P6rjNexSiwnOuCB.png",alt:"image-20200714194848832"}})]),t._v(" "),s("p",[t._v("由于比较枯燥，我就不详细演示了。")]),t._v(" "),s("p",[t._v("还有一个测试出来的情报就是，动态纹理不是覆盖在动态区域上，而是直接将动态区域给替换了：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.loli.net/2020/07/28/vYw2PXFi5lSUMfx.png",alt:"image-20200714204444459"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);