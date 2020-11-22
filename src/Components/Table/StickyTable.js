import React, { useMemo } from "react";
import { useTable, useBlockLayout } from "react-table";
import MockData from "./MOCK_DATA.json";
import { useSticky } from "react-table-sticky";
import { COLUMNS, GROUPED_COLUMNS } from "./columns";
import "./BasicTable.css";
import { Styles } from "./tableStyles";

export default function StickyTable() {
  const columns = useMemo(() => GROUPED_COLUMNS, []);
  const data = useMemo(() => MockData, []);

  const tableInstance = useTable(
    {
      columns: columns,
      data: data,
    },
    useBlockLayout,
    useSticky
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  const firstPageRows = rows.slice(0, 10);

  return (
    <Styles>
      <div
        {...getTableProps()}
        className="table sticky"
        style={{ width: 1000, height: 500 }}
      >
        <div className="header">
          {headerGroups.map((headerGroup) => (
            <div {...headerGroup.getHeaderGroupProps()} className="tr">
              {headerGroup.headers.map((column) => (
                <div {...column.getHeaderProps()} className="th">
                  {column.render("Header")}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div {...getTableBodyProps()} className="body">
          {firstPageRows.map((row) => {
            prepareRow(row);
            return (
              <div {...row.getRowProps()} className="tr">
                {row.cells.map((cell) => (
                  <div {...cell.getCellProps()} className="td">
                    {cell.render("Cell")}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </Styles>
  );
}
