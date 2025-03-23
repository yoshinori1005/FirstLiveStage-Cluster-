// const fireExplosion = $.subNode("FireExplosion");
// const redSpark = $.subNode("RedSpark");
// const greenSpark = $.subNode("GreenSpark");
// const blueSpark = $.subNode("BlueSpark");
// const fireTimer = 2;
// const rs_timer = 7;
// const gs_timer = 7;
// const bs_timer = 7;
const fireExplosion = new WorldItemTemplateId("FireExplosion");
const redSpark = new WorldItemTemplateId("RedSpark");
const greenSpark = new WorldItemTemplateId("GreenSpark");
const blueSpark = new WorldItemTemplateId("BlueSpark");
const spawnPoint = $.subNode("CreateVFXPoint");

$.onReceive((messageType) => {
    const spawnPosition = spawnPoint.getGlobalPosition();
    const spawnRotation = spawnPoint.getGlobalRotation();

    // 赤色スパークを有効化
    if (messageType === "ActiveRedSpark") {
        // redSpark.setEnabled(true);
        // $.state.redSparkFlag = true;
        $.createItem(redSpark, spawnPosition, spawnRotation);
    }
    // 緑色スパークを有効化
    else if (messageType === "ActiveGreenSpark") {
        // greenSpark.setEnabled(true);
        // $.state.greenSparkFlag = true;
        $.createItem(greenSpark, spawnPosition, spawnRotation);
    }
    // 青色スパークを有効化
    else if (messageType === "ActiveBlueSpark") {
        // blueSpark.setEnabled(true);
        // $.state.blueSparkFlag = true;
        $.createItem(blueSpark, spawnPosition, spawnRotation);
    }
    // 爆発を有効化
    else if (messageType === "ActiveFire") {
        // fireExplosion.setEnabled(true);
        // $.state.fireFlag = true;
        $.createItem(fireExplosion, spawnPosition, spawnRotation);
    }
});

// $.onUpdate((deltaTime) => {
//     // 赤色スパークの無効化
//     if ($.state.redSparkFlag) {
//         if (!$.state.initialized) {
//             $.state.initialized = true;
//         }

//         if ($.state.rs_timer == null) {
//             $.state.rs_timer = rs_timer;
//         }

//         $.state.timer -= deltaTime;

//         if ($.state.rs_timer <= 0) {
//             redSpark.setEnabled(false);
//             $.state.rs_timer = rs_timer;
//             $.state.redSparkFlag = false;
//         }
//     }

//     // 緑色スパークの無効化
//     if ($.state.greenSparkFlag) {
//         if (!$.state.initialized) {
//             $.state.initialized = true;
//         }

//         if ($.state.gs_timer == null) {
//             $.state.gs_timer = gs_timer;
//         }

//         $.state.gs_timer -= deltaTime;

//         if ($.state.gs_timer <= 0) {
//             greenSpark.setEnabled(false);
//             $.state.gs_timer = gs_timer;
//             $.state.greenSparkFlag = false;
//         }
//     }

//     // 青色スパークの無効化
//     if ($.state.blueSparkFlag) {
//         if (!$.state.initialized) {
//             $.state.initialized = true;
//         }

//         if ($.state.bs_timer == null) {
//             $.state.bs_timer = bs_timer;
//         }

//         $.state.timer -= deltaTime;

//         if ($.state.bs_timer <= 0) {
//             blueSpark.setEnabled(false);
//             $.state.bs_timer = bs_timer;
//             $.state.blueSparkFlag = false;
//         }
//     }

//     // 爆発の無効化
//     if ($.state.fireFlag) {
//         if (!$.state.initialized) {
//             $.state.initialized = true;
//         }

//         if ($.state.timer == null) {
//             $.state.timer = fireTimer;
//         }

//         $.state.timer -= deltaTime;
        
//         if ($.state.timer <= 0) {
//             fireExplosion.setEnabled(false);
//             $.state.timer = fireTimer;
//             $.state.flag = false;
//         }
//     }
// });
