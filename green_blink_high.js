$.onInteract(() => {
    $.sendSignalCompat("this", "GreenBlinkHigh");
    $.state.blink = true;
});