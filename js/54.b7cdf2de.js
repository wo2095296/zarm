(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{710:function(t,n){t.exports="# Popper \u6c14\u6ce1\u5c42\n\n\n## \u57fa\u672c\u7528\u6cd5\n```jsx\nimport { Cell, Button, Popper, Select } from 'zarm';\n\nclass Demo extends React.Component {\n  state = {\n    visible: false,\n    direction: 'top',\n    trigger: 'click',\n  }\n\n  render() {\n    const { visible, direction, trigger } = this.state;\n\n    return (\n      <>\n        <Cell className=\"basic-demo\">\n          <Popper\n            content=\"\u6211\u662f\u6c14\u6ce1\u5c42\u7684\u5185\u5bb9\"\n            visible={visible}\n            trigger={trigger}\n            direction={direction}\n            className=\"custom-content\"\n          >\n            <Button theme=\"primary\" size=\"xs\" onClick={() => trigger === 'manual' && this.setState({ visible: !visible })}>\n              \u70b9\u51fb{visible ? '\u9690\u85cf' : '\u663e\u793a'}\n            </Button>\n          </Popper>\n        </Cell>\n        <Cell hasArrow title=\"\u663e\u793a\u65b9\u5411\">\n          <Select\n            value={direction}\n            dataSource={[\n              { value: 'topLeft', label: 'topLeft' },\n              { value: 'top', label: 'top' },\n              { value: 'topRight', label: 'topRight' },\n              { value: 'rightTop', label: 'rightTop' },\n              { value: 'right', label: 'right' },\n              { value: 'rightBottom', label: 'rightBottom' },\n              { value: 'bottomLeft', label: 'bottomLeft' },\n              { value: 'bottom', label: 'bottom' },\n              { value: 'bottomRight', label: 'bottomRight' },\n              { value: 'leftTop', label: 'leftTop' },\n              { value: 'left', label: 'left' },\n              { value: 'leftBottom', label: 'leftBottom' },\n            ]}\n            onOk={(selected) => {\n              this.setState({\n                direction: selected[0].value,\n              });\n            }}\n          />\n        </Cell>\n        <Cell hasArrow title=\"\u89e6\u53d1\u65b9\u5f0f\">\n          <Select\n            value={trigger}\n            dataSource={[\n              { value: 'click', label: 'click\uff08\u70b9\u51fb\u72b6\u6001\u89e6\u53d1\uff09' },\n              { value: 'hover', label: 'hover\uff08hover\u72b6\u6001\u89e6\u53d1\uff09' },\n              { value: 'focus', label: 'focus\uff08\u805a\u7126\u72b6\u6001\u89e6\u53d1\uff09' },\n              { value: 'manual', label: 'manual\uff08\u53d7\u63a7\u89e6\u53d1\uff09' },\n              { value: 'contextMenu', label: 'contextMenu\uff08\u53f3\u952e\u89e6\u53d1\uff09' },\n            ]}\n            onOk={(selected) => {\n              this.setState({\n                trigger: selected[0].value,\n                visible: false,\n              });\n            }}\n          />\n        </Cell>\n      </>\n    );\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n## \u81ea\u5b9a\u4e49\u7bad\u5934\n```jsx\nimport { Cell, Button, Popper, Radio } from 'zarm';\n\nclass Demo extends React.Component {\n  state = {\n    arrow: '0'\n  }\n\n  render() {\n    const { arrow } = this.state\n\n    return (\n      <>\n        <Cell description={\n          <Radio.Group\n            type=\"button\"\n            value={this.state.arrow}\n            onChange={value => {\n              this.setState({ arrow: value });\n            }}\n          >\n            <Radio value=\"0\">\u8ddf\u968f\u65b9\u5411</Radio>\n            <Radio value=\"1\">\u5143\u7d20\u4e2d\u5fc3</Radio>\n          </Radio.Group>\n        }>\n          \u7bad\u5934\u4f4d\u7f6e\n        </Cell>\n        <Cell className=\"direction-demo\">\n          <div>\n            <div style={{ marginLeft: 60 }}>\n              <Popper arrowPointAtCenter={arrow === '1'} className=\"custom-arrow-content\" hasArrow direction=\"topLeft\" content=\"topLeft text\">\n                <Button block size=\"xs\">TL</Button>\n              </Popper>\n\n              <Popper arrowPointAtCenter={arrow === '1'} className=\"custom-arrow-content\" hasArrow direction=\"top\" content=\"top text\">\n                <Button block size=\"xs\">Top</Button>\n              </Popper>\n\n              <Popper arrowPointAtCenter={arrow === '1'} className=\"custom-arrow-content\" hasArrow direction=\"topRight\" content=\"topRight text\">\n                <Button block size=\"xs\">TR</Button>\n              </Popper>\n            </div>\n\n            <div style={{ width: 60, float: 'left', clear: 'both' }}>\n              <Popper arrowPointAtCenter={arrow === '1'} className=\"custom-arrow-content\" hasArrow direction=\"leftTop\" content=\"leftTop text\">\n                <Button block size=\"xs\">LT</Button>\n              </Popper>\n\n              <Popper arrowPointAtCenter={arrow === '1'} className=\"custom-arrow-content\" hasArrow direction=\"left\" content=\"left text\">\n                <Button block size=\"xs\">Left</Button>\n              </Popper>\n\n              <Popper arrowPointAtCenter={arrow === '1'} className=\"custom-arrow-content\" hasArrow direction=\"leftBottom\" content=\"leftBottom text\">\n                <Button block size=\"xs\">LB</Button>\n              </Popper>\n            </div>\n\n            <div style={{ width: 60, marginLeft: 60 * 4 + 20 }}>\n              <Popper arrowPointAtCenter={arrow === '1'} className=\"custom-arrow-content\" hasArrow direction=\"rightTop\" content=\"rightTop text\">\n                <Button block size=\"xs\">RT</Button>\n              </Popper>\n\n              <Popper arrowPointAtCenter={arrow === '1'} className=\"custom-arrow-content\" hasArrow direction=\"right\" content=\"right text\">\n                <Button block size=\"xs\">Right</Button>\n              </Popper>\n\n              <Popper arrowPointAtCenter={arrow === '1'} className=\"custom-arrow-content\" hasArrow direction=\"rightBottom\" content=\"rightBottom text\">\n                <Button block size=\"xs\">RB</Button>\n              </Popper>\n            </div>\n\n            <div style={{ marginLeft: 60, clear: 'both' }}>\n              <Popper arrowPointAtCenter={arrow === '1'} className=\"custom-arrow-content\" hasArrow direction=\"bottomLeft\" content=\"bottomLeft text\">\n                <Button block size=\"xs\">BL</Button>\n              </Popper>\n\n              <Popper arrowPointAtCenter={arrow === '1'} className=\"custom-arrow-content\" hasArrow direction=\"bottom\" content=\"bottom text\">\n                <Button block size=\"xs\">Bottom</Button>\n              </Popper>\n\n              <Popper arrowPointAtCenter={arrow === '1'} className=\"custom-arrow-content\" hasArrow direction=\"bottomRight\" content=\"bottomRight text\">\n                <Button block size=\"xs\">BR</Button>\n              </Popper>\n            </div>\n          </div>\n        </Cell>\n      </>\n    );\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n### API\n| \u5c5e\u6027 | \u7c7b\u578b | \u9ed8\u8ba4\u503c | \u8bf4\u660e |\n| :--- | :--- | :--- | :--- |\n| className | string | - | \u6c14\u6ce1\u5c42\u7c7b\u540d\u8ffd\u52a0 |\n| content | ReactNode | - | \u663e\u793a\u5185\u5bb9 |\n| hasArrow | boolean | false | \u662f\u5426\u663e\u793a\u7bad\u5934\u8282\u70b9<font color=\"red\">\uff08\u6ce8\uff1a\u9700\u8981\u81ea\u884c\u5b9a\u4e49\u7bad\u5934\u6837\u5f0f\uff09</font> |\n| arrowPointAtCenter | boolean | false | \u7bad\u5934\u662f\u5426\u6307\u5411\u76ee\u6807\u5143\u7d20\u4e2d\u5fc3 |\n| mouseEnterDelay | number | 100 | \u9f20\u6807\u79fb\u5165\u663e\u793a\u6c14\u6ce1\u5c42\u7684\u5ef6\u65f6\u65f6\u95f4\uff08\u5355\u4f4d\uff1a\u6beb\u79d2\uff09 |\n| mouseLeaveDelay | number | 100 | \u9f20\u6807\u79fb\u51fa\u9690\u85cf\u6c14\u6ce1\u5c42\u7684\u5ef6\u65f6\u65f6\u95f4\uff08\u5355\u4f4d\uff1a\u6beb\u79d2\uff09 |\n| direction | string | 'top' | \u663e\u793a\u65b9\u5411\uff0c\u53ef\u9009\u503c `topLeft`\u3001`top`\u3001`topRight`\u3001`rightTop`\u3001`right`\u3001`rightBottom`\u3001`bottomLeft`\u3001`bottom`\u3001`bottomRight`\u3001`leftTop`\u3001`left`\u3001`leftBottom` |\n| trigger | string | \u79fb\u52a8\u7aef\u4e3a'click' <br /> \u684c\u9762\u7aef\u4e3a'hover' | \u89e6\u53d1\u65b9\u5f0f\uff0c\u53ef\u9009\u503c\u4e3a\uff1a`click` \u70b9\u51fb\u89e6\u53d1\u72b6\u6001\u3001`hover` hover\u72b6\u6001\u89e6\u53d1\u3001`focus` \u805a\u7126\u72b6\u6001\u89e6\u53d1\u3001`manual` \u53d7\u63a7\u89e6\u53d1\u3001`contextMenu` \u53f3\u952e\u89e6\u53d1 |\n| visible | boolean | false | \u662f\u5426\u663e\u793a\uff0c`trigger='manual'` \u65f6\u6709\u6548 |\n| onVisibleChange | (visible?: boolean) => void | noop | \u663e\u793a/\u9690\u85cf \u6c14\u6ce1\u5c42\u89e6\u53d1\u7684\u4e8b\u4ef6 |\n"}}]);
//# sourceMappingURL=54.b7cdf2de.js.map