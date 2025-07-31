import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const btnStyle = {
  editBtn: {
    backgroundColor: "rgb(228 225 47)",
    color: "#ffffff",
  },
  delBtn: {
    backgroundColor: "#f91942",
    color: "#ffffff",
  },
};

const ReuseTable = ({ thead, tbody }) => {
  const [isTheme, setIsTheme] = useState(true);
  
  return (
    <div
      className={
        isTheme
          ? "p-5 m-5 text-black bg-white"
          : "bg-black text-white  p-5 m-5 "
      }
    >
      <Button
        onClick={() => setIsTheme((isTheme) => !isTheme)}
        className="mb-4"
        style={{ backgroundColor: "#333", color: "white" }}
      >
        Tap to Change Theme Color
      </Button>

      <Table>
        <TableCaption className={isTheme ? "text-black" : "text-white"}>
          A list of your recent invoices.
        </TableCaption>
        <TableHeader className="bg-gray-200">
          <TableRow>
            <TableHead className="w-[100px] text-center">
              {thead.column1}
            </TableHead>
            <TableHead className="w-[100px] text-center">
              {thead.column2}
            </TableHead>
            <TableHead className="text-center">{thead.column3}</TableHead>
            <TableHead className="text-center">{thead.column4}</TableHead>
            <TableHead className="text-right">{thead.column5}</TableHead>
            <TableHead className="text-center">{thead.column6}</TableHead>
            <TableHead className="text-center">{thead.column7}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tbody.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium text-center">
                {item.id}
              </TableCell>
              <TableCell className="font-medium text-center">
                {item.date}
              </TableCell>
              <TableCell className="font-medium text-center">
                {item.name}
              </TableCell>
              <TableCell
                className={
                  item.status === "Paid"
                    ? "text-green-600 text-center font-medium"
                    : "text-red-600 text-center font-medium"
                }
              >
                {item.status}
              </TableCell>
              <TableCell className="text-center font-medium">
                {item.method}
              </TableCell>
              <TableCell className="text-right font-medium">
                {item.amount}
              </TableCell>
              <TableCell className="text-center font-medium">
                <Button className="btn me-3" style={btnStyle.editBtn}>
                  Edit
                </Button>
                <Button className="btn" style={btnStyle.delBtn}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ReuseTable;
