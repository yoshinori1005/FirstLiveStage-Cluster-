const target = $.worldItemReference("LightManager");

$.onInteract(() => {
    target.send("OnRightBlue", null);
});