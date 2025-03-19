const targets = [
    $.worldItemReference("FloorLights_R"),
    $.worldItemReference("FloorLights_Center"),
    $.worldItemReference("FloorLights_L"),
    $.worldItemReference("SpotLights"),
    $.worldItemReference("SearchLights")
];

$.onInteract(() => {
    $.sendSignalCompat("this", "RedSignal");
});