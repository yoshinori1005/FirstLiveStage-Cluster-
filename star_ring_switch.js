const target = $.worldItemReference("StarRing");

$.onInteract(() => {
    target.send("StarRingSignal", null);
    $.log("StarRingSignalメッセージを送信しました");
});