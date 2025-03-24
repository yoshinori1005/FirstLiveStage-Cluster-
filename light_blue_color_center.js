const target = $.worldItemReference("LightManager");

$.onInteract(() => {
    target.send("OnCenterBlue", null);
});