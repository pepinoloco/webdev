import { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

const Grid = ({data}) => {
  const [colDefs, setColDefs] = useState([
    { field: "stat" },
    { field: "left" },
    { field: "right" },
    { field: "diff" }
  ]);

  return (
    // wrapping container with theme & size
    <div
      className="ag-theme-quartz" // applying the Data Grid theme
      style={{ height: 180, width: 820, margin: 30 }} // the Data Grid will fill the size of the parent container
    >
      <AgGridReact
        rowData={data}
        columnDefs={colDefs}
      />
    </div>

  );
}

export default Grid;
