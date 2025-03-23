const targets = [
    $.worldItemReference("FireSpark_1"),
    $.worldItemReference("FireSpark_2"),
    $.worldItemReference("FireSpark_3"),
    $.worldItemReference("FireSpark_4"),
    $.worldItemReference("FireSpark_5"),
    $.worldItemReference("FireSpark_6"),
    $.worldItemReference("FireSpark_7"),
];

const redSparkSwitch = $.subNode("RS_SwitchModel");
const r_sparkTimer = 7;

$.onInteract(() => {
    for (let i = 0; i < targets.length; i++) {
        // 対象にメッセージを送信
        targets[i].send("ActiveRedSpark", null);
    }

    // SEを鳴らすシグナルを送信
    $.sendSignalCompat("this", "Spark");

    redSparkSwitch.setEnabled(false);
    $.state.rs_flag = true;
});

$.onUpdate((deltaTime) => {
    if (!$.state.initialized) {
        $.state.initialized = true;
    }

    if ($.state.rs_flag) {
        if ($.state.r_sparkTimer == null) {
            $.state.r_sparkTimer = r_sparkTimer;
        }

        $.state.r_sparkTimer -= deltaTime;

        if ($.state.r_sparkTimer <= 0) {
            redSparkSwitch.setEnabled(true);
            $.state.r_sparkTimer = r_sparkTimer;
            $.state.rs_flag = false;
        }
    }
});