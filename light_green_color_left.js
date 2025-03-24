const target = $.worldItemReference("LightManager");

$.onInteract(() => {
    target.send("OnLeftGreen", null);
});