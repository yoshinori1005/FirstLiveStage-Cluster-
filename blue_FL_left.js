const targets = [
    $.worldItemReference("FloorLight_4"),
    $.worldItemReference("MiniFloorLight_5"),
    $.worldItemReference("MiniFloorLight_6"),
];

$.onInteract(() => {
    for (let i = 0; i < targets.length; i++) {
        targets[i].send("BlueSignal", null);
    }
});