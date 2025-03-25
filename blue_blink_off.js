$.onInteract(() => {
    $.sendSignalCompat("this", "BlueBlinkOff");
    $.state.blink = false;
});