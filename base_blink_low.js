$.onInteract(() => {
    $.sendSignalCompat("this", "BaseBlinkLow");
    $.state.blink = true;
});