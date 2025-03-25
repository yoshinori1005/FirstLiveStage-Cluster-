$.onInteract(() => {
    $.sendSignalCompat("this", "BlueBlinkLow");
    $.state.blink = true;
});