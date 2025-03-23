const target = $.worldItemReference("Bee");

$.onInteract(() => {
    target.send("BeeSignal", null);
    $.log("BeeSignalメッセージを送信しました");
});