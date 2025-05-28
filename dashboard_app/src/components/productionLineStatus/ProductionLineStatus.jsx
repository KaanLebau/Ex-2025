/** @format */

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./productionLineStatus.scss";
import { Order } from "../order/Order";
import { getCurrentShift } from "../../util/shiftUtil";
import { CounterCard } from "../counterCard/CounterCard";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceLine,
  LabelList,
} from "recharts";

const COLORS = ["#00C49F", "#ff2828"];

export function ProductionLineStatus(props) {
  const [shift, setShift] = useState(getCurrentShift());
  const currentLine = "ham";

  useEffect(() => {
    const interval = setInterval(() => {
      setShift(getCurrentShift());
    }, 600000);
    return () => clearInterval(interval);
  }, []);

  const user = useSelector((state) => state.auth.user);

  function getBarchart() {
    const formattedData = props.data.jph.map((dataPoint) => ({
      time: dataPoint.time,
      value: dataPoint.value,
      target: dataPoint.time.endsWith(":00")
        ? props.data.jphTarget
        : props.data.jphTarget / 2,
    }));

    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={formattedData} margin={{ top: 20, right: 30 }}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          {formattedData.map((entry, index) => (
            <ReferenceLine
              key={`ref-line-${index}`}
              x={entry.time}
              y={entry.time.endsWith(":00") ? 16 : 8}
              stroke="red"
              strokeDasharray="5 2"
            />
          ))}
          <Bar dataKey="value" barSize={30} stroke="#041e42" strokeWidth={1}>
            {formattedData.map((entry, index) => (
              <Cell
                key={`cell-${entry.time}-${index}`}
                fill={entry.value >= entry.target ? COLORS[0] : COLORS[1]}
              />
            ))}
            <LabelList
              dataKey="value"
              position="top"
              fill="black"
              fontSize={14}
              fontWeight="bold"
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    );
  }

  function getPieChart() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={props.data.classifications}
            cx="50%"
            cy="50%"
            outerRadius="100%"
            fill="#8884d8"
            dataKey="value"
            stroke="#041e42"
            strokeWidth={1}
          >
            {props.data.classifications.map((entry, index) => (
              <Cell
                key={`pie-cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }

  if (props.loading && !props.data) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="productionLineStatusContainer">
      <div className="opInfo">
        <div className="opInfoRow">
          <p className="opInfoLabel">Role :</p>
          <p className="opInfoData">{user.role}</p>
        </div>
        <div className="opInfoRow">
          <p className="opInfoLabel">Shift :</p>
          <p className="opInfoData">{shift}</p>
        </div>
        <div className="opInfoRow">
          <p className="opInfoLabel">Line :</p>
          <p className="opInfoData">{currentLine}</p>
        </div>
      </div>
      <div className="jphChart">
        <p className="jphTitle">JPH : {props.data.jphTarget}</p>
        <div className="barChartWrapper">{getBarchart()}</div>
      </div>
      <div className="classificationChart">
        <p className="classificationTitle">Klassifikation</p>
        <div className="pieChartWrapper">{getPieChart()}</div>
      </div>

      <CounterCard title="Kassationer" count={5} />
      <CounterCard title="Utanför line" count={3} />
      <Order className="orderTime" order={props.data.order} />
      <div className="logo">
        <img src="/images/scania-symbol.svg" alt="logo" className="logo" />
      </div>
    </div>
  );
}
