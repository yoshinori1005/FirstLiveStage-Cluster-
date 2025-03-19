const target = $.worldItemReference("SpotLights")

$.onInteract(() => {
    $.sendSignalCompat("this", "BlinkLowSignal");
    target.send("BlinkLow", null);
});