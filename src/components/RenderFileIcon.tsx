import IconImg from "./IconImg";
import FileIcon from "./SVG/File";

interface IProps {
    filename: string;
}

const RenderFileIcon = ({filename}: IProps) => {
    const extension = filename.split('.').pop();

    if (extension === 'tsx') return <IconImg src="/icons/react_ts.svg"/>
    if (extension === 'html') return <IconImg src="/icons/html.svg"/>
    if (extension === 'jsx') return <IconImg src="/icons/react.svg"/>
    if (extension === 'js') return <IconImg src="/icons/javascript.svg"/>
    if (extension === 'ts') return <IconImg src="/icons/typescript.svg"/>
    if (extension === 'css') return <IconImg src="/icons/css.svg"/>

    return <FileIcon /> 
}

export default RenderFileIcon;