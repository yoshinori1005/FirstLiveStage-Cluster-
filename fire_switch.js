const targets = [
    $.worldItemReference("FireSpark_1"),
    $.worldItemReference("FireSpark_2"),
    $.worldItemReference("FireSpark_3"),
    $.worldItemReference("FireSpark_4"),
    $.worldItemReference("FireSpark_5"),
    $.worldItemReference("FireSpark_6"),
    $.worldItemReference("FireSpark_7"),
];
const fireSwitch = $.subNode("FireSwitchModel");
const explosionTimer = 2;

$.onInteract(() => {
    for (let i = 0; i < targets.length; i++) {
        // 対象にメッセージを送信
        targets[i].send("ActiveFire", null);
    }

    // SEを鳴らすシグナルを送信
    $.sendSignalCompat("this", "Fire");

    fireSwitch.setEnabled(false);
    $.state.explosionFlag = true;
});

$.onUpdate((deltaTime) => {
    if (!$.state.initialized) {
        $.state.initialized = true;
    }

    if ($.state.explosionFlag) {
        if ($.state.explosionTimer == null) {
            $.state.explosionTimer = explosionTimer;
        }

        $.state.explosionTimer -= deltaTime;

        if ($.state.explosionTimer <= 0) {
            fireSwitch.setEnabled(true);
            $.state.explosionTimer = explosionTimer;
            $.state.explosionFlag = false;
        }
    }
});