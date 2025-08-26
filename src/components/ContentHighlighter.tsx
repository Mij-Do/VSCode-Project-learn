import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface IProps {
    content: string;
}

const ContentHighlighter = ({content}: IProps) => {
    return (
        <SyntaxHighlighter 
            language="javascript" 
            style={atomOneDark}
            customStyle={{
                backgroundColor: "transparent",
                width: "100%",
                height: "100vh",
                overflowX: "auto",
                fontSize: "1.2rem"
            }}
            showLineNumbers
            >
            {String(content)}
        </SyntaxHighlighter>
    )
}

export default ContentHighlighter;