/** @format */

import "./kpiCard.scss";

export function KpiCard({ kpi, value }) {
  const stateColor = () => {
    const percentageOver = ((value - kpi) / kpi) * 100;
    if (percentageOver > 10) {
      return "red"; // Over 10% → Red
    } else if (percentageOver > 5) {
      return "yellow"; // Over 5% → Yellow
    } else if (percentageOver > 0) {
      return "green"; // Within 5% → Light green
    }
    return "";
  };

  return (
    <section className={`kpiCardContainer ${stateColor()}`}>
      <p className="kpiTarget">Ct mål {kpi}</p>
      <p className={`lastValue`}>{value}</p>
    </section>
  );
}
