const target = $.worldItemReference("Ring");

$.onInteract(() => {
    target.send("RingSignal", null);
    $.log("RingSignalメッセージを送信しました");
});