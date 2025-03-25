$.onInteract(() => {
    $.sendSignalCompat("this", "GreenBlinkLow");
    $.state.blink = true;
});