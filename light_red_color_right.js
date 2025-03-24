const target = $.worldItemReference("LightManager");

$.onInteract(() => {
    target.send("OnRightRed", null);
});