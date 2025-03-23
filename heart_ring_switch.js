const target = $.worldItemReference("HeartRing");

$.onInteract(() => {
    target.send("HeartRingSignal", null);
    $.log("HeartRingSignalメッセージを送信しました");
});