/* APPLY STANDARD TO INPUT ELEMENTS WITH PLACEHOLDER
 * ================================================= */
$(function () {
    if (!NATIVE_SUPPORT) $('input[placeholder], textarea[placeholder]').placeholder();
})

