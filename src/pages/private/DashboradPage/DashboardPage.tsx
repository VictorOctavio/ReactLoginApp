import "./dashboardpage.css";

// Components
import { LineChart } from "@/components/Chart/LineChart";

export const DashboardPage = () => {
  return (
    <div className="dashboardPage">
      <div className="dashboardPageCard dashboardPageCardGrafico">
        <LineChart />
      </div>
      <div className="dashboardPageCard">Panel 1</div>
      <div className="dashboardPageCard">Panel 2</div>
      <div className="dashboardPageCard">Panel 3</div>
      <div className="dashboardPageCard">Panel 4</div>
    </div>
  )
}
