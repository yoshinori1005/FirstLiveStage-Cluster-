const target = $.worldItemReference("FloorLights_L");

$.onInteract(() => {
    $.sendSignalCompat("this", "BlueSignal");
});