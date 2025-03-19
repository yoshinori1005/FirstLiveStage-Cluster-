const target = $.worldItemReference("FloorLights_R");

$.onInteract(() => {
    $.sendSignalCompat("this", "BlueSignal");
});