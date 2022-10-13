(()=>{

    enum AudioLevel{
        min = 10,
        medium,
        max = 100
    }

    let currentAudio: AudioLevel = AudioLevel.medium;

    console.log(currentAudio);
    console.log(AudioLevel);

})()