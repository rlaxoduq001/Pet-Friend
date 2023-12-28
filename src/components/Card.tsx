import React from 'react'
import './Card.css'

export const Card:React.FC = () => {
  return (
    <div className='container'>
      <div className='card_container'>
        <article className='card_article'>
          <img 
            className='card_img'
            src="https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/32E9/image/BA2Qyx3O2oTyEOsXe2ZtE8cRqGk.JPG" 
            alt="멍멍이"/>
          <div className='card_info'>
            <span className='card_description'>써브</span>
            <h2 className='card_title'>제목</h2>
            <a href='#' className='card_btn'>Read More</a>
          </div>
        </article>
      </div>
    </div>
  )
}
