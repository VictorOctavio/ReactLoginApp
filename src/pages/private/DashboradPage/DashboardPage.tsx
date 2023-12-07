import { CardSale } from "@/components/CardSale/CardSale";
import "./dashboardpage.css";

// Components
import { LineChart } from "@/components/Chart/LineChart";
import { CardClient } from "@/components/CardClient/CardClient";

export const DashboardPage = () => {
  return (
    <div className="dashboardPage">

      <div className="dashboardPageCard-sales">
        <CardSale amount={2.37} title="911" urlImg="/911.png" />
        <CardSale amount={1.06} title="Cayanne" urlImg="/cayanne.png" />
        <CardSale amount={-2.03} title="Macan" urlImg="/macan.webp" />
        <CardSale amount={0.937} title="Panamera" urlImg="/panamera.png" />
        <CardSale amount={-0.877} title="Taycan" urlImg="/taycan.png" />
      </div>

      <div className="dashboardPageCard dashboardPageCardGrafico">
        <LineChart />
      </div>
      
      <div className="dashboardPageCard dashboardPageCardClients">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Clients</h5>
          <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-orange-500">
              View all
          </a>
        </div>

        <div className="flow-root">
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">

            <CardClient amount={320} email="email@windster.com" name="Neil Sims" urlImg="/client_1.avif"/>
            <CardClient amount={243} email="email@sara.com" name=" Sara Greck" urlImg="/client_2.jpg"/>
            <CardClient amount={610} email="email@Hzybif.com" name="Yuki Hzybif" urlImg="/client_3.jpg"/>

          </ul>
        </div>
      </div>
    </div>
  )
}
