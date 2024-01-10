import { useSelector } from "react-redux"

const DownBox3 = () => {

  console.log("Start Component DownBox3");


  const selectorCounterMe = useSelector((state) => state.counterMe.value)

  return (
    <div className="bg-gray-700 m-4 p-6">
      <h1>DownBox3</h1>
      <h2 className="text-white text-3xl"> Counter : {selectorCounterMe} </h2>
    </div>
  )
}

export default DownBox3