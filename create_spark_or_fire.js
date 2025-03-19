const spawnPoint = $.subNode("CreateVFXPoint");
const redSparkID = new WorldItemTemplateId("RedSpark")
const greenSparkID = new WorldItemTemplateId("GreenSpark")
const blueSparkID = new WorldItemTemplateId("BlueSpark")
const fireExplosionID = new WorldItemTemplateId("FireExplosion")

$.onReceive((messageType) => {
    if (messageType === "CreateRedSpark") {
        const spawnPosition = spawnPoint.getGlobalPosition();
        const spawnRotation = spawnPoint.getGlobalRotation();
        $.createItem(redSparkID, spawnPosition, spawnRotation);
        $.log("レッドスパークのシグナルを受信しました");
    }
    else if (messageType === "CreateGreenSpark") {
        const spawnPosition = spawnPoint.getGlobalPosition();
        const spawnRotation = spawnPoint.getGlobalRotation();
        $.createItem(greenSparkID, spawnPosition, spawnRotation);
        $.log("ブルースパークのシグナルを受信しました");
    }
    else if (messageType === "CreateBlueSpark") {
        const spawnPosition = spawnPoint.getGlobalPosition();
        const spawnRotation = spawnPoint.getGlobalRotation();
        $.createItem(blueSparkID, spawnPosition, spawnRotation);
        $.log("グリーンスパークのシグナルを受信しました");
    }
    else if (messageType === "CreateFire") {
        const spawnPosition = spawnPoint.getGlobalPosition();
        const spawnRotation = spawnPoint.getGlobalRotation();
        $.createItem(fireExplosionID, spawnPosition, spawnRotation);
        $.log("エクスプロージョンのシグナルを受信しました");
    }
});