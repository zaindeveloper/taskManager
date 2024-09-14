/**
 * TinyMCE version 6.8.3 (2024-02-08)
 */

!function(){"use strict";var t=tinymce.util.Tools.resolve("tinymce.PluginManager");const e=("string",t=>"string"===(t=>{const e=typeof t;return null===t?"null":"object"===e&&Array.isArray(t)?"array":"object"===e&&(r=o=t,(a=String).prototype.isPrototypeOf(r)||(null===(s=o.constructor)||void 0===s?void 0:s.name)===a.name)?"string":e;var r,o,a,s})(t));const r=(void 0,t=>undefined===t);var o=tinymce.util.Tools.resolve("tinymce.util.Delay"),a=tinymce.util.Tools.resolve("tinymce.util.LocalStorage"),s=tinymce.util.Tools.resolve("tinymce.util.Tools");const n=t=>{const e=/^(\d+)([ms]?)$/.exec(t);return(e&&e[2]?{s:1e3,m:6e4}[e[2]]:1)*parseInt(t,10)},i=t=>e=>e.options.get(t),u=i("autosave_ask_before_unload"),l=i("autosave_restore_when_empty"),c=i("autosave_interval"),d=i("autosave_retention"),m=t=>{const e=document.location;return t.options.get("autosave_prefix").replace(/{path}/g,e.pathname).replace(/{query}/g,e.search).replace(/{hash}/g,e.hash).replace(/{id}/g,t.id)},v=(t,e)=>{if(r(e))return t.dom.isEmpty(t.getBody());{const r=s.trim(e);if(""===r)return!0;{const e=(new DOMParser).parseFromString(r,"text/html");return t.dom.isEmpty(e)}}},f=t=>{var e;const r=parseInt(null!==(e=a.getItem(m(t)+"time"))&&void 0!==e?e:"0",10)||0;return!((new Date).getTime()-r>d(t)&&(p(t,!1),1))},p=(t,e)=>{const r=m(t);a.removeItem(r+"draft"),a.removeItem(r+"time"),!1!==e&&(t=>{t.dispatch("RemoveDraft")})(t)},g=t=>{const e=m(t);!v(t)&&t.isDirty()&&(a.setItem(e+"draft",t.getContent({format:"raw",no_events:!0})),a.setItem(e+"time",(new Date).getTime().toString()),(t=>{t.dispatch("StoreDraft")})(t))},y=t=>{var e;const r=m(t);f(t)&&(t.setContent(null!==(e=a.getItem(r+"draft"))&&void 0!==e?e:"",{format:"raw"}),(t=>{t.dispatch("RestoreDraft")})(t))};var D=tinymce.util.Tools.resolve("tinymce.EditorManager");const h=t=>e=>{e.setEnabled(f(t));const r=()=>e.setEnabled(f(t));return t.on("StoreDraft RestoreDraft RemoveDraft",r),()=>t.off("StoreDraft RestoreDraft RemoveDraft",r)};t.add("autosave",(t=>((t=>{const r=t.options.register,o=t=>{const r=e(t);return r?{value:n(t),valid:r}:{valid:!1,message:"Must be a string."}};r("autosave_ask_before_unload",{processor:"boolean",default:!0}),r("autosave_prefix",{processor:"string",default:"tinymce-autosave-{path}{query}{hash}-{id}-"}),r("autosave_restore_when_empty",{processor:"boolean",default:!1}),r("autosave_interval",{processor:o,default:"30s"}),r("autosave_retention",{processor:o,default:"20m"})})(t),(t=>{t.editorManager.on("BeforeUnload",(t=>{let e;s.each(D.get(),(t=>{t.plugins.autosave&&t.plugins.autosave.storeDraft(),!e&&t.isDirty()&&u(t)&&(e=t.translate("You have unsaved changes are you sure you want to navigate away?"))})),e&&(t.preventDefault(),t.returnValue=e)}))})(t),(t=>{(t=>{const e=c(t);o.setEditorInterval(t,(()=>{g(t)}),e)})(t);const e=()=>{(t=>{t.undoManager.transact((()=>{y(t),p(t)})),t.focus()})(t)};t.ui.registry.addButton("restoredraft",{tooltip:"Restore last draft",icon:"restore-draft",onAction:e,onSetup:h(t)}),t.ui.registry.addMenuItem("restoredraft",{text:"Restore last draft",icon:"restore-draft",onAction:e,onSetup:h(t)})})(t),t.on("init",(()=>{l(t)&&t.dom.isEmpty(t.getBody())&&y(t)})),(t=>({hasDraft:()=>f(t),storeDraft:()=>g(t),restoreDraft:()=>y(t),removeDraft:e=>p(t,e),isEmpty:e=>v(t,e)}))(t))))}();
