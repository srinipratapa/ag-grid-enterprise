// ag-grid-enterprise v5.3.0
import { Component, Column } from "ag-grid/main";
export declare class RenderedColumn extends Component {
    private static TEMPLATE;
    private gridOptionsWrapper;
    private columnController;
    private eventService;
    private dragAndDropService;
    private gridPanel;
    private context;
    private eText;
    private eIndent;
    private cbSelect;
    private column;
    private columnDept;
    private allowDragging;
    private displayName;
    private processingColumnStateChange;
    constructor(column: Column, columnDept: number, allowDragging: boolean);
    init(): void;
    private onClick();
    private onChange(event);
    private actionUnCheckedPivotMode();
    private actionCheckedPivotMode();
    private addDragSource();
    private onColumnStateChanged();
}
