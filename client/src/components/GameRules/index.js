import { useState, useEffect } from "react"

export default function GameRules() {
    const [rulesOpen, setRulesOpen] = useState(false);


    const [h, hset] = useState(window.innerHeight);
    const [w, wset] = useState(window.innerWidth);

    function handleResize() {
        hset(window.innerHeight);
        wset(window.innerWidth);
    };
    function handleButton() {
        setRulesOpen(old => (!old));
    };
    useEffect(()=> {
    window.addEventListener('resize', handleResize)
    }, [ ])

 
    return (rulesOpen) ? (

            <div id="gameRulesContainer" onClick={() => handleButton()} style={{ position: 'fixed', width: `${((w / h) > 1.8) ? '1920px' : '200%'}`, transform: `scale(${((w / h) > 1.8) ? h / 1000 : .5})`, left: `${((w / h) > 1.8) ? (w-(h / 1000)*1920)/2 : 0}px`  }}>
                <img src={require(`../../assets/img/asteroid_large_sprt.png`)} alt='Large Asteroid' /> - 20pts
                <br />
                <br />
                <img src={require(`../../assets/img/asteroid_med_sprt.png`)} alt='Large Asteroid' /> - 50pts
                <br />
                <br />
                <img src={require(`../../assets/img/asteroid_sm_sprt.png`)} alt='Large Asteroid' /> - 100pts
                <br />
                <br />
                <img src={require(`../../assets/img/ufo.png`)} alt='Large Asteroid' /> - 3000pts
                <br />
                <br />
                Level Bonus: 1000pts
                <br />
                <br />
                <br />
                Level Bonus Under 30 sec: 10000pts
                <br />
                <br />
                ------------------------------------------
                <br />
                <br />
                Use Arrow Keys or WSAD to control the ship
                <br />
                <br />
                <br />
                Press SPACE to shoot
                <br />
                Double tap for burst shot
            </div>
    ) : (
        <button onClick={() => handleButton()} type="button"
            className="nes-btn upperCase" >Rules</button>
    )
}