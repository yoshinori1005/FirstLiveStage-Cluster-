const target = $.worldItemReference("Yanagi");

$.onInteract(() => {
    target.send("YanagiSignal", null);
    $.log("YanagiSignalメッセージを送信しました");
});