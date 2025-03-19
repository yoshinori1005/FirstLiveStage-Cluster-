const targets = [
    $.worldItemReference("SpotLightFront"),
    $.worldItemReference("SpotLightBack"),
    $.worldItemReference("SpotLightRight"),
    $.worldItemReference("SpotLightLeft")
];

$.onInteract(() => {
    for (let i = 0; i < targets.length; i++) {
        targets[i].send("BlueBlinkHigh", null);
    }
});