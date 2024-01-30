import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/slices/counterSlice'

const ReducerComponent = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Reducer Component</h1>
      <div className="counter">
        <button className="button" onClick={() => dispatch(decrement())}>
          Decrease
        </button>
        <div className="count">{count}</div>
        <button className="button" onClick={() => dispatch(increment())}>
          Increase
        </button>
      </div>
    </div>
  )
}

export default ReducerComponent
