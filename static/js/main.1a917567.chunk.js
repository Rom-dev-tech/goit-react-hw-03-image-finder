(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{17:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){},45:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(7),s=a.n(o),c=a(3),i=a(4),l=a(6),u=a(5),d=(a(17),a(0)),h=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:""},e.handleSearchChange=function(t){e.setState({searchQuery:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.searchQuery.trim()?(e.props.onSubmit(e.state.searchQuery),e.setState({searchQuery:""})):e.props.onSubmit(e.state.searchQuery.trim())},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(d.jsxs)("header",{className:"searchbar",children:[Object(d.jsxs)("form",{className:"searchform",onSubmit:this.handleSubmit,children:[Object(d.jsx)("button",{type:"submit",className:"searchform__button",children:Object(d.jsx)("span",{className:"searchform__button--label",children:"Search"})}),Object(d.jsx)("input",{id:"anchor",className:"searchform__input",type:"text",value:this.state.searchQuery,onChange:this.handleSearchChange,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]}),Object(d.jsx)("button",{className:"clear__button",type:"button",onClick:this.props.cleareImages})]})}}]),a}(n.Component),m=a(10),g=(a(19),a.p+"static/media/default.2e01288c.jpg"),p=function(e){var t=e.openModal,a=e.webformatURL,n=void 0===a?g:a,r=e.largeImageURL,o=e.tags;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("li",{className:"gallery__item",children:Object(d.jsx)("img",{onClick:function(e){return t(e.target.dataset.source,e.target.alt)},src:n,alt:o,"data-source":r,className:"gallery__image"})})})},j=(a(20),function(e){var t=e.images,a=e.openModal;return Object(d.jsx)("ul",{className:"gallery",children:t.map((function(e){var t=e.id,n=e.webformatURL,r=e.largeImageURL,o=e.tags;return Object(d.jsx)(p,{openModal:a,webformatURL:n,largeImageURL:r,tags:o},t)}))})}),b=a(9),f=a.n(b),y=a(11),O=function(){var e=Object(y.a)(f.a.mark((function e(t,a){var n,r,o,s,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams({image_type:"photo",orientation:"horizontal",q:t,page:a,per_page:12,key:"".concat("22356210-f5a6fb995cd777b2b01184cc9")}),r="".concat("https://pixabay.com/api","/?").concat(n),e.next=4,fetch(r);case 4:return o=e.sent,e.next=7,o.json();case 7:return s=e.sent,e.next=10,s.hits;case 10:if(0===(c=e.sent).length){e.next=13;break}return e.abrupt("return",c);case 13:return e.abrupt("return",Promise.reject(new Error('No pictures with name "'.concat(t,'"'))));case 14:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),v=(a(22),function(e){var t=e.page;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("button",{type:"button",className:"button",onClick:t,children:"Load more"})})}),x=(a(23),a(12)),w=a.n(x),S=(a(44),function(){return Object(d.jsx)(w.a,{className:"loader",type:"Circles",color:"#303f9f",height:100,width:100})}),k=(a(45),document.querySelector("#modal-root")),I=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={isLoading:!0},e.handleKeyDown=function(t){"Escape"===t.code&&e.props.closeModal()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.closeModal()},e.isLoadingStop=function(){e.setState({isLoading:!1})},e.onLoadClick=function(t){a(46).saveAs(t,"image.jpg"),e.props.closeModal()},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this,t=this.state.isLoading;return Object(o.createPortal)(Object(d.jsx)("div",{className:"overlay",onClick:this.handleBackdropClick,children:Object(d.jsxs)("div",{className:"modal",children:[t&&Object(d.jsx)(S,{}),Object(d.jsxs)("div",{className:"image__wrapper",children:[Object(d.jsx)("img",{onLoad:this.isLoadingStop,className:"modal__image",src:this.props.modalImage,alt:this.props.modalImageAlt}),Object(d.jsx)("button",{className:"downloade__button",type:"button",onClick:function(){return e.onLoadClick(e.props.modalImage)}})]})]})}),k)}}]),n}(n.Component),_=(a(48),function(e){var t=e.message;return Object(d.jsx)("h1",{className:"notification__error",children:t})}),M=(a(49),function(){return Object(d.jsxs)("div",{className:"about",children:[Object(d.jsx)("h2",{className:"about__title",children:"About this API"}),Object(d.jsx)("p",{className:"about__description",children:"Good day, my friend! I wanted to tell you a little bit about this app. This application for searching images by search word. To start using, enter the text in the search. To loade more images, you will see a button to loade more. If no images are displayed for your request, you will see notifications. Re-enter your request. When you enter a blank value in the search field, you will also see a notification. You can also download in your Device the image you like. I wish you a pleasant use. Thank you for reading this information to the end!"}),Object(d.jsx)("a",{className:"anchor__link",href:"#anchor",children:"Get Start"})]})}),C="idle",L="pending",N="resolved",Q="rejected",A=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={page:1,images:[],showModal:!1,modalImage:"",modalImageAlt:"",error:null,status:C,isClickButtonLoadMore:!1},e.pageIncrement=function(){return e.setState((function(e){return{page:e.page+1}}))},e.closeModal=function(){e.toggleModal(),e.setState((function(e){e.modalImage;return{modalImage:"",modalImageAlt:""}}))},e.toggleModal=function(){return e.setState((function(e){return{showModal:!e.showModal}}))},e.openModal=function(t,a){e.toggleModal(),e.setState((function(e){e.modalImage;return{modalImage:t,modalImageAlt:a}}))},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,n=e.searchQuery,r=this.props.searchQuery,o=e.toggleClearPage,s=this.props.toggleClearPage,c=t.page,i=this.state.page,l=t.images,u=t.modalImage,d=this.state.modalImage;if(o!==s&&this.setState({status:C}),u===d){if(n!==r){if(this.setState({status:L,page:1,isClickButtonLoadMore:!1}),""===r)return void setTimeout((function(){a.setState({error:{message:"Ops, empty. Please enter something..."},status:Q})}),500);O(r,1).then((function(e){return a.setState({images:e,status:N})})).catch((function(e){return a.setState({error:e,status:Q})}))}1!==i&&c!==i&&(this.setState({status:L,isClickButtonLoadMore:!0}),O(n,i).then((function(e){a.setState({images:[].concat(Object(m.a)(l),Object(m.a)(e)),status:N}),a.scroll()})).catch((function(e){return a.setState({images:[],error:{message:"Sorry, no more pictures ...",status:Q}})})))}}},{key:"scroll",value:function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.showModal,n=e.modalImage,r=e.modalImageAlt,o=e.error,s=e.status,c=e.isClickButtonLoadMore;return"idle"===s?Object(d.jsx)(M,{}):"pending"===s?Object(d.jsxs)(d.Fragment,{children:[c&&Object(d.jsx)(j,{images:t,openModal:this.openModal}),Object(d.jsx)(S,{})]}):"rejected"===s?Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(_,{message:o.message})}):"resolved"===s?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j,{images:t,openModal:this.openModal}),t.length>=12?Object(d.jsx)(v,{page:this.pageIncrement}):null,a&&Object(d.jsx)(I,{closeModal:this.closeModal,modalImage:n,modalImageAlt:r})]}):void 0}}]),a}(n.Component),P=(a(50),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:null,togglePage:!1},e.getSearchQuerry=function(t){return e.setState({searchQuery:t})},e.cleareImages=function(){e.setState((function(e){return{togglePage:!e.togglePage}}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.searchQuery,a=e.togglePage;return Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)(h,{onSubmit:this.getSearchQuerry,cleareImages:this.cleareImages}),Object(d.jsx)(A,{searchQuery:t,toggleClearPage:a})]})}}]),a}(n.Component));a(51),a(52);s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(P,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.1a917567.chunk.js.map