$.onInteract(() => {
    $.sendSignalCompat("this", "RedBlinkLow");
    $.state.blink = true;
});