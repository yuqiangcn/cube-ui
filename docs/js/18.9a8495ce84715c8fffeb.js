webpackJsonp([18],{473:function(s,t,a){s.exports=a(552)},552:function(s,t,a){var n=a(11)(null,a(553),null,null,null);s.exports=n.exports},553:function(s,t){s.exports={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h2",{attrs:{id:"create-api模块"}},[a("a",{staticClass:"anchor",attrs:{href:"#cube-create-api模块-anchor","aria-hidden":"true"}},[a("svg",{attrs:{"aria-hidden":"true",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}})])]),s._v(" create-api 模块")]),s._v(" "),s._m(0),s._v(" "),a("h3",{attrs:{id:"createAPI(Vue,Component,[events,single])"}},[a("a",{staticClass:"anchor",attrs:{href:"#cube-createAPI(Vue,Component,[events,single])-anchor","aria-hidden":"true"}},[a("svg",{attrs:{"aria-hidden":"true",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}})])]),s._v(" createAPI(Vue, Component, [events, single])")]),s._v(" "),s._m(1),s._v(" "),a("p",[s._v("我们先编写一个 Hello.vue 组件：")]),s._v(" "),s._m(2),s._v(" "),s._m(3),s._v(" "),s._m(4),s._v(" "),s._m(5)])},staticRenderFns:[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[s._v("该模块默认暴露出一个 "),a("code",{pre:!0},[s._v("createAPI")]),s._v(" 函数，可以实现以 API 的形式调用自定义组件。")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ul",[a("li",[a("p",[s._v("参数：")]),s._v(" "),a("ul",[a("li",[a("code",{pre:!0},[s._v("{Function} Vue")]),s._v(" Vue 函数")]),s._v(" "),a("li",[a("code",{pre:!0},[s._v("{Function | Object} Component")]),s._v(" Vue 组件，组件必须有 name")]),s._v(" "),a("li",[a("code",{pre:!0},[s._v("{Array} [events]")]),s._v(" 组件实例 emit 的事件名集合")]),s._v(" "),a("li",[a("code",{pre:!0},[s._v("{Boolean} [single]")]),s._v(" 是否为单例")])])]),s._v(" "),a("li",[a("p",[s._v("用法：")]),s._v(" "),a("ul",[a("li",[s._v("该方法在 Vue 的 prototype 上增加一个名为 "),a("code",{pre:!0},[s._v("$create{camelize(Component.name)}")]),s._v(" 的方法，这样就可以在其他组件中直接通过 "),a("code",{pre:!0},[s._v("const instance = this.$createAaBb(config, [renderFn, single])")]),s._v(" 这样来实例化组件了，而且这个实例化组件的元素是被附加到 "),a("code",{pre:!0},[s._v("body")]),s._v(" 元素下的；关于 "),a("code",{pre:!0},[s._v("$createAaBb")]),s._v(" 的参数：\n"),a("ul",[a("li",[a("code",{pre:!0},[s._v("{Object} config")]),s._v(" 组件配置参数，默认所有的值都会当做 props 传给组件，但是要排除 "),a("code",{pre:!0},[s._v("events")]),s._v(" 中的事件（默认会做转换，例如："),a("code",{pre:!0},[s._v("events")]),s._v(" 的值为 "),a("code",{pre:!0},[s._v("['click']")]),s._v("，那么 "),a("code",{pre:!0},[s._v("config")]),s._v(" 中的 "),a("code",{pre:!0},[s._v("onClick")]),s._v(" 就是作为 "),a("code",{pre:!0},[s._v("click")]),s._v(" 事件的回调函数，而不是作为 props 传递给组件）。")]),s._v(" "),a("li",[a("code",{pre:!0},[s._v("{Function} [renderFn]")]),s._v(" 可选参数，用于生成子 VNode 节点，一般场景是处理 slot。")]),s._v(" "),a("li",[a("code",{pre:!0},[s._v("{Boolean} [single]")]),s._v(" 可选参数，创建的时候决定是否是单例的，优先级更高，如果没有传入 renderFn 的话，single 的值就是第二个参数的值。")])])]),s._v(" "),a("li",[s._v("注意调用后的返回值 "),a("code",{pre:!0},[s._v("instance")]),s._v(" 就是组件实例，这个实例会被"),a("strong",[s._v("附加")]),s._v("或者"),a("strong",[s._v("代理")]),s._v(" "),a("code",{pre:!0},[s._v("remove")]),s._v(" 方法，如果调用了，该实例就会被销毁且会从 "),a("code",{pre:!0},[s._v("body")]),s._v(" 下移除。")])])]),s._v(" "),a("li",[a("p",[s._v("示例：")])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"clickHandler"')]),s._v(">")]),s._v("\n    {{content}}\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("slot")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"other"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("slot")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"text/ecmascript-6"')]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n  "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'hello'")]),s._v(",\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("props")]),s._v(": {\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("content")]),s._v(": {\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("String")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("default")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Hello'")]),s._v("\n      }\n    },\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      clickHandler(e) {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$emit("),a("span",{attrs:{class:"hljs-string"}},[s._v("'click'")]),s._v(", e)\n      }\n    }\n  }\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[s._v("然后我们再通过 "),a("code",{pre:!0},[s._v("createAPI")]),s._v(" 把 Hello.vue 变成一个 API 式调用的组件并调用。")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-js"}},[s._v("  "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Vue "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{attrs:{class:"hljs-string"}},[s._v("'vue'")]),s._v("\n  "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Hello "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{attrs:{class:"hljs-string"}},[s._v("'./Hello.vue'")]),s._v("\n\n  "),a("span",{attrs:{class:"hljs-comment"}},[s._v("// 引入 Style 加载基础样式")]),s._v("\n  "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" {\n    "),a("span",{attrs:{class:"hljs-comment"}},[s._v("/* eslint-disable no-unused-vars */")]),s._v("\n    Style,\n    Dialog,\n    createAPI\n  } "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{attrs:{class:"hljs-string"}},[s._v("'cube-ui'")]),s._v("\n\n  Vue.use(Dialog)\n\n  "),a("span",{attrs:{class:"hljs-comment"}},[s._v("// 创建 this.$createHello API")]),s._v("\n  createAPI(Vue, Hello, ["),a("span",{attrs:{class:"hljs-string"}},[s._v("'click'")]),s._v("], "),a("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(")\n\n  "),a("span",{attrs:{class:"hljs-comment"}},[s._v("// 初始化 Vue")]),s._v("\n  "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Vue({\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("el")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v(",\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("render")]),s._v(": "),a("span",{attrs:{class:"hljs-function"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" ("),a("span",{attrs:{class:"hljs-params"}},[s._v("h")]),s._v(") ")]),s._v("{\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" h("),a("span",{attrs:{class:"hljs-string"}},[s._v("'button'")]),s._v(", {\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("on")]),s._v(": {\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("click")]),s._v(": "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".showHello\n        }\n      }, ["),a("span",{attrs:{class:"hljs-string"}},[s._v("'Show Hello'")]),s._v("])\n    },\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      showHello() {\n        "),a("span",{attrs:{class:"hljs-comment"}},[s._v("// 直接调用")]),s._v("\n        "),a("span",{attrs:{class:"hljs-comment"}},[s._v("// 传入配置对象，默认传入的所有对象全都当做 props 传入组件")]),s._v("\n        "),a("span",{attrs:{class:"hljs-comment"}},[s._v("// 除了在调用 createAPI 的时候传入了 events，这里对应的就是")]),s._v("\n        "),a("span",{attrs:{class:"hljs-comment"}},[s._v("// on{event name} 会被当做事件回调处理")]),s._v("\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" instance = "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$createHello({\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("content")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'My Hello Content'")]),s._v(",\n          onClick(e) {\n            "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{attrs:{class:"hljs-string"}},[s._v("'Hello component clicked.'")]),s._v(")\n          }\n        }, "),a("span",{attrs:{class:"hljs-comment"}},[s._v("/* renderFn */")]),s._v(" (createElement) => {\n          "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" [\n            createElement("),a("span",{attrs:{class:"hljs-string"}},[s._v("'p'")]),s._v(", {\n              "),a("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'other'")]),s._v("\n            }, "),a("span",{attrs:{class:"hljs-string"}},[s._v("'other content'")]),s._v(")\n          ]\n        })\n        "),a("span",{attrs:{class:"hljs-comment"}},[s._v("// 通过 Vue 组件的 $on 也是可以监听的，看使用场景")]),s._v("\n        instance.$on("),a("span",{attrs:{class:"hljs-string"}},[s._v("'click'")]),s._v(", (e) => {\n          "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" $dialog = "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$createDialog({\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'confirm'")]),s._v(",\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("content")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'点击确定关闭当前实例'")]),s._v(",\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("icon")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'cubeic-alert'")]),s._v("\n          })\n          $dialog.show()\n\n          $dialog.$on("),a("span",{attrs:{class:"hljs-string"}},[s._v("'confirm'")]),s._v(", () => {\n            "),a("span",{attrs:{class:"hljs-comment"}},[s._v("// 销毁实例")]),s._v("\n            instance.remove()\n          }).$on("),a("span",{attrs:{class:"hljs-string"}},[s._v("'cancel'")]),s._v(", () => {\n            "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{attrs:{class:"hljs-string"}},[s._v("'cancel'")]),s._v(")\n          })\n        })\n      }\n    }\n  })\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[s._v("示例中就是创建了一个需要 API 调用的组件 "),a("code",{pre:!0},[s._v("Hello")]),s._v("，然后在其他组件中去使用，重点就是 "),a("code",{pre:!0},[s._v("showHello()")]),s._v(" 方法做的事情：调用 "),a("code",{pre:!0},[s._v("this.$createHello(config, renderFn)")]),s._v(" 实现组件的实例化。")])}]}}});