import { extensionIconPath } from "../constant";
import IconImg from "./IconImg";
import FileIcon from "./SVG/File";

interface IProps {
    filename: string;
    isFolder?: boolean;
    isOpen?: boolean;
}

const RenderFileIcon = ({filename, isFolder, isOpen}: IProps) => {
    const extension = filename.split('.').pop();

    if (extension && Object.prototype.hasOwnProperty.call(extensionIconPath, extension)) {
        const iconPath = isFolder ?
        isOpen ?
        `${extensionIconPath[extension]}-open.svg` :
        `${extensionIconPath[extension]}.svg` :
        `${extensionIconPath[extension]}.svg`;
        
        return <IconImg src={iconPath}/>
    }


    if (isFolder && isOpen) return <IconImg src="/icons/folder-default-open.svg"/>
    if (isFolder && !isOpen) return <IconImg src="/icons/folder-default.svg"/>

    return <FileIcon /> 
}

export default RenderFileIcon;