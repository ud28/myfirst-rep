/*!
 * jQuery MobiScroll v2.5.0
 * http://mobiscroll.com
 *
 * Copyright 2010-2013, Acid Media
 * Licensed under the MIT license.
 *
 */
(function($){var m=$.mobiscroll,d={invalid:[],showInput:true,inputClass:''},p=function(b){var s=$.extend({},d,b.settings),e=$(this),f,g,h=this.id+'_dummy',k=0,q=0,r={},u=s.wheelArray||K(e),x=D(k),y=[],z=I(u),w=E(z,k);function A(a,n,c,j){var i=0;while(i<n){var l=$('.dwwl'+i,a),o=B(j,i,c);$.each(o,function(i,v){$('.dw-li[data-val="'+v+'"]',l).removeClass('dw-v')});i++}}function B(a,c,j){var i=0,n,l=j,o=[];while(i<c){var t=a[i];for(n in l){if(l[n].key==t){l=l[n].children;break}}i++}i=0;while(i<l.length){if(l[i].invalid){o.push(l[i].key)}i++}return o}function C(n,i){var a=[];while(n){a[--n]=true}a[i]=false;return a}function D(l){var a=[],i;for(i=0;i<l;i++){a[i]=s.labels&&s.labels[i]?s.labels[i]:i}return a}function E(a,l,c){var i=0,j,o,n,w=[{}],t=u;if(l){for(j=0;j<l;j++){w[j]={};w[j][x[j]]={}}}while(i<a.length){w[i]={};w[i][x[i]]=G(t);j=0;n=undefined;while(j<t.length&&n===undefined){if(t[j].key==a[i]&&((c!==undefined&&i<=c)||c===undefined)){n=j}j++}if(n!==undefined&&t[n].children){i++;t=t[n].children}else if((o=F(t))&&o.children){i++;t=o.children}else{return w}}return w}function F(a,c){if(!a){return false}var i=0,o;while(i<a.length){if(!(o=a[i++]).invalid){return c?i-1:o}}return false}function G(o){var a={},j=0;while(j<o.length){a[o[j].key]=o[j++].value}return a}function H(a,i){$('.dwc',a).css('display','').slice(i).hide()}function I(u){var t=[],n=u,o,a=true,i=0;while(a){o=F(n);t[i++]=o.key;if(a=o.children){n=o.children}}return t}function J(a,c){var t=[],n=u,k=0,j=false,i,l,o;if(a[k]!==undefined&&k<=c){i=0;l=a[k];o=undefined;while(i<n.length&&o===undefined){if(n[i].key==a[k]&&!n[i].invalid){o=i}i++}}else{o=F(n,true);l=n[o].key}j=o!==undefined?n[o].children:false;t[k]=l;while(j){n=n[o].children;k++;j=false;o=undefined;if(a[k]!==undefined&&k<=c){i=0;l=a[k];o=undefined;while(i<n.length&&o===undefined){if(n[i].key==a[k]&&!n[i].invalid){o=i}i++}}else{o=F(n,true);o=o===false?undefined:o;l=n[o].key}j=o!==undefined&&F(n[o].children)?n[o].children:false;t[k]=l}return{lvl:k+1,nVector:t}}function K(a){var i=[];k=k>q++?k:q;a.children('li').each(function(j){var t=$(this),c=t.clone();c.children('ul,ol').remove();var v=c.html().replace(/^\s\s*/,'').replace(/\s\s*$/,''),l=t.data('invalid')?true:false,n={key:t.data('val')||j,value:v,invalid:l,children:null},o=t.children('ul,ol');if(o.length){n.children=K(o)}i.push(n)});q--;return i}$('#'+h).remove();if(s.showInput){f=$('<input type="text" id="'+h+'" value="" class="'+s.inputClass+'" readonly />').insertBefore(e);b.settings.anchor=f;if(s.showOnFocus){f.focus(function(){b.show()})}}if(!s.wheelArray){e.hide().closest('.ui-field-contain').trigger('create')}return{width:50,wheels:w,headerText:false,onBeforeShow:function(a){var t=b.temp;y=t.slice(0);b.settings.wheels=E(t,k,k);g=true},onSelect:function(v,b){if(f){f.val(v)}},onChange:function(v,b){if(f&&s.display=='inline'){f.val(v)}},onClose:function(){if(f){f.blur()}},onShow:function(a){$('.dwwl',a).bind('mousedown touchstart',function(){clearTimeout(r[$('.dwwl',a).index(this)])})},validate:function(a,c,j){var t=b.temp;if((c!==undefined&&y[c]!=t[c])||(c===undefined&&!g)){b.settings.wheels=E(t,null,c);var l=[],i=(c||0)+1,o=J(t,c);if(c!==undefined){b.temp=o.nVector.slice(0)}while(i<o.lvl){l.push(i++)}H(a,o.lvl);y=b.temp.slice(0);if(l.length){g=true;b.settings.readonly=C(k,c);clearTimeout(r[c]);r[c]=setTimeout(function(){b.changeWheel(l);b.settings.readonly=false},j*1000);return false}A(a,o.lvl,u,b.temp)}else{var o=J(t,t.length);A(a,o.lvl,u,t);H(a,o.lvl)}g=false}}};$.each(['list','image','treelist'],function(i,v){m.presets[v]=p;m.presetShort(v)})})(jQuery);