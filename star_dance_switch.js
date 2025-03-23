const target = $.worldItemReference("StarDance");

$.onInteract(() => {
    target.send("StarDanceSignal", null);
    $.log("StarDanceSignalメッセージを送信しました");
});