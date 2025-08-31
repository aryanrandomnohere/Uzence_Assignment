import React, { useState } from "react";

interface Column<T> {
  key: string;
  title: string;
  dataIndex: keyof T;
  sortable?: boolean;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  rowKey?: keyof T;
  onRowSelect?: (selectedRows: T[]) => void;
}

function DataTable<T extends { [key: string]: any }>({
  data,
  columns,
  loading,
  selectable,
  rowKey,
  onRowSelect,
}: DataTableProps<T>) {
  const [sortColumn, setSortColumn] = useState<keyof T | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [selectedRows, setSelectedRows] = useState<T[]>([]);

  const handleSort = (columnKey: keyof T) => {
    if (sortColumn === columnKey) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(columnKey);
      setSortDirection("asc");
    }
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortColumn) return 0;

    const aValue = a[sortColumn];
    const bValue = b[sortColumn];

    if (typeof aValue === "string" && typeof bValue === "string") {
      return sortDirection === "asc"
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    } else if (typeof aValue === "number" && typeof bValue === "number") {
      return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
    }
    return 0;
  });

  const handleRowSelect = (row: T) => {
    if (!selectable) return;

    const isSelected = selectedRows.some(
      (r) => (rowKey ? r[rowKey] : r) === (rowKey ? row[rowKey] : row)
    );

    let newSelectedRows: T[];
    if (isSelected) {
      newSelectedRows = selectedRows.filter(
        (r) => (rowKey ? r[rowKey] : r) !== (rowKey ? row[rowKey] : row)
      );
    } else {
      newSelectedRows = [...selectedRows, row];
    }

    setSelectedRows(newSelectedRows);
    onRowSelect?.(newSelectedRows);
  };

  if (loading) {
    return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            {selectable && (
              <th className="py-3 px-4 border-b text-left text-sm font-semibold text-gray-600">
                Select
              </th>
            )}
            { columns.map((column) => (
              <th
                key={column.key}
                className="py-3 px-4 border-b text-left text-sm font-semibold text-gray-600"
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[...Array(5)].map((_, rowIndex) => (
            <tr key={rowIndex}>
              {selectable && (
                <td className="py-3 px-4 border-b">
                  <div className="w-4 h-4 bg-gray-300 rounded-full animate-pulse"></div>
                </td>
              )}
              {columns.map((col, colIndex) => (
                <td key={colIndex} className="py-3 px-4 border-b">
                  <div className="h-4 bg-gray-300 rounded animate-pulse w-full"></div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 rounded-lg shadow-sm">
        <thead className="bg-gray-100">
          <tr>
            {selectable && (
              <th className="py-3 px-4 border-b text-left text-sm font-semibold text-gray-600">
                Select
              </th>
            )}
            {columns.map((column) => (
              <th
                key={column.key}
                className="py-3 px-4 border-b text-left text-sm font-semibold text-gray-600 cursor-pointer select-none hover:text-blue-600 transition-colors"
                onClick={() => column.sortable && handleSort(column.dataIndex)}
                aria-sort={
                  sortColumn === column.dataIndex ? sortDirection : "none"
                }
              >
                <div className="flex items-center gap-1">
                  {column.title}
                  {column.sortable &&
                    sortColumn === column.dataIndex && (
                      <span>{sortDirection === "asc" ? "▲" : "▼"}</span>
                    )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.length === 0 ? <div className="p-2 text-red-600">Data does not exists...</div> :sortedData.map((row, rowIndex) => (
            <tr
              key={rowKey ? String(row[rowKey]) : rowIndex}
              className={`transition-colors ${
                selectable &&
                selectedRows.some(
                  (r) =>
                    (rowKey ? r[rowKey] : r) === (rowKey ? row[rowKey] : row)
                )
                  ? "bg-blue-50"
                  : "hover:bg-gray-50"
              }`}
              onClick={() => handleRowSelect(row)}
            >
              {selectable && (
                <td className="py-3 px-4 border-b">
                  <input
                    type="checkbox"
                    checked={selectedRows.some(
                      (r) =>
                        (rowKey ? r[rowKey] : r) ===
                        (rowKey ? row[rowKey] : row)
                    )}
                    onChange={() => handleRowSelect(row)}
                    aria-label="Select row"
                    className="w-4 h-4 accent-blue-600 cursor-pointer"
                  />
                </td>
              )}
              {columns.map((column) => (
                <td
                  key={String(column.dataIndex)}
                  className="py-3 px-4 border-b text-sm text-gray-700"
                >
                  {String(row[column.dataIndex])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
