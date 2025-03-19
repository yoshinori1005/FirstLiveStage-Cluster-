const target = $.worldItemReference("FloorLights_Center");

$.onInteract(() => {
    $.sendSignalCompat("this", "RedSignal");
});