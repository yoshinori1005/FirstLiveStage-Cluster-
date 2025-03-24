$.onInteract(() => {
    $.sendSignalCompat("this", "OnColorful");
    $.state.reset = true;
});