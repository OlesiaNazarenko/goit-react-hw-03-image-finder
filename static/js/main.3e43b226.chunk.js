(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2tzmH",SearchForm:"Searchbar_SearchForm__1mb-1","SearchForm-button":"Searchbar_SearchForm-button__2tpzd","SearchForm-button-label":"Searchbar_SearchForm-button-label__2fuS-","SearchForm-input":"Searchbar_SearchForm-input__17blb"}},14:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__hr8AC","ImageGalleryItem-image":"ImageGalleryItem_ImageGalleryItem-image__2Q70Q"}},15:function(e,t,a){e.exports={Overlay:"Modal_Overlay__quBKt",Modal:"Modal_Modal__zdaEj"}},26:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__VywSQ"}},27:function(e,t,a){e.exports={Button:"Button_Button__38t_-"}},29:function(e,t,a){e.exports={spinner:"Spinner_spinner__572ds"}},36:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(5),c=a.n(o),i=(a(36),a(16)),s=a(6),l=a(7),u=a(9),m=a(8),h=a(4),d=(a(17),a(31)),g=a(10),b=a.n(g),p=a(1);h.c.configure();var j=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.searchQuery=function(t){e.setState({query:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.query.trim()?(e.setState({query:""}),e.props.onSubmit(e.state.query)):h.c.error("Please, enter a name!")},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(p.jsx)("header",{className:b.a.Searchbar,children:Object(p.jsxs)("form",{className:b.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(p.jsx)("button",{type:"submit",className:b.a["SearchForm-button"],children:Object(p.jsx)(d.a,{})}),Object(p.jsx)("input",{name:"query",className:b.a["SearchForm-input"],type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.searchQuery,value:this.state.query})]})})}}]),a}(n.Component),f=a(14),y=a.n(f);function v(e){var t=e.itemId,a=e.webformatURL,n=e.tags,r=e.onClick;return Object(p.jsx)("li",{className:y.a.ImageGalleryItem,children:Object(p.jsx)("img",{className:y.a["ImageGalleryItem-image"],src:a,alt:n,onClick:function(){r(t)}})})}var S=a(26),O=a.n(S);function _(e){var t=e.data,a=e.openModal,n=e.getImageForModal;return Object(p.jsx)("ul",{className:O.a.ImageGallery,onClick:a,children:t.map((function(e){var t=e.id,a=e.webformatURL,r=e.tags;return Object(p.jsx)(v,{webformatURL:a,tags:r,onClick:n,itemId:t},t)}))})}var I=a(27),x=a.n(I);function w(e){var t=e.onClick;return Object(p.jsx)("button",{type:"button",onClick:t,className:x.a.Button,children:"More"})}var k=a(15),C=a.n(k),M=document.querySelector("#modal-root"),F=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(p.jsx)("div",{className:C.a.Overlay,onClick:this.handleBackdropClick,children:Object(p.jsx)("div",{className:C.a.Modal,children:Object(p.jsx)("img",{src:this.props.largeImageUrl,alt:""})})}),M)}}]),a}(n.Component),q=a(28),G=a.n(q),N=(a(58),a(29)),U=a.n(N);function B(){return Object(p.jsx)("div",{children:Object(p.jsx)(G.a,{className:U.a.spinner,type:"ThreeDots",color:"#3f51b5",height:100,width:100,timeout:3e3})})}var D=a(30),E=a.n(D);h.c.configure();var L=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showModal:!1,images:[],loading:!1,query:"",page:1,largeImageUrl:[],modalContent:""},e.pageIncrement=function(){e.setState({page:e.state.page+1})},e.handleFormSubmit=function(t){e.setState({query:t,page:1,loading:!0})},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.getImageForModal=function(t){var a=e.state.images.find((function(e){return e.id===t}));e.setState({modalContent:a.largeImageURL})},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a,n,r=this,o=this.state,c=o.query,s=o.page,l=t.query,u=t.page;c===l&&s===u||(this.setState({loading:!0}),(a=c,n=s,E.a.get("".concat("https://pixabay.com/api/","?image_type=photo&orientation=horizontal&q=").concat(a,"&").concat(n,"=1&per_page=12&key=").concat("23477819-44226e1e125dfcf9362a81201"))).then((function(e){if(200===e.status){var t=e.data.hits;r.setState({images:[].concat(Object(i.a)(r.state.images),Object(i.a)(t)),query:c,largeImageUrl:e.data.hits.map((function(e){return e.largeImageURL}))})}if(window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),0===r.state.images.length&&h.c.warn("There are no images. Try another request, please",{transition:h.a}),404===e.status)throw new Error(e.message||h.c.error("Images are not exist",{transition:h.b}))})).finally(this.setState({loading:!1})))}},{key:"componentDidMount",value:function(e,t){this.setState({query:"",page:1})}},{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(j,{onSubmit:this.handleFormSubmit}),Object(p.jsx)(_,{data:this.state.images,getImageForModal:this.getImageForModal,openModal:this.toggleModal}),!0===this.state.loading&&Object(p.jsx)(B,{}),0!==this.state.images.length&&Object(p.jsx)(w,{onClick:this.pageIncrement}),this.state.showModal&&Object(p.jsx)(F,{onClose:this.toggleModal,largeImageUrl:this.state.modalContent})]})}}]),a}(n.Component);c.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(L,{})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.3e43b226.chunk.js.map