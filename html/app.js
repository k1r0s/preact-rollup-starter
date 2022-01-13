(function () {
	'use strict';

	var n,l,u,t,r,o,e={},c=[],s=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function a(n,l){for(var u in l){ n[u]=l[u]; }return n}function h(n){var l=n.parentNode;l&&l.removeChild(n);}function v(l,u,i){var t,r,o,f={};for(o in u){ "key"==o?t=u[o]:"ref"==o?r=u[o]:f[o]=u[o]; }if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),"function"==typeof l&&null!=l.defaultProps){ for(o in l.defaultProps){ void 0===f[o]&&(f[o]=l.defaultProps[o]); } }return y(l,f,t,r,null)}function y(n,i,t,r,o){var f={type:n,props:i,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++u:o};return null==o&&null!=l.vnode&&l.vnode(f),f}function d(n){return n.children}function _(n,l){this.props=n,this.context=l;}function k(n,l){if(null==l){ return n.__?k(n.__,n.__.__k.indexOf(n)+1):null; }for(var u;l<n.__k.length;l++){ if(null!=(u=n.__k[l])&&null!=u.__e){ return u.__e; } }return "function"==typeof n.type?k(n):null}function b(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++){ if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break} }return b(n)}}function m(n){(!n.__d&&(n.__d=!0)&&t.push(n)&&!g.__r++||o!==l.debounceRendering)&&((o=l.debounceRendering)||r)(g);}function g(){for(var n;g.__r=t.length;){ n=t.sort(function(n,l){return n.__v.__b-l.__v.__b}),t=[],n.some(function(n){var l,u,i,t,r,o;n.__d&&(r=(t=(l=n).__v).__e,(o=l.__P)&&(u=[],(i=a({},t)).__v=t.__v+1,j(o,t,i,l.__n,void 0!==o.ownerSVGElement,null!=t.__h?[r]:null,u,null==r?k(t):r,t.__h),z(u,t),t.__e!=r&&b(t)));}); }}function w(n,l,u,i,t,r,o,f,s,a){var h,v,p,_,b,m,g,w=i&&i.__k||c,A=w.length;for(u.__k=[],h=0;h<l.length;h++){ if(null!=(_=u.__k[h]=null==(_=l[h])||"boolean"==typeof _?null:"string"==typeof _||"number"==typeof _||"bigint"==typeof _?y(null,_,null,null,_):Array.isArray(_)?y(d,{children:_},null,null,null):_.__b>0?y(_.type,_.props,_.key,null,_.__v):_)){if(_.__=u,_.__b=u.__b+1,null===(p=w[h])||p&&_.key==p.key&&_.type===p.type){ w[h]=void 0; }else { for(v=0;v<A;v++){if((p=w[v])&&_.key==p.key&&_.type===p.type){w[v]=void 0;break}p=null;} }j(n,_,p=p||e,t,r,o,f,s,a),b=_.__e,(v=_.ref)&&p.ref!=v&&(g||(g=[]),p.ref&&g.push(p.ref,null,_),g.push(v,_.__c||b,_)),null!=b?(null==m&&(m=b),"function"==typeof _.type&&_.__k===p.__k?_.__d=s=x(_,s,n):s=P(n,_,p,w,b,s),"function"==typeof u.type&&(u.__d=s)):s&&p.__e==s&&s.parentNode!=n&&(s=k(p));} }for(u.__e=m,h=A;h--;){ null!=w[h]&&("function"==typeof u.type&&null!=w[h].__e&&w[h].__e==u.__d&&(u.__d=k(i,h+1)),N(w[h],w[h])); }if(g){ for(h=0;h<g.length;h++){ M(g[h],g[++h],g[++h]); } }}function x(n,l,u){for(var i,t=n.__k,r=0;t&&r<t.length;r++){ (i=t[r])&&(i.__=n,l="function"==typeof i.type?x(i,l,u):P(u,i,i,t,i.__e,l)); }return l}function P(n,l,u,i,t,r){var o,f,e;if(void 0!==l.__d){ o=l.__d,l.__d=void 0; }else if(null==u||t!=r||null==t.parentNode){ n:if(null==r||r.parentNode!==n){ n.appendChild(t),o=null; }else {for(f=r,e=0;(f=f.nextSibling)&&e<i.length;e+=2){ if(f==t){ break n; } }n.insertBefore(t,r),o=r;} }return void 0!==o?o:t.nextSibling}function C(n,l,u,i,t){var r;for(r in u){ "children"===r||"key"===r||r in l||H(n,r,null,u[r],i); }for(r in l){ t&&"function"!=typeof l[r]||"children"===r||"key"===r||"value"===r||"checked"===r||u[r]===l[r]||H(n,r,l[r],u[r],i); }}function $(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||s.test(l)?u:u+"px";}function H(n,l,u,i,t){var r;n:if("style"===l){ if("string"==typeof u){ n.style.cssText=u; }else {if("string"==typeof i&&(n.style.cssText=i=""),i){ for(l in i){ u&&l in u||$(n.style,l,""); } }if(u){ for(l in u){ i&&u[l]===i[l]||$(n.style,l,u[l]); } }} }else if("o"===l[0]&&"n"===l[1]){ r=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+r]=u,u?i||n.addEventListener(l,r?T:I,r):n.removeEventListener(l,r?T:I,r); }else if("dangerouslySetInnerHTML"!==l){if(t){ l=l.replace(/xlink[H:h]/,"h").replace(/sName$/,"s"); }else if("href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n){ try{n[l]=null==u?"":u;break n}catch(n$1){} }"function"==typeof u||(null!=u&&(!1!==u||"a"===l[0]&&"r"===l[1])?n.setAttribute(l,u):n.removeAttribute(l));}}function I(n){this.l[n.type+!1](l.event?l.event(n):n);}function T(n){this.l[n.type+!0](l.event?l.event(n):n);}function j(n,u,i,t,r,o,f,e,c){var s,h,v,y,p,k,b,m,g,x,A,P=u.type;if(void 0!==u.constructor){ return null; }null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,o=[e]),(s=l.__b)&&s(u);try{n:if("function"==typeof P){if(m=u.props,g=(s=P.contextType)&&t[s.__c],x=s?g?g.props.value:s.__:t,i.__c?b=(h=u.__c=i.__c).__=h.__E:("prototype"in P&&P.prototype.render?u.__c=h=new P(m,x):(u.__c=h=new _(m,x),h.constructor=P,h.render=O),g&&g.sub(h),h.props=m,h.state||(h.state={}),h.context=x,h.__n=t,v=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=P.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=a({},h.__s)),a(h.__s,P.getDerivedStateFromProps(m,h.__s))),y=h.props,p=h.state,v){ null==P.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount); }else {if(null==P.getDerivedStateFromProps&&m!==y&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(m,x),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(m,h.__s,x)||u.__v===i.__v){h.props=m,h.state=h.__s,u.__v!==i.__v&&(h.__d=!1),h.__v=u,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u);}),h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(m,h.__s,x),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(y,p,k);});}h.context=x,h.props=m,h.state=h.__s,(s=l.__r)&&s(u),h.__d=!1,h.__v=u,h.__P=n,s=h.render(h.props,h.state,h.context),h.state=h.__s,null!=h.getChildContext&&(t=a(a({},t),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(k=h.getSnapshotBeforeUpdate(y,p)),A=null!=s&&s.type===d&&null==s.key?s.props.children:s,w(n,Array.isArray(A)?A:[A],u,i,t,r,o,f,e,c),h.base=u.__e,u.__h=null,h.__h.length&&f.push(h),b&&(h.__E=h.__=null),h.__e=!1;}else { null==o&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=L(i.__e,u,i,t,r,o,f,c); }(s=l.diffed)&&s(u);}catch(n$1){u.__v=null,(c||null!=o)&&(u.__e=e,u.__h=!!c,o[o.indexOf(e)]=null),l.__e(n$1,u,i);}}function z(n,u){l.__c&&l.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n$1){l.__e(n$1,u.__v);}});}function L(l,u,i,t,r,o,f,c){var s,a,v,y=i.props,p=u.props,d=u.type,_=0;if("svg"===d&&(r=!0),null!=o){ for(;_<o.length;_++){ if((s=o[_])&&"setAttribute"in s==!!d&&(d?s.localName===d:3===s.nodeType)){l=s,o[_]=null;break} } }if(null==l){if(null===d){ return document.createTextNode(p); }l=r?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,p.is&&p),o=null,c=!1;}if(null===d){ y===p||c&&l.data===p||(l.data=p); }else {if(o=o&&n.call(l.childNodes),a=(y=i.props||e).dangerouslySetInnerHTML,v=p.dangerouslySetInnerHTML,!c){if(null!=o){ for(y={},_=0;_<l.attributes.length;_++){ y[l.attributes[_].name]=l.attributes[_].value; } }(v||a)&&(v&&(a&&v.__html==a.__html||v.__html===l.innerHTML)||(l.innerHTML=v&&v.__html||""));}if(C(l,p,y,r,c),v){ u.__k=[]; }else if(_=u.props.children,w(l,Array.isArray(_)?_:[_],u,i,t,r&&"foreignObject"!==d,o,f,o?o[0]:i.__k&&k(i,0),c),null!=o){ for(_=o.length;_--;){ null!=o[_]&&h(o[_]); } }c||("value"in p&&void 0!==(_=p.value)&&(_!==y.value||_!==l.value||"progress"===d&&!_)&&H(l,"value",_,y.value,!1),"checked"in p&&void 0!==(_=p.checked)&&_!==l.checked&&H(l,"checked",_,y.checked,!1));}return l}function M(n,u,i){try{"function"==typeof n?n(u):n.current=u;}catch(n$1){l.__e(n$1,i);}}function N(n,u,i){var t,r;if(l.unmount&&l.unmount(n),(t=n.ref)&&(t.current&&t.current!==n.__e||M(t,null,u)),null!=(t=n.__c)){if(t.componentWillUnmount){ try{t.componentWillUnmount();}catch(n$1){l.__e(n$1,u);} }t.base=t.__P=null;}if(t=n.__k){ for(r=0;r<t.length;r++){ t[r]&&N(t[r],u,"function"!=typeof n.type); } }i||null==n.__e||h(n.__e),n.__e=n.__d=void 0;}function O(n,l,u){return this.constructor(n,u)}function S(u,i,t){var r,o,f;l.__&&l.__(u,i),o=(r="function"==typeof t)?null:t&&t.__k||i.__k,f=[],j(i,u=(!r&&t||i).__k=v(d,null,[u]),o||e,e,void 0!==i.ownerSVGElement,!r&&t?[t]:o?null:i.firstChild?n.call(i.childNodes):null,f,!r&&t?t:o?o.__e:i.firstChild,r),z(f,u);}n=c.slice,l={__e:function(n,l){for(var u,i,t;l=l.__;){ if((u=l.__c)&&!u.__){ try{if((i=u.constructor)&&null!=i.getDerivedStateFromError&&(u.setState(i.getDerivedStateFromError(n)),t=u.__d),null!=u.componentDidCatch&&(u.componentDidCatch(n),t=u.__d),t){ return u.__E=u }}catch(l$1){n=l$1;} } }throw n}},u=0,_.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=a({},this.state),"function"==typeof n&&(n=n(a({},u),this.props)),n&&a(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),m(this));},_.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),m(this));},_.prototype.render=d,t=[],r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,g.__r=0;

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	var slugify$1 = {exports: {}};

	(function (module, exports) {
	(function (name, root, factory) {
	  {
	    module.exports = factory();
	    module.exports['default'] = factory();
	  }
	}('slugify', commonjsGlobal, function () {
	  var charMap = JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ə":"E","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","ə":"e","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","Ա":"A","Բ":"B","Գ":"G","Դ":"D","Ե":"E","Զ":"Z","Է":"E\'","Ը":"Y\'","Թ":"T\'","Ժ":"JH","Ի":"I","Լ":"L","Խ":"X","Ծ":"C\'","Կ":"K","Հ":"H","Ձ":"D\'","Ղ":"GH","Ճ":"TW","Մ":"M","Յ":"Y","Ն":"N","Շ":"SH","Չ":"CH","Պ":"P","Ջ":"J","Ռ":"R\'","Ս":"S","Վ":"V","Տ":"T","Ր":"R","Ց":"C","Փ":"P\'","Ք":"Q\'","Օ":"O\'\'","Ֆ":"F","և":"EV","ء":"a","آ":"aa","أ":"a","ؤ":"u","إ":"i","ئ":"e","ا":"a","ب":"b","ة":"h","ت":"t","ث":"th","ج":"j","ح":"h","خ":"kh","د":"d","ذ":"th","ر":"r","ز":"z","س":"s","ش":"sh","ص":"s","ض":"dh","ط":"t","ظ":"z","ع":"a","غ":"gh","ف":"f","ق":"q","ك":"k","ل":"l","م":"m","ن":"n","ه":"h","و":"w","ى":"a","ي":"y","ً":"an","ٌ":"on","ٍ":"en","َ":"a","ُ":"u","ِ":"e","ْ":"","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","پ":"p","چ":"ch","ژ":"zh","ک":"k","گ":"g","ی":"y","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","–":"-","‘":"\'","’":"\'","“":"\\\"","”":"\\\"","„":"\\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial","ﻵ":"laa","ﻷ":"laa","ﻹ":"lai","ﻻ":"la"}');
	  var locales = JSON.parse('{"bg":{"Й":"Y","Ц":"Ts","Щ":"Sht","Ъ":"A","Ь":"Y","й":"y","ц":"ts","щ":"sht","ъ":"a","ь":"y"},"de":{"Ä":"AE","ä":"ae","Ö":"OE","ö":"oe","Ü":"UE","ü":"ue","ß":"ss","%":"prozent","&":"und","|":"oder","∑":"summe","∞":"unendlich","♥":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","¢":"centavos","£":"libras","¤":"moneda","₣":"francos","∑":"suma","∞":"infinito","♥":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","¢":"centime","£":"livre","¤":"devise","₣":"franc","∑":"somme","∞":"infini","♥":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","¢":"centavo","∑":"soma","£":"libra","∞":"infinito","♥":"amor"},"uk":{"И":"Y","и":"y","Й":"Y","й":"y","Ц":"Ts","ц":"ts","Х":"Kh","х":"kh","Щ":"Shch","щ":"shch","Г":"H","г":"h"},"vi":{"Đ":"D","đ":"d"},"da":{"Ø":"OE","ø":"oe","Å":"AA","å":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"større end"},"nb":{"&":"og"},"it":{"&":"e"},"nl":{"&":"en"},"sv":{"&":"och"}}');

	  function replace (string, options) {
	    if (typeof string !== 'string') {
	      throw new Error('slugify: string argument expected')
	    }

	    options = (typeof options === 'string')
	      ? {replacement: options}
	      : options || {};

	    var locale = locales[options.locale] || {};

	    var replacement = options.replacement === undefined ? '-' : options.replacement;

	    var trim = options.trim === undefined ? true : options.trim;

	    var slug = string.normalize().split('')
	      // replace characters based on charMap
	      .reduce(function (result, ch) {
	        return result + (locale[ch] || charMap[ch] ||  (ch === replacement ? ' ' : ch))
	          // remove not allowed characters
	          .replace(options.remove || /[^\w\s$*_+~.()'"!\-:@]+/g, '')
	      }, '');

	    if (options.strict) {
	      slug = slug.replace(/[^A-Za-z0-9\s]/g, '');
	    }

	    if (trim) {
	      slug = slug.trim();
	    }

	    // Replace spaces with replacement character, treating multiple consecutive
	    // spaces as a single space.
	    slug = slug.replace(/\s+/g, replacement);

	    if (options.lower) {
	      slug = slug.toLowerCase();
	    }

	    return slug
	  }

	  replace.extend = function (customMap) {
	    Object.assign(charMap, customMap);
	  };

	  return replace
	}));
	}(slugify$1));

	var escaper$1 = {exports: {}};

	/*!
	 * Escaper v2.5.3
	 * https://github.com/kobezzza/Escaper
	 *
	 * Released under the MIT license
	 * https://github.com/kobezzza/Escaper/blob/master/LICENSE
	 *
	 * Date: Tue, 23 Jan 2018 15:58:45 GMT
	 */

	(function (module, exports) {
	(function (global, factory) {
		factory(exports) ;
	}(commonjsGlobal, (function (exports) {
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	  return typeof obj;
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	};

	var Escaper = void 0;
	var escaper = Escaper = {
		VERSION: [2, 5, 3],
		content: [],
		cache: {},
		snakeskinRgxp: null,
		symbols: null,
		replace: replace,
		paste: paste
	};

	var stringLiterals = {
		'"': true,
		'\'': true,
		'`': true
	};

	var literals = {
		'/': true
	};

	for (var key in stringLiterals) {
		if (!stringLiterals.hasOwnProperty(key)) {
			break;
		}

		literals[key] = true;
	}

	var singleComments = {
		'//': true,
		'//*': true,
		'//!': true,
		'//#': true,
		'//@': true,
		'//$': true
	};

	var multComments = {
		'/*': true,
		'/**': true,
		'/*!': true,
		'/*#': true,
		'/*@': true,
		'/*$': true
	};

	var keyArr = [];
	var finalMap = {};

	for (var _key in literals) {
		if (!literals.hasOwnProperty(_key)) {
			break;
		}

		keyArr.push(_key);
		finalMap[_key] = true;
	}

	for (var _key2 in singleComments) {
		if (!singleComments.hasOwnProperty(_key2)) {
			break;
		}

		keyArr.push(_key2);
		finalMap[_key2] = true;
	}

	for (var _key3 in multComments) {
		if (!multComments.hasOwnProperty(_key3)) {
			break;
		}

		keyArr.push(_key3);
		finalMap[_key3] = true;
	}

	var rgxpFlags = [];
	var rgxpFlagsMap = {
		'g': true,
		'm': true,
		'i': true,
		'y': true,
		'u': true
	};

	for (var _key4 in rgxpFlagsMap) {
		if (!rgxpFlagsMap.hasOwnProperty(_key4)) {
			break;
		}

		rgxpFlags.push(_key4);
	}

	var escapeEndMap = {
		'-': true,
		'+': true,
		'*': true,
		'%': true,
		'~': true,
		'>': true,
		'<': true,
		'^': true,
		',': true,
		';': true,
		'=': true,
		'|': true,
		'&': true,
		'!': true,
		'?': true,
		':': true,
		'(': true,
		'{': true,
		'[': true
	};

	var escapeEndWordMap = {
		'return': true,
		'yield': true,
		'await': true,
		'typeof': true,
		'void': true,
		'instanceof': true,
		'delete': true,
		'in': true,
		'new': true,
		'of': true
	};

	/**
	 * @param {!Object} obj
	 * @param {!Object} p
	 * @param {(boolean|number)} val
	 */
	function mix(obj, p, val) {
		for (var _key5 in obj) {
			if (!obj.hasOwnProperty(_key5)) {
				break;
			}

			if (_key5 in p === false) {
				p[_key5] = val;
			}
		}
	}

	var symbols = void 0;
	var snakeskinRgxp = void 0;

	var uSRgxp = /[^\s/]/;
	var wRgxp = /[a-z]/;
	var sRgxp = /\s/;
	var nRgxp = /[\r\n]/;
	var posRgxp = /\${pos}/g;

	var objMap = {
		'object': true,
		'function': true
	};

	/**
	 * Replaces all found blocks ' ... ', " ... ", ` ... `, / ... /, // ..., /* ... *\/ to
	 * __ESCAPER_QUOT__number_ in a string and returns a new string
	 *
	 * @param {string} str - source string
	 * @param {(Object<string, boolean>|boolean)=} [opt_withCommentsOrParams=false] - parameters:
	 *
	 *     (if a parameter value is set to -1, then all found matches will be removed from the final string,
	 *          or if the value will be set to true/false they will be included/excluded)
	 *
	 *     *) @label    - template for replacement, e.g. __ESCAPER_QUOT__${pos}_
	 *     *) @all      - replaces all found matches
	 *     *) @comments - replaces all kinds of comments
	 *     *) @strings  - replaces all kinds of string literals
	 *     *) @literals - replaces all kinds of string literals and regular expressions
	 *     *) `
	 *     *) '
	 *     *) "
	 *     *) /
	 *     *) //
	 *     *) //*
	 *     *) //!
	 *     *) //#
	 *     *) //@
	 *     *) //$
	 *     *) /*
	 *     *) /**
	 *     *) /*!
	 *     *) /*#
	 *     *) /*@
	 *     *) /*$
	 *
	 *     OR if the value is boolean, then will be replaced all found comments (true) / literals (false)
	 *
	 * @param {Array=} [opt_content=Escaper.content] - array for matches
	 * @param {?boolean=} [opt_snakeskin] - private parameter for using with Snakeskin
	 * @return {string}
	 */
	function replace(str, opt_withCommentsOrParams, opt_content, opt_snakeskin) {
		symbols = symbols || Escaper.symbols || 'a-z';
		snakeskinRgxp = snakeskinRgxp || Escaper.snakeskinRgxp || new RegExp('[!$' + symbols + '_]', 'i');

		var _Escaper = Escaper,
		    cache = _Escaper.cache,
		    content = _Escaper.content;


		var isObj = Boolean(opt_withCommentsOrParams && objMap[typeof opt_withCommentsOrParams === 'undefined' ? 'undefined' : _typeof(opt_withCommentsOrParams)]);

		var p = isObj ? Object(opt_withCommentsOrParams) : {};

		function mark(pos) {
			if (p['@label']) {
				return p['@label'].replace(posRgxp, pos);
			}

			return '__ESCAPER_QUOT__' + pos + '_';
		}

		var withComments = false;
		if (typeof opt_withCommentsOrParams === 'boolean') {
			withComments = Boolean(opt_withCommentsOrParams);
		}

		if ('@comments' in p) {
			mix(multComments, p, p['@comments']);
			mix(singleComments, p, p['@comments']);
			delete p['@comments'];
		}

		if ('@strings' in p) {
			mix(stringLiterals, p, p['@strings']);
			delete p['@strings'];
		}

		if ('@literals' in p) {
			mix(literals, p, p['@literals']);
			delete p['@literals'];
		}

		if ('@all' in p) {
			mix(finalMap, p, p['@all']);
			delete p['@all'];
		}

		var cacheKey = '';
		for (var i = -1; ++i < keyArr.length;) {
			var el = keyArr[i];

			if (multComments[el] || singleComments[el]) {
				p[el] = withComments || p[el];
			} else {
				p[el] = p[el] || !isObj;
			}

			cacheKey += p[el] + ',';
		}

		var initStr = str,
		    stack = opt_content || content;

		if (stack === content && cache[cacheKey] && cache[cacheKey][initStr]) {
			return cache[cacheKey][initStr];
		}

		var begin = false,
		    end = true;

		var escape = false,
		    comment = false;

		var selectionStart = 0,
		    block = false;

		var templateVar = 0,
		    filterStart = false;

		var cut = void 0,
		    label = void 0;

		var part = '',
		    rPart = '';

		for (var _i = -1; ++_i < str.length;) {
			var _el = str.charAt(_i);

			var next = str.charAt(_i + 1),
			    word = str.substr(_i, 2),
			    extWord = str.substr(_i, 3);

			if (!comment) {
				if (!begin) {
					if (_el === '/') {
						if (singleComments[word] || multComments[word]) {
							if (singleComments[extWord] || multComments[extWord]) {
								comment = extWord;
							} else {
								comment = word;
							}
						}

						if (comment) {
							selectionStart = _i;
							continue;
						}
					}

					if (escapeEndMap[_el] || escapeEndWordMap[rPart]) {
						end = true;
						rPart = '';
					} else if (uSRgxp.test(_el)) {
						end = false;
					}

					if (wRgxp.test(_el)) {
						part += _el;
					} else {
						rPart = part;
						part = '';
					}

					var skip = false;
					if (opt_snakeskin) {
						if (_el === '|' && snakeskinRgxp.test(next)) {
							filterStart = true;
							end = false;
							skip = true;
						} else if (filterStart && sRgxp.test(_el)) {
							filterStart = false;
							end = true;
							skip = true;
						}
					}

					if (!skip) {
						if (escapeEndMap[_el]) {
							end = true;
						} else if (uSRgxp.test(_el)) {
							end = false;
						}
					}
				}

				// [] inside RegExp
				if (begin === '/' && !escape) {
					if (_el === '[') {
						block = true;
					} else if (_el === ']') {
						block = false;
					}
				}

				if (!begin && templateVar) {
					if (_el === '}') {
						templateVar--;
					} else if (_el === '{') {
						templateVar++;
					}

					if (!templateVar) {
						_el = '`';
					}
				}

				if (begin === '`' && !escape && word === '${') {
					_el = '`';
					_i++;
					templateVar++;
				}

				if (finalMap[_el] && (_el !== '/' || end) && !begin) {
					begin = _el;
					selectionStart = _i;
				} else if (begin && (_el === '\\' || escape)) {
					escape = !escape;
				} else if (finalMap[_el] && begin === _el && !escape && (begin !== '/' || !block)) {
					if (_el === '/') {
						for (var j = -1; ++j < rgxpFlags.length;) {
							if (rgxpFlagsMap[str.charAt(_i + 1)]) {
								_i++;
							}
						}
					}

					begin = false;
					end = false;

					if (p[_el]) {
						cut = str.substring(selectionStart, _i + 1);

						if (p[_el] === -1) {
							label = '';
						} else {
							label = mark(stack.length);
							stack.push(cut);
						}

						str = str.substring(0, selectionStart) + label + str.substring(_i + 1);
						_i += label.length - cut.length;
					}
				}
			} else if (nRgxp.test(next) && singleComments[comment] || multComments[_el + str.charAt(_i - 1)] && _i - selectionStart > 2 && multComments[comment]) {
				if (p[comment]) {
					cut = str.substring(selectionStart, _i + 1);

					if (p[comment] === -1) {
						label = '';
					} else {
						label = mark(stack.length);
						stack.push(cut);
					}

					str = str.substring(0, selectionStart) + label + str.substring(_i + 1);
					_i += label.length - cut.length;
				}

				comment = false;
			}
		}

		if (stack === content) {
			cache[cacheKey] = cache[cacheKey] || {};
			cache[cacheKey][initStr] = str;
		}

		return str;
	}

	var pasteRgxp = /__ESCAPER_QUOT__(\d+)_/g;

	/**
	 * Replaces all found blocks __ESCAPER_QUOT__number_ to real content in a string
	 * and returns a new string
	 *
	 * @param {string} str - source string
	 * @param {Array=} [opt_content=Escaper.content] - array of matches
	 * @param {RegExp=} [opt_rgxp] - RegExp for searching, e.g. /__ESCAPER_QUOT__(\d+)_/g
	 * @return {string}
	 */
	function paste(str, opt_content, opt_rgxp) {
		return str.replace(opt_rgxp || pasteRgxp, function (str, pos) {
			return (opt_content || Escaper.content)[pos];
		});
	}

	exports['default'] = escaper;
	exports.replace = replace;
	exports.paste = paste;

	Object.defineProperty(exports, '__esModule', { value: true });

	})));
	}(escaper$1, escaper$1.exports));

	var isRegexp = function (re) {
		return Object.prototype.toString.call(re) === '[object RegExp]';
	};

	var isRegExp = isRegexp;

	var stripCssComments = function (str, opts) {
		str = str.toString();
		opts = opts || {};

		var preserveFilter;
		var comment = '';
		var currentChar = '';
		var insideString = false;
		var preserveImportant = !(opts.preserve === false || opts.all === true);
		var ret = '';

		if (typeof opts.preserve === 'function') {
			preserveImportant = false;
			preserveFilter = opts.preserve;
		} else if (isRegExp(opts.preserve)) {
			preserveImportant = false;
			preserveFilter = function (comment) {
				return opts.preserve.test(comment);
			};
		}

		for (var i = 0; i < str.length; i++) {
			currentChar = str[i];

			if (str[i - 1] !== '\\') {
				if (currentChar === '"' || currentChar === '\'') {
					if (insideString === currentChar) {
						insideString = false;
					} else if (!insideString) {
						insideString = currentChar;
					}
				}
			}

			// find beginning of /* type comment
			if (!insideString && currentChar === '/' && str[i + 1] === '*') {
				// ignore important comment when configured to preserve comments using important syntax: /*!
				if (!(preserveImportant && str[i + 2] === '!')) {
					var j = i + 2;

					// iterate over comment
					for (; j < str.length; j++) {
						// find end of comment
						if (str[j] === '*' && str[j + 1] === '/') {
							if (preserveFilter) {
								// evaluate comment text
								ret = preserveFilter(comment) ? ret + ('/*' + comment + '*/') : ret;
								comment = '';
							}

							break;
						}

						// store comment text to be evaluated by the filter when the end of the comment is reached
						if (preserveFilter) {
							comment += str[j];
						}
					}

					// resume iteration over CSS string from the end of the comment
					i = j + 1;

					continue;
				}
			}

			ret += currentChar;
		}

		return ret;
	};

	var slugify = slugify$1.exports;
	var escaper = escaper$1.exports;
	var stripComments = stripCssComments;

	var scopeCss = scope;
	scope.replace = replace;

	function scope (css, parent, o) {
		if (!css) { return css }

		if (!parent) { return css }

		if (typeof o === 'string') { o = {keyframes: o}; }
		if (!o) { o = {keyframes: false}; }

		css = replace(css, parent + ' $1$2');

		//regexp.escape
		var parentRe = parent.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');

		//replace self-selectors
		css = css.replace(new RegExp('(' + parentRe + ')\\s*\\1(?=[\\s\\r\\n,{])', 'g'), '$1');

		//replace `:host` with parent
		css = css.replace(new RegExp('(' + parentRe + ')\\s*:host', 'g'), '$1');

		//revoke wrongly replaced @ statements, like @supports, @import, @media etc.
		css = css.replace(new RegExp('(' + parentRe + ')\\s*@', 'g'), '@');

		//revoke wrongly replaced :root blocks
		css = css.replace(new RegExp('(' + parentRe + ')\\s*:root', 'g'), ':root');

		//animations: prefix animation anmes
		var animations = [],
		    animationNameRe = /@keyframes\s+([a-zA-Z0-9_-]+)\s*{/g,
		    match;
		while ((match = animationNameRe.exec(css)) !== null) {
			if (animations.indexOf(match[1]) < 0)
				{ animations.push(match[1]); }
		}

		var slug = slugify(parent);

		animations.forEach(function (name) {
			var newName = (o.keyframes === true ? slug + '-' : typeof o.keyframes === 'string' ? o.keyframes : '') + name;
			css = css.replace(new RegExp('(@keyframes\\s+)' + name + '(\\s*{)', 'g'),
					  '$1' + newName + '$2');
			css = css.replace(new RegExp('(animation(?:-name)?\\s*:[^;]*\\s*)' + name + '([\\s;}])', 'g'),
					  '$1' + newName + '$2');
		});
	 	//animation: revoke wrongly replaced keyframes
		css = css.replace(new RegExp('(' + parentRe + ' )(\\s*(?:to|from|[+-]?(?:(?:\\.\\d+)|(?:\\d+(?:\\.\\d*)?))%))(?=[\\s\\r\\n,{])', 'g'), '$2');

		return css
	}

	function replace (css, replacer) {
		var arr = [];

		css = stripComments(css);

		// escape strings etc.
		css = escaper.replace(css, true, arr);

		css = css.replace(/([^\r\n,{}]+)(,(?=[^}]*{)|\s*{)/g, replacer);

		// insert comments, strings etc. back
		css = escaper.paste(css, arr);

		return css
	}

	var getTag = function (target) {
	  if(target.__stylesheetTagName) { return target.__stylesheetTagName; }
	  var uid = Math.random().toString(32).split(".").pop();
	  return target.__stylesheetTagName = "element-" + uid;
	};

	var getStylesheet = function (target, stylesheet) {
	  if(target.__stylesheetVNode) { return target.__stylesheetVNode; }
	  stylesheet = stylesheet.replace(/(\r\n|\n|\r)/gm, "");

	  // prefix all selectors to make stylesheet 'scoped' using scope-css package
	  stylesheet = scopeCss(stylesheet, target.__stylesheetTagName);

	  // save a reference of the stylesheet within the class instance
	  return target.__stylesheetVNode = v("style", { scoped: true }, stylesheet);
	};

	var functionalStylesheet = function (styleContent, func) {
	  var tag = getTag(func);
	  var stylesheetNode = getStylesheet(func, styleContent);

	  // wrap rendered vnode with a hoc
	  return function (props) { return v(tag, null, func(props), stylesheetNode); };
	};

	var scoped = "h1 {\n  color: lightblue;\n}\n";

	var DummyComponent = functionalStylesheet(scoped, function () {
	  return (
	    v( 'article', null,
	      v( 'h1', null, "Hi from DummyComponent." ),
	      v( 'em', null, "Now let's play with Preact!" )
	    )
	  )
	});

	S(v( DummyComponent, null ), document.querySelector("main"));

})();
//# sourceMappingURL=app.js.map
