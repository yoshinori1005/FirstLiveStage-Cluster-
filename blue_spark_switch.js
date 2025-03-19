const targets = [
    $.worldItemReference("FireSpark_1"),
    $.worldItemReference("FireSpark_2"),
    $.worldItemReference("FireSpark_3"),
    $.worldItemReference("FireSpark_4"),
    $.worldItemReference("FireSpark_5"),
    $.worldItemReference("FireSpark_6"),
    $.worldItemReference("FireSpark_7"),
];

$.onInteract(() => {
    for (let i = 0; i < targets.length; i++) {
        if (!targets[i] || !targets[i].exists()) {
            $.log("エラー: target" + [i] + "が見つかりません");
            return;
        }
        targets[i].send("CreateBlueSpark", null);
    }

    $.log("ブルスパークのシグナルを送信しました");

    $.sendSignalCompat("this", "Spark");
});