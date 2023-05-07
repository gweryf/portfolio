import { useEffect, useState } from 'react'
import Header from '../components/header'
import Skills from '../components/skills'
import "../styles/app.scss"

function App() {
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
      console.log(entry);
      if(entry.isIntersecting){
        entry.target.classList.add('show')
      } else {
        entry.target.classList.remove('show')
      }
    })
  })

  useEffect(()=>{
    const hiddenElements = document.querySelectorAll('.hidden')
    hiddenElements.forEach((el)=>{observer.observe(el)})
  },[])
  return (
    <>
      <Header/>
      <section className='firstcard hidden'>
        <div className='content'>
          <h1>Priyam Shrivastava</h1>
          <p>Frontend Developer</p>
        </div>
      </section>
      <section className='hidden'> 
        <Skills/>
      </section>
      <section className='hidden'></section>
    </>
  )
}

export default App
