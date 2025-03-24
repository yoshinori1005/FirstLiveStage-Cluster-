const target = $.worldItemReference("LightManager");

$.onInteract(() => {
    target.send("OnRightGreen", null);
});