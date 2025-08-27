import { useSelector } from "react-redux";
import Preview from "./components/Preview";
import RecursiveComponent from "./components/RecursiveComponent";
import ResizablePanel from "./components/ResizablePanel";
import { FileTree } from "./data/FileTree";
import type { RootState } from "./app/store";
import Welcome from "./components/Welcome";


const App = () => {
  const {openedFile} = useSelector((state: RootState) => state.filetree);
  return (
    <div>
      <div className="flex h-screen">
        <ResizablePanel 
        leftPanel={
        <div className="w-64 p-2">
          <RecursiveComponent fileTree={FileTree}/>
        </div>
        }
        rightPanel={openedFile.length ? <Preview /> : <Welcome />}
        showLeftPanel
        />
      </div>
    </div>
  )
}

export default App;
