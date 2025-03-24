$.onInteract(() => {
    $.sendSignalCompat("this", "BlueBlinkHigh");
    $.state.blink = true;
});