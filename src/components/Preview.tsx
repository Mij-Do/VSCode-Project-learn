import { useSelector } from "react-redux";
import ContentHighlighter from "./ContentHighlighter";
import OpenedFileBar from "./OpenedFileBar";
import type { RootState } from "../app/store";


const Preview = () => {
    const {clickedFile} = useSelector((state: RootState) => state.filetree);
    return (
        <>
            <OpenedFileBar />
            <ContentHighlighter content={`${clickedFile.fileContent}`}/>
        </>
    )
}

export default Preview;