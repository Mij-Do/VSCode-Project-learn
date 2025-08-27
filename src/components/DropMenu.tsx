import { useEffect, useRef } from "react";

interface IProps {
    position: {
        x: number;
        y: number;
    }
    setShowDrop: (val: boolean) => void;
}

const DropMenu = ({position, setShowDrop}: IProps) => {
    const menuRef = useRef<HTMLDivElement>(null);
    const {x, y} = position;
    useEffect(() => {
        const onClickHandel = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setShowDrop(false);
            }
        }
        window.addEventListener("click", onClickHandel);

        // cleanup 
        return () => {
            window.removeEventListener("click", onClickHandel);
        }
    }, [setShowDrop])
    return (
        <div ref={menuRef}>
            <ul className="bg-white text-black w-fit px-5 py-2 rounded-md" style={{position: "absolute", left: x, top: y,}}>
                <li className="hover:bg-gray-400 rounded-md w-full p-1">Close</li>
                <li className="hover:bg-gray-400 rounded-md w-full p-1">Close All</li>
            </ul>
        </div>
    )
}

export default DropMenu;