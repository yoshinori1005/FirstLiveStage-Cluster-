$.onReceive((messageType) => {
    const animator = $.getUnityComponent("Animator");

    switch (messageType) {
        case "BaseSignal":
            animator.setTrigger("OnBase");
            $.log("ベースシグナルを受信しました");

            switch (messageType) {
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
                default:
            }
            break;
        case "RedSignal":
            animator.setTrigger("OnRed");
            $.log("レッドシグナルを受信しました");

            switch (messageType) {
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
                default:
            }
            break;
        case "GreenSignal":
            animator.setTrigger("OnGreen");
            $.log("グリーンシグナルを受信しました");

            switch (messageType) {
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
                default:
            }
            break;
        case "BlueSignal":
            animator.setTrigger("OnBlue");
            $.log("ブルーシグナルを受信しました");

            switch (messageType) {
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
            break;
        default:
    }
});