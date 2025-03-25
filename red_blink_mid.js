$.onInteract(() => {
    $.sendSignalCompat("this", "RedBlinkMid");
    $.state.blink = true;
});