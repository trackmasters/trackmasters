(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{291:function(t,i){function n(t){this.config.enter.autolinkProtocol.call(this,t)}i.enter={literalAutolink:function(t){this.enter({type:"link",title:null,url:"",children:[]},t)},literalAutolinkEmail:n,literalAutolinkHttp:n,literalAutolinkWww:n},i.exit={literalAutolink:function(t){this.exit(t)},literalAutolinkEmail:function(t){this.config.exit.autolinkEmail.call(this,t)},literalAutolinkHttp:function(t){this.config.exit.autolinkProtocol.call(this,t)},literalAutolinkWww:function(t){this.config.exit.data.call(this,t),this.stack[this.stack.length-1].url="http://"+this.sliceSerialize(t)}}},296:function(t,i){var n=["autolink","link","image","label"];i.unsafe=[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:"phrasing",notInConstruct:n},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:"phrasing",notInConstruct:n},{character:":",before:"[ps]",after:"\\/",inConstruct:"phrasing",notInConstruct:n}]}}]);
//# sourceMappingURL=vendors.mdast-util-gfm-autolink-literal.b126096eda31a1fa15df.js.map