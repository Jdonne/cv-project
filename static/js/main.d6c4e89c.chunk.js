(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(1),d=a.n(s),c=a(7),i=a.n(c),l=(a(13),a(2)),r=a(3),o=a(5),b=a(4),m=(a(14),function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.email,s=e.phone,c=e.handleContact,i=e.handleSubmit,l=e.handleEdit,r=e.submitted,o=e.displayTog;return Object(n.jsxs)(d.a.Fragment,{children:[Object(n.jsxs)("div",{className:o,children:[Object(n.jsxs)("div",{className:"d-flex",children:["Name: ",Object(n.jsx)("p",{className:"ml-3 mb-1",children:t})]}),Object(n.jsxs)("div",{className:"d-flex",children:["Email Address:",Object(n.jsx)("p",{className:"ml-3 mb-1",children:a})]}),Object(n.jsxs)("div",{className:"d-flex",children:["Phone:",Object(n.jsx)("p",{className:"ml-2 mb-1",children:s})]}),Object(n.jsx)("button",{onClick:l,className:"btn btn-warning mt-2",children:"Edit"})]}),Object(n.jsxs)("form",{className:r+" d-flex flex-column",onSubmit:i,children:[Object(n.jsxs)("label",{className:"mt-3",children:["Name",Object(n.jsx)("input",{type:"text",id:"name",onChange:c,className:"form-control "})]}),Object(n.jsxs)("label",{children:["Email",Object(n.jsx)("input",{type:"email",id:"email",onChange:c,className:"form-control "})]}),Object(n.jsxs)("label",{children:["Phone Number",Object(n.jsx)("input",{type:"tel",id:"phone",onChange:c,className:"form-control"})]}),Object(n.jsx)("button",{type:"submit",className:"btn btn-success",children:"Submit"})]})]})}}]),a}(s.Component)),u=function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props,t=e.company,a=e.position,s=e.tasks,c=e.start,i=e.end,l=e.handleChange,r=e.handleSubmit,o=e.handleEdit,b=e.submitted,m=e.displayTog,u=e.index;return Object(n.jsxs)(d.a.Fragment,{children:[Object(n.jsxs)("div",{className:m,children:[Object(n.jsxs)("div",{className:"d-flex",children:["Company: ",Object(n.jsxs)("p",{className:"ml-3 mb-1",children:[" ",t]})]}),Object(n.jsxs)("div",{className:"d-flex",children:["Position: ",Object(n.jsxs)("p",{className:"ml-4 mb-1",children:[" ",a]})]}),Object(n.jsxs)("div",{className:"d-flex",children:["Tasks: ",Object(n.jsxs)("p",{className:"ml-5 mb-1",children:[" ",s]})]}),Object(n.jsxs)("div",{className:"d-flex",children:["Duration:"," ",Object(n.jsxs)("p",{className:"ml-3 mb-1",children:[c," - ",i]})]}),Object(n.jsx)("button",{onClick:o,className:"btn btn-warning mt-2",id:u,children:"Edit"})]}),Object(n.jsxs)("form",{onSubmit:r,className:b+" d-flex flex-column",id:u,children:[Object(n.jsxs)("label",{className:"mt-3",children:["Company",Object(n.jsx)("input",{type:"text",id:"company",onChange:l,className:"form-control "})]}),Object(n.jsxs)("label",{children:["Position",Object(n.jsx)("input",{type:"text",id:"position",onChange:l,className:"form-control "})]}),Object(n.jsxs)("label",{children:["Tasks",Object(n.jsx)("textarea",{id:"tasks",rows:"5",cols:"40",onChange:l,className:"form-control "})]}),Object(n.jsxs)("label",{children:["Start Date",Object(n.jsx)("input",{type:"date",id:"expStart",onChange:l,className:"form-control "})]}),Object(n.jsxs)("label",{children:["End Date",Object(n.jsx)("input",{type:"date",id:"expEnd",onChange:l,className:"form-control "})]}),Object(n.jsx)("button",{type:"submit",className:"btn btn-success",children:"Submit"})]})]})}}]),a}(s.Component),j=function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.study,s=e.start,c=e.end,i=e.handleChange,l=e.handleSubmit,r=e.handleEdit,o=e.submitted,b=e.index,m=e.displayTog;return Object(n.jsxs)(d.a.Fragment,{children:[Object(n.jsxs)("div",{className:m,children:[Object(n.jsxs)("div",{className:"d-flex",children:["School:",Object(n.jsx)("p",{className:"ml-4 mb-1",children:t})]}),Object(n.jsxs)("div",{className:"d-flex",children:["Study/Degree:",Object(n.jsx)("p",{className:"ml-3 mb-1",children:a})," "]}),Object(n.jsxs)("div",{className:"d-flex",children:["Duration:",Object(n.jsxs)("p",{className:"ml-3 mb-1",children:[s," - ",c]})]}),Object(n.jsx)("button",{onClick:r,id:b,className:"btn btn-warning mt-2",children:"Edit"})]}),Object(n.jsxs)("form",{onSubmit:l,className:o+" d-flex flex-column",id:b,children:[Object(n.jsxs)("label",{className:"mt-3",children:["School Name",Object(n.jsx)("input",{type:"text",id:"eduName",onChange:i,className:"form-control "})]}),Object(n.jsxs)("label",{children:["Study",Object(n.jsx)("input",{type:"text",id:"study",onChange:i,className:"form-control "})]}),Object(n.jsxs)("label",{children:["Start Date",Object(n.jsx)("input",{type:"date",id:"eduStart",onChange:i,className:"form-control "})]}),Object(n.jsxs)("label",{children:["End Date",Object(n.jsx)("input",{type:"date",id:"eduEnd",onChange:i,className:"form-control "})]}),Object(n.jsx)("button",{type:"submit",className:"btn btn-success",children:"Submit"})]})]})}}]),a}(s.Component),h=function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleContactChange=function(e){"name"===e.target.id?n.contactObj.name=e.target.value:"email"===e.target.id?n.contactObj.email=e.target.value:"phone"===e.target.id&&(n.contactObj.phone=e.target.value)},n.handleContactSubmit=function(e){e.preventDefault(),n.contactObj.submitted="hidden",n.contactObj.displayed="",n.setState({contact:n.contactObj})},n.handleContactEdit=function(e){n.contactObj.submitted="",n.setState({contact:n.contactObj})},n.handleExpChange=function(e){"company"===e.target.id?n.expObj.company=e.target.value:"position"===e.target.id?n.expObj.position=e.target.value:"tasks"===e.target.id?n.expObj.tasks=e.target.value:"expStart"===e.target.id?n.expObj.start=e.target.value:"expEnd"===e.target.id&&(n.expObj.end=e.target.value)},n.handleExpSubmit=function(e){e.preventDefault(),n.expObj.submitted="hidden",n.expObj.displayed="",n.expArr[e.target.id]=n.expObj,n.setState({experience:n.expArr},(function(){console.log(this.state.experience)})),n.expObj={company:"",position:"",tasks:"",start:"",end:"",submitted:""}},n.handleExpAdd=function(e){n.setState({experience:n.state.experience.concat({company:"",position:"",tasks:"",start:"",end:"",submitted:"",displayed:"hidden"})})},n.handleExpEdit=function(e){n.expObj=n.expArr[e.target.id],n.expObj.submitted="",n.expArr[e.target.id]=n.expObj,n.setState({experience:n.expArr})},n.handleEduChange=function(e){"eduName"===e.target.id?n.eduObj.name=e.target.value:"study"===e.target.id?n.eduObj.study=e.target.value:"eduStart"===e.target.id?n.eduObj.start=e.target.value:"eduEnd"===e.target.id&&(n.eduObj.end=e.target.value)},n.handleEduSubmit=function(e){e.preventDefault(),n.eduObj.submitted="hidden",n.eduObj.displayed="",n.eduArr[e.target.id]=n.eduObj,n.setState({education:n.eduArr},(function(){console.log(this.state.education)})),n.eduObj={name:"",study:"",start:"",end:"",submitted:""}},n.handleEduAdd=function(e){n.setState({education:n.state.education.concat({name:"",study:"",start:"",end:"",submitted:"",displayed:"hidden"})})},n.handleEduEdit=function(e){n.eduObj=n.eduArr[e.target.id],n.eduObj.submitted="",n.eduArr[e.target.id]=n.eduObj,n.setState({education:n.eduArr})},n.state={contact:{name:"",email:"",phone:"",submitted:"",displayed:"hidden"},experience:[{company:"",position:"",tasks:"",start:"",end:"",submitted:"",displayed:"hidden"}],education:[{name:"",study:"",start:"",end:"",submitted:"",displayed:"hidden"}]},n.contactObj=n.state.contact,n.expObj={company:"",position:"",tasks:"",start:"",end:"",submitted:"",displayed:"hidden"},n.expArr=[],n.eduObj={name:"",study:"",start:"",end:"",submitted:"",displayed:"hidden"},n.eduArr=[],n}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{className:"mx-auto col-4 d-flex flex-column",children:[Object(n.jsx)("h1",{className:"align-self-center",children:"CV App"}),Object(n.jsx)("h2",{className:"mt-3",children:"Contact"}),Object(n.jsx)(m,{name:this.state.contact.name,email:this.state.contact.email,phone:this.state.contact.phone,submitted:this.state.contact.submitted,displayTog:this.state.contact.displayed,handleContact:this.handleContactChange,handleSubmit:this.handleContactSubmit,handleEdit:this.handleContactEdit}),Object(n.jsx)("h2",{className:"mt-4 pt-3 border-top",children:"Experience"}),this.state.experience.map((function(t,a){return Object(n.jsx)(u,{index:a,company:t.company,position:t.position,tasks:t.tasks,start:t.start,end:t.end,submitted:t.submitted,displayTog:t.displayed,handleChange:e.handleExpChange,handleSubmit:e.handleExpSubmit,handleAdd:e.handleExpAdd,handleEdit:e.handleExpEdit},a)})),Object(n.jsxs)("button",{onClick:this.handleExpAdd,className:"btn btn-primary mt-2 addBtn",children:["Add"," "]}),Object(n.jsx)("h2",{className:"mt-4 pt-3 border-top",children:"Education"}),this.state.education.map((function(t,a){return Object(n.jsx)(j,{index:a,name:t.name,study:t.study,start:t.start,end:t.end,submitted:t.submitted,displayTog:t.displayed,handleChange:e.handleEduChange,handleSubmit:e.handleEduSubmit,handleAdd:e.handleEduAdd,handleEdit:e.handleEduEdit},a)})),Object(n.jsxs)("button",{onClick:this.handleEduAdd,className:"btn btn-primary mt-2 addBtn",children:["Add"," "]})]})}}]),a}(s.Component),p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,d=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),d(e),c(e)}))};i.a.render(Object(n.jsx)(d.a.StrictMode,{children:Object(n.jsx)(h,{})}),document.getElementById("root")),p()}},[[15,1,2]]]);
//# sourceMappingURL=main.d6c4e89c.chunk.js.map