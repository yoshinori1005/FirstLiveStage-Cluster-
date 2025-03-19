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
    $.worldItemReference("SpotLight_1"),
    $.worldItemReference("SpotLight_2"),
    $.worldItemReference("SpotLight_3"),
    $.worldItemReference("SpotLight_4"),
    $.worldItemReference("SpotLight_5"),
    $.worldItemReference("SpotLight_6"),
    $.worldItemReference("SpotLight_7")
];

$.onInteract(() => {
    for (let i = 0; i < targets.length; i++) {
        targets[i].send("BlueSignal", null);
    }
});