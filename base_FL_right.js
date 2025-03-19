const targets = $.worldItemReference("FloorLights_R");

$.onInteract(() => {
    $.sendSignalCompat("this", "BaseSignal");
});