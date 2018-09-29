(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{365:function(n,e,t){"use strict";t.r(e);var o=t(4),i=t.n(o),r=t(5),s=t.n(r),a=t(2),c=t.n(a),l=t(6),u=t.n(l),d=function(n){function e(){var n,o,r,a;s()(this,e);for(var l=arguments.length,u=Array(l),d=0;d<l;d++)u[d]=arguments[d];return o=r=c()(this,(n=e.__proto__||i()(e)).call.apply(n,[this].concat(u))),r.document=function(){return{document:t(418),className:"actionsheet-page"}},a=o,c()(r,a)}return u()(e,n),e}(t(411).a);e.default=d},401:function(n,e,t){"use strict";t(241),t(329)},411:function(n,e,t){"use strict";var o=t(406),i=t.n(o),r=t(407),s=t.n(r),a=t(408),c=t.n(a),l=t(4),u=t.n(l),d=t(5),m=t.n(d),h=t(7),p=t.n(h),v=t(2),f=t.n(v),g=t(6),C=t.n(g),k=t(0),b=t.n(k),y=t(55),S=t.n(y),N=t(409),_=t.n(N),M=t(410),E=t(1),x=t.n(E),T=t(413),A=t.n(T),B=(t(414),t(415),t(416),t(333),function(n){function e(){return m()(this,e),f()(this,(e.__proto__||u()(e)).apply(this,arguments))}return C()(e,n),p()(e,[{key:"componentDidMount",value:function(){var n=this,e=this.props,t=e.onChange,o=e.value;this.cm=A()(this.editor,{mode:"jsx",theme:"react",keyMap:"sublime",viewportMargin:1/0,lineNumbers:!1,dragDrop:!1}),this.cm.setValue(o),this.cm.on("changes",function(e){t&&(clearTimeout(n.timeout),n.timeout=setTimeout(function(){t(e.getValue())},300))})}},{key:"render",value:function(){var n=this;return b.a.createElement("div",{className:"editor",ref:function(e){n.editor=e}})}}]),e}(k.Component)),O=B;B.propTypes={onChange:x.a.func,value:x.a.string},B.defaultProps={onChange:function(){},value:""};t(401);var w=function(n){function e(n){m()(this,e);var t=f()(this,(e.__proto__||u()(e)).call(this,n));return t.toggleShowCode=function(){t.setState({isOpen:!t.state.isOpen})},t.containerId=""+parseInt(1e9*Math.random(),10).toString(36),t.document=t.props.children.match(/([^]*)\n?(```[^]+```)/),t.title=String(t.document[1]),t.source=t.document[2].match(/```(.*)\n?([^]+)```/),t.state={isOpen:!1},t}return C()(e,n),p()(e,[{key:"componentDidMount",value:function(){this.renderSource(this.source[2])}},{key:"componentWillUnmount",value:function(){this.containerElem&&S.a.unmountComponentAtNode(this.containerElem)}},{key:"renderSource",value:function(n){var e=this;Promise.all([t.e(5),t.e(6),t.e(71)]).then(t.bind(null,544)).then(function(n){return{args:["context","React","ReactDOM","zarm"],argv:[e,b.a,S.a,n]}}).then(function(t){var o=t.args;t.argv;n=n.replace(/import\s+\{\s+(.*)\s+\}\s+from\s+'zarm';/,"const { $1 } = zarm;").replace("mountNode","document.getElementById('"+e.containerId+"')");var i=Object(M.transform)(n,{presets:["es2015","react"]}).code;o.push(i),e.source[2]=n}).catch(function(n){0})}},{key:"render",value:function(){var n=this;return b.a.createElement("div",null,b.a.createElement("h3",null,this.title),b.a.createElement("div",{className:"demo"},b.a.createElement("div",{className:"demo-code"},b.a.createElement("div",{className:"demo-code-editor",ref:function(e){n.code=e},dangerouslySetInnerHTML:{__html:this.description}}),b.a.createElement(O,{value:this.source[2],onChange:function(e){return n.renderSource(e)}}))))}}]),e}(k.Component),D=function(n){function e(n){m()(this,e);var t=f()(this,(e.__proto__||u()(e)).call(this,n));return t.nodeList=[],t.components=new c.a,t.renderer=new _.a.Renderer,t}return C()(e,n),p()(e,[{key:"componentDidMount",value:function(){this.renderDOM()}},{key:"componentDidUpdate",value:function(){this.renderDOM()}},{key:"componentWillUnmount",value:function(){this.nodeList.forEach(function(n){S.a.unmountComponentAtNode(n)})}},{key:"renderDOM",value:function(){var n=!0,e=!1,t=void 0;try{for(var o,r=i()(this.components);!(n=(o=r.next()).done);n=!0){var a=o.value,c=s()(a,2),l=c[0],u=c[1],d=document.getElementById(l);this.nodeList.push(d),d instanceof HTMLElement&&S.a.render(u,d)}}catch(n){e=!0,t=n}finally{try{!n&&r.return&&r.return()}finally{if(e)throw t}}}},{key:"render",value:function(){var n=this,e=this.document(localStorage.getItem("LANGUAGE")||"zh-CN"),t=e.document,o=e.className;if("string"==typeof t){this.components.clear();var i=_()(t.replace(/:::\s?api\s?([^]+?):::/g,function(n,e){return e}).replace(/:::\s?demo\s?([^]+?):::/g,function(e,t,o){var i=o.toString(36);return n.components.set(i,b.a.createElement(w,n.props,t)),"<div id="+i+"></div>"}),{renderer:this.renderer});return b.a.createElement("div",{className:o,dangerouslySetInnerHTML:{__html:i}})}return b.a.createElement("span",null)}}]),e}(b.a.Component);e.a=D},418:function(n,e){n.exports="## 动作面板 ActionSheet\n\n:::demo 基本用法\n```jsx\nimport { ActionSheet, Cell, Button } from 'zarm';\n\nconst BUTTONS = [\n  {\n    text: '操作一',\n    onClick: () => console.log('点击操作一'),\n  },\n  {\n    text: '操作二',\n    onClick: () => console.log('点击操作二'),\n  },\n  {\n    theme: 'error',\n    text: '操作三',\n    onClick: () => console.log('点击操作三'),\n  },\n];\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      visible1: false,\n      visible2: false,\n      visible3: false,\n    };\n  }\n\n  toggle(key) {\n    this.setState({\n      [`${key}`]: !this.state[key],\n    });\n  }\n\n  render() {\n    return (\n      <div>\n        <Cell\n          description={\n            <Button size=\"xs\" onClick={() => this.toggle('visible1')}>开启</Button>\n          }\n        >\n          普通\n        </Cell>\n        <Cell\n          description={\n            <Button size=\"xs\" onClick={() => this.toggle('visible2')}>开启</Button>\n          }\n        >\n          带取消操作\n        </Cell>\n        <Cell\n          description={\n            <Button size=\"xs\" onClick={() => this.toggle('visible3')}>开启</Button>\n          }\n        >\n          圆角、留边\n        </Cell>\n\n        <ActionSheet\n          visible={this.state.visible1}\n          actions={BUTTONS}\n          onMaskClick={() => this.toggle('visible1')}\n        />\n        <ActionSheet\n          visible={this.state.visible2}\n          actions={BUTTONS}\n          onMaskClick={() => this.toggle('visible2')}\n          onCancel={() => this.toggle('visible2')}\n        />\n        <ActionSheet\n          spacing\n          shape=\"radius\"\n          visible={this.state.visible3}\n          actions={BUTTONS}\n          onMaskClick={() => this.toggle('visible3')}\n          onCancel={() => this.toggle('visible3')}\n        />\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n:::\n\n\n:::api API\n\n| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |\n| :--- | :--- | :--- | :--- | :--- |\n| prefixCls | string | za-action-sheet | | 类名前缀 |\n| className | string | | | 追加类名 |\n| shape | string | | 'radius' | 形状 |\n| visible | boolean | false | | 是否显示 |\n| spacing | boolean | false | | 是否和外部有间距 |\n| actions | Action[] | [ ] | Action = { text: string, <br /> theme?: 'default' &#124; 'primary' &#124; 'info' &#124; 'success' &#124; 'warning' &#124; 'error', <br /> className?: string, <br /> onClick?: () => void} | 动作列表 |\n| onMaskClick | <code>() => void</code> | noop | | 点击遮罩层时触发的回调函数 |\n| onCancel | <code>() => void</code> | noop | | 显示取消菜单，点击时触发的回调函数 |\n| cancelText | string | '取消' |  | 取消菜单的文案 |\n\n:::\n"}}]);