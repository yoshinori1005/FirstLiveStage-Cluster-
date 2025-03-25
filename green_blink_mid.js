$.onInteract(() => {
    $.sendSignalCompat("this", "GreenBlinkMid");
    $.state.blink = true;
});