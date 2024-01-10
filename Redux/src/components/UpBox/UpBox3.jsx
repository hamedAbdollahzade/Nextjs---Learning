import { useDispatch, useSelector } from "react-redux"
import { counterSlice } from "../../redux/store"

const UpBox3 = () => {

  console.log("Start Component UpBox3");


  const selectorCounterMe = useSelector((state) => state.counterMe.value)
  const dispatch = useDispatch()


  return (
    <div className='bg-red-600 m-4 p-6'>
      <h1>UpBox3</h1>
      <h2 className="text-white text-3xl">Counter : {selectorCounterMe} </h2>
      <button className="border p-2 mt-2" onClick={() => dispatch(counterSlice.actions.increment({amount:3 , qty:2}))} >Increment</button>
      <button className="border p-2 mt-2" onClick={() => dispatch(counterSlice.actions.decrement())}>Decrement</button>
    </div>
  )
}

export default UpBox3