const target = $.worldItemReference("FloorLights_L");

$.onInteract(() => {
    $.sendSignalCompat("this", "BaseSignal");
});