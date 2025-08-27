import IconImg from "./IconImg";

const Welcome = () => {
    return (
        <div className="h-screen flex items-center justify-center">
            <IconImg src="/icons/vscode.svg" className="w-64 h-64"/>
            <p className="text-[#494949]">WelCome To VSCode ...</p>
        </div>
    )
}

export default Welcome;