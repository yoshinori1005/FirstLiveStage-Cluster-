const target = $.worldItemReference("Fireworks");

$.onInteract(() => {
    target.send("FireworksSignal", null);
    $.log("FireworksSignalメッセージを送信しました");
});