(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["e82c6bb1"],{e82c6bb1:function(a,e,l){"use strict";l.d(e,"__esModule",{value:!0}),l.d(e,"texts",{enumerable:!0,get:function(){return r;}}),l("b18777dd");let r=[{value:"\u5728\u65E5\u5E38\u5F00\u53D1\u8FC7\u7A0B\u4E2D\uFF0C\u4F60\u662F\u5426\u601D\u8003\u8FC7\u4E00\u4E2A\u95EE\u9898\u3002\u90A3\u5C31\u662F\u8303\u56F4\u9650\u5B9A\u548C\u5B9E\u9645\u503C\u4E0D\u540C\u7684\u65F6\u5019\uFF0C\u5E94\u8BE5\u5982\u4F55\u53BB\u5904\u7406\uFF1F\u5047\u8BBE\u6211\u4EEC\u6709\u4E00\u4E2A\u5C55\u793A\u7EC4\u4EF6\uFF0C\u5B83\u5F88\u7B80\u5355\u7684\u5C06\u4F60\u7684\u503C\u8FDB\u884C\u5C55\u793A\uFF1A",paraId:0},{value:'interface StrProps {\n  value: string;\n}\n\nfunction MyStr({ value }: StrProps) {\n  return <div>{value}</div>;\n}\n<MyStr value="Hello World" />;\n',paraId:1},{value:"\u6BEB\u65E0\u7591\u95EE\uFF0C\u9875\u9762\u4E0A\u5C31\u8BE5\u5C55\u793A ",paraId:2},{value:"Hello World",paraId:2},{value:"\u3002\u63A5\u7740\uFF0C\u6211\u4EEC\u52A0\u4E2A\u8303\u56F4\u9650\u5B9A\uFF1A",paraId:2},{value:"interface StrProps {\n  value: string;\n  maxLen?: number;\n}\n",paraId:3},{value:"\u8FD9\u4E2A\u65F6\u5019\u5982\u679C\u6211\u4EEC\u4F7F\u7528\u4E86\u8D85\u51FA\u8303\u56F4\u7684\u503C\u5E94\u8BE5\u663E\u793A\u4EC0\u4E48\uFF1F",paraId:4},{value:'<MyStr value="Hello World" maxLen={5}>\n',paraId:5},{value:"\u201C\u663E\u800C\u6613\u89C1\u201D\uFF0C\u65E2\u7136\u6709\u4E86 ",paraId:6},{value:"maxLen",paraId:6},{value:"\uFF0C\u90A3\u4E48\u5C31\u5E94\u8BE5\u663E\u793A ",paraId:6},{value:"Hello",paraId:6},{value:" \u800C\u975E ",paraId:6},{value:"Hello World",paraId:6},{value:"\u3002",paraId:6},{value:"\u4F46\u662F\u8FD9\u79CD\u76F4\u89C9\u7684\u5904\u7406\u65B9\u5F0F\uFF0C\u5374\u5E76\u4E0D\u662F\u6240\u6709\u60C5\u51B5\u4E0B\u90FD\u662F\u6B63\u786E\u7684\u3002\u5982\u679C\u4F60\u4F7F\u7528\u539F\u751F\u7684 input\uFF0C\u4F60\u5C31\u53D1\u73B0\u8868\u73B0\u5E76\u4E0D\u662F\u8FD9\u6837\u7684\uFF1A",paraId:7},{value:'<input value="Hello World" maxLength={5} />\n',paraId:8},{value:"\u6309\u7167\u6807\u51C6\u63CF\u8FF0\uFF0C",paraId:9},{value:"maxLength",paraId:9},{value:" \u53EA\u9650\u5236\u7528\u6237\u8F93\u5165\u3002\u8FD9\u662F\u6807\u51C6\u9519\u4E86\u5417\uFF1F",paraId:9},{value:"A form control maxlength attribute, controlled by the dirty value flag, declares a limit on the number of characters a user can input.",paraId:10},{value:"\u5E26\u7740\u4E0A\u9762\u7684\u7591\u95EE\uFF0C\u6211\u4EEC\u60F3\u8C61\u4E00\u4E2A\u8F93\u5165\u573A\u666F\u3002\u73B0\u5728\u4F60\u6709\u4E00\u4E2A\u7535\u5546\u7CFB\u7EDF\uFF0C\u7ED9\u5546\u54C1\u8BBE\u5B9A\u4EF7\u683C\uFF1A",paraId:11,tocIndex:0},{value:'<Form>\n  <Form.Item label="Name" name="name">\n    <Input />\n  </Form.Item>\n\n  <Form.Item label="Price" name="price">\n    <InputNumber />\n  </Form.Item>\n</Form>\n',paraId:12,tocIndex:0},{value:"\u67D0\u5929\u4F60\u7684\u7ECF\u7406\u8BF4\uFF0C\u6211\u4EEC\u7684\u5546\u54C1\u4EF7\u683C\u6309\u89C4\u5B9A\u4E0D\u80FD\u8D85\u8FC7 99 \u5143\uFF0C\u4F60\u8981\u76F4\u63A5\u5728\u8868\u5355\u4E0A\u505A\u9650\u5236\u3002\u8FD9\u4E2A\u6539\u52A8\u5E76\u4E0D\u96BE\uFF1A",paraId:13,tocIndex:0},{value:"--  <InputNumber />\n++  <InputNumber max={99} />\n",paraId:14,tocIndex:0},{value:"\u4F46\u662F\u5BF9\u4E8E\u73B0\u6709\u7684\u5546\u54C1\uFF0C\u6211\u4EEC\u663E\u7136\u4E0D\u80FD\u76F4\u63A5\u5728\u8868\u5355\u4E0A\u505A\u9650\u5236\u3002\u5426\u5219\uFF0C\u7528\u6237\u5728\u7F16\u8F91\u5546\u54C1\u7684\u65F6\u5019\uFF0C\u5C31\u4F1A\u53D1\u73B0\u81EA\u5DF1\u7684\u5546\u54C1\u4EF7\u683C\u88AB\u6539\u4E86\u3002\u8FD9\u663E\u7136\u662F\u4E0D\u5408\u7406\u7684\u3002",paraId:15,tocIndex:0},{value:"\uFF08\u7528\u6237\u6C38\u8FDC\u65E0\u6CD5\u660E\u767D\u4E3A\u4EC0\u4E48\u540E\u53F0\u7684\u6570\u636E\u548C\u770B\u5230\u7684\u5BF9\u4E0D\u4E0A\u4E86\uFF09",paraId:16,tocIndex:0},{value:"\u5B9E\u9645\u4E0A\u5728\u5F88\u591A\u573A\u666F\u4E0B\uFF0C\u7EC4\u4EF6\u90FD\u4E0D\u5E94\u8BE5\u76F4\u63A5\u4FEE\u6539\u5B9E\u9645\u503C\u3002\u5C24\u5176\u662F\u8F93\u5165\u578B\u7EC4\u4EF6\uFF0C\u64C5\u81EA\u66F4\u6539\u5C55\u793A\u503C\u4F1A\u51FA\u73B0\u975E\u5E38\u4E25\u91CD\u7684\u540E\u679C\u3002",paraId:17,tocIndex:0},{value:"\u5728\u7EC4\u4EF6\u5E93\u5C42\u9762\uFF0C\u6211\u4EEC\u4E0D\u80FD\u201C\u63A8\u6D4B\u201D\u7528\u6237\u7684\u4F7F\u7528\u573A\u666F\uFF0C\u56E0\u800C\u9700\u8981\u4EE5\u6700\u4FDD\u5B88\u7684\u65B9\u5F0F\u5B9E\u73B0\u8FB9\u754C\u573A\u666F\u7684\u5904\u7406\u3002\u4F46\u662F\u540C\u65F6\u6211\u4EEC\u5176\u5B9E\u53EF\u4EE5\u505A\u4E00\u4E9B\u4F18\u5316\u624B\u6BB5\u3002\u6BD4\u5982\u8BF4\u5C06\u9650\u5236\u8BBE\u7F6E\u5230 Form.Item \u7684 ",paraId:18,tocIndex:1},{value:"rules",paraId:18,tocIndex:1},{value:" \u4E0A\uFF0C\u5229\u7528\u8868\u5355\u6821\u9A8C\u80FD\u529B\u6765\u505A\u9650\u5236\uFF1A",paraId:18,tocIndex:1},{value:"\u5BF9\u4E8E\u4E00\u4E9B\u7EC4\u4EF6\u672C\u8EAB\uFF0C\u4E5F\u53EF\u4EE5\u6DFB\u52A0\u663E\u5F0F\u7684\u6837\u5F0F\u63D0\u9192\uFF1A",paraId:19,tocIndex:1},{value:"\u5BF9\u4E8E\u975E\u8F93\u5165\u578B\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF0C\u4E5F\u53EF\u4EE5\u8003\u8651\u901A\u8FC7\u8BBE\u8BA1\u6765\u63D0\u9192\u7528\u6237\u3002\u6BD4\u5982\u8BF4\u6211\u4EEC\u53EF\u4EE5\u5728\u5C55\u793A\u7EC4\u4EF6\u4E0A\u6DFB\u52A0\u4E00\u4E2A Tooltip\uFF1A",paraId:20,tocIndex:1},{value:'// Same demo we\'ve seen before\n<MyStr value="Hello World" maxLen={5}>\n',paraId:21,tocIndex:1},{value:"\u6216\u8005\u4F7F\u7528\u4E00\u4E9B\u5176\u4ED6\u7684\u5C55\u793A\u65B9\u5F0F\uFF1A",paraId:22,tocIndex:1},{value:"\u5728\u8FDB\u884C\u7EC4\u4EF6\u7814\u53D1\u65F6\uFF0C\u9700\u8981\u614E\u91CD\u5904\u7406\u8FB9\u754C\u573A\u666F\u3002\u5728\u5927\u578B\u9879\u76EE\u4E2D\uFF0C\u4E0A\u6E38\u4F7F\u7528\u8005\u53EF\u80FD\u5E76\u4E0D\u77E5\u9053\u4F60\u7684\u5185\u90E8\u903B\u8F91\u662F\u5982\u4F55\u5904\u7406\u7684\u3002\u56E0\u800C\u968F\u7740\u590D\u6742\u5EA6\u4EE5\u53CA\u4F7F\u7528\u573A\u666F\u7684\u589E\u52A0\uFF0C\u6211\u4EEC\u66F4\u52A0\u63A8\u8350\u5BF9\u4E8E\u9ED8\u8BA4\u884C\u4E3A\u603B\u662F\u9009\u62E9\u4FDD\u5B88\u7684\u5904\u7406\u65B9\u5F0F\u3002\u800C\u5BF9\u4E8E\u4E0D\u6EE1\u8DB3\u9700\u6C42\u7684\u60C5\u51B5\uFF0C\u53EF\u4EE5\u901A\u8FC7 HOC \u7684\u5F62\u5F0F\u6216\u8005\u662F\u4E00\u4E9B\u989D\u5916\u7684 Props \u914D\u7F6E\u6765\u5B9E\u73B0\uFF0C\u4EE5\u9632\u6B62\u5F00\u53D1\u8005\u5728\u4F7F\u7528\u65F6\u6709\u8FC7\u591A\u7684\u7EA6\u5B9A\u800C\u4E0D\u77E5\u3002",paraId:23,tocIndex:2}];}}]);