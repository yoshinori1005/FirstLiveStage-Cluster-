$.onInteract(() => {
    $.sendSignalCompat("this", "BaseBlinkHigh");
    $.state.blink = true;
});