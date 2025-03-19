const targets = [
    $.worldItemReference("FloorLight_2"),
    $.worldItemReference("FloorLight_3"),
    $.worldItemReference("MiniFloorLight_3"),
    $.worldItemReference("MiniFloorLight_4"),
];

$.onInteract(() => {
    for (let i = 0; i < targets.length; i++) {
        targets[i].send("BaseSignal", null);
    }
});