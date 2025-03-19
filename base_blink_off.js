const target = $.worldItemReference("SpotLights")

$.onInteract(() => {
    target.send("BaseBlinkOff", null);
});