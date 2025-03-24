// const confettiGold = $.subNode("ConfettiGold");
// const confettiSilver = $.subNode("ConfettiSilver");
// const timer = 7;
const goldConfetti = new WorldItemTemplateId("GoldConfetti");
const silverConfetti = new WorldItemTemplateId("SilverConfetti");
const point = $.subNode("CreateVFXPoint");

$.onReceive((messageType) => {
    // 紙吹雪のパーティクルを有効化
    // if (messageType === "ActiveConfetti") {
    //     // 紙吹雪を有効化
    //     confettiGold.setEnabled(true);
    //     confettiSilver.setEnabled(true);
    //     $.state.flag = true;
    // }

    const pointPosition = point.getGlobalPosition();
    const pointRotation = point.getGlobalRotation();
    if (messageType === "ActiveConfetti") {
        $.createItem(goldConfetti, pointPosition, pointRotation);
        $.createItem(silverConfetti, pointPosition, pointRotation);
    }
});

// $.onUpdate((deltaTime) => {
//     if ($.state.flag) {
//         if ($.state.timer == null) {
//             $.state.timer = timer;
//         }

//         $.state.time -= deltaTime;

//         // タイマーが0以下になったら非表示にする
//         if ($.state.time <= 0) {
//             confettiGold.setEnabled(false);
//             confettiSilver.setEnabled(false);
//             $.state.time = timer;
//             $.state.flag = false;
//         }
//     }
// });