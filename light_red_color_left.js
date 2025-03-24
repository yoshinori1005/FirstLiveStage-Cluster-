const target = $.worldItemReference("LightManager");

$.onInteract(() => {
    target.send("OnLeftRed", null);
});