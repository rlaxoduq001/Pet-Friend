import React from 'react'
import './SearchPage.css'
import { Card } from '../components/Card'

export const SearchPage:React.FC = () => {
  return (
    <>
      <div className='search_container'>

        <div className='input_container'>
          <h1>연도 *</h1>
          <div className='input_box'>
            <input type='date'/>
            <h1 style={{padding: "12px"}}>~</h1>
            <input type='date'/>
          </div>
        </div>

        <div className='select_container'>
          <h1>시/군/구</h1>
          <select className='select_box'>
            <option>전체</option>
            <option>강남구</option>
            <option>논현동</option>
            <option>역삼동</option>
          </select>
        </div>

        <div className='select_container'>
          <h1>품종</h1>
          <select className='select_box'>
            <option>전체</option>
            <option>강아지</option>
            <option>고양이</option>
            <option>그 외</option>
          </select>
        </div>
      </div>

      <div className='search_result'>
        <h1>몇 마리 반려동물들이 기다리고 있어요.</h1>
        <div className='search_list'>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    </>
  )
}
