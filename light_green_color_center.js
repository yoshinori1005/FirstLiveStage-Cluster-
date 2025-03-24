const target = $.worldItemReference("LightManager");

$.onInteract(() => {
    target.send("OnCenterGreen", null);
});