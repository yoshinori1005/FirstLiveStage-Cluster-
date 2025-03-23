const targets = [
    $.worldItemReference("FireSpark_1"),
    $.worldItemReference("FireSpark_2"),
    $.worldItemReference("FireSpark_3"),
    $.worldItemReference("FireSpark_4"),
    $.worldItemReference("FireSpark_5"),
    $.worldItemReference("FireSpark_6"),
    $.worldItemReference("FireSpark_7"),
];

const greenSparkSwitch = $.subNode("GS_SwitchModel");
const g_sparkTimer = 7;

$.onInteract(() => {
    for (let i = 0; i < targets.length; i++) {
        // 対象にメッセージを送信
        targets[i].send("ActiveGreenSpark", null);
    }

    // SEを鳴らすシグナルを送信
    $.sendSignalCompat("this", "Spark");

    greenSparkSwitch.setEnabled(false);
    $.state.gs_flag = true;
});

$.onUpdate((deltaTime) => {
    if (!$.state.initialized) {
        $.state.initialized = true;
    }

    if ($.state.gs_flag) {
        if ($.state.g_sparkTimer == null) {
            $.state.g_sparkTimer = g_sparkTimer;
        }

        $.state.g_sparkTimer -= deltaTime;

        if ($.state.g_sparkTimer <= 0) {
            greenSparkSwitch.setEnabled(true);
            $.state.g_sparkTimer = g_sparkTimer;
            $.state.gs_flag = false;
        }
    }
});