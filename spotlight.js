const nodes = [
    $.subNode("SpotLight_1"),
    $.subNode("SpotLight_2"),
    $.subNode("SpotLight_3"),
    $.subNode("SpotLight_4"),
    $.subNode("SpotLight_5"),
    $.subNode("SpotLight_6"),
    $.subNode("SpotLight_7"),
];

$.onReceive((messageType) => {
    for (let i = 0; i < nodes.length; i++) {
        const animator = nodes[i].getUnityComponent("Animator");

        switch (messageType) {
            case "BaseSignal":
                animator.setTrigger("OnBase");
            case "BaseBlinkOff":
                animator.setTrigger("BaseBlinkOff");
                break;
            case "BaseBlinkLow":
                animator.setTrigger("BaseBlinkLow");
                break;
            case "BaseBlinkMid":
                animator.setTrigger("BaseBlinkMid");
                break;
            case "BaseBlinkHigh":
                animator.setTrigger("BaseBlinkHigh");
                break;
            case "RedSignal":
                animator.setTrigger("OnRed");
                break;
            case "RedBlinkOff":
                animator.setTrigger("RedBlinkOff");
                break;
            case "RedBlinkLow":
                animator.setTrigger("RedBlinkLow");
                break;
            case "RedBlinkMid":
                animator.setTrigger("RedBlinkMid");
                break;
            case "RedBlinkHigh":
                animator.setTrigger("RedBlinkHigh");
                break;
            case "GreenSignal":
                animator.setTrigger("OnGreen");
                break;
            case "GreenBlinkOff":
                animator.setTrigger("GreenBlinkOff");
                break;
            case "GreenBlinkLow":
                animator.setTrigger("GreenBlinkLow");
                break;
            case "GreenBlinkMid":
                animator.setTrigger("GreenBlinkMid");
                break;
            case "GreenBlinkHigh":
                animator.setTrigger("GreenBlinkHigh");
                break;
            case "BlueSignal":
                animator.setTrigger("OnBlue");
                break;
            case "BlueBlinkOff":
                animator.setTrigger("BlueBlinkOff");
                break;
            case "BlueBlinkLow":
                animator.setTrigger("BlueBlinkLow");
                break;
            case "BlueBlinkMid":
                animator.setTrigger("BlueBlinkMid");
                break;
            case "BlueBlinkHigh":
                animator.setTrigger("BlueBlinkHigh");
                break;
            default:
        }
    }

});