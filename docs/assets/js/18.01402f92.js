(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{376:function(t,n,s){"use strict";s.r(n);var a=s(44),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"part04-集成shiro实现个人账户-用户中心"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#part04-集成shiro实现个人账户-用户中心"}},[t._v("#")]),t._v(" Part04-集成Shiro实现个人账户-用户中心")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("blog\n├─src\n│  └─main\n│      ├─java\n│      │  └─org\n│      │      └─myslayers\n│      │          ├─controller\n│      │          │      BaseController.java\n│      │          │      UserController.java\n│      │          │\n│      │          ├─service\n│      │          │  │  UserService.java\n│      │          │  │\n│      │          │  └─impl\n│      │          │         UserServiceImpl.java\n│      │\n│      └─resources\n│          ├─templates\n│          │  ├─inc\n│          │  │     common.ftl\n│          │  │\n│          │  └─user\n│          │        index.ftl\n")])])]),s("h2",{attrs:{id:"_4-1-个人账户-用户中心"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-个人账户-用户中心"}},[t._v("#")]),t._v(" 4.1 个人账户：用户中心")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("UserController.java")]),t._v(" ：控制层，【跳转页面】、【发布的贴】、【收藏的贴】")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Controller")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserController")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BaseController")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * 用户中心：跳转页面\n     */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@GetMapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/user/index"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("index")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/user/index"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * 用户中心：发布的贴\n     */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ResponseBody")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@GetMapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/user/publish"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Result")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("userPublic")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IPage")]),t._v(" page "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" postService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("page")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("QueryWrapper")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Post")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("eq")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user_id"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getProfileId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("orderByDesc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"created"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" total "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" page"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTotal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAttribute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"publishCount"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" total"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Result")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("success")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("page"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * 用户中心：收藏的贴\n     */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ResponseBody")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@GetMapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/user/collection"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Result")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("userCollection")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IPage")]),t._v(" page "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" postService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("page")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("QueryWrapper")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Post")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("inSql")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SELECT post_id FROM m_user_collection where user_id = "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getProfileId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAttribute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"collectionCount"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" page"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTotal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Result")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("success")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("page"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[s("code",[t._v("index.ftl")]),t._v(" ：模板引擎，参考【layui 社区中的 flow 流加载、laytpl 模板引擎、util 工具文档】")])]),t._v(" "),s("div",{staticClass:"language-injectedfreemarker extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<#--宏layout.ftl（导航栏 + 页脚）--\x3e\n<#include "/inc/layout.ftl"/>\n<#--宏common.ftl（用户中心-左侧链接（我的主页、用户中心、基本设置、我的消息））--\x3e\n<#include "/inc/common.ftl"/>\n\n<#--【三、填充（导航栏 + 页脚）】--\x3e\n<@layout "用户中心">\n\n    <div class="layui-container fly-marginTop fly-user-main">\n    <#--用户中心-左侧链接（我的主页、用户中心、基本设置、我的消息）--\x3e\n        <@centerLeft level=1></@centerLeft>\n\n        <div class="site-tree-mobile layui-hide">\n            <i class="layui-icon">&#xe602;</i>\n        </div>\n        <div class="site-mobile-shade"></div>\n\n        <div class="site-tree-mobile layui-hide">\n            <i class="layui-icon">&#xe602;</i>\n        </div>\n        <div class="site-mobile-shade"></div>\n\n        <div class="fly-panel fly-panel-user" pad20>\n            <div class="layui-tab layui-tab-brief" lay-filter="user">\n                <ul class="layui-tab-title" id="LAY_mine">\n                    <li data-type="mine-jie" lay-id="index" class="layui-this">我发的帖</li>\n                    <li data-type="collection" data-url="/collection/find/" lay-id="collection">我收藏的帖</li>\n                </ul>\n\n                <div class="layui-tab-content" style="padding: 20px 0;">\n                    <div class="layui-tab-item layui-show">\n\n                    <#-----------------------1.发布的贴-----------------------\x3e\n                    <#--第二步：建立视图，用于呈现渲染结果--\x3e\n                        <ul class="mine-view jie-row" id="publish">\n                        <#--第一步，编写模版（laytpl），使用一个script标签存放模板：https://www.layui.com/doc/modules/laytpl.html--\x3e\n                            <script id="tpl-publish" type="text/html">\n                                <li>\n                                    <a class="jie-title" href="/post/{{d.id}}" target="_blank">\n                                        {{d.title}}\n                                    </a>\n                                    <i>\n                                        {{layui.util.toDateString(d.created, \'yyyy-MM-dd HH:mm:ss\')}}\n                                    </i>\n                                    <a class="mine-edit" href="/post/edit?id={{d.id}}">编辑</a>\n                                    <em>\n                                        {{d.viewCount }}阅/{{d.commentCount}}答\n                                    </em>\n                                </li>\n                            <\/script>\n                        </ul>\n\n                        <div id="LAY_page"></div>\n                    </div>\n\n                    <div class="layui-tab-item">\n\n                    <#-----------------------2.收藏的贴-----------------------\x3e\n                    <#--第二步：建立视图，用于呈现渲染结果--\x3e\n                        <ul class="mine-view jie-row" id="collection">\n                        <#--第一步，编写模版（laytpl），使用一个script标签存放模板：https://www.layui.com/doc/modules/laytpl.html--\x3e\n                            <script id="tpl-collection" type="text/html">\n                                <li>\n\n                                    <a class="jie-title" href="/post/{{d.id}}" target="_blank">{{d.title}}</a>\n                                    <i>收藏于{{layui.util.timeAgo(d.created, true)}}</i>\n                                </li>\n                            <\/script>\n                        </ul>\n\n                        <div id="LAY_page1"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <script>\n        layui.cache.page = \'user\';\n\n        layui.use([\'laytpl\', \'flow\', \'util\'], function () {\n            var $ = layui.jquery;\n            var laytpl = layui.laytpl;\n            var flow = layui.flow;\n            var util = layui.util;\n\n            /*流加载（flow）*/\n            flow.load({\n                elem: \'#publish\'                    //elem：指定列表容器\n                , isAuto: false                     //isAuto：是否自动加载。默认 true。如果设为 false，点会在列表底部生成一个 “加载更多” 的 button，则只能点击它才会加载下一页数据。\n                , done: function (page, next) {     //done：到达临界点触发加载的回调（默认滚动触发），触发下一页\n                    var lis = [];\n\n                    //以jQuery的Ajax请求为例，请求下一页数据（注意：page是从2开始返回）\n                    $.get(\'/user/publish?pn=\' + page, function (res) {\n\n                        //假设你的列表返回在data集合中\n                        layui.each(res.data.records, function (index, item) {\n\n                        <#--第三步：渲染模版--\x3e\n                            var tpl = $("#tpl-publish").html();                //获取html内容：选择tpl-publish【第一步中的模版】\n                            laytpl(tpl).render(item, function (html) {         //使用render进行渲染：使用【集合item】对【模板tpl】渲染为html\n                                $("#publish .layui-flow-more").before(html);\n                            });\n                        });\n\n                        //执行下一页渲染，第二参数为：满足“加载更多”的条件，即后面仍有分页\n                        //pages为Ajax返回的总页数，只有当前页小于总页数的情况下，才会继续出现加载更多\n                        next(lis.join(\'\'), page < res.data.pages);\n                    });\n                }\n            });\n\n            flow.load({\n                elem: \'#collection\'\n                ,isAuto: false\n                ,done: function(page, next){\n                    var lis = [];\n\n                    $.get(\'/user/collection?pn=\'+page, function(res){\n                        layui.each(res.data.records, function(index, item){\n\n                        <#--第三步：渲染模版--\x3e\n                            var tpl = $("#tpl-collection").html();          //获取html内容：选择tpl-collection【第一步中的模版】\n                            laytpl(tpl).render(item, function (html) {      //使用render进行渲染：使用【集合item】对【模板tpl】渲染为html\n                                $("#collection .layui-flow-more").before(html);\n                            });\n                        });\n\n                        next(lis.join(\'\'), page < res.data.pages);\n                    });\n                }\n            });\n\n        });\n    <\/script>\n\n</@layout>\n')])])]),s("h2",{attrs:{id:"_4-2-宏-个人账户-左侧链接-我的主页、用户中心、基本设置、我的消息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-宏-个人账户-左侧链接-我的主页、用户中心、基本设置、我的消息"}},[t._v("#")]),t._v(" 4.2 宏：个人账户-左侧链接（我的主页、用户中心、基本设置、我的消息）")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("common.ftl")]),t._v(" ：模板引擎，【公共部分】")])]),t._v(" "),s("div",{staticClass:"language-injectedfreemarker extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<#--宏：个人账户-左侧链接（我的主页、用户中心、基本设置、我的消息）--\x3e\n<#macro centerLeft level>\n    <ul class="layui-nav layui-nav-tree layui-inline" lay-filter="user">\n        <li class="layui-nav-item <#if level == 0> layui-this</#if>">\n            <a href="/user/home">\n                <i class="layui-icon">&#xe609;</i>\n                我的主页\n            </a>\n        </li>\n        <li class="layui-nav-item <#if level == 1> layui-this</#if>">\n            <a href="/user/index">\n                <i class="layui-icon">&#xe612;</i>\n                用户中心\n            </a>\n        </li>\n        <li class="layui-nav-item <#if level == 2> layui-this</#if>">\n            <a href="/user/set">\n                <i class="layui-icon">&#xe620;</i>\n                基本设置\n            </a>\n        </li>\n        <li class="layui-nav-item <#if level == 3> layui-this</#if>">\n            <a href="/user/mess">\n                <i class="layui-icon">&#xe611;</i>\n                我的消息\n            </a>\n        </li>\n    </ul>\n</#macro>\n')])])])])}),[],!1,null,null,null);n.default=e.exports}}]);