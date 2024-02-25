(function(){"use strict";var o={722:function(o,t,e){var n=e(5130),s=e(6768);const i={class:"app-main"};function r(o,t,e,n,r,d){const l=(0,s.g2)("AppHeader"),a=(0,s.g2)("AppFilters"),u=(0,s.g2)("AppTodoList"),c=(0,s.g2)("AppTodoAdd"),p=(0,s.g2)("AppFooter");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.bF)(l),(0,s.bF)(a,{filterList:o.filterList,"active-filter":o.activeFilter,onSetFilter:o.setActiveFilter},null,8,["filterList","active-filter","onSetFilter"]),(0,s.Lk)("main",i,[(0,s.bF)(u,{todos:o.filteredTodos,onToggleTodo:o.toggleTodo,onDeleteTodo:o.deleteTodo},null,8,["todos","onToggleTodo","onDeleteTodo"]),(0,s.bF)(c,{onAddTodo:o.addTodo},null,8,["onAddTodo"])]),(0,s.bF)(p,{stats:o.stats},null,8,["stats"])],64)}e(4114);const d={class:"app-header"},l=(0,s.Lk)("span",{class:"logo"},"TODOS",-1),a=[l];function u(o,t,e,n,i,r){return(0,s.uX)(),(0,s.CE)("header",d,a)}var c=(0,s.pM)({name:"AppHeader"}),p=e(1241);const f=(0,p.A)(c,[["render",u]]);var T=f,h=e(4232);const m={class:"app-filters"},v={class:"toggle-group"},g=["onClick"];function b(o,t,e,n,i,r){return(0,s.uX)(),(0,s.CE)("aside",m,[(0,s.Lk)("section",v,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(o.filterList,(t=>((0,s.uX)(),(0,s.CE)("button",{key:t,class:(0,h.C4)(["button",{"button--primary":t===o.activeFilter}]),onClick:e=>o.setFilter(t)},(0,h.v_)(t),11,g)))),128))])])}var A=(0,s.pM)({name:"AppFilters",props:{filterList:{type:Array,required:!0},activeFilter:{type:String,required:!0}},emits:{setFilter:o=>o},methods:{setFilter(o){this.$emit("setFilter",o)}}});const F=(0,p.A)(A,[["render",b]]);var k=F;const L={class:"todo-list"};function y(o,t,e,n,i,r){const d=(0,s.g2)("AppTodoItem");return(0,s.uX)(),(0,s.CE)("ul",L,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(o.todos,(t=>((0,s.uX)(),(0,s.Wv)(d,{key:t.id,todo:t,onToggleTodo:o.toggleTodo,onDeleteTodo:o.deleteTodo},null,8,["todo","onToggleTodo","onDeleteTodo"])))),128))])}const C=(0,s.Lk)("div",{class:"todo-item__status"},[(0,s.Lk)("i",{class:"bi bi-check2"})],-1),_={class:"todo-item__text"},x=(0,s.Lk)("i",{class:"bi bi-trash3"},null,-1),O=[x];function w(o,t,e,i,r,d){return(0,s.uX)(),(0,s.CE)("li",{class:(0,h.C4)(["todo-item",{"todo-item--done":o.todo.done}]),onClick:t[1]||(t[1]=(...t)=>o.toggleTodo&&o.toggleTodo(...t))},[C,(0,s.Lk)("span",_,(0,h.v_)(o.todo.text),1),(0,s.Lk)("button",{class:"todo-item__remove-button",onClick:t[0]||(t[0]=(0,n.D$)(((...t)=>o.deleteTodo&&o.deleteTodo(...t)),["stop"]))},O)],2)}var E=(0,s.pM)({name:"AppTodoItem",props:{todo:{type:Object,required:!0}},methods:{toggleTodo(){this.$emit("toggleTodo",this.todo.id)},deleteTodo(){this.$emit("deleteTodo",this.todo.id)}},emits:{toggleTodo:o=>Number.isInteger(o),deleteTodo:o=>Number.isInteger(o)}});const X=(0,p.A)(E,[["render",w]]);var D=X,I=(0,s.pM)({name:"AppTodoList",components:{AppTodoItem:D},props:{todos:{type:Array}},emits:{toggleTodo:o=>Number.isInteger(o),deleteTodo:o=>Number.isInteger(o)},methods:{toggleTodo(o){this.$emit("toggleTodo",o)},deleteTodo(o){this.$emit("deleteTodo",o)}}});const j=(0,p.A)(I,[["render",y]]);var M=j;const $={class:"add-todo"},S=(0,s.Lk)("i",{class:"bi bi-x"},null,-1),V=[S],q={class:"text-input text-input--focus"},N=(0,s.Lk)("button",{class:"button button--filled"},"Add task",-1),H=(0,s.Lk)("i",{class:"bi bi-plus-lg"},null,-1),K=[H];function P(o,t,e,i,r,d){return(0,s.uX)(),(0,s.CE)("section",$,[o.isFormVisible?((0,s.uX)(),(0,s.CE)("form",{key:0,onSubmit:t[2]||(t[2]=(0,n.D$)(((...t)=>o.addTodo&&o.addTodo(...t)),["prevent"])),class:"add-todo__form"},[(0,s.Lk)("button",{class:"close-button",type:"button",onClick:t[0]||(t[0]=(...t)=>o.closeForm&&o.closeForm(...t))},V),(0,s.Lk)("div",q,[(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":t[1]||(t[1]=t=>o.todoText=t),class:"input"},null,512),[[n.Jo,o.todoText]])]),N],32)):((0,s.uX)(),(0,s.CE)("button",{key:1,onClick:t[3]||(t[3]=(...t)=>o.showForm&&o.showForm(...t)),class:"add-todo__show-form-button"},K))])}var J=(0,s.pM)({name:"AppTodoAdd",data(){return{isFormVisible:!1,todoText:""}},methods:{showForm(){this.isFormVisible=!0},closeForm(){this.isFormVisible=!1},addTodo(){this.$emit("addTodo",{id:Date.now(),text:this.todoText,done:!1}),this.todoText=""}},emits:{addTodo:o=>o}});const U=(0,p.A)(J,[["render",P]]);var W=U;const z={class:"app-footer"};function B(o,t,e,n,i,r){return(0,s.uX)(),(0,s.CE)("footer",z,(0,h.v_)(o.stats.active)+" more to do, "+(0,h.v_)(o.stats.done)+" done ",1)}var G=(0,s.pM)({name:"AppFooter",props:{stats:{type:Object,required:!0}}});const Q=(0,p.A)(G,[["render",B]]);var R=Q,Y=(0,s.pM)({components:{AppFooter:R,AppTodoAdd:W,AppTodoList:M,AppFilters:k,AppHeader:T},data(){return{todos:[{id:0,done:!0,text:"Learn the basics of Vue"},{id:1,done:!1,text:"Learn the basics of Typescript"},{id:2,done:!1,text:"Subscribe to the channel"}],filterList:["All","Active","Done"],activeFilter:"All"}},computed:{filteredTodos(){switch(this.activeFilter){case"Active":return this.activeTodos;case"Done":return this.doneTodos;case"All":default:return this.todos}},doneTodos(){return this.todos.filter((o=>o.done))},activeTodos(){return this.todos.filter((o=>!o.done))},stats(){return{active:this.activeTodos.length,done:this.doneTodos.length}}},methods:{addTodo(o){this.todos.push(o)},toggleTodo(o){const t=this.todos.find((t=>t.id===o));t&&(t.done=!t.done)},deleteTodo(o){this.todos=this.todos.filter((t=>t.id!==o))},setActiveFilter(o){this.activeFilter=o}}});const Z=(0,p.A)(Y,[["render",r]]);var oo=Z;(0,n.Ef)(oo).mount("#app")}},t={};function e(n){var s=t[n];if(void 0!==s)return s.exports;var i=t[n]={exports:{}};return o[n].call(i.exports,i,i.exports,e),i.exports}e.m=o,function(){var o=[];e.O=function(t,n,s,i){if(!n){var r=1/0;for(u=0;u<o.length;u++){n=o[u][0],s=o[u][1],i=o[u][2];for(var d=!0,l=0;l<n.length;l++)(!1&i||r>=i)&&Object.keys(e.O).every((function(o){return e.O[o](n[l])}))?n.splice(l--,1):(d=!1,i<r&&(r=i));if(d){o.splice(u--,1);var a=s();void 0!==a&&(t=a)}}return t}i=i||0;for(var u=o.length;u>0&&o[u-1][2]>i;u--)o[u]=o[u-1];o[u]=[n,s,i]}}(),function(){e.n=function(o){var t=o&&o.__esModule?function(){return o["default"]}:function(){return o};return e.d(t,{a:t}),t}}(),function(){e.d=function(o,t){for(var n in t)e.o(t,n)&&!e.o(o,n)&&Object.defineProperty(o,n,{enumerable:!0,get:t[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(o){if("object"===typeof window)return window}}()}(),function(){e.o=function(o,t){return Object.prototype.hasOwnProperty.call(o,t)}}(),function(){var o={524:0};e.O.j=function(t){return 0===o[t]};var t=function(t,n){var s,i,r=n[0],d=n[1],l=n[2],a=0;if(r.some((function(t){return 0!==o[t]}))){for(s in d)e.o(d,s)&&(e.m[s]=d[s]);if(l)var u=l(e)}for(t&&t(n);a<r.length;a++)i=r[a],e.o(o,i)&&o[i]&&o[i][0](),o[i]=0;return e.O(u)},n=self["webpackChunkvue_ts_todo"]=self["webpackChunkvue_ts_todo"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=e.O(void 0,[504],(function(){return e(722)}));n=e.O(n)})();
//# sourceMappingURL=app.91103788.js.map