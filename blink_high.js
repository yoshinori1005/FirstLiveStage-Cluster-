const target = $.worldItemReference("SpotLights")

$.onInteract(() => {
    $.sendSignalCompat("this", "BlinkHighSignal");
    target.send("BlinkHigh", null);
});