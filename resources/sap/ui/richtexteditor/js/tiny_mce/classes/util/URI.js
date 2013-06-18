/**
 * URI.js
 *
 * Copyright, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
(function(){var e=tinymce.each;tinymce.create('tinymce.util.URI',{URI:function(u,s){var t=this,o,a,b,c;u=tinymce.trim(u);s=t.settings=s||{};if(/^([\w\-]+):([^\/]{2})/i.test(u)||/^\s*#/.test(u)){t.source=u;return}if(u.indexOf('/')===0&&u.indexOf('//')!==0)u=(s.base_uri?s.base_uri.protocol||'http':'http')+'://mce_host'+u;if(!/^[\w\-]*:?\/\//.test(u)){c=s.base_uri?s.base_uri.path:new tinymce.util.URI(location.href).directory;u=((s.base_uri&&s.base_uri.protocol)||'http')+'://mce_host'+t.toAbsPath(c,u)}u=u.replace(/@@/g,'(mce_at)');u=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*):?([^:@\/]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(u);e(["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],function(v,i){var s=u[i];if(s)s=s.replace(/\(mce_at\)/g,'@@');t[v]=s});b=s.base_uri;if(b){if(!t.protocol)t.protocol=b.protocol;if(!t.userInfo)t.userInfo=b.userInfo;if(!t.port&&t.host==='mce_host')t.port=b.port;if(!t.host||t.host==='mce_host')t.host=b.host;t.source=''}},setPath:function(p){var t=this;p=/^(.*?)\/?(\w+)?$/.exec(p);t.path=p[0];t.directory=p[1];t.file=p[2];t.source='';t.getURI()},toRelative:function(u){var t=this,o;if(u==="./")return u;u=new tinymce.util.URI(u,{base_uri:t});if((u.host!='mce_host'&&t.host!=u.host&&u.host)||t.port!=u.port||t.protocol!=u.protocol)return u.getURI();var a=t.getURI(),b=u.getURI();if(a==b||(a.charAt(a.length-1)=="/"&&a.substr(0,a.length-1)==b))return a;o=t.toRelPath(t.path,u.path);if(u.query)o+='?'+u.query;if(u.anchor)o+='#'+u.anchor;return o},toAbsolute:function(u,n){u=new tinymce.util.URI(u,{base_uri:this});return u.getURI(this.host==u.host&&this.protocol==u.protocol?n:0)},toRelPath:function(b,p){var a,c=0,o='',i,l;b=b.substring(0,b.lastIndexOf('/'));b=b.split('/');a=p.split('/');if(b.length>=a.length){for(i=0,l=b.length;i<l;i++){if(i>=a.length||b[i]!=a[i]){c=i+1;break}}}if(b.length<a.length){for(i=0,l=a.length;i<l;i++){if(i>=b.length||b[i]!=a[i]){c=i+1;break}}}if(c===1)return p;for(i=0,l=b.length-(c-1);i<l;i++)o+="../";for(i=c-1,l=a.length;i<l;i++){if(i!=c-1)o+="/"+a[i];else o+=a[i]}return o},toAbsPath:function(b,p){var i,n=0,o=[],t,a;t=/\/$/.test(p)?'/':'';b=b.split('/');p=p.split('/');e(b,function(k){if(k)o.push(k)});b=o;for(i=p.length-1,o=[];i>=0;i--){if(p[i].length===0||p[i]===".")continue;if(p[i]==='..'){n++;continue}if(n>0){n--;continue}o.push(p[i])}i=b.length-n;if(i<=0)a=o.reverse().join('/');else a=b.slice(0,i).join('/')+'/'+o.reverse().join('/');if(a.indexOf('/')!==0)a='/'+a;if(t&&a.lastIndexOf('/')!==a.length-1)a+=t;return a},getURI:function(n){var s,t=this;if(!t.source||n){s='';if(!n){if(t.protocol)s+=t.protocol+'://';if(t.userInfo)s+=t.userInfo+'@';if(t.host)s+=t.host;if(t.port)s+=':'+t.port}if(t.path)s+=t.path;if(t.query)s+='?'+t.query;if(t.anchor)s+='#'+t.anchor;t.source=s}return t.source}})})();
