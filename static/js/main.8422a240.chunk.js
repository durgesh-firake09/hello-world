(this["webpackJsonphello-world"]=this["webpackJsonphello-world"]||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(5),l=a.n(c),o=(a(11),a(2)),s=(a(12),a(0));function d(e){return Object(s.jsx)("div",{className:"border-bottom border-3",children:Object(s.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat("dark"===e.mode?"dark":"light"," navbar-light"),id:"nav",children:Object(s.jsxs)("div",{className:"container-fluid",children:[Object(s.jsx)("span",{className:"navbar-brand",href:"/",children:e.title}),Object(s.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(s.jsx)("span",{className:"navbar-toggler-icon"})}),Object(s.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(s.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{className:"nav-link active border border-0 bg-".concat("dark"===e.mode?"dark":"white"),href:"/","aria-current":"page",children:"Home"})})}),Object(s.jsxs)("div",{className:"form-check form-switch",children:[Object(s.jsx)("input",{className:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault",onClick:e.toggleMode}),Object(s.jsx)("label",{className:"form-check-label text-".concat("dark"===e.mode?"light":"dark"),htmlFor:"flexSwitchCheckDefault",children:"dark"===e.mode?"Enable Light Mode":"Enable Dark Mode"})]})]})]})})})}var i=a(4),b=a.n(i),m=a(6);function u(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],c=a[1],l=function(){var e=Object(m.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.clipboard.readText();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.jsxs)("div",{className:"container my-3 text-".concat("dark"===e.mode?"light":"dark"),children:[Object(s.jsx)("h1",{children:"Enter The Text to Analyse"}),Object(s.jsx)("hr",{}),Object(s.jsx)("div",{className:"mb-3",children:Object(s.jsx)("textarea",{className:"form-control text-".concat("dark"===e.mode?"light":"dark"," bg-").concat("dark"===e.mode?"dark":"light"),id:"text",rows:"8",value:r,onChange:function(e){c(e.target.value)},placeholder:"Enter Text Here..."})}),Object(s.jsxs)("div",{className:"container",style:{display:"flex",flexWrap:"wrap"},children:[Object(s.jsx)("button",{className:"btn btn-".concat("dark"===e.mode?"secondary":"primary"," m-1"),onClick:function(){var e=r.toUpperCase();c(e)},children:"Convert To Uppercase"}),Object(s.jsx)("button",{className:"btn btn-".concat("dark"===e.mode?"secondary":"primary"," m-1"),onClick:function(){var e=r.toLowerCase();c(e)},children:"Convert To Lowercase"}),Object(s.jsx)("button",{className:"btn btn-".concat("dark"===e.mode?"secondary":"primary"," m-1"),onClick:function(){c("")},children:"Clear"}),Object(s.jsx)("button",{className:"btn btn-".concat("dark"===e.mode?"secondary":"primary"," m-1"),onClick:function(){var t=document.getElementById("text");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("success","Success"," Text Copied to Clipboard")},children:"Copy To Clipboard"}),Object(s.jsx)("button",{className:"btn btn-".concat("dark"===e.mode?"secondary":"primary"," m-1"),onClick:l,children:"Paste From Clipboard"}),Object(s.jsx)("button",{className:"btn btn-".concat("dark"===e.mode?"secondary":"primary"," m-1"),id:"uploadTxt",onClick:function(){var e=document.getElementById("fileUpload");"none"===e.style.display?(e.style.display="block",document.getElementById("uploadTxt").innerText="Cancel Upload"):"block"===e.style.display&&(e.style.display="none",document.getElementById("uploadTxt").innerText="Upload a .txt file")},children:"Upload a .txt file"}),Object(s.jsx)("button",{className:"btn btn-".concat("dark"===e.mode?"secondary":"primary"," m-1"),id:"summaryBtn",onClick:function(){var e=document.getElementById("summary");"none"===e.style.display?(e.style.display="block",document.getElementById("summaryBtn").innerText="Close The Summary",document.getElementById("secHr").style.display="block"):"block"===e.style.display&&(e.style.display="none",document.getElementById("summaryBtn").innerText="View Full Summary",document.getElementById("secHr").style.display="none")},children:"View Full Summary"}),Object(s.jsx)("button",{className:"btn btn-".concat("dark"===e.mode?"secondary":"primary"," m-1"),id:"previewBtn",onClick:function(){var e=document.getElementById("preview");"none"===e.style.display?(e.style.display="block",document.getElementById("previewBtn").innerText="Close The Preview"):"block"===e.style.display&&(e.style.display="none",document.getElementById("previewBtn").innerText="Preview Text")},children:"Preview Text"})]}),Object(s.jsxs)("form",{className:"border border-2 rounded-4 rounded-3 rounded-3 my-3 p-3",action:"/",style:{display:"none"},id:"fileUpload",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{htmlFor:"formFile",className:"form-label",children:Object(s.jsx)("h5",{children:"Upload a .txt File"})}),Object(s.jsx)("input",{className:"form-control bg-".concat("dark"===e.mode?"dark":"light"),style:{color:"dark"===e.mode?"white":"black"},type:"file",accept:"text/plain",id:"formFile"})]}),Object(s.jsx)("button",{className:"btn btn-".concat("dark"===e.mode?"secondary":"primary"," mt-3"),onClick:function(t){t.preventDefault();var a=document.getElementById("formFile").files[0],n=new FileReader;n.onload=function(e){var t=e.target.result;c(t)};try{n.readAsText(a,"UTF-8"),e.showAlert("success","Success","File Uploaded Successfully.")}catch(r){e.showAlert("danger","No File Selected"," Please Select a valid .txt file to open.")}},children:"Upload File"})]}),Object(s.jsx)("hr",{id:"firstHr"}),Object(s.jsxs)("div",{className:"container border border-2 rounded-4 rounded-3 rounded-3",style:{display:"none"},id:"summary",children:[Object(s.jsx)("h3",{children:"Summary of The Text"}),Object(s.jsx)("hr",{}),Object(s.jsxs)("p",{children:["Total Words :"," ",r.endsWith(" ")||0===r.length?r.split(" ").length-1:r.split(" ").length]}),Object(s.jsxs)("p",{children:["Total Characters : ",r.length]})]}),Object(s.jsx)("div",{children:Object(s.jsx)("hr",{id:"secHr",style:{display:"none"}})}),Object(s.jsxs)("div",{className:"container border border-2 rounded-4 rounded-3 rounded-3 my-3",id:"preview",style:{display:"none"},children:[Object(s.jsx)("h4",{className:"my-2",children:"Preview of text"}),Object(s.jsx)("hr",{}),Object(s.jsx)("div",{id:"previewText",style:{color:"dark"===e.mode?"red":"blue"},children:Object(s.jsx)("p",{children:0===r.length?"Enter Text in textbox above to see Preview of text here...":r})})]})]})}var j=function(e){return e.alert&&Object(s.jsx)("div",{className:"container my-3",children:Object(s.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(s.jsxs)("strong",{children:[e.alert.heading," : "]})," ",e.alert.msg]})})};var h=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)("light"),l=Object(o.a)(c,2),i=l[0],b=l[1],m=function(e,t,a){setTimeout((function(){r(null)}),2e3),r({type:e,heading:t,msg:a})};return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(d,{title:"Text Utils",aboutTxt:"About",showAlert:m,mode:i,toggleMode:function(){"light"===i?(document.body.classList.add("bg-dark"),b("dark"),m("secondary","Mode Changed","Dark Mode Enabled")):"dark"===i&&(document.body.classList.remove("bg-dark"),b("light"),m("success","Mode Changed","Light Mode Enabled"))}}),Object(s.jsx)(j,{alert:a}),Object(s.jsx)(u,{showAlert:m,mode:i})]})},p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,l=t.getTTFB;a(e),n(e),r(e),c(e),l(e)}))};l.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(h,{})}),document.getElementById("root")),p()}},[[15,1,2]]]);
//# sourceMappingURL=main.8422a240.chunk.js.map