$(function () {
    if (CKEDITOR != undefined) {
        $('textarea.editor').each(function() {
            var options = { height : $(this).innerHeight() - 75, forcePasteAsPlainText : true };
            
            var attrs = this.attributes;
            for(var i=0; i<attrs.length; i++) {
                if (attrs[i].nodeName.match(/^data-editor-(.*)$/)) options[RegExp.$1] = attrs[i].nodeValue;
            }
            
            $(this).ckeditor(options);
        });
    }
});