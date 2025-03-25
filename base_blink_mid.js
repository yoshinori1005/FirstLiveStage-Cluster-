$.onInteract(() => {
    $.sendSignalCompat("this", "BaseBlinkMid");
    $.state.blink = true;
});