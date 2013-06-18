/**
 * SaxParser.js
 *
 * Copyright, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
(function(t){t.html.SaxParser=function(s,a){var b=this,n=function(){};s=s||{};b.schema=a=a||new t.html.Schema();if(s.fix_self_closing!==false)s.fix_self_closing=true;t.each('comment cdata text start end pi doctype'.split(' '),function(c){if(c)b[c]=s[c]||n});b.parse=function(h){var b=this,m,c=0,v,e,d=[],f,i,g,j,k,r,l,o,p,q,u,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K=0,L=t.html.Entities.decode,M,N;function O(j){var Q,i;Q=d.length;while(Q--){if(d[Q].name===j)break}if(Q>=0){for(i=d.length-1;i>=Q;i--){j=d[i];if(j.valid)b.end(j.name)}d.length=Q}};function P(Q,j,v,R,S){var T,i;j=j.toLowerCase();v=j in o?j:L(v||R||S||'');if(q&&!k&&j.indexOf('data-')!==0){T=A[j];if(!T&&B){i=B.length;while(i--){T=B[i];if(T.pattern.test(j))break}if(i===-1)T=null}if(!T)return;if(T.validValues&&!(v in T.validValues))return}f.map[j]=v;f.push({name:j,value:v})};G=new RegExp('<(?:'+'(?:!--([\\w\\W]*?)-->)|'+'(?:!\\[CDATA\\[([\\w\\W]*?)\\]\\]>)|'+'(?:!DOCTYPE([\\w\\W]*?)>)|'+'(?:\\?([^\\s\\/<>]+) ?([\\w\\W]*?)[?/]>)|'+'(?:\\/([^>]+)>)|'+'(?:([A-Za-z0-9\\-\\:\\.]+)((?:\\s+[^"\'>]+(?:(?:"[^"]*")|(?:\'[^\']*\')|[^>]*))*|\\/|\\s+)>)'+')','g');H=/([\w:\-]+)(?:\s*=\s*(?:(?:\"((?:[^\"])*)\")|(?:\'((?:[^\'])*)\')|([^>\s]+)))?/g;I={'script':/<\/script[^>]*>/gi,'style':/<\/style[^>]*>/gi,'noscript':/<\/noscript[^>]*>/gi};l=a.getShortEndedElements();F=s.self_closing_elements||a.getSelfClosingElements();o=a.getBoolAttrs();q=s.validate;r=s.remove_internals;M=s.fix_self_closing;N=t.isIE;z=/^:/;while(m=G.exec(h)){if(c<m.index)b.text(L(h.substr(c,m.index-c)));if(v=m[6]){v=v.toLowerCase();if(N&&z.test(v))v=v.substr(1);O(v)}else if(v=m[7]){v=v.toLowerCase();if(N&&z.test(v))v=v.substr(1);p=v in l;if(M&&F[v]&&d.length>0&&d[d.length-1].name===v)O(v);if(!q||(u=a.getElementRule(v))){w=true;if(q){A=u.attributes;B=u.attributePatterns}if(y=m[8]){k=y.indexOf('data-mce-type')!==-1;if(k&&r)w=false;f=[];f.map={};y.replace(H,P)}else{f=[];f.map={}}if(q&&!k){C=u.attributesRequired;D=u.attributesDefault;E=u.attributesForced;if(E){i=E.length;while(i--){x=E[i];j=x.name;J=x.value;if(J==='{$uid}')J='mce_'+K++;f.map[j]=J;f.push({name:j,value:J})}}if(D){i=D.length;while(i--){x=D[i];j=x.name;if(!(j in f.map)){J=x.value;if(J==='{$uid}')J='mce_'+K++;f.map[j]=J;f.push({name:j,value:J})}}}if(C){i=C.length;while(i--){if(C[i]in f.map)break}if(i===-1)w=false}if(f.map['data-mce-bogus'])w=false}if(w)b.start(v,f,p)}else w=false;if(e=I[v]){e.lastIndex=c=m.index+m[0].length;if(m=e.exec(h)){if(w)g=h.substr(c,m.index-c);c=m.index+m[0].length}else{g=h.substr(c);c=h.length}if(w&&g.length>0)b.text(g,true);if(w)b.end(v);G.lastIndex=c;continue}if(!p){if(!y||y.indexOf('/')!=y.length-1)d.push({name:v,valid:w});else if(w)b.end(v)}}else if(v=m[1]){b.comment(v)}else if(v=m[2]){b.cdata(v)}else if(v=m[3]){b.doctype(v)}else if(v=m[4]){b.pi(v,m[5])}c=m.index+m[0].length}if(c<h.length)b.text(L(h.substr(c)));for(i=d.length-1;i>=0;i--){v=d[i];if(v.valid)b.end(v.name)}}}})(tinymce);
