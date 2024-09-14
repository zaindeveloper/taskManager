/**
 * TinyMCE version 6.8.3 (2024-02-08)
 */

!function(){"use strict";tinymce.util.Tools.resolve("tinymce.PluginManager").add("code",(e=>((e=>{e.addCommand("mceCodeEditor",(()=>{(e=>{const o=(e=>e.getContent({source_view:!0}))(e);e.windowManager.open({title:"Source Code",size:"large",body:{type:"panel",items:[{type:"textarea",name:"code"}]},buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:{code:o},onSubmit:o=>{((e,o)=>{e.focus(),e.undoManager.transact((()=>{e.setContent(o)})),e.selection.setCursorLocation(),e.nodeChanged()})(e,o.getData().code),o.close()}})})(e)}))})(e),(e=>{const o=()=>e.execCommand("mceCodeEditor");e.ui.registry.addButton("code",{icon:"sourcecode",tooltip:"Source code",onAction:o}),e.ui.registry.addMenuItem("code",{icon:"sourcecode",text:"Source code",onAction:o})})(e),{})))}();
