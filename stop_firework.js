const target = $.worldItemReference("FireworkStop");

$.onInteract(() => {
    target.send("FireworkStop", null);
    $.log("FireworkStopメッセージを送信しました");
});