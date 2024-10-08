/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.7.1 (2021-03-17)
 */

!function(){"use strict";var e=tinymce.util.Tools.resolve("tinymce.PluginManager"),a=tinymce.util.Tools.resolve("tinymce.Env"),i=function(e){return e.getParam("pagebreak_split_block",!1)},g=function(){return"mce-pagebreak"},m=function(){return'<img src="'+a.transparentSrc+'" class="'+g()+'" data-mce-resize="false" data-mce-placeholder />'};e.add("pagebreak",function(e){var a,n,o,c,t,r;(a=e).addCommand("mcePageBreak",function(){i(a)?a.insertContent("<p>"+m()+"</p>"):a.insertContent(m())}),(n=e).ui.registry.addButton("pagebreak",{icon:"page-break",tooltip:"Page break",onAction:function(){return n.execCommand("mcePageBreak")}}),n.ui.registry.addMenuItem("pagebreak",{text:"Page break",icon:"page-break",onAction:function(){return n.execCommand("mcePageBreak")}}),c=(o=e).getParam("pagebreak_separator","\x3c!-- pagebreak --\x3e"),t=new RegExp(c.replace(/[\?\.\*\[\]\(\)\{\}\+\^\$\:]/g,function(e){return"\\"+e}),"gi"),o.on("BeforeSetContent",function(e){e.content=e.content.replace(t,m())}),o.on("PreInit",function(){o.serializer.addNodeFilter("img",function(e){for(var a,n,t=e.length;t--;)if((n=(a=e[t]).attr("class"))&&-1!==n.indexOf("mce-pagebreak")){var r=a.parent;if(o.schema.getBlockElements()[r.name]&&i(o)){r.type=3,r.value=c,r.raw=!0,a.remove();continue}a.type=3,a.value=c,a.raw=!0}})}),(r=e).on("ResolveName",function(e){"IMG"===e.target.nodeName&&r.dom.hasClass(e.target,g())&&(e.name="pagebreak")})})}();
