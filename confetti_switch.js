const targets = [
    $.worldItemReference("ConfettiCannon_1"),
    $.worldItemReference("ConfettiCannon_2"),
    $.worldItemReference("ConfettiCannon_3"),
    $.worldItemReference("ConfettiCannon_4")
];
const switchModel = $.subNode("SwitchModel");
const timer = 7;

$.onInteract(() => {
    for (let i = 0; i < targets.length; i++) {
        // 対象にメッセージを送信
        targets[i].send("ActiveConfetti", null);
    }

    // SEを鳴らすシグナルを送信
    $.sendSignalCompat("this", "Confetti");

    switchModel.setEnabled(false);
    $.state.flag = true;
});

$.onUpdate((deltaTime) => {
    if (!$.state.initialized) {
        $.state.initialized = true;
    }

    if ($.state.flag) {
        if ($.state.timer == null) {
            $.state.timer = timer;
        }

        $.state.timer -= deltaTime;

        if ($.state.timer <= 0) {
            switchModel.setEnabled(true);
            $.state.timer = timer;
            $.state.flag = false;
        }
    }
});
