const targets = [
    $.worldItemReference("FireSpark_1"),
    $.worldItemReference("FireSpark_2"),
    $.worldItemReference("FireSpark_3"),
    $.worldItemReference("FireSpark_4"),
    $.worldItemReference("FireSpark_5"),
    $.worldItemReference("FireSpark_6"),
    $.worldItemReference("FireSpark_7"),
];

const blueSparkSwitch = $.subNode("BS_SwitchModel");
const b_sparkTimer = 7;

$.onInteract(() => {
    for (let i = 0; i < targets.length; i++) {
        // 対象にメッセージを送信
        targets[i].send("ActiveBlueSpark", null);
    }

    // SEを鳴らすシグナルを送信
    $.sendSignalCompat("this", "Spark");

    blueSparkSwitch.setEnabled(false);
    $.state.bs_flag = true;
});

$.onUpdate((deltaTime) => {
    if (!$.state.initialized) {
        $.state.initialized = true;
    }

    if ($.state.bs_flag) {
        if ($.state.b_sparkTimer == null) {
            $.state.b_sparkTimer = b_sparkTimer;
        }

        $.state.b_sparkTimer -= deltaTime;

        if ($.state.b_sparkTimer <= 0) {
            blueSparkSwitch.setEnabled(true);
            $.state.b_sparkTimer = b_sparkTimer;
            $.state.bs_flag = false;
        }
    }
});