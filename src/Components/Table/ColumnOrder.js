import React, { useMemo } from "react";
import { useTable, useColumnOrder } from "react-table";
import MockData from "./MOCK_DATA.json";
import { COLUMNS, GROUPED_COLUMNS } from "./columns";
import "./BasicTable.css";

export default function ColumnOrder() {
  const columns = useMemo(() => GROUPED_COLUMNS, []);
  const data = useMemo(() => MockData, []);

  const tableInstance = useTable(
    {
      columns: columns,
      data: data,
    },
    useColumnOrder
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    setColumnOrder,
    prepareRow,
  } = tableInstance;

  const changeOrder = () => {
    setColumnOrder([
      "id",
      "first_name",
      "last_name",
      "phone",
      "country",
      "date_of_birth",
    ]);
  };

  return (
    <React.Fragment>
      <button onClick={changeOrder}>Change Column Order</button>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {footerGroups.map((footerGroup) => (
            <tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map((column) => (
                <td {...column.getFooterProps()}>{column.render("Footer")}</td>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </React.Fragment>
  );
}
