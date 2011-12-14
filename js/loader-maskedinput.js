/* APPLY STANDARD TO INPUT ELEMENTS WITH DATA-MASK
 * =============================================== */
$(function () {
    $('input[data-mask]').each(function () { $(this).mask($(this).attr('data-mask')); });
})

