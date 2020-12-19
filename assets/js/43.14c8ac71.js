(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{410:function(t,a,s){"use strict";s.r(a);var e=s(42),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"轻提示-toast"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#轻提示-toast"}},[t._v("#")]),t._v(" "),s("H2Icon"),t._v(" 轻提示 Toast")],1),t._v(" "),s("blockquote",[s("p",[t._v("toast组件常用于在页面中展示重要的提示信息。")])]),t._v(" "),s("p",[t._v("我们提供了"),s("code",[t._v("Toast")]),t._v("组件的两种调用方法，一种是最基本的组件调用方式，通过"),s("code",[t._v("show")]),t._v("属性来控制显示与隐藏，另一种是更接近于微信原生的调用方法，通过"),s("code",[t._v("wx.lin.showToast()")]),t._v(" 这个方法来进行调用。")]),t._v(" "),s("h2",{attrs:{id:"通过api调用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过api调用"}},[t._v("#")]),t._v(" 通过Api调用")]),t._v(" "),s("h3",{attrs:{id:"显示-toast"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#显示-toast"}},[t._v("#")]),t._v(" 显示 toast")]),t._v(" "),s("p",[t._v("在项目中，"),s("strong",[t._v("showToast")]),t._v("这个操作可能会在一些函数的回调中被使用，那么通过Api去调用，是一种更好的体验。下面会通过一些代码示例来帮助理解。")]),t._v(" "),s("p",[t._v("首先需要在json文件中引入"),s("code",[t._v("Toast")]),t._v("组件，其次在wxml文件中使用它。")]),t._v(" "),s("div",{staticClass:"language-wxml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-wxml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-toast")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("bindtap")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("show"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("触发"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("之后在js里写下调用方法")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("show")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  wx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("showToast")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'创建成功~'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    icon"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'success'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("complete")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[t._v("接着就能查看到页面出现了 "),s("code",[t._v("创建成功~")]),t._v(" 的"),s("code",[t._v("Toast")]),t._v("提示了")]),t._v(" "),s("img-wrapper",[s("img",{attrs:{src:"http://imglf4.nosdn0.126.net/img/YUdIR2E3ME5weEU3eDlFZy9Vc3FRSmE0d0poTzRldFVrcWl3aHJZakYwa2Y0UzlwK2V4RzdBPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg"}})]),t._v(" "),s("h3",{attrs:{id:"关闭toast"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关闭toast"}},[t._v("#")]),t._v(" 关闭toast")]),t._v(" "),s("p",[t._v("有一些情况，需要手动关闭toast，可以通过调用wx.lin.hideToast()主动关闭toast的显示。")]),t._v(" "),s("h2",{attrs:{id:"无文字基本类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#无文字基本类型"}},[t._v("#")]),t._v(" 无文字基本类型")]),t._v(" "),s("p",[t._v("提示框可通过设置"),s("code",[t._v("show")]),t._v("属性为"),s("code",[t._v("true")]),t._v("、"),s("code",[t._v("false")]),t._v(" 来控制显示和隐藏，并且在不设置"),s("code",[t._v("image")]),t._v(" 和 "),s("code",[t._v("icon")]),t._v(" 的情况下，只会显示文本内容。")]),t._v(" "),s("h3",{attrs:{id:"示例代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例代码"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),s("div",{staticClass:"language-wxml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-wxml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 单行文本 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-toast")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("show")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{true}}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("这是一条基础提示框"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 多行文本 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-toast")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("show")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{true}}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("这是一条基础提示框，这是一条基础提示框"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n")])])]),s("p",[t._v("如下图：")]),t._v(" "),s("img-wrapper",[s("img",{attrs:{src:"http://imglf3.nosdn0.126.net/img/YUdIR2E3ME5weEhlS2R1Y2tEUE5DUE1CV2VYNHh5aWdWeFlubUdmeW5BR0RFdk1DSitTMjdRPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0"}})]),t._v(" "),s("h2",{attrs:{id:"icon-文本内容的提示框"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#icon-文本内容的提示框"}},[t._v("#")]),t._v(" icon + 文本内容的提示框")]),t._v(" "),s("p",[t._v("当我们遇到有一些场景需要icon+文字的提示框时，可以通过设置"),s("code",[t._v("icon")]),t._v(" 来实现，同时，还可以设置 "),s("code",[t._v("size")]),t._v("和"),s("code",[t._v("color")]),t._v(" 来控制icon图标的大小和颜色。\n"),s("br")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("注意事项")]),t._v(" "),s("ul",[s("li",[t._v("设置"),s("code",[t._v("icon")]),t._v(" 为 "),s("code",[t._v("success")]),t._v("、"),s("code",[t._v("loading")]),t._v("、"),s("code",[t._v("error")]),t._v(" 时，显示效果如下图所示。")]),t._v(" "),s("li",[t._v("当设置 "),s("code",[t._v("icon")]),t._v(" 为其他值时，默认显示白色，")])])]),t._v(" "),s("h3",{attrs:{id:"示例代码-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-2"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),s("div",{staticClass:"language-wxml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-wxml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 显示 success 的提示框 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-toast")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("show")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{true}}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("icon")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("success"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("成功提示框"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("img-wrapper",[s("img",{attrs:{src:"http://imglf5.nosdn0.126.net/img/YUdIR2E3ME5weEdEQUxENm5RRXoxVk1TYXQvRm42NTVxZzg5bzRSOEc4UWpnaUNWY0krT0F3PT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0"}})]),t._v(" "),s("h2",{attrs:{id:"自定义图片的提示框"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义图片的提示框"}},[t._v("#")]),t._v(" 自定义图片的提示框")]),t._v(" "),s("p",[t._v("当"),s("code",[t._v("icon")]),t._v(" 属性不能满足我们的需求时，我们还可以通过设置"),s("code",[t._v("image")]),t._v(" 来自由的定义显示的图片内容，只需要在"),s("code",[t._v("image")]),t._v("属性里传入有效的图片路径即可。\n"),s("br")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("注意事项")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("image")]),t._v(" 的权重高于 "),s("code",[t._v("icon")]),t._v("，所以当设置了 "),s("code",[t._v("image")]),t._v(" 时，"),s("code",[t._v("icon")]),t._v(" 不显示。")])])]),t._v(" "),s("h3",{attrs:{id:"示例代码-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-3"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),s("div",{staticClass:"language-wxml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-wxml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-toast")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("show")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{true}}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("path/to/img.png"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("图片提示框"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("img-wrapper",[s("img",{attrs:{src:"http://imglf4.nosdn0.126.net/img/YUdIR2E3ME5weEVtNTBFQndmb0JodFlTbm54bFNDUDNlN2p6akJoOWVOYWNwSUs5WTEvdXRRPT0.jpg?imageView&thumbnail=375x0&quality=96&stripmeta=0&type=jpg"}})]),t._v(" "),s("h2",{attrs:{id:"更改文字的位置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更改文字的位置"}},[t._v("#")]),t._v(" 更改文字的位置")]),t._v(" "),s("p",[s("code",[t._v("toast")]),t._v(" 默认是列式布局（图标在上，文字在下），但是有时候会需要提示的图标居左，文字居右；或者文字居左，图标居右显示。\n"),s("br"),t._v("\n这时，我们可以通过设置 "),s("code",[t._v("placement")]),t._v(" 属性来完成，"),s("code",[t._v("placement")]),t._v("可选值为"),s("code",[t._v("top / left / right / bottom")]),t._v(" ，默认值是 "),s("code",[t._v("bottom")]),t._v("。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("注意事项")]),t._v(" "),s("ul",[s("li",[t._v("当 "),s("code",[t._v("icon")]),t._v(" 或者 "),s("code",[t._v("image")]),t._v(" 为空时，设置 "),s("code",[t._v("placement")]),t._v(" 不生效。")])])]),t._v(" "),s("h3",{attrs:{id:"示例代码-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-4"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),s("div",{staticClass:"language-wxml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-wxml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-toast")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("show")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{true}}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("icon")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("自定义提示框"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("placement")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("right"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("img-wrapper",[s("img",{attrs:{src:"http://imglf6.nosdn0.126.net/img/YUdIR2E3ME5weEZMSTg0Uzl2cENhaG92d3A0R2xsZWkvWi9QbFJLWFdSYnJHTmJIdlZJMGlBPT0.jpg?imageView&thumbnail=375x0&quality=96&stripmeta=0&type=jpg"}})]),t._v(" "),s("h3",{attrs:{id:"提示框属性-toast-attributes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提示框属性-toast-attributes"}},[t._v("#")]),t._v(" 提示框属性（Toast Attributes）")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("show")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("控制提示框的显示")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("true/false")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("title")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("提示框的文本内容")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("icon")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("icon图标的名字")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("参考"),s("a",{attrs:{href:"http://doc.mini.7yue.pro/component/basic/icon.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("icon组件"),s("OutboundLink")],1),t._v("支持的范围")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("icon-size")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("icon图标的大小")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("60")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("icon-color")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("icon图标的颜色")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("#fff")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("image")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("图片的有效路径，支持本地路径和网络路径")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("placement")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("文字的显示方位")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("top/left/right/bottom")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("bottom")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("duration")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("提示框显示的时长")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("1500")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("zIndex")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("控制提示框的z-index层级")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("999")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("mask")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示透明蒙层，防止触摸穿透")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("true/false")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("offsetX")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("设置提示框向右的偏移量")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("0")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("offset\bY")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("设置提示框向下的偏移量")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("0")])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("注意事项")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("image")]),t._v(" 的权重大于 "),s("code",[t._v("icon")]),t._v(" ，当设置"),s("code",[t._v("image")]),t._v("时， "),s("code",[t._v("icon")]),t._v("不生效")]),t._v(" "),s("li",[s("code",[t._v("center")]),t._v(" 设置为"),s("code",[t._v("false")]),t._v("的时候，提示框偏底部显示，默认居中显示。")])])]),t._v(" "),s("h3",{attrs:{id:"提示框外部样式类-toast-class"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提示框外部样式类-toast-class"}},[t._v("#")]),t._v(" 提示框外部样式类（Toast Class）")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("l-class")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖toast整体的外部样式类")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("l-bg-class")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖背景部分的外部样式类")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("l-image-class")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖toast图片部分的外部样式类")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("l-icon-class")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖toast图标部分的外部样式类")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("---")])])])]),t._v(" "),s("h2",{attrs:{id:"icon参数说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#icon参数说明"}},[t._v("#")]),t._v(" icon参数说明")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("属性值")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("类型")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("success")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("显示绿色的"),s("code",[t._v("success")]),t._v(" 图标")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("error")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("显示红色的 "),s("code",[t._v("error")]),t._v(" 图标")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("loading")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("显示白色的的 "),s("code",[t._v("loading")]),t._v(" 图标")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("other")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("参考"),s("a",{attrs:{href:"http://doc.mini.7yue.pro/component/basic/icon.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("icon组件"),s("OutboundLink")],1),t._v("支持的范围")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String")])])])]),t._v(" "),s("RightMenu")],1)}),[],!1,null,null,null);a.default=n.exports}}]);