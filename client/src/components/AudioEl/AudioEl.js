import React from 'react';
 /* for every sound effect, there must be an audio element with an id of the file name */
const AudioEl = () => {
   return (<>
        <audio id="engine_snd" src={require(`../../assets/snd/player_snd/engine_snd.wav`)} loop type="audio/wav" />
        <audio id="bullet_snd" src={require(`../../assets/snd/bullet_snd/bullet_snd.wav`)} type="audio/wav" />
        <audio id="asteroid_die" src={require(`../../assets/snd/bullet_snd/asteroid_die.wav`)} type="audio/wav" />
        <audio id="player_die" src={require(`../../assets/snd/player_snd/player_die.wav`)} type="audio/wav" />
        <audio id="start_snd" src={require(`../../assets/snd/player_snd/start_snd.wav`)} type="audio/wav" />
        <audio id="gameover" src={require(`../../assets/snd/player_snd/gameover.wav`)} type="audio/wav" />
    </>)
}

export default AudioEl;