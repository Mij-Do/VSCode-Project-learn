import FileComponent from "./components/FileComponent";
import FolderComponent from "./components/FolderComponent";

function App() {
  
  return (
    <div className="m-7">
      <FolderComponent folderName="node_modules"/>
      <FileComponent fileName="index.html"/>
    </div>
  )
}

export default App;
