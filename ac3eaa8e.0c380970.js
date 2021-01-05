(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{101:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},104:function(e,t,n){"use strict";var a=n(0),i=Object(a.createContext)(void 0);t.a=i},105:function(e,t,n){"use strict";var a=n(0),i=n(104);t.a=function(){var e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},112:function(e,t,n){"use strict";var a=n(0),i=n.n(a),o=n(105),r=n(101),c=n(47),l=n.n(c),s=37,u=39;t.a=function(e){var t=e.block,n=e.children,c=e.defaultValue,b=e.values,d=e.groupId,p=Object(o.a)(),h=p.tabGroupChoices,g=p.setTabGroupChoices,m=Object(a.useState)(c),f=m[0],O=m[1],j=Object(a.useState)(!1),y=j[0],v=j[1];if(null!=d){var w=h[d];null!=w&&w!==f&&b.some((function(e){return e.value===w}))&&O(w)}var N=function(e){O(e),null!=d&&g(d,e)},k=[],x=function(e){e.metaKey||e.altKey||e.ctrlKey||v(!0)},T=function(){v(!1)};return Object(a.useEffect)((function(){window.addEventListener("keydown",x),window.addEventListener("mousedown",T)}),[]),i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":t})},b.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:Object(r.a)("tabs__item",l.a.tabItem,{"tabs__item--active":f===t}),style:y?{}:{outline:"none"},key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e),x(e)},onFocus:function(){return N(t)},onClick:function(){N(t),v(!1)},onPointerDown:function(){return v(!1)}},n)}))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===f}))[0]))}},113:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function(e){return i.a.createElement("div",null,e.children)}},155:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/recommended_extensions-7d5808834cb0c035bb9cc14318214cd5.png"},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return d}));var a=n(2),i=n(6),o=(n(0),n(99)),r=n(112),c=n(113),l={id:"contributing_started",title:"Get Started",sidebar_label:"Get Started"},s={unversionedId:"contributing_started",id:"contributing_started",isDocsHomePage:!1,title:"Get Started",description:"Install dependencies",source:"@site/docs/contributing-started.mdx",slug:"/contributing_started",permalink:"/docs/contributing_started",editUrl:"https://github.com/jandedobbeleer/oh-my-posh3/edit/main/docs/docs/contributing-started.mdx",version:"current",sidebar_label:"Get Started",sidebar:"docs",previous:{title:"YouTube Music",permalink:"/docs/ytm"},next:{title:"Add Segment",permalink:"/docs/contributing_segment"}},u=[{value:"Install dependencies",id:"install-dependencies",children:[{value:"go",id:"go",children:[]},{value:"golangci-lint",id:"golangci-lint",children:[]},{value:"go-bindata",id:"go-bindata",children:[]}]},{value:"Get the source code",id:"get-the-source-code",children:[]},{value:"Running tests",id:"running-tests",children:[{value:"Unit tests",id:"unit-tests",children:[]},{value:"golangci-lint",id:"golangci-lint-1",children:[]}]},{value:"Building the app",id:"building-the-app",children:[]},{value:"Get an editor",id:"get-an-editor",children:[]},{value:"Up Next",id:"up-next",children:[]}],b={rightToc:u};function d(e){var t=e.components,l=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,l,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"install-dependencies"},"Install dependencies"),Object(o.b)("h3",{id:"go"},"go"),Object(o.b)("p",null,"The code base is in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://golang.org"}),"go"),", meaning we need a working go setup before we can do anything else.\nHave a look at the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://golang.org/doc/install"}),"go guide")," to get up and running with go in no time!"),Object(o.b)("h3",{id:"golangci-lint"},"golangci-lint"),Object(o.b)("p",null,"To make sure we keep on writing quality code, ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://golangci-lint.run"}),"golang-ci lint")," is used to validate the changes.\nHave a look at the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://golangci-lint.run/usage/install/#local-installation"}),"local installation guide")," to make sure you can validate this yourself as well."),Object(o.b)("h3",{id:"go-bindata"},"go-bindata"),Object(o.b)("p",null,"Oh my Posh packs the initialization scipts for the different shells, but go does not ship with the ability to add\nfiles other than go code to your compiled binary. ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/kevinburke/go-bindata/"}),"go-bindata")," allows us to add initialization files and\nship them in the source code to easily bootstrap your shell with Oh my Posh."),Object(o.b)("p",null,"There are multiple ways to install go-bindata."),Object(o.b)(r.a,{defaultValue:"homebrew",values:[{label:"homebrew",value:"homebrew"},{label:"linux",value:"linux"},{label:"source",value:"source"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"homebrew",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"brew install go-bindata\n"))),Object(o.b)(c.a,{value:"linux",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"curl --silent --location --output /usr/local/bin/go-bindata https://github.com/kevinburke/go-bindata/releases/download/v3.11.0/go-bindata-linux-amd64\nchmod 755 /usr/local/bin/go-bindata\n"))),Object(o.b)(c.a,{value:"source",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"go get -u github.com/kevinburke/go-bindata/...\n")),Object(o.b)("p",null,"Be careful as executing this inside the Oh my Posh repository will adjust the ",Object(o.b)("inlineCode",{parentName:"p"},"go.mod")," file with this dependency.\nToday, there's no way to install a dependency system wide for go, although that's ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/golang/go/issues/40276"}),"in the works"),".\nMake sure to remove this before submitting a PR as there's ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/JanDeDobbeleer/oh-my-posh3/blob/main/.github/workflows/gomod.yml"}),"a check")," in place to avoid adding unused dependencies."))),Object(o.b)("h2",{id:"get-the-source-code"},"Get the source code"),Object(o.b)("p",null,"The source is hosted on ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/JanDeDobbeleer/oh-my-posh3"}),"Github"),". When you want to contribute, create a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://guides.github.com/activities/forking/"}),"fork")," so you can make changes in\nyour repository and create pull request in the official Oh my Posh repository."),Object(o.b)("p",null,"Clone your fork of Oh my Posh locally, replace ",Object(o.b)("inlineCode",{parentName:"p"},"<user>")," with your Github username."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"git clone git@github.com:<user>/oh-my-posh3.git\n")),Object(o.b)("h2",{id:"running-tests"},"Running tests"),Object(o.b)("p",null,"The go source code can be found in the ",Object(o.b)("inlineCode",{parentName:"p"},"src/")," directory, make sure to change to that one before continuing.\nOnce in the right directory, we need to pack the initialization scripts into the source code."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"go generate\n")),Object(o.b)("p",null,"Provided the previous steps were performed correctly, you should now see a new file called ",Object(o.b)("inlineCode",{parentName:"p"},"init.go"),".\nDo not wory about this file as it's ignored by git, we generate it every time the app gets build."),Object(o.b)("h3",{id:"unit-tests"},"Unit tests"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"go test -v\n")),Object(o.b)("h3",{id:"golangci-lint-1"},"golangci-lint"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"golangci-lint run\n")),Object(o.b)("h2",{id:"building-the-app"},"Building the app"),Object(o.b)("p",null,"The easiest way to validate your changes is to write tests. Unfortunately, as it's a visual tool, you'll want to validate\nthe changes by running the prompt in your shell as well. You can make use of go's ",Object(o.b)("inlineCode",{parentName:"p"},"bin")," folder which is usually added to\nyour path to add your own Oh my Posh binary to and immediately see the changes appear in your shell."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"go build -o $GOPATH/bin/oh-my-posh\n")),Object(o.b)("h2",{id:"get-an-editor"},"Get an editor"),Object(o.b)("p",null,"A default config(.vscode folder) for ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://code.visualstudio.com"}),"Visual Studio Code")," is available in the repo:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"golangci-lint is configured as the default linter.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Recommended extensions available for a smooth bootstrap."),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",{alt:"recommended extensions",src:n(155).default,title:"Recommended extensions"}))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Default run and debug configurations available."))),Object(o.b)("p",null,"Once the extensions are installed:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Debug can be started by hitting F5."),Object(o.b)("li",{parentName:"ul"},"All tests can be run using the Test explorer.")),Object(o.b)("h2",{id:"up-next"},"Up Next"),Object(o.b)("p",null,"With everything set up, you're ready to start making changes and create your first ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/JanDeDobbeleer/oh-my-posh3/pulls"}),"PR"),"!"))}d.isMDXComponent=!0},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),p=a,h=b["".concat(r,".").concat(p)]||b[p]||d[p]||o;return n?i.a.createElement(h,c(c({ref:t},s),{},{components:n})):i.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var s=2;s<o;s++)r[s]=n[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);