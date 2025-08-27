import OpenedFileBar from "./components/OpenedFileBar";
import RecursiveComponent from "./components/RecursiveComponent";
import ResizablePanel from "./components/ResizablePanel";
import { FileTree } from "./data/FileTree";


const App = () => {
  
  return (
    <div>
      <div className="flex h-screen">
        <ResizablePanel 
        leftPanel={
        <div>
          <RecursiveComponent fileTree={FileTree}/>
        </div>
        }
        rightPanel={<OpenedFileBar />}
        showLeftPanel
        />
      </div>
    </div>
  )
}

export default App;
