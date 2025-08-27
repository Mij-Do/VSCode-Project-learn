import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import type { ReactNode } from 'react';


interface IProps {
    defaultLayout?: number[] | undefined;
    leftPanel: ReactNode;
    rightPanel: ReactNode;
    showLeftPanel: boolean;
}

const ResizablePanel = ({defaultLayout = [33, 67], leftPanel, rightPanel, showLeftPanel}: IProps) => {
    return (
        <PanelGroup direction="horizontal" autoSaveId='condition'>
            {showLeftPanel && 
            <>
                <Panel defaultSize={defaultLayout[0]} collapsible> {leftPanel} </Panel>
                <PanelResizeHandle className="border-r-2 border-white" />
            </>}
            <Panel defaultSize={defaultLayout[1]}> {rightPanel} </Panel>
        </PanelGroup>
    )
}

export default ResizablePanel;