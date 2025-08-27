interface IProps {
    position: {
        x: number;
        y: number;
    }
}

const DropMenu = ({position}: IProps) => {
    const {x, y} = position;
    return (
        <div>
            <ul className="bg-white text-black w-fit px-5 py-2 rounded-md" style={{position: "absolute", left: x, top: y,}}>
                <li className="hover:bg-gray-400 rounded-md w-full p-1">Close</li>
                <li className="hover:bg-gray-400 rounded-md w-full p-1">Close All</li>
            </ul>
        </div>
    )
}

export default DropMenu;