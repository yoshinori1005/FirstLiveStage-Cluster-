$.onInteract(() => {
    $.sendSignalCompat("this", "RedBlinkHigh");
    $.state.blink = true;
});