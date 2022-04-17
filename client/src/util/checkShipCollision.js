import getDistance from '../util/getDistance'

function checkShipCollision(globalPlayer, setGlobalPlayer, setGameState, asteroids) {
    const { x, y, xB, yB, spriteDim } = globalPlayer;
  
    Object.keys(asteroids).map((asteroid) => {
        const a = asteroids[asteroid];
        //radius is hard coded
        //player radius should be smaller than ship
        const d = spriteDim;
        const plrRadius = 30;
        const astRadius = [21, 62, 124];
        const r = astRadius[a.size];
        const dist = plrRadius+r;
        const lineA = getDistance(x+(d.w/2), a.x+r, y+(d.h/2), a.y+r)
        const lineB = getDistance(xB+(d.w/2), a.x+r, yB+(d.h/2), a.y+r)
        const lineC = getDistance(x+(d.w/2), a.xB+r, y+(d.h/2), a.yB+r)
        const lineD = getDistance(xB+(d.w/2), a.xB+r, yB+(d.h/2), a.yB+r)

        if (lineA < dist || lineB < dist || lineC < dist || lineD < dist) {
            setGlobalPlayer(old => ({...old,   x: 906, y: 478, xB: 906, yB: 478, vx: 0, vy: 0, dir:90}))
            setGameState( old => ({...old, lives: old.lives-1}))
        }
      
    });

};

export default checkShipCollision;