import React from 'react';
import motion from '../../util/motion';

const Player = ({globalPlayer,currentKeys}) => {
    return (
        <>
        <img
          id='player-object'
          className={currentKeys.includes('w') ? 'fire' : ''}
          alt='player-sprite'
          src={require('../../assets/img/player_sprt.png')}
          style={motion(globalPlayer.x, globalPlayer.y, globalPlayer.dir)} />
        {globalPlayer.xB !==globalPlayer.x && <img
          id='player-object'
          className={currentKeys.includes('w') ? 'fire' : ''}
          alt='player-sprite'
          src={require('../../assets/img/player_sprt.png')}
          style={motion(globalPlayer.xB, globalPlayer.y, globalPlayer.dir)} />}
        {globalPlayer.yB !==globalPlayer.y && <img
          id='player-object'
          className={currentKeys.includes('w') ? 'fire' : ''}
          alt='player-sprite'
          src={require('../../assets/img/player_sprt.png')}
          style={motion(globalPlayer.x, globalPlayer.yB, globalPlayer.dir)} />}
        {globalPlayer.xB !==globalPlayer.x && globalPlayer.yB !==globalPlayer.y &&<img
          id='player-object'
          className={currentKeys.includes('w') ? 'fire' : ''}
          alt='player-sprite'
          src={require('../../assets/img/player_sprt.png')}
          style={motion(globalPlayer.xB, globalPlayer.yB, globalPlayer.dir)} />}
      </>
    )
}

export default Player;