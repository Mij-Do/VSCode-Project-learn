import OpenedFileBar from "./components/OpenedFileBar";
import RecursiveComponent from "./components/RecursiveComponent";
import { FileTree } from "./data/FileTree";


const App = () => {
  
  return (
    <div>
      <div className="flex h-screen">
        <div className="w-64 border-r border-white">
          <RecursiveComponent fileTree={FileTree}/>
        </div>
        <OpenedFileBar />
      </div>
    </div>
  )
}

export default App;
