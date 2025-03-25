$.onInteract(() => {
    $.sendSignalCompat("this", "GreenBlinkOff");
    $.state.blink = false;
});