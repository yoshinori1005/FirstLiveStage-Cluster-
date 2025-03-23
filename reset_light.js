const targets = [
    $.worldItemReference("FloorLight_1"),
    $.worldItemReference("FloorLight_2"),
    $.worldItemReference("FloorLight_3"),
    $.worldItemReference("FloorLight_4"),
    $.worldItemReference("MiniFloorLight_1"),
    $.worldItemReference("MiniFloorLight_2"),
    $.worldItemReference("MiniFloorLight_3"),
    $.worldItemReference("MiniFloorLight_4"),
    $.worldItemReference("MiniFloorLight_5"),
    $.worldItemReference("MiniFloorLight_6"),
    $.worldItemReference("SpotLightFront"),
    $.worldItemReference("SpotLightBack"),
    $.worldItemReference("SpotLightRight"),
    $.worldItemReference("SpotLightLeft"),
    $.worldItemReference("SearchLights_R"),
    $.worldItemReference("SearchLights_L")
];

$.onInteract(() => {
    const newTargets = targets.slice(0, 16);
    for (let i = 0; i < targets.length; i++) {
        targets[i].send("BaseSignal", null);
    }
    for (let i = 0; i < newTargets.length; i++) {
        newTargets[i].send("ColorfulSignal", null);
    }
});