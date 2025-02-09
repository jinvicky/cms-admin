"use client";
import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";


import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import Link from "next/link";
ModuleRegistry.registerModules([AllCommunityModule]);

interface CommissionApplyListProps {
  rowData: CommissionApply[];
}

const CommissionApplyList = ({ rowData }: CommissionApplyListProps) => {

  const [columnDefs] = useState<ColDef[]>([
    {
      field: "id",
      cellRenderer: (params: any) => (
        <Link href={`/commission/apply/${params.data.id}`}>{params.value}</Link> // Set the URL dynamically
      ),
    },
    { field: "userName" },
    { field: "userEmail" },
    {
      field: "title",
      cellRenderer: (params: any) => (
        <Link href={`/commission/apply/${params.data.id}`}>{params.value}</Link> // Set the URL dynamically
      ),
    },
    { field: "status" },
    { field: "rgtrDt" }
  ]);

  const gridOptions = {
    columnDefs: columnDefs,
    pagination: true,
    paginationPageSize: 10,
  };

  return (
    <div className="ag-theme-alpine" style={{ height: '600px', width: '100%' }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        pagination={gridOptions.pagination}
        paginationPageSize={gridOptions.paginationPageSize}
      />
    </div>
  );
};

export default CommissionApplyList;