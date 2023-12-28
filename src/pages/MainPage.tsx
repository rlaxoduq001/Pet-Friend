import React from 'react'
import { MainList } from '../components/MainList'

export const MainPage:React.FC = () => {
  return (
    <>
      <MainList title="공고기한이 하루남은 친구들"/>
      <MainList title="강아지 친구들"/>
      <MainList title="고양이 친구들"/>
      <MainList title="그 외 친구들"/>
    </>
  )
}
