(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{302:function(e,t){function n(e){this.exit(e)}function a(e){this.enter({type:"tableCell",children:[]},e)}function r(e,t){return"|"===t?t:e}t.enter={table:function(e){this.enter({type:"table",align:e._align,children:[]},e),this.setData("inTable",!0)},tableData:a,tableHeader:a,tableRow:function(e){this.enter({type:"tableRow",children:[]},e)}},t.exit={codeText:function(e){var t=this.resume();this.getData("inTable")&&(t=t.replace(/\\([\\|])/g,r));this.stack[this.stack.length-1].value=t,this.exit(e)},table:function(e){this.exit(e),this.setData("inTable")},tableData:n,tableHeader:n,tableRow:n}},307:function(e,t,n){var a=n(100),r=n(308),i=n(309);e.exports=function(e){var t=e||{},n=t.tableCellPadding,l=t.tablePipeAlign,c=t.stringLength,o=n?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:"\n",inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[\t :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{table:function(e,t,n){return s(function(e,t){var n=e.children,a=-1,r=n.length,i=[],l=t.enter("table");for(;++a<r;)i[a]=h(n[a],t);return l(),i}(e,n),e.align)},tableRow:function(e,t,n){var a=s([h(e,n)]);return a.slice(0,a.indexOf("\n"))},tableCell:u,inlineCode:function(e,t,n){var a=r(e,t,n);-1!==n.stack.indexOf("tableCell")&&(a=a.replace(/\|/g,"\\$&"));return a}}};function u(e,t,n){var r=n.enter("tableCell"),i=a(e,n,{before:o,after:o});return r(),i}function s(e,t){return i(e,{align:t,alignDelimiters:l,padding:n,stringLength:c})}function h(e,t){for(var n=e.children,a=-1,r=n.length,i=[],l=t.enter("tableRow");++a<r;)i[a]=u(n[a],0,t);return l(),i}}}}]);
//# sourceMappingURL=vendors.mdast-util-gfm-table.d8f918bbb1dd6cc0b5f5.js.map