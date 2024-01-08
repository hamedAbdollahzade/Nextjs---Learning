import UpBox1 from "./components/UpBox/UpBox1"
import DownBox1 from "./components/DownBox/DownBox1"


const App = () => {
  return (
    <div className="flex flex-col justify-center items-center" >

      <h1 className="text-4xl m-4 border-b border-black p-4">Redux Toolkit Learning ...</h1>

      <UpBox1 />

      <DownBox1 />

    </div>
  );
}
export default App