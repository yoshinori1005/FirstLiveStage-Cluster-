// 右側ライトの配列
const rightLights = [
    $.worldItemReference("FloorLight_1"),
    $.worldItemReference("MiniFloorLight_1"),
    $.worldItemReference("MiniFloorLight_2")
];
// 中央ライトの配列
const centerLights = [
    $.worldItemReference("FloorLight_2"),
    $.worldItemReference("FloorLight_3"),
    $.worldItemReference("MiniFloorLight_3"),
    $.worldItemReference("MiniFloorLight_4"),
    $.worldItemReference("SpotLightSetFront"),
    $.worldItemReference("SpotLightSetBack"),
    $.worldItemReference("SpotLightSetRight"),
    $.worldItemReference("SpotLightSetLeft"),
    $.worldItemReference("SearchLights_R"),
    $.worldItemReference("SearchLights_L")
];
// 左側ライトの配列
const leftLights = [
    $.worldItemReference("FloorLight_4"),
    $.worldItemReference("MiniFloorLight_5"),
    $.worldItemReference("MiniFloorLight_6")
];
const targets = [
    $.worldItemReference("FloorLight_1"),
    $.worldItemReference("FloorLight_2"),
    $.worldItemReference("FloorLight_3"),
    $.worldItemReference("FloorLight_4"),
    $.worldItemReference("MiniFloorLight_1"),
    $.worldItemReference("MiniFloorLight_2"),
    $.worldItemReference("MiniFloorLight_3"),
    $.worldItemReference("MiniFloorLight_4"),
    $.worldItemReference("MiniFloorLight_5"),
    $.worldItemReference("MiniFloorLight_6"),
    $.worldItemReference("SpotLightSetFront"),
    $.worldItemReference("SpotLightSetBack"),
    $.worldItemReference("SpotLightSetRight"),
    $.worldItemReference("SpotLightSetLeft"),
    $.worldItemReference("SearchLights_R"),
    $.worldItemReference("SearchLights_L")
];

// 右側を基本色にする関数
function rightBaseColor() {
    rightLights.forEach(() => $.sendSignalCompat("this", "OnBase"));
}

// 中央を基本色にする関数
function centerBaseColor() {
    centerLights.forEach(() => $.sendSignalCompat("this", "OnBase"));
}

// 左側を基本色にする関数
function leftBaseColor() {
    leftLights.forEach(() => $.sendSignalCompat("this", "OnBase"));
}

$.onReceive((messageType) => {
    // 各位置のスイッチが押された時のパターン
    switch (messageType) {
        case "OnRightBase":
            centerBaseColor();
            leftBaseColor();
            break;
        case "OnRightRed":
            // rightBaseColor();
            centerBaseColor();
            leftBaseColor();
            // if ($.state.blink) {
            //     targets.forEach(() => $.sendSignalCompat("this", "BaseBlinkOff"));
            //     $.state.blink = false;
            // }
            break;
        case "OnRightGreen":
            centerBaseColor();
            leftBaseColor();
            break;
        case "OnRightBlue":
            centerBaseColor();
            leftBaseColor();
            break;
        case "OnCenterBase":
            rightBaseColor();
            leftBaseColor();
            break;
        case "OnCenterRed":
            rightBaseColor();
            leftBaseColor();
            break;
        case "OnCenterGreen":
            rightBaseColor();
            leftBaseColor();
            break;
        case "OnCenterBlue":
            rightBaseColor();
            leftBaseColor();
            break;
        case "OnLeftBase":
            rightBaseColor();
            centerBaseColor();
            break;
        case "OnLeftRed":
            rightBaseColor();
            centerBaseColor();
            break;
        case "OnLeftGreen":
            rightBaseColor();
            centerBaseColor();
            break;
        case "OnLeftBlue":
            rightBaseColor();
            centerBaseColor();
            break;
        default:
            break;
    }
});