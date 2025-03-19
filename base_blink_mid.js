const target = $.worldItemReference("SpotLights")

$.onInteract(() => {
    target.send("BaseBlinkMid", null);
});