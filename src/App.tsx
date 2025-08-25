import RecursiveComponent from "./components/RecursiveComponent";
import { FileTree } from "./data/FileTree";


const App = () => {
  
  return (
    <div className="m-7">
      <RecursiveComponent fileTree={FileTree}/>
    </div>
  )
}

export default App;
