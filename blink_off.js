const target = $.worldItemReference("SpotLights")

$.onInteract(() => {
    $.sendSignalCompat("this", "BlinkOffSignal");
    target.send("BlinkOff", null);
});