const target = $.worldItemReference("LightManager");

$.onInteract(() => {
    target.send("OnCenterRed", null);
});