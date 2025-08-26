import type { IFile } from '../interfaces';
import RenderFileIcon from './RenderFileIcon';
import CloseIcon from './SVG/CloseIcon';

interface IProps {
    file: IFile;
}

const OpenedFileBarTap = ({file}: IProps) => {
    return (
        <div className='flex space-x-1 items-center border border-gray-700 p-2'>
            <RenderFileIcon filename={file.name}/>
            <span>{file.name}</span>
            <CloseIcon />
        </div>
    )
}

export default OpenedFileBarTap;