(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],[,,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(7),l=a.n(r),m=(a(16),a(10)),s=a(2),o=a(3),d=a(5),c=a(4),h=(a(17),a(18),a(19),function(e){var t=e.title,a=e.description,i=e.imgUrl,r=e.imdbUrl;return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-image"},n.a.createElement("figure",{className:"image is-4by3"},n.a.createElement("img",{src:i,alt:"Film logo"}))),n.a.createElement("div",{className:"card-content"},n.a.createElement("div",{className:"media"},n.a.createElement("div",{className:"media-left"},n.a.createElement("figure",{className:"image is-48x48"},n.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),n.a.createElement("div",{className:"media-content"},n.a.createElement("p",{className:"title is-8"},t))),n.a.createElement("div",{className:"content"},a,n.a.createElement("br",null),n.a.createElement("a",{href:r},"IMDB"))))});h.defaultProps={description:""};var p=function(e){var t=e.movies;return n.a.createElement("div",{className:"movies"},t.map((function(e){return n.a.createElement(h,Object.assign({key:e.imdbId},e))})))};p.defaultProps={movies:[]};var u=a(8),g=a(1),b=a.n(g),v=function(e){Object(d.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(s.a)(this,a);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:"",errors:{title:[],description:[],imgUrl:[],imdbUrl:[],imdbId:[]}},e.handleChange=function(t){var a=t.target,i=a.name,n=a.value;e.setState(Object(u.a)({},i,n))},e.handleSubmit=function(t){t.preventDefault(),e.handleValidation()&&(e.props.onAdd(e.state.title),e.setState({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""}))},e}return Object(o.a)(a,[{key:"handleValidation",value:function(){var e=this.state,t=e.title,a=e.description,i=e.imgUrl,n=e.imdbUrl,r=e.imdbId,l={title:[],description:[],imgUrl:[],imdbUrl:[],imdbId:[]},m=!0;return t||(m=!1,l.title.push("Title is empty")),a||(m=!1,l.description.push("Description is empty")),i||(m=!1,l.imgUrl.push("Image URL is empty")),n||(m=!1,l.imdbUrl.push("IMDB URL is empty")),r||(m=!1,l.imdbId.push("IMDB ID is empty")),/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/.test(n)||(m=!1,l.imdbUrl.push("IMDB URL is not valid")),/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/.test(r)||(m=!1,l.imdbId.push("IMDB ID is not valid")),this.setState({errors:l}),m}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.description,i=e.imgUrl,r=e.imdbUrl,l=e.imdbId,m=e.errors;return n.a.createElement("form",{className:b()({redBorder:m.title[0]}),name:"text",onSubmit:this.handleSubmit},n.a.createElement("input",{type:"text",name:"title",placeholder:"title",value:t,onChange:this.handleChange}),n.a.createElement("div",{className:"error"},m.title[0]),n.a.createElement("input",{className:b()({redBorder:m.title[0]}),type:"text",placeholder:"description",name:"description",value:a,onChange:this.handleChange}),n.a.createElement("div",{className:"error"},m.description[0]),n.a.createElement("input",{className:b()({redBorder:m.title[0]}),type:"text",placeholder:"imgUrl",name:"imgUrl",value:i,onChange:this.handleChange}),n.a.createElement("div",{className:"error"},m.imgUrl[0]),n.a.createElement("input",{className:b()({redBorder:m.title[0]}),type:"text",placeholder:"imdbUrl",name:"imdbUrl",value:r,onChange:this.handleChange}),n.a.createElement("div",{className:"error"},m.imdbUrl[0]),n.a.createElement("input",{className:b()({redBorder:m.title[0]}),type:"text",placeholder:"imdbId",name:"imdbId",value:l,onChange:this.handleChange}),n.a.createElement("div",{className:"error"},m.imdbId[0]),n.a.createElement("button",{type:"submit"},"Add"))}}]),a}(i.Component),w=a(9),f=function(e){Object(d.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(s.a)(this,a);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={movies:w},e.addMovie=function(t){e.setState((function(e){return{movies:[].concat(Object(m.a)(e.movies),[t])}}))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.movies;return n.a.createElement("div",{className:"page"},n.a.createElement("div",{className:"page-content"},n.a.createElement(p,{movies:e})),n.a.createElement("div",{className:"sidebar"},n.a.createElement(v,{onAdd:this.addMovie})))}}]),a}(i.Component);l.a.render(n.a.createElement(f,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.f8d143c4.chunk.js.map