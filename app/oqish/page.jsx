import React from 'react'
import './oqish.css'

const Oqish = () => {
  return (
    <div>
        <p id='p1'>Интегрируйте игры в обучение</p>
        <div className='card1'>
        <div id='raqam'>
            <p>1</p>
        </div>
        <div id='raqam'>
            <p>2</p>
        </div>
        <div id='raqam'>
            <p>3</p>
        </div>
        </div>
        <div id='card'>
            <div className='card2'>
                <p id='p2'><strong>Определите цели</strong></p>
                <p>Выберите игры, которые<br />
                 точно соответствуют<br />
                 учебным целям.</p>
            </div>
            <div className='card2'>
                <p id='p2'><strong>Внедрите игры</strong></p>
                <p>Органично встраивайте<br />
                    игры в образовательный<br />
                 процесс</p>
            </div>
            <div className='card2'>
                <p id='p2'><strong>Оценивайте <br />результаты</strong></p>
                <p>Отслеживайте прогресс<br />
                детей и вносите<br />
               необходимые коррективы.</p>
            </div>
        </div>
    </div>

  )
}

export default Oqish