import React from 'react'
import ReducerComponent from '../components/ReducerComponent'
import Clock from '../components/Clock'

const Home = () => {
  return (
    <>
      <h1>Home page</h1>
      <section>
        This section will act as the landing page of the project.
        <ReducerComponent />
        <Clock />
      </section>
    </>
  )
}

export default Home
