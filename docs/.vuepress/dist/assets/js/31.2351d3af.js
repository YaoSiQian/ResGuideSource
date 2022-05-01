(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{427:function(t,a,s){"use strict";s.r(a);var e=s(56),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"随机实体纹理-random-entities"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#随机实体纹理-random-entities"}},[t._v("#")]),t._v(" 随机实体纹理（Random Entities）")]),t._v(" "),s("p",[t._v("随机实体纹理的属性文件和方块CTM、物品的CIT相比，要更为难理解一些。这是因为对于同一个实体，只有一个属性文件，不管要改多少东西，设置多少种不同属性的随机纹理，都要在一个文件内完成。而CTM和CIT更为自由——可以无限制的添加属性文件的数量，一个属性文件内只需专注于一个规则。")]),t._v(" "),s("p",[s("strong",[t._v("问题1：")]),t._v(" 多个规则被放到一个属性文件内，要怎么处理呢？")]),t._v(" "),s("p",[t._v("例如：我想让僵尸在平原地区显示纹理A，在雪原显示纹理B，在雨林显示纹理C，要怎么做？")]),t._v(" "),s("p",[t._v("随机实体纹理的属性文件用序号划分不同的规则，就上边的例子而言，属性文件大概是这样的：")]),t._v(" "),s("p",[s("strong",[t._v("zombie.properties")])]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这不是一个有效的属性文件，仅仅是一个便于理解的例子")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 随机实体纹理的属性文件需要命名为实体的id，可以在wiki上查阅")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("textures.1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("平原僵尸的纹理")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("biomes.1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("平原")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("textures.2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("雪原僵尸的纹理")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("biomes.2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("雪原")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("textures.3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("雨林僵尸的纹理")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("biomes.3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("雨林")]),t._v("\n")])])]),s("p",[s("strong",[t._v("问题2：")]),t._v(" 纹理的路径怎么表示？")]),t._v(" "),s("p",[t._v("随机实体纹理的表示方法是和CTM与CIT不同的。随机实体纹理的表示方法"),s("strong",[t._v("也是序号")]),t._v('。其中序号1表示默认纹理，也就是"assets/minecraft/texture"文件夹中的纹理。假如我想让平原僵尸就显示默认纹理，我可以这样写：')]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这不是一个有效的属性文件，仅仅是一个便于理解的例子")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("textures.1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("biomes.1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("平原")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("textures.2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("雪原僵尸的纹理")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("biomes.2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("雪原")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("textures.3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("雨林僵尸的纹理")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("biomes.3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("雨林")]),t._v("\n")])])]),s("p",[t._v("其他序号表示与属性文件在相同文件夹下的纹理，文件名为默认纹理的文件名+序号，例如僵尸的默认纹理的文件名为zombie.png，那序号2就表示与属性文件在相同文件夹下的zombie2.png，序号3表示zombie3.png，以此类推。")]),t._v(" "),s("p",[t._v("如果一个生物本身就有多个纹理，例如狼，它有下列四张纹理：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.loli.net/2020/07/28/3DtSsE7LPcXmeTu.png",alt:"image-20200715102759623"}})]),t._v(" "),s("p",[t._v("那序号2就表示wolf2.png，wolf_angry2.png，wolf_collar2.png，wolf_tame2.png。")]),t._v(" "),s("p",[t._v("如果还是觉得不太好理解，接下来将会展示几个例子。")])])}),[],!1,null,null,null);a.default=n.exports}}]);