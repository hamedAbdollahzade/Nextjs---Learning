import UpBox3 from "./UpBox3"


const UpBox2 = () => {

  console.log("Start Component UpBox2");



  return (
    <div className='bg-red-400 m-4'>
      <h1>UpBox2</h1>
      <UpBox3 />

    </div>
  )
}

export default UpBox2