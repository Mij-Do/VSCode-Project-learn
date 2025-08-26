import { useDispatch } from 'react-redux';
import type { IFile } from '../interfaces';
import RenderFileIcon from './RenderFileIcon';
import CloseIcon from './SVG/CloseIcon';
import { setClickedFile } from '../app/features/FileTreeSlice';

interface IProps {
    file: IFile;
}

const OpenedFileBarTap = ({file}: IProps) => {
    const {name, content} = file;
    const dispatch = useDispatch();
    // handlers
    const onClick = () => {
        dispatch(setClickedFile({fileName: name, fileContent: content}))
    }

    return (
        <div className='cursor-pointer flex space-x-1 items-center border border-gray-700 p-2' onClick={onClick}>
            <RenderFileIcon filename={file.name}/>
            <span>{file.name}</span>
            <CloseIcon />
        </div>
    )
}

export default OpenedFileBarTap;