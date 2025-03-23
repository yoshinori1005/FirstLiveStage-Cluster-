const target = $.worldItemReference("HeartDance");

$.onInteract(() => {
    target.send("HeartDanceSignal", null);
    $.log("HeartDanceSignalメッセージを送信しました");
});