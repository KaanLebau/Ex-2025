import "./stopClassification.scss";
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Klassifierad", value: 400 },
  { name: "Ej klassifierad", value: 300 },
];

export function StopClassification() {
  const COLORS = ["var(--pie-color-1)", "var(--pie-color-2)"];

  return (
    <div className="stopClassificationContainer">
      <h3 className="stopClassificationTitle">Stop Classification</h3>
      <div className="chartLabel">klassifierad ej klassifierad</div>
      <div className="pieChartWrapper"> {/* ✅ Restrict size here */}
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              
              outerRadius="80%" // ✅ Reduced size
              innerRadius="40%"
              fill="#8884d8"
              dataKey="value"
              stroke="white"
              strokeWidth={2}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
