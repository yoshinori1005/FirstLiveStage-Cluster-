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

function blinkRightBaseColor() {
    rightLights.forEach(() => $.sendSignalCompat("this", "OnBase"));
    $.state.blink = false;
}

function resetRightBaseColor() {
    rightLights.forEach(() => $.sendSignalCompat("this", "OnBase"));
    $.state.reset = false;
}

function blinkCenterBaseColor() {
    centerLights.forEach(() => $.sendSignalCompat("this", "BaseBlinkOff"));
    $.state.blink = false;
}

function resetCenterBaseColor() {
    centerLights.forEach(() => $.sendSignalCompat("this", "OnBase"));
    $.state.reset = false;
}

function blinkLeftBaseColor() {
    leftLights.forEach(() => $.sendSignalCompat("this", "BaseBlinkOff"));
    $.state.blink = false;
}

function resetLeftBaseColor() {
    leftLights.forEach(() => $.sendSignalCompat("this", "OnBase"));
    $.state.reset = false;
}

$.onReceive((messageType) => {
    const blink = $.state.blink;
    const reset = $.state.reset;

    // 各位置のスイッチ
    switch (messageType) {
        case "OnRightBase":
            if (blink) {
                blinkCenterBaseColor();
                blinkLeftBaseColor
            }

            if (reset) {
                resetCenterBaseColor
                resetLeftBaseColor
            }
            rightLights.forEach(() => $.sendSignalCompat("this", "OnBase"));
            break;
        case "OnRightRed":
            if (blink) {
                blinkCenterBaseColor();
                blinkLeftBaseColor();
            }
            if (reset) {
                resetCenterBaseColor()
                resetLeftBaseColor();
            }
            centerAndLeftBaseColor();
            rightLights.forEach(() => $.sendSignalCompat("this", "OnRed"));
            break;
        case "OnRightGreen":
            centerAndLeftBaseColor();
            rightLights.forEach(() => $.sendSignalCompat("this", "OnGreen"));
            break;
        case "OnRightBlue":
            centerAndLeftBaseColor();
            rightLights.forEach(() => R.sendSignalCompat("this", "OnBlue"));
            break;
        case "OnCenterBase":
            rightAndLeftBaseColor();
            centerLights.forEach(() => $.sendSignalCompat("this", "OnBase"));
            break;
        case "OnCenterRed":
            rightAndLeftBaseColor();
            centerLights.forEach(() => $.sendSignalCompat("this", "OnRed"));
            break;
        case "OnCenterGreen":
            rightAndLeftBaseColor();
            centerLights.forEach(() => $.sendSignalCompat("this", "OnGreen"));
            break;
        case "OnCenterBlue":
            rightAndLeftBaseColor();
            centerLights.forEach(() => $.sendSignalCompat("this", "OnBlue"));
            break;
        case "OnLeftBase":
            rightAndCenterBaseColor();
            leftLights.forEach(() => $.sendSignalCompat("this", "OnBase"));
            break;
        case "OnLeftRed":
            rightAndCenterBaseColor();
            leftLights.forEach(() => $.sendSignalCompat("this", "OnRed"));
            break;
        case "OnLeftGreen":
            rightAndCenterBaseColor();
            leftLights.forEach(() => $.sendSignalCompat("this", "OnGreen"));
            break;
        case "OnLeftBlue":
            rightAndCenterBaseColor();
            leftLights.forEach(() => $.sendSignalCompat("this", "OnBlue"));
            break;
        default:
            break;
    }
});