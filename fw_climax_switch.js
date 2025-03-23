const target = $.worldItemReference("Climax");

$.onInteract(() => {
    target.send("ClimaxSignal", null);
    $.log("ClimaxSignalメッセージを送信しました");
});