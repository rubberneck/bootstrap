$(function () {
    if (CKEDITOR != undefined) {
        $('textarea.editor').each(function() {
            var options = {};
            if ($(this).attr('height')) options.height = $(this).attr('height');
            if ($(this).attr('data-editor-toolbar')) options.toolbar = $(this).attr('data-editor-toolbar');
            
            $(this).ckeditor(options);
        });
    }
});
