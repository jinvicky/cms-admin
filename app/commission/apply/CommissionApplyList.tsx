"use client";
import React, { useState } from "react";

import Link from "next/link";

import { AllCommunityModule, ICellRendererParams, ModuleRegistry } from 'ag-grid-community';
import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";

ModuleRegistry.registerModules([AllCommunityModule]);

interface CommissionApplyListProps {
  rowData: CommissionApply[];
}

const CommissionApplyList = ({ rowData }: CommissionApplyListProps) => {

  const agGridReactRef = React.useRef<AgGridReact>(null);

  const selectButtonByStatus = (params: ICellRendererParams) => {
    console.log('params', params)
    switch(params.data.status) {
      case 'REQUEST': // 신청
        return <Link href={`/commission/payment/request/new/${params.data.id}`}>결제 요청하기</Link>
      default:
        return status
    }
  }

  const [columnDefs] = useState<ColDef[]>([
    {
      field: "id",
      checkboxSelection: true,
      cellRenderer: (params: ICellRendererParams) => (
        <Link href={`/commission/apply/${params.data.id}`}>{params.value}</Link>
      ),
    },
    { field: "userName" },
    { field: "userEmail" },
    {
      field: "title",
      cellRenderer: (params: ICellRendererParams) => (
        <Link href={`/commission/apply/${params.data.id}`}>{params.value}</Link>
      ),
    },
    { field: "status", 
      cellRenderer: (params: ICellRendererParams)=> {
        return selectButtonByStatus(params)
      }
     },
    { field: "rgtrDt" }
  ]);

  const gridOptions = {
    columnDefs: columnDefs,
    pagination: true,
    paginationPageSize: 10,
  };

  const handleSelected = () => {
    if (agGridReactRef.current) {
      const selectedNodes = agGridReactRef.current.api.getSelectedNodes();
      const selectedData = selectedNodes.map((node) => node.data);
      console.log(selectedData);
    }
  }

  return (
    <div>
      <div className="ag-theme-alpine" style={{ height: '600px', width: '100%' }}>
        <AgGridReact
          ref={agGridReactRef}
          rowData={rowData}
          columnDefs={columnDefs}
          pagination={gridOptions.pagination}
          paginationPageSize={gridOptions.paginationPageSize}
          rowSelection={'multiple'}
        />
      </div>
      <div className="p-4">
        <button
          onClick={handleSelected}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          삭제하기
        </button>
      </div>
    </div>

  );
};

export default CommissionApplyList;