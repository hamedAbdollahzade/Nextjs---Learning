import DownBox2 from "./DownBox2"


const DownBox1 = () => {
  console.log("Start Component DownBox1");

  return (
    <div className="bg-gray-300 m-4">
      <h1>DownBox1</h1>
      <DownBox2 />
    </div>
  )
}

export default DownBox1