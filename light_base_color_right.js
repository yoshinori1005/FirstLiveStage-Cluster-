const target = $.worldItemReference("LightManager");

$.onInteract(() => {
    target.send("OnRightBase", null);
});