import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment } from './redux/counterSlice'

type Props = {
  counter: {
    value: number,
  }
}

function App() {
  const count = useSelector((state: Props) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div className='App flex items-center justify-center w-full min-h-screen'>
      <div className='flex flex-col items-center gap-4'>
        <h1>count : {count}</h1>
        <div className='flex gap-4'>
          <button
            onClick={() => dispatch(increment())}
            className='w-16 h-16 rounded-md shadow-md bg-white bg-opacity-30 leading-4'
          >＋</button>
          <button
            onClick={() => dispatch(decrement())}
            className='w-16 h-16 rounded-md shadow-md bg-white bg-opacity-30 leading-4'
          >ー</button>
        </div>
      </div>
    </div>
  )
}

export default App
