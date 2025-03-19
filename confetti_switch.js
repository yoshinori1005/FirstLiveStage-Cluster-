const targets = [
    $.worldItemReference("ConfettiCannon_1"),
    $.worldItemReference("ConfettiCannon_2"),
    $.worldItemReference("ConfettiCannon_3"),
    $.worldItemReference("ConfettiCannon_4")
];

$.onInteract(() => {

    for (let i = 0; i < targets.length; i++) {
        if (!targets[i] || !targets[i].exists()) {
            $.log("エラー: target" + [i] + "が見つかりません");
            return;
        }

        // 対象にメッセージを送信
        targets[i].send("CreateConfettiGold", null);
        targets[i].send("CreateConfettiSilver", null);
        $.log("target" + [i] + "へメッセージを送信しました");
    }

    // seTarget.send("PlayConfettiSound".null);
    // SEを鳴らすシグナルを送信
    $.sendSignalCompat("this", "Confetti");
});
