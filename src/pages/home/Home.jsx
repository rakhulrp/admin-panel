import Featuredinfo from "../../components/featuredinfo/Featuredinfo"
import "./home.css"
import Chart from "../../components/chart/Chart";
import {userData }from "../../dummyData";
import WidgetSmall from "../../components/widgetSmall/WidgetSmall";
import WidgetLarge from "../../components/widgetLarge/WidgetLarge";

export default function home() {
  return (
    <div className="home">
            <Featuredinfo/>
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/> 
            <div className="homeWidgets">
              <WidgetSmall/>
              <WidgetLarge/>

      </div>
    </div>
  )
}
 