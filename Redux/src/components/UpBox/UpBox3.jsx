import { useSelector } from "react-redux"

const UpBox3 = () => {

  const selectorCounterMe = useSelector((state) => state.counterMe.value)



  return (
    <div className='bg-red-600 m-4 p-6'>
      <h1>UpBox3</h1>
      <h2 className="text-white">Counter : {selectorCounterMe} </h2>
    </div>
  )
}

export default UpBox3