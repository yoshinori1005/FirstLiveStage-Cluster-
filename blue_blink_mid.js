$.onInteract(() => {
    $.sendSignalCompat("this", "BlueBlinkMid");
    $.state.blink = true;
});