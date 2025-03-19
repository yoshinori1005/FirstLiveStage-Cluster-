const target = $.worldItemReference("SpotLights")

$.onInteract(() => {
    target.send("BaseBlinkHigh", null);
});