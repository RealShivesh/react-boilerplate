import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/slices/counterSlice'

const Home = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div className="container">
      <h1>Home page</h1>
      <section>
        This section will act as the landing page of the project.
        <div className="increment">
          <button className="button" onClick={() => dispatch(decrement())}>
            Decrease the value
          </button>
          <div className="count">{count}</div>
          <button className="button" onClick={() => dispatch(increment())}>
            Increase the value
          </button>
        </div>
      </section>
    </div>
  )
}

export default Home
