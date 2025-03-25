$.onInteract(() => {
    $.sendSignalCompat("this", "RedBlinkOff");
    $.state.blink = false;
});