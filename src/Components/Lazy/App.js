import React, { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './About'

//Սովորական import։ Բեռնում է ֆաըլը նույնիսկ եթե մենք գտնվում ենք "/about"-ում
// import Home from './Home'


// "lazy loading"- загрузка կանի էձի միայն այցելման պահին, մնացած էջերում այն չի իբեռնվի անիմասատ 

const Home = lazy(() => import("./Home"))

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />} >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </div>
  )
}
