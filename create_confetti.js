const spawnPoint = $.subNode("CreateVFXPoint")
const confettiGoldID = new WorldItemTemplateId("ConfettiGold");
const confettiSilverID = new WorldItemTemplateId("ConfettiSilver");

$.onReceive((messageType) => {
    // 金色の紙吹雪を作成
    if (messageType === "CreateConfettiGold") {
        const spawnPosition = spawnPoint.getGlobalPosition();
        const spawnRotation = spawnPoint.getGlobalRotation();
        $.createItem(confettiGoldID, spawnPosition, spawnRotation);
        $.log("コンフェッティゴールドメッセージ受信しました");
    }

    // 銀色の紙吹雪を作成
    if (messageType === "CreateConfettiSilver") {
        const spawnPosition = spawnPoint.getGlobalPosition();
        const spawnRotation = spawnPoint.getGlobalRotation();
        $.createItem(confettiSilverID, spawnPosition, spawnRotation);
        $.log("コンフェティシルバーのメッセージ受信しました");
    }
});