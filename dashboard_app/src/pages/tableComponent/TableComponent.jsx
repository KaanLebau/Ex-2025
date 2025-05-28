/** @format */

import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import "./tableComponent.scss";

export function TableComponent({ columns, data, onUpdate }) {
  return (
    <TableContainer component={Paper} className="customTableContainer">
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {columns.map((col) => (
              <TableCell key={col.field} className="headerCell">
                {col.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map((col) => (
                <TableCell key={col.field}>
                  {col.onClick ? (
                    <span
                      style={{
                        color: "blue",
                        cursor: "pointer",
                        textDecoration: "underline",
                      }}
                      onClick={() => col.onClick(row[col.field], row)}
                    >
                      {row[col.field] || "Visa standard"}
                    </span>
                  ) : col.editable ? (
                    col.type === "checkbox" ? (
                      <Checkbox
                        checked={row[col.field]}
                        onChange={() =>
                          onUpdate(rowIndex, col.field, !row[col.field])
                        }
                      />
                    ) : col.type === "select" ? (
                      <Select
                        value={row[col.field] ?? ""}
                        onChange={(e) =>
                          onUpdate(rowIndex, col.field, e.target.value)
                        }
                      >
                        {col.options.map((option, i) => (
                          <MenuItem key={i} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                    ) : col.type === "input" ? (
                      <input
                        type="text"
                        value={row[col.field] || ""}
                        onChange={(e) =>
                          onUpdate(rowIndex, col.field, e.target.value)
                        }
                      />
                    ) : (
                      row[col.field]
                    )
                  ) : (
                    row[col.field]
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
