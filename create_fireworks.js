
const heartDance = $.subNode("HeartDanceFW");
const heartRing = $.subNode("HeartRingFW");
const starDance = $.subNode("StarDanceFW");
const starRing = $.subNode("StarRingFW");
const fireworks = $.subNode("Fireworks");
const yanagi = $.subNode("FireworksYanagi");
const ring = $.subNode("FireworksRing");
const bee = $.subNode("FireworksBee");
const climax = $.subNode("FireworksClimax");

const targets = [
    heartDance,
    heartRing,
    starDance,
    starRing,
    fireworks,
    yanagi,
    ring,
    bee,
    climax
];

$.onReceive((messageType) => {
    const spawnPosition = $.getPosition();
    const spawnRotation = $.getRotation();

    switch (messageType) {
        case "HeartDanceSignal":
            for (let i = 0; i < targets.length; i++) {
                targets[i].setEnabled(false);
            }
            heartDance.setEnabled(true);
            break;
        case "HeartRingSignal":
            for (let i = 0; i < targets.length; i++) {
                targets[i].setEnabled(false);
            }
            heartRing.setEnabled(true);
            break;
        case "StarDanceSignal":
            for (let i = 0; i < targets.length; i++) {
                targets[i].setEnabled(false);
            }
            starDance.setEnabled(true);
            break;
        case "StarRingSignal":
            for (let i = 0; i < targets.length; i++) {
                targets[i].setEnabled(false);
            }
            starRing.setEnabled(true);
            break;
        case "FireworksSignal":
            for (let i = 0; i < targets.length; i++) {
                targets[i].setEnabled(false);
            }
            fireworks.setEnabled(true);
            break;
        case "YanagiSignal":
            for (let i = 0; i < targets.length; i++) {
                targets[i].setEnabled(false);
            }
            yanagi.setEnabled(true);
            break;
        case "RingSignal":
            for (let i = 0; i < targets.length; i++) {
                targets[i].setEnabled(false);
            }
            ring.setEnabled(true);
            break;
        case "BeeSignal":
            for (let i = 0; i < targets.length; i++) {
                targets[i].setEnabled(false);
            }
            bee.setEnabled(true);
            break;
        case "ClimaxSignal":
            for (let i = 0; i < targets.length; i++) {
                targets[i].setEnabled(false);
            }
            climax.setEnabled(true);
            break;
        default:
            break;
    }
});