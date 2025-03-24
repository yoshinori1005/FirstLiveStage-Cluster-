const target = $.worldItemReference("LightManager");

$.onInteract(() => {
    target.send("OnLeftBase", null);
});