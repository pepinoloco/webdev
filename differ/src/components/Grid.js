import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

const Grid = ({data}) => {
  const colDefs = [
    { field: "stat" },
    { field: "left" },
    { field: "right" },
    { field: "diff" },
  ];

  return (
    <div
      className="ag-theme-quartz"
      style={{ height: 240, width: '100%', margin: 30 }}
    >
      <AgGridReact
        rowData={data}
        columnDefs={colDefs}
      />
    </div>
  );
}

export default Grid;
