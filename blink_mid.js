const target = $.worldItemReference("SpotLights")

$.onInteract(() => {
    $.sendSignalCompat("this", "BlinkMidSignal");
    target.send("BlinkMid", null);
});