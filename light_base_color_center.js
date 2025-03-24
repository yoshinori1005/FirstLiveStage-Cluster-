const target = $.worldItemReference("LightManager");

$.onInteract(() => {
    target.send("OnCenterBase", null);
});