(window.webpackJsonp=window.webpackJsonp||[]).push([[28,71],{128:function(n,e,t){var o=t(36),r=t(133),i=t(134),a=t(27),c=t(60),s=t(130),l={},u={};(e=n.exports=function(n,e,t,d,v){var f,p,m,h,g=v?function(){return n}:s(n),b=o(t,d,e?2:1),y=0;if("function"!=typeof g)throw TypeError(n+" is not iterable!");if(i(g)){for(f=c(n.length);f>y;y++)if((h=e?b(a(p=n[y])[0],p[1]):b(n[y]))===l||h===u)return h}else for(m=g.call(n);!(p=m.next()).done;)if((h=r(m,b,p.value,e))===l||h===u)return h}).BREAK=l,e.RETURN=u},22:function(n,e,t){var o;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var n=[],e=0;e<arguments.length;e++){var o=arguments[e];if(o){var i=typeof o;if("string"===i||"number"===i)n.push(o);else if(Array.isArray(o)&&o.length){var a=r.apply(null,o);a&&n.push(a)}else if("object"===i)for(var c in o)t.call(o,c)&&o[c]&&n.push(c)}}return n.join(" ")}void 0!==n&&n.exports?(r.default=r,n.exports=r):void 0===(o=function(){return r}.apply(e,[]))||(n.exports=o)}()},225:function(n,e,t){var o=t(23);n.exports=function(n,e,t){for(var r in e)t&&n[r]?n[r]=e[r]:o(n,r,e[r]);return n}},226:function(n,e){n.exports=function(n,e,t,o){if(!(n instanceof e)||void 0!==o&&o in n)throw TypeError(t+": incorrect invocation!");return n}},227:function(n,e,t){var o=t(21);n.exports=function(n,e){if(!o(n)||n._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return n}},242:function(n,e,t){"use strict";t(241),t(248)},243:function(n,e,t){"use strict";var o=t(17),r=t(8),i=t(16),a=t(18),c=t(12)("species");n.exports=function(n){var e="function"==typeof r[n]?r[n]:o[n];a&&e&&!e[c]&&i.f(e,c,{configurable:!0,get:function(){return this}})}},244:function(n,e,t){var o=t(36),r=t(93),i=t(37),a=t(60),c=t(245);n.exports=function(n,e){var t=1==n,s=2==n,l=3==n,u=4==n,d=6==n,v=5==n||d,f=e||c;return function(e,c,p){for(var m,h,g=i(e),b=r(g),y=o(c,p,3),_=a(b.length),S=0,k=t?f(e,_):s?f(e,0):void 0;_>S;S++)if((v||S in b)&&(h=y(m=b[S],S,g),n))if(t)k[S]=h;else if(h)switch(n){case 3:return!0;case 5:return m;case 6:return S;case 2:k.push(m)}else if(u)return!1;return d?-1:l||u?u:k}}},245:function(n,e,t){var o=t(246);n.exports=function(n,e){return new(o(n))(e)}},246:function(n,e,t){var o=t(21),r=t(136),i=t(12)("species");n.exports=function(n){var e;return r(n)&&("function"!=typeof(e=n.constructor)||e!==Array&&!r(e.prototype)||(e=void 0),o(e)&&null===(e=e[i])&&(e=void 0)),void 0===e?Array:e}},247:function(n,e,t){var o=t(128);n.exports=function(n,e){var t=[];return o(n,!1,t.push,t,e),t}},249:function(n,e,t){"use strict";var o=t(16).f,r=t(56),i=t(225),a=t(36),c=t(226),s=t(128),l=t(88),u=t(135),d=t(243),v=t(18),f=t(92).fastKey,p=t(227),m=v?"_s":"size",h=function(n,e){var t,o=f(e);if("F"!==o)return n._i[o];for(t=n._f;t;t=t.n)if(t.k==e)return t};n.exports={getConstructor:function(n,e,t,l){var u=n(function(n,o){c(n,u,e,"_i"),n._t=e,n._i=r(null),n._f=void 0,n._l=void 0,n[m]=0,void 0!=o&&s(o,t,n[l],n)});return i(u.prototype,{clear:function(){for(var n=p(this,e),t=n._i,o=n._f;o;o=o.n)o.r=!0,o.p&&(o.p=o.p.n=void 0),delete t[o.i];n._f=n._l=void 0,n[m]=0},delete:function(n){var t=p(this,e),o=h(t,n);if(o){var r=o.n,i=o.p;delete t._i[o.i],o.r=!0,i&&(i.n=r),r&&(r.p=i),t._f==o&&(t._f=r),t._l==o&&(t._l=i),t[m]--}return!!o},forEach:function(n){p(this,e);for(var t,o=a(n,arguments.length>1?arguments[1]:void 0,3);t=t?t.n:this._f;)for(o(t.v,t.k,this);t&&t.r;)t=t.p},has:function(n){return!!h(p(this,e),n)}}),v&&o(u.prototype,"size",{get:function(){return p(this,e)[m]}}),u},def:function(n,e,t){var o,r,i=h(n,e);return i?i.v=t:(n._l=i={i:r=f(e,!0),k:e,v:t,p:o=n._l,n:void 0,r:!1},n._f||(n._f=i),o&&(o.n=i),n[m]++,"F"!==r&&(n._i[r]=i)),n},getEntry:h,setStrong:function(n,e,t){l(n,e,function(n,t){this._t=p(n,e),this._k=t,this._l=void 0},function(){for(var n=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?u(0,"keys"==n?e.k:"values"==n?e.v:[e.k,e.v]):(this._t=void 0,u(1))},t?"entries":"values",!t,!0),d(e)}}},250:function(n,e,t){"use strict";var o=t(17),r=t(15),i=t(92),a=t(28),c=t(23),s=t(225),l=t(128),u=t(226),d=t(21),v=t(57),f=t(16).f,p=t(244)(0),m=t(18);n.exports=function(n,e,t,h,g,b){var y=o[n],_=y,S=g?"set":"add",k=_&&_.prototype,C={};return m&&"function"==typeof _&&(b||k.forEach&&!a(function(){(new _).entries().next()}))?(_=e(function(e,t){u(e,_,n,"_c"),e._c=new y,void 0!=t&&l(t,g,e[S],e)}),p("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","),function(n){var e="add"==n||"set"==n;n in k&&(!b||"clear"!=n)&&c(_.prototype,n,function(t,o){if(u(this,_,n),!e&&b&&!d(t))return"get"==n&&void 0;var r=this._c[n](0===t?0:t,o);return e?this:r})}),b||f(_.prototype,"size",{get:function(){return this._c.size}})):(_=h.getConstructor(e,n,g,S),s(_.prototype,t),i.NEED=!0),v(_,n),C[n]=_,r(r.G+r.W+r.F,C),b||h.setStrong(_,n,g),_}},251:function(n,e,t){var o=t(131),r=t(247);n.exports=function(n){return function(){if(o(this)!=n)throw TypeError(n+"#toJSON isn't generic");return r(this)}}},252:function(n,e,t){"use strict";var o=t(15);n.exports=function(n){o(o.S,n,{of:function(){for(var n=arguments.length,e=new Array(n);n--;)e[n]=arguments[n];return new this(e)}})}},253:function(n,e,t){"use strict";var o=t(15),r=t(132),i=t(36),a=t(128);n.exports=function(n){o(o.S,n,{from:function(n){var e,t,o,c,s=arguments[1];return r(this),(e=void 0!==s)&&r(s),void 0==n?new this:(t=[],e?(o=0,c=i(s,arguments[2],2),a(n,!1,function(n){t.push(c(n,o++))})):a(n,!1,t.push,t),new this(t))}})}},353:function(n,e,t){"use strict";t.r(e);var o=t(4),r=t.n(o),i=t(5),a=t.n(i),c=t(2),s=t.n(c),l=t(6),u=t.n(l),d=t(412),v=(t(483),function(n){function e(){var n,o,i,c;a()(this,e);for(var l=arguments.length,u=Array(l),d=0;d<l;d++)u[d]=arguments[d];return o=i=s()(this,(n=e.__proto__||r()(e)).call.apply(n,[this].concat(u))),i.document=function(){return{document:t(436),className:"picker-page"}},c=o,s()(i,c)}return u()(e,n),e}(d.a));e.default=v},401:function(n,e,t){"use strict";t(241),t(329)},402:function(n,e,t){"use strict";var o=t(4),r=t.n(o),i=t(5),a=t.n(i),c=t(7),s=t.n(c),l=t(2),u=t.n(l),d=t(6),v=t.n(d),f=t(0),p=t.n(f),m=t(22),h=t.n(m),g=function(n){function e(){return a()(this,e),u()(this,(e.__proto__||r()(e)).apply(this,arguments))}return v()(e,n),s()(e,[{key:"render",value:function(){var n=this.props,e=n.prefixCls,t=n.className,o=n.titleRender,r=n.moreRender,i=n.children,a=h()(""+e,t);return p.a.createElement("div",{className:a},p.a.createElement("div",{className:e+"-header"},o&&p.a.createElement("div",{className:e+"-title"},o),r&&p.a.createElement("div",{className:e+"-more"},r)),p.a.createElement("div",{className:e+"-body"},i))}}]),e}(f.PureComponent);e.a=g,g.defaultProps={prefixCls:"za-panel"}},403:function(n,e,t){"use strict";var o=t(42),r=t.n(o),i=t(4),a=t.n(i),c=t(5),s=t.n(c),l=t(7),u=t.n(l),d=t(2),v=t.n(d),f=t(6),p=t.n(f),m=t(0),h=t.n(m),g=t(22),b=t.n(g),y=(t(330),function(n){function e(){return s()(this,e),v()(this,(e.__proto__||a()(e)).apply(this,arguments))}return p()(e,n),u()(e,[{key:"componentDidMount",value:function(){if("index-page"===this.props.className){var n=window.sessionStorage[this.props.className];n&&(this.container.scrollTop=n)}}},{key:"componentWillUnmount",value:function(){if("index-page"===this.props.className){var n=this.container.scrollTop;window.sessionStorage[this.props.className]=n}}},{key:"render",value:function(){var n=this,e=this.props,t=e.className,o=e.children,i=b()(r()({"app-container":!0},t,!!t));return h.a.createElement("div",{ref:function(e){n.container=e},className:i},h.a.createElement("a",{className:"github",href:"https://github.com/ZhonganTechENG/zarm"},h.a.createElement("svg",{"aria-hidden":"true",version:"1.1",viewBox:"0 0 16 16"},h.a.createElement("path",{fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}))),o)}}]),e}(m.Component));e.a=y},404:function(n,e,t){"use strict";var o=t(4),r=t.n(o),i=t(5),a=t.n(i),c=t(7),s=t.n(c),l=t(2),u=t.n(l),d=t(6),v=t.n(d),f=t(0),p=t.n(f),m=(t(331),function(n){function e(){return a()(this,e),u()(this,(e.__proto__||r()(e)).apply(this,arguments))}return v()(e,n),s()(e,[{key:"render",value:function(){return p.a.createElement("footer",null,p.a.createElement("div",{className:"copyright"},p.a.createElement("div",{className:"copyright-cn"},"众安·体验设计中心"),p.a.createElement("div",{className:"copyright-en"},"Zhongan UX Densign")))}}]),e}(f.Component));e.a=m},405:function(n,e,t){"use strict";t(242),t(332)},412:function(n,e,t){"use strict";var o=t(406),r=t.n(o),i=t(407),a=t.n(i),c=t(408),s=t.n(c),l=t(4),u=t.n(l),d=t(5),v=t.n(d),f=t(7),p=t.n(f),m=t(2),h=t.n(m),g=t(6),b=t.n(g),y=t(0),_=t.n(y),S=t(55),k=t.n(S),C=t(409),A=t.n(C),E=(t(405),t(402)),D=t(19),x=t.n(D),N=t(410),w=(t(401),function(n){function e(n){v()(this,e);var t=h()(this,(e.__proto__||u()(e)).call(this,n));return t.containerId=""+parseInt(1e9*Math.random(),10).toString(36),t.document=t.props.children.match(/([^]*)\n?(```[^]+```)/),t.title=String(t.document[1]),t.source=t.document[2].match(/```(.*)\n?([^]+)```/),t}return b()(e,n),p()(e,[{key:"componentDidMount",value:function(){this.renderSource(this.source[2])}},{key:"componentWillUnmount",value:function(){this.containerElem&&k.a.unmountComponentAtNode(this.containerElem)}},{key:"renderSource",value:function(n){var e=this;Promise.all([t.e(5),t.e(6),t.e(70)]).then(t.bind(null,544)).then(function(n){return{args:["context","React","ReactDOM","zarm"],argv:[e,_.a,k.a,n]}}).then(function(t){var o=t.args,r=t.argv;n=n.replace(/import\s+\{\s+(.*)\s+\}\s+from\s+'zarm';/,"const { $1 } = zarm;").replace("mountNode","document.getElementById('"+e.containerId+"')");var i=Object(N.transform)(n,{presets:["es2015","react"]}).code;o.push(i),(new(Function.prototype.bind.apply(Function,[null].concat(x()(o))))).apply(void 0,x()(r)),e.source[2]=n}).catch(function(n){0})}},{key:"render",value:function(){var n=this;return"/panel"===this.props.location.pathname?_.a.createElement("div",{id:this.containerId,ref:function(e){n.containerElem=e}}):_.a.createElement(E.a,{titleRender:_.a.createElement("span",null,this.title)},_.a.createElement("div",{id:this.containerId,ref:function(e){n.containerElem=e}}))}}]),e}(_.a.Component)),T=t(403),M=t(404),O=function(n){function e(n){v()(this,e);var t=h()(this,(e.__proto__||u()(e)).call(this,n));return t.nodeList=[],t.components=new s.a,t.renderer=new A.a.Renderer,t}return b()(e,n),p()(e,[{key:"componentDidMount",value:function(){this.renderDOM()}},{key:"componentDidUpdate",value:function(){this.renderDOM()}},{key:"componentWillUnmount",value:function(){this.nodeList.forEach(function(n){k.a.unmountComponentAtNode(n)})}},{key:"renderDOM",value:function(){var n=!0,e=!1,t=void 0;try{for(var o,i=r()(this.components);!(n=(o=i.next()).done);n=!0){var c=o.value,s=a()(c,2),l=s[0],u=s[1],d=document.getElementById(l);this.nodeList.push(d),d instanceof HTMLElement&&k.a.render(u,d)}}catch(n){e=!0,t=n}finally{try{!n&&i.return&&i.return()}finally{if(e)throw t}}}},{key:"render",value:function(){var n=this,e=this.document(localStorage.getItem("LANGUAGE")||"zh-CN"),t=e.document,o=e.className;if("string"==typeof t){this.components.clear();var r=A()(t.replace(/:::\s?api\s?([^]+?):::/g,"").replace(/:::\s?demo\s?([^]+?):::/g,function(e,t,o){var r=o.toString(36);return n.components.set(r,_.a.createElement(w,n.props,t)),"<div id="+r+"></div>"}),{renderer:this.renderer});return _.a.createElement(T.a,{className:o},_.a.createElement("main",{dangerouslySetInnerHTML:{__html:r}}),_.a.createElement(M.a,null))}return _.a.createElement("span",null)}}]),e}(_.a.Component);e.a=O},42:function(n,e,t){"use strict";e.__esModule=!0;var o=function(n){return n&&n.__esModule?n:{default:n}}(t(129));e.default=function(n,e,t){return e in n?(0,o.default)(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}},436:function(n,e){n.exports="## 选择器 Picker & Select\n\n:::demo 基本用法\n```jsx\nimport { Cell, Button, Picker, Toast } from 'zarm';\n\nconst SINGLE_DATA = [\n  { value: '1', label: '选项一' },\n  { value: '2', label: '选项二' },\n];\n\n// 普通多列数据\nconst MULTI_DATA = [\n  [\n    { value: '1', label: '选项一' },\n    { value: '2', label: '选项二' },\n  ],\n  [\n    { value: '3', label: '选项A' },\n    { value: '4', label: '选项B' },\n  ],\n];\n\n// 级联数据\nconst CASCADE_DATA = [\n  {\n    code: '1',\n    label: '北京市',\n    children: [\n      { code: '11', label: '海淀区' },\n      { code: '12', label: '西城区' },\n    ],\n  },\n  {\n    code: '2',\n    label: '上海市',\n    children: [\n      { code: '21', label: '杨浦区' },\n      { code: '22', label: '静安区' },\n    ],\n  },\n];\n\nconst DIY_DATA = [\n  {\n    value: '1',\n    name: '北京市',\n    children: [\n      { value: '11', name: '海淀区' },\n      { value: '12', name: '西城区' },\n    ],\n  },\n  {\n    value: '2',\n    name: '上海市',\n    children: [\n      { value: '21', name: '黄埔区' },\n      { value: '22', name: '虹口区' },\n    ],\n  },\n];\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      single: {\n        visible: false,\n        value: '',\n        dataSource: SINGLE_DATA,\n      },\n      multi: {\n        visible: false,\n        value: [],\n        dataSource: MULTI_DATA,\n      },\n      cascade: {\n        visible: false,\n        value: [],\n        dataSource: [],\n      },\n      diy: {\n        visible: false,\n        value: [],\n        dataSource: DIY_DATA,\n      },\n    };\n  }\n\n  componentDidMount() {\n    // 异步加载数据源测试\n    setTimeout(() => {\n      const { cascade } = this.state;\n\n      cascade.dataSource = CASCADE_DATA;\n      cascade.value = ['1', '12'];\n      cascade.valueMember = \"code\";\n      this.setState({ cascade });\n    }, 0);\n  }\n\n  toggle(key) {\n    const state = this.state[key];\n    state.visible = !state.visible;\n    this.setState({ [`${key}`]: state });\n  }\n\n  render() {\n    const {\n      single,\n      multi,\n      cascade,\n      diy,\n    } = this.state;\n\n    return (\n      <div>\n        <Cell\n          description={\n            <Button size=\"xs\" onClick={() => this.toggle('single')}>选择</Button>\n          }\n        >\n          单列\n        </Cell>\n\n        <Cell\n          description={\n            <Button size=\"xs\" onClick={() => this.toggle('multi')}>选择</Button>\n          }\n        >\n          多列\n        </Cell>\n\n        <Cell\n          description={\n            <Button size=\"xs\" onClick={() => this.toggle('cascade')}>选择</Button>\n          }\n        >\n          级联\n        </Cell>\n\n        <Cell\n          description={\n            <Button size=\"xs\" onClick={() => this.toggle('diy')}>选择</Button>\n          }\n        >\n          自定义\n        </Cell>\n\n        <Picker\n          visible={single.visible}\n          value={single.value}\n          dataSource={single.dataSource}\n          onOk={(selected) => {\n            console.log('Picker onOk: ', selected);\n            single.value = selected.map(item => item.value);\n            this.setState({ single });\n            Toast.show(JSON.stringify(selected));\n            this.toggle('single');\n          }}\n          onCancel={() => this.toggle('single')}\n        />\n\n        <Picker\n          visible={multi.visible}\n          value={multi.value}\n          dataSource={multi.dataSource}\n          onOk={(selected) => {\n            console.log('Picker onOk: ', selected);\n            multi.value = selected.map(item => item.value);\n            this.setState({ multi });\n            Toast.show(JSON.stringify(selected));\n            this.toggle('multi');\n          }}\n          onCancel={() => this.toggle('multi')}\n        />\n\n        <Picker\n          visible={cascade.visible}\n          value={cascade.value}\n          dataSource={cascade.dataSource}\n          valueMember={cascade.valueMember}\n          onOk={(selected) => {\n            console.log('Picker onOk: ', selected);\n            cascade.value = selected.map(item => item.code);\n            this.setState({ cascade });\n            Toast.show(JSON.stringify(selected));\n            this.toggle('cascade');\n          }}\n          onCancel={() => this.toggle('cascade')}\n        />\n\n        <Picker\n          visible={diy.visible}\n          title=\"custom title\"\n          cancelText=\"Cancel\"\n          okText=\"Ok\"\n          dataSource={diy.dataSource}\n          value={diy.value}\n          valueMember=\"value\"\n          itemRender={data => data.name}\n          onOk={(selected) => {\n            console.log('Picker onOk: ', selected);\n            diy.value = selected.map(item => item.value);\n            this.setState({\n              diy,\n            });\n            Toast.show(JSON.stringify(selected));\n            this.toggle('diy');\n          }}\n          onCancel={() => this.toggle('diy')}\n        />\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n:::\n\n\n:::demo 表单选择 Select\n```jsx\nimport { Select, Cell } from 'zarm';\n\n// 级联数据\nconst CASCADE_DATA = [\n  {\n    value: '1',\n    label: '北京市',\n    children: [\n      { value: '11', label: '海淀区' },\n      { value: '12', label: '西城区' },\n    ],\n  },\n  {\n    value: '2',\n    label: '上海市',\n    children: [\n      { value: '21', label: '杨浦区' },\n      { value: '22', label: '静安区' },\n    ],\n  },\n];\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n      this.state = {\n        visible: false,\n        value: [],\n        dataSource: CASCADE_DATA,\n      };\n  }\n\n  componentDidMount() {\n    // 异步加载数据源测试\n    setTimeout(() => {\n      this.setState({\n        dataSource: CASCADE_DATA,\n        value: ['1', '12'],\n      });\n    }, 0);\n  }\n\n  render() {\n    const { visible, visible2, value, dataSource } = this.state;\n    return (\n      <div>\n        <Cell title=\"城市\">\n          <Select\n            visible={visible}\n            placeholder=\"请选择省市区\"\n            value={value}\n            dataSource={dataSource}\n            onOk={(selected) => {\n              console.log('Select onOk: ', selected);\n              this.setState({\n                value: selected.map(item => item.value),\n              });\n            }}\n          />\n        </Cell>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n:::\n\n\n:::demo 平铺选择 PickerView\n```jsx\nimport { PickerView } from 'zarm';\n\n// 级联数据\nconst CASCADE_DATA = [\n  {\n    code: '1',\n    label: '北京市',\n    children: [\n      { code: '11', label: '海淀区' },\n      { code: '12', label: '西城区' },\n    ],\n  },\n  {\n    code: '2',\n    label: '上海市',\n    children: [\n      { code: '21', label: '杨浦区' },\n      { code: '22', label: '静安区' },\n    ],\n  },\n];\n\nclass Demo extends React.Component {\n    constructor(props) {\n    super(props);\n    this.state = {\n      value: [],\n      dataSource: CASCADE_DATA,\n    };\n  }\n\n  componentDidMount() {\n    setTimeout(() => {\n      this.setState({\n        value: ['1', '12'],\n        dataSource: [\n          {\n            code: '1',\n            label: '北京市',\n            children: [\n              { code: '11', label: '海淀区' },\n              { code: '12', label: '西城区' },\n            ],\n          },\n          {\n            code: '2',\n            label: '上海市',\n            children: [\n              { code: '21', label: '杨浦区' },\n              { code: '22', label: '静安区' },\n            ],\n          },\n        ],\n        valueMember: 'code'\n      })\n    })\n  }\n\n  render() {\n    return (\n      <div>\n        <PickerView\n          value={this.state.value}\n          valueMember=\"code\"\n          dataSource={this.state.dataSource}\n          onChange={selected => console.log('PickerView onChange: ', selected)}\n        />\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n:::\n\n\n:::api API\n\n| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |\n| :--- | :--- | :--- | :--- | :--- |\n| prefixCls | string | za-picker | | 类名前缀 |\n| className | string | | | 追加类名 |\n| dataSource | object[] | [ ] | | 数据源 |\n| value | string &#124; string[] &#124; number[] |  | | 值 |\n| defaultValue | string &#124; string[] &#124; number[] |  | | 初始值 |\n| valueMember | string | 'value' | | 值字段对应的key \n| itemRender | func | <code>(data?: object) => data.label</code> | | 单个选项的展示 |\n| disabled | boolean | false | | 是否禁用 |\n| cols | number | | | 级联选择器的级数 |\n| onChange | <code>(selected?: object) => void</code> | noop | \\(selected: object\\) | 值变化时触发的回调函数 |\n\n#### 仅 Picker & Select 支持的属性\n| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |\n| :--- | :--- | :--- | :--- | :--- |\n| visible | boolean | false | | 是否展示 |\n| title | string | '请选择' | | 选择器标题 |\n| okText | string | '确定' | | 确定栏文字 |\n| cancelText | string | '取消' | | 取消栏文字 |\n| onOk | <code>(selected?: object) => void</code> | noop | \\(selected: object\\) | 点击确定时触发的回调函数 |\n| onCancel | <code>() => void</code> | noop | | 点击取消时触发的回调函数 |\n| onMaskClick | <code>() => void</code> | noop | | 点击遮罩层时触发的回调函数 |\n\n#### 仅 Select 支持的属性\n| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |\n| :--- | :--- | :--- | :--- | :--- |\n| placeholder | string | '请选择' | | 输入提示信息 |\n| displayRender | <code>(selected?: object) => string</code> | noop | \\(selected: object\\) | 所选值的展示 |\n\n:::"},483:function(n,e,t){}}]);