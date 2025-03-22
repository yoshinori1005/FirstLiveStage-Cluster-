const targets = [
    $.worldItemReference("FloorLight_2"),
    $.worldItemReference("FloorLight_3"),
    $.worldItemReference("MiniFloorLight_3"),
    $.worldItemReference("MiniFloorLight_4"),
    $.worldItemReference("SpotLightFront"),
    $.worldItemReference("SpotLightBack"),
    $.worldItemReference("SpotLightRight"),
    $.worldItemReference("SpotLightLeft"),
    $.worldItemReference("SearchLights_R"),
    $.worldItemReference("SearchLights_L"),
    $.worldItemReference("FloorLight_1"),
    $.worldItemReference("FloorLight_4"),
    $.worldItemReference("MiniFloorLight_1"),
    $.worldItemReference("MiniFloorLight_2"),
    $.worldItemReference("MiniFloorLight_5"),
    $.worldItemReference("MiniFloorLight_6")
];

$.onInteract(() => {
    const mainTargets = targets.slice(0,10 );
    const subTargets = targets.slice(10, 16);
    for (let i = 0; i < mainTargets.length; i++) {
        mainTargets[i].send("RedSignal", null);
    }
    for (let i = 0; i < subTargets.length; i++) {
        subTargets[i].send("BaseSignal", null);
    }
});