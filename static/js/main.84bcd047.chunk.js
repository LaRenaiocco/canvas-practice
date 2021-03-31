(this["webpackJsonpcanvas-practice"]=this["webpackJsonpcanvas-practice"]||[]).push([[0],{10:function(e,t,c){},11:function(e,t,c){"use strict";c.r(t);var i=c(0),a=c(1),n=c.n(a),l=c(4),s=c.n(l),r=(c(10),c(2)),o=c.p+"static/media/bluewall.6bcb5651.jpg",j=c.p+"static/media/paintsplash.27ca5421.png";var d=function(e){return Object(i.jsxs)("div",{id:"landing",children:[Object(i.jsx)("img",{src:o,id:"landingimage",alt:""}),Object(i.jsx)("img",{src:j,id:"paintsplash",alt:""}),Object(i.jsxs)("div",{id:"landingtext",children:[Object(i.jsx)("div",{class:"line",id:"line1",children:"Welcome to the Graffiti Gallery"}),Object(i.jsx)("div",{class:"line",children:"A react project by LaRena Iocco"}),Object(i.jsx)("div",{class:"line",children:"Click anywhere to start painting!"}),Object(i.jsx)("div",{class:"line",children:Object(i.jsx)("a",{id:"line4link",href:"https://github.com/LaRenaiocco/canvas-practice",children:"See my code on Github"})})]})]})};var h=function(e){return Object(i.jsx)("button",{onClick:function(){e.clear()},children:"Start Over"})};var b=function(e){return Object(i.jsx)("button",{onClick:function(){e.imageSave()},children:"Save My Art!"})},u=c.p+"static/media/brickwall.1b8f98a9.jpg",g=c.p+"static/media/darkwall.4ddd0957.jpg",m=c.p+"static/media/oldwall.595224d7.jpg",O=c.p+"static/media/pinkwall.a6ba5324.jpg",p=c.p+"static/media/whitewashwall.79aa8ec3.jpg",x=c.p+"static/media/yellowwall.5d879e4c.jpg";var w=function(e){var t=Object(a.useState)(!1),c=Object(r.a)(t,2),n=c[0],l=c[1];function s(t){e.updateWall(t.target.src),console.log(typeof t.target.src),l(!1)}var j=Object(i.jsxs)("div",{children:[Object(i.jsx)("img",{id:"bluewall",src:o,alt:"Blue Wall",height:"100",width:"100",onClick:s}),Object(i.jsx)("img",{id:"brickwall",src:u,alt:"Brick Wall",height:"100",width:"100",onClick:s}),Object(i.jsx)("img",{id:"darkwall",src:g,alt:"Dark Brick Wall",height:"100",width:"100",onClick:s}),Object(i.jsx)("img",{id:"oldwall",src:m,alt:"Old Brick Wall",height:"100",width:"100",onClick:s}),Object(i.jsx)("img",{id:"pinkwall",src:O,alt:"Pink Tile Wall",height:"100",width:"100",onClick:s}),Object(i.jsx)("img",{id:"whitewashwall",src:p,alt:"Fading White Washed Wall",height:"100",width:"100",onClick:s}),Object(i.jsx)("img",{id:"yellowwall",src:x,alt:"Yellow Painted Brick Wall",height:"100",width:"100",onClick:s})]}),d=Object(i.jsxs)("span",{class:"tooltip",children:[Object(i.jsx)("button",{onClick:function(){return l(!0)},children:"Change my Wall"}),Object(i.jsx)("span",{class:"tooltiptext",children:" Choosing a new backdrop will reset your art!"})]});return Object(i.jsx)("div",{children:n?j:d})};var v=function(e){var t=Object(a.useState)(!1),c=Object(r.a)(t,2),l=c[0],s=c[1],j=Object(a.useState)(void 0),d=Object(r.a)(j,2),u=d[0],g=d[1],m=Object(a.useState)(o),O=Object(r.a)(m,2),p=O[0],x=O[1],v=Object(a.useRef)(null),k=new Image;k.src=p,Object(a.useEffect)((function(){var e=v.current,t=e.getContext("2d");k.onload=function(){t.drawImage(k,0,0,k.width,k.height,0,0,e.width,e.height)}}),[e.height,e.width,p]);var C=Object(a.useCallback)((function(e){var t=f(e);t&&(g(t),s(!0),A())}),[]),A=Object(a.useCallback)((function(t){if(l){var c=f(t);u&&c&&(!function(t,c){if(!v.current)return;var i=v.current.getContext("2d");i.lineWidth=e.brush,i.lineCap="round",i.strokeStyle=e.paintColor,i.beginPath(),i.moveTo(t.x,t.y),i.lineTo(c.x,c.y),i.closePath(),i.stroke()}(u,c),g(c))}}),[l,u]),y=Object(a.useCallback)((function(e){s(!1),g(void 0)}),[]);function f(e){v.current;return{x:e.clientX,y:e.clientY}}return Object(i.jsxs)(n.a.Fragment,{children:[Object(i.jsx)("div",{children:Object(i.jsx)("canvas",{ref:v,height:e.height,width:e.width,onMouseDown:C,onMouseUp:y,onMouseLeave:y,onMouseMove:A})}),Object(i.jsx)(h,{clear:function(){var e=v.current,t=e.getContext("2d");t.clearRect(0,0,e.width,e.height),t.drawImage(k,0,0,k.width,k.height,0,0,e.width,e.height)}}),Object(i.jsx)(b,{imageSave:function(){console.log("image save triggered"),function(e,t){var c=document.createElement("a");c.href=e,c.target="_blank",c.download=t;var i=document.createEvent("MouseEvents");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,0,null),c.dispatchEvent(i)}(v.current.toDataURL(),"my_graffiti")}}),Object(i.jsx)(w,{updateWall:function(e){x(e)}})]})};var k=function(e){var t=Object(a.useState)(""),c=Object(r.a)(t,2),n=c[0],l=c[1],s=Object(a.useState)(""),o=Object(r.a)(s,2),j=o[0],d=o[1],h=Object(a.useState)(!1),b=Object(r.a)(h,2),u=b[0],g=b[1],m=Object(i.jsxs)("span",{class:"tooltip",children:[Object(i.jsx)("button",{onClick:function(){return g(!0)},children:"Change Canvas Size"}),Object(i.jsx)("span",{class:"tooltiptext",children:" Choosing a new backdrop size will reset your art!"})]}),O=Object(i.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.canvasSize(n,j),l(""),d(""),g(!1)},children:["What size would you like your wall to be?",Object(i.jsx)("input",{type:"text",id:"height",name:"height",placeholder:"height in pixels",value:n,onChange:function(e){l(e.target.value)}}),Object(i.jsx)("input",{type:"text",id:"width",name:"width",placeholder:"width in pixels",value:j,onChange:function(e){d(e.target.value)}}),Object(i.jsx)("button",{type:"submit",children:"Set Canvas Size"})]});return Object(i.jsx)("div",{children:u?O:m})};var C=function(e){return Object(i.jsx)("button",{type:"button",className:"btn toggle-btn",id:e.name,onClick:function(){e.changeColor(e.name)}})};var A=function(e){return Object(i.jsx)("img",{id:e.name,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAAlwSFlzAAAOxAAADsQBlSsOGwAAA3xJREFUaIHtmstxGkEQhj9hHXzzOgLjm2/aDEQG3gxEBpIjkDIARwCKQGQgFIBLKALQzT6xikA+dDczO+zCwi4wrvJf1cXMvuh/uqd7XmccBpdAD0iBRMuGHJh5v1Pg6UB61EIXGOCU7AIjYAm8l0iOKD1Wmark+s6IIuGdcLbHO4kS+Ar09dqtVzY8ARMtLxGiPswiL3qvp/IJ+KH3DoaeKjXU+i1FC+QqA+CBauuEMsdZJGG9UVpFX/+0r3/2ECgz21H5KnmkgYttw8gjkVYo25RAGaHQHRvhRj883ECibcm9xmnFzcydpkckUSajJiRM8VzLzyciscB5xF4wxe9UTkHC3Gum5dpu1vd+7UO9E5LwZYZYJ91GIkMyLkhcf9f6YwQkzDJDxFM2Yo60fozWMJkjbr7mYuf6mwGfkehkjO85YGLaE12VFBn+5OEDE5Uujn2Gc7GYZKm6FazSQYYb3xFrZN69nJYza0tIEIusETH3mVF0JZ9UbLhG9F01dAcXzqbAFy2/UuJ/ESFBQvGq4X0ieOUFcbqVjwxPx3OEXYhY+4ePS7/SCS8oDjo7axELK3QqHkj9hyLGqsGriFhnih2/8MKwJZoUN8qcI53p1Mlvm0yQBJl0kFUMkM6de+V/wSIXiPdkHZzyPYqdPMWRjBUWWdMOTnkbphiugnrMKBAJ3amn9bdja7UHLj4grnWjF/4gin/z6r+9eqz4aAWb4Nvkyo8MQ8TFTh2hNkluecT6gk1c/NXxC8T9Xvdqq+NgZkT8aHVLcenF1mMnxIuV/glude8dmRePKZrvAeeCsUlh7jQMblrU8q+daqVxk6wl7gQ3RPE7fr7jh48tdyERkGzuK/5McXkoNskpn09BieKPuBX52MTyXyXC/mKWicnNtk7+bCd2ErxoQ/sYkqPtEGzFEEmMfuc3sY3PU4bi2qvyCZJH/MlWaJ0rJKqNacfl6ob20ii1aXva3GuoCl+XPLPALbe+4Q4J2Dxhiku2mZYTyrer6+CeCmts22c3MnNk/HWHW8QrwxQhtwiu+YvPNuTZFT+pEaW2YYy04gCx0DGjV07L++4Z7rjFQMkdusPPqBmddkVCMcc8IwnTXKpNKzR2ozrosh6tlkqsycBygfTDffpQI9i5kTB57ioTGm5j7HM6qAp2LivFjQ66FKPcC2JFi2x21Ok/DH8B+AwjiHuUMCwAAAOhaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49J++7vycgaWQ9J1c1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCc/Pgo8eDp4bXBtZXRhIHhtbG5zOng9J2Fkb2JlOm5zOm1ldGEvJz4KPHJkZjpSREYgeG1sbnM6cmRmPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjJz4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOkF0dHJpYj0naHR0cDovL25zLmF0dHJpYnV0aW9uLmNvbS9hZHMvMS4wLyc+CiAgPEF0dHJpYjpBZHM+CiAgIDxyZGY6U2VxPgogICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSdSZXNvdXJjZSc+CiAgICAgPEF0dHJpYjpDcmVhdGVkPjIwMjAtMTEtMTE8L0F0dHJpYjpDcmVhdGVkPgogICAgIDxBdHRyaWI6RXh0SWQ+YTY2Yzc4MTUtZmM4Ni00ODU0LWFmOTYtYWM5ZTMzNmU5M2Y1PC9BdHRyaWI6RXh0SWQ+CiAgICAgPEF0dHJpYjpGYklkPjUyNTI2NTkxNDE3OTU4MDwvQXR0cmliOkZiSWQ+CiAgICAgPEF0dHJpYjpUb3VjaFR5cGU+MjwvQXR0cmliOlRvdWNoVHlwZT4KICAgIDwvcmRmOmxpPgogICA8L3JkZjpTZXE+CiAgPC9BdHRyaWI6QWRzPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpwZGY9J2h0dHA6Ly9ucy5hZG9iZS5jb20vcGRmLzEuMy8nPgogIDxwZGY6QXV0aG9yPkxhUmVuYSBSb3NlIElvY2NvPC9wZGY6QXV0aG9yPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczp4bXA9J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8nPgogIDx4bXA6Q3JlYXRvclRvb2w+Q2FudmE8L3htcDpDcmVhdG9yVG9vbD4KIDwvcmRmOkRlc2NyaXB0aW9uPgo8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSdyJz8+f148UQAAAABJRU5ErkJggg==",onClick:function(){"small"===e.name?e.brushSize(10):"medium"===e.name?e.brushSize(20):"large"===e.name&&e.brushSize(30)},height:e.height,width:e.width,className:"brushsize"})};var y=function(){var e=Object(a.useState)({height:500,width:800}),t=Object(r.a)(e,2),c=t[0],n=t[1],l=Object(a.useState)("black"),s=Object(r.a)(l,2),j=s[0],h=s[1],b=Object(a.useState)(10),u=Object(r.a)(b,2),g=u[0],m=u[1],O=o;function p(e){h(e)}function x(e){m(e)}return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{id:"welcome",onClick:function(){document.getElementById("welcome").style.display="none",document.getElementById("paint").style.display="block"},children:Object(i.jsx)(d,{})}),Object(i.jsxs)("div",{className:"row",id:"paint",children:[Object(i.jsxs)("div",{className:"column left ",children:[Object(i.jsx)(v,{height:c.height,width:c.width,paintColor:j,brush:g,wall:O}),Object(i.jsx)(k,{canvasSize:function(e,t){n({height:e,width:t})}})]}),Object(i.jsxs)("div",{className:"column right",children:[Object(i.jsx)("div",{children:"Colors"}),Object(i.jsx)(C,{name:"red",changeColor:p}),Object(i.jsx)(C,{name:"orange",changeColor:p}),Object(i.jsx)(C,{name:"yellow",changeColor:p}),Object(i.jsx)(C,{name:"green",changeColor:p}),Object(i.jsx)(C,{name:"blue",changeColor:p}),Object(i.jsx)(C,{name:"purple",changeColor:p}),Object(i.jsx)(C,{name:"magenta",changeColor:p}),Object(i.jsx)(C,{name:"black",changeColor:p}),Object(i.jsx)(C,{name:"grey",changeColor:p}),Object(i.jsx)(C,{name:"white",changeColor:p}),Object(i.jsx)(C,{name:"brown",changeColor:p}),Object(i.jsx)("br",{}),Object(i.jsx)("div",{children:"Brushes"}),Object(i.jsx)(A,{name:"small",brushSize:x,height:10,width:10}),Object(i.jsx)(A,{name:"medium",brushSize:x,height:20,width:20}),Object(i.jsx)(A,{name:"large",brushSize:x,height:30,width:30})]})]})]})};s.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(y,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.84bcd047.chunk.js.map