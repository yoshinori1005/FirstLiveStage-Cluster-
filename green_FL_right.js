const targets = [
    $.worldItemReference("FloorLight_1"),
    $.worldItemReference("MiniFloorLight_1"),
    $.worldItemReference("MiniFloorLight_2"),
];

$.onInteract(() => {
    for (let i = 0; i < targets.length; i++) {
        targets[i].send("GreenSignal", null);
    }
});