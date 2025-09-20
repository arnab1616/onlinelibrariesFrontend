
'use client'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,

  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },

    tooltips: {
      position: "nearest",
      mode: "index",
      intersect: false,
      yPadding: 10,
      xPadding: 10,
      caretSize: 4,
      backgroundColor: "rgba(72, 241, 12, 1)",
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "#000D83",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 4,
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset",
    //   data: labels.map(() => faker.datatype.number({ min: 100, max: 400 })),
      borderColor: "#000D83",
      backgroundColor: "#000D83",
      data: [196, 132, 215, 362, 210, 252],
      fill: false,
    },
  ],
};

const DashboardChart = () => {
//   const { masterData } = useSelector((state) => state.masterData);
    const dispatch = useDispatch()
    useEffect(() => {
    //   dispatch(getMasterData("6"))
    },[dispatch])
  return (
    <div className="tabs-box">
      <div className="widget-title">
        <h4>Your Profile Views</h4>
        <div className="form-group" style={{marginBottom:'0'}}>
          {/* <!--Tabs Box--> */}
          <select className="chosen-single form-select" style={{width:'200px'}}>
            {/* <option>Last 6 Months</option>
            <option>Last 12 Months</option>
            <option>Last 16 Months</option>
            <option>Last 24 Months</option>
            <option>Last 5 year</option> */}
            {/* {
              masterData?.response?.data?.[0]?.masterdata?.map((items, i) => (
                <option key={i} value={items?.id}>{items?.value}</option>
              ))
            } */}
          </select>
        </div>
      </div>
      {/* End widget top bar */}

      <div className="widget-content">
        <Line options={options} data={data} />
      </div>
      {/* End  profile chart */}
    </div>
  );
};

export default DashboardChart;
