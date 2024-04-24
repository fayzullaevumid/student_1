'use client'
import React, { useState } from 'react'
import './section.css'

const Section = () => {
    const [open , setOpen] = useState(false)
    const toogleMenu = () => {
        setOpen(!open)
    }
  return (
    <div>
          
        <div className='navbar'>
      <a  onClick={toogleMenu}><img className='icon2' src="https://www.svgrepo.com/show/513802/align-justify.svg" alt="" /></a>
      <p className='pp'>Главная</p>
      <div className='navbar2'>
      <input type="text" placeholder='Поиск' className='input'/>
      <img className='icon1' src="https://www.svgrepo.com/show/532555/search.svg" alt="" />
      </div>
        </div>
       {open && (
        <ul>
       <a id='aa' href="/oyinlar"><p>1. Что такое образовательные игры?</p></a>
       <a id='aa' href="/afzaligi"><p>2. Преимущества образовательных игр</p></a>
       <a id='aa' href="/turi"><p>3. Виды образовательных игр</p></a>
       <a id='aa' href="/tanlash"><p>4. Как выбрать подходящую игру</p></a>
       <a id='aa' href="/oqish"><p>5. Интегрируйте игры в обучение</p></a>
       </ul>
       )}
       <div className='mim'>
        <div className='section1'>
            <p className='p2'>Введение в <br /> образовательные игры <br />для детей</p>
            <p className='p3'>Образовательные игры - захватывающий способ для детей развивать навыки и познавать мир. Они <br />
         сочетают в себе обучение и развлечение, вовлекая юных исследователей в увлекательное <br />
         путешествие.</p>
              <button className='button1'>Подробнее</button>
        </div>
        </div>
        <div className='section2'>
            <p className='p4'>Преимущества использования игр в <br />
           обучении</p>
       <div className='card'> 
                  <div className='card1'>
                    <p className='p5'>Повышение <br />мотивации</p>
                    <p>Игры делают обучение <br />
            веселым и увлекательным, <br />
                поощряя детей активно <br />
           участвовать в процессе.</p>
                  </div>
                  <div className='card1'>
                    <p className='p5'>Развитие навыков</p>
                    <p>Игры помогают детям <br />
            практиковать и оттачивать <br />
            различные когнитивные, <br />
         социальные и творческие <br />
                     навыки.</p>
                  </div>
                  <div className='card1'>
                    <p className='p5'>Индивидуальный <br />подход</p>
                           <p>Образовательные игры <br />
                      позволяют подстраивать <br />
                 обучение под конкретные <br />
                 потребности и интересы <br />
                 ребенка</p>
                  </div>
               </div>
        </div>
        <div className='section3'>
            <p className='p4'>Популярные категории 
                образовательных игр</p>
                <div className='cardd'>
                    <div className='card1'>
                        <p className='p5'>Математические игры</p>
                        <p>Помогают развивать логическое <br />
                           мышление и навыки решения задач.</p>
                    </div>
                    <div className='card1'>
                        <p className='p5'>Языковые игры</p>
                        <p>Расширяют словарный запас и навыки <br />
                              коммуникации.</p>
                    </div>
                </div>
                <div className='cardd'>
                    <div className='card1'>
                        <p className='p5'>Игры на развитие памяти</p>
                        <p >Тренируют зрительную и слуховую<br /> память.
                                 </p>
                    </div>
                    <div className='card1'>
                        <p className='p5'>Творческие игры</p>
                        <p>Стимулируют воображение и 
                            креативность.</p>
                    </div>
                </div>
        </div>
        <div className='section4'>
              <p className='p4'>Развитие когнитивных навыков</p>
              <div className='card3'>
                <p className='p5'>
                Внимание
                </p>
                <p>Игры помогают улучшить <br />
                 концентрацию и избирательность <br /> 
                  внимания.</p>
              </div>
              <div className='card3'>
                <p className='p5'>
                Память
                </p>
                <p>Игры на запоминание улучшают <br />
               кратковременную и долговременную <br />
                память.</p>
              </div>
              <div className='card3'>
                <p className='p5'>
                Логика
                </p>
                <p>Логические игры тренируют <br />
                 способность мыслить аналитически.</p>
              </div>
              <img className='imgg' src="https://kartinki.pics/uploads/posts/2022-12/thumbs/1672128113_kartinkin-net-p-radostnie-deti-kartinki-krasivo-3.jpg" alt="" />
        </div>
        <div className='section5'>
            <p className='p4'>Заключение и рекомендации</p>
            <div className='cardd'>
            <div className='card4'>
                <p className='p5'>Разнообразие игр</p>
                <p>Предлагайте детям широкий выбор <br />
                развлекательных и развивающих игр.</p>
            </div>
            <div className='card6'>
                <p className='p5'>Баланс с другими активностями</p>
                <p>Следите, чтобы игры не становились 
                 единственным занятием ребенка.</p>
            </div>
            </div>
            <div className='card7'>
                <p className='p4'>
                Вовлечение родителей </p>
                <p>Участвуйте в играх вместе с детьми, чтобы направлять процесс обучения.</p>
            </div>
        </div>
    </div>
  )
}

export default Section