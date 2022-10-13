"use strict";
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 10] = "min";
        AudioLevel[AudioLevel["medium"] = 11] = "medium";
        AudioLevel[AudioLevel["max"] = 100] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.medium;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
