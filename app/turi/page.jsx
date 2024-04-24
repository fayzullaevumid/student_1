import React from 'react'
import './turi.css'

const Turi = () => {
  return (
    <div>
        <p id='p1'>Виды образовательных игр</p>
        <div id='card1'>
            <div id='card'>
           <p id='p2'><strong>Настольные игры</strong></p>
           <p>Например, обучающие<br />
              игры-лото, шахматы, <br />
             шашки, ходилки.</p>
            </div>
            <div id='card'>
           <p id='p2'><strong>Видеоигры</strong></p>
           <p>Интерактивные игровые<br />
            приложения на<br />
             компьютерах и мобильных<br />
             устройствах.</p>
            </div>
            <div id='card'>
           <p id='p2'><strong>Ролевые игры</strong></p>
           <p>Игры, в которых дети<br />
             примеряют на себя<br />
             различные социальные<br />
             роли.</p>
            </div>
        </div>
    </div>
  )
}

export default Turi