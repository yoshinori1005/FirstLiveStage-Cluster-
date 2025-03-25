$.onInteract(() => {
    $.sendSignalCompat("this", "BaseBlinkOff");
    $.state.blink = false;
});