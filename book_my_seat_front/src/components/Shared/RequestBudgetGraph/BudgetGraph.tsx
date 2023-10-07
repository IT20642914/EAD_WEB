import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { Line } from "react-chartjs-2";
import style from "./BudgetGraph.module.scss";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CustomButton from "../CustomButton/CustomButton";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const BudgetGraph = (props: any) => {
  const [budgetData, setBudgetData] = useState([45]);
  // console.log("FROM THE SPOT", _data)

  useEffect(() => {
    setBudgetData(props.lmBudgetChartData);
  }, [props]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
      tooltip: {
        enabled: true, // Disable the tooltip
      },
    },
    scales: {
      x: {
        display: true,
      },
      y: {
        display: true,
      },
    },
  };

  // useEffect(() => {
  //   getSummaryData();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [budgetData]);

  const [labels, setLabels] = useState<string[]>(["march",'april',"jul","jun","aug",]);
  const [TickedCount, setTickedCount] = useState<number[]>([100,125,130,140,100]);
  const [SelldTicket, setSelldTicket] = useState<number[]>([88,58,87,90,100]);
  const [defaultTotalBudget, setDefaultTotalBudget] = useState<number | undefined | null>(null);

  // const getSummaryData = () => {
  //   try {
  //     if (budgetData) {
  //       // const summaryLabels = budgetData.map((item: any) => item.month);
  //       const summaryLabels = budgetData.map((item: any) => {
  //         const monthNumber = parseInt(item.month);
  //         const monthName = new Date(
  //           Date.UTC(2000, monthNumber - 1)
  //         ).toLocaleString("en-US", { month: "short" });
  //         return monthName;
  //       });

  //       const summaryBudget = budgetData.map(
  //         (item: any) => item.allocatedMonthlyBudget
  //       );
  //       const summaryCost = budgetData.map((item: any) => item.cost);
  //       const totalBudget = summaryBudget.reduce(
  //         (accumulator: any, currentValue: any) =>
  //           accumulator + parseFloat(currentValue),
  //         0
  //       );
  //       const formattedBudget = totalBudget.toLocaleString(undefined, {
  //         maximumFractionDigits: 0,
  //       });

  //       setLabels(summaryLabels);
  //       setBudget(summaryBudget);
  //       setCost(summaryCost);
  //       setDefaultTotalBudget(formattedBudget);
  //     } else {
  //       setDefaultValues(); // Set default values if summaryData is empty
  //     }
  //   } catch (error) {
  //     console.error("Error fetching summary data:", error);
  //   }
  // };

  // const setDefaultValues = () => {
  //   const defaultLabels: React.SetStateAction<string[]> = [];
  //   const defaultBudget: React.SetStateAction<number[]> = [];
  //   const defaultCost: React.SetStateAction<number[]> = [];

  //   setLabels(defaultLabels);
  //   setBudget(defaultBudget);
  //   setCost(defaultCost);
  //   setDefaultTotalBudget(null);
  // };

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        data: TickedCount,
        borderColor: "rgb(9,180,180)",
        backgroundColor: "rgb(9,180,180,0.7)",
        pointBorderColor: "transparent", // Set the point border color
        pointBorderWith: 4, // Set the point radius
        tension: 0.5,
      },
      {
        fill: true,
        data: SelldTicket,
        borderColor: "rgb(109,78,233)",
        backgroundColor: "rgb(109,78,233,0.6)",
        pointBorderColor: "transparent", // Set the point border color
        pointBorderWith: 4, // Set the point radius
        tension: 0.4,
      },
    ],
  };

  return (
    <Card className={style.summaryCard}>
      <CardContent>
        <Box className={style.summaryCardTitle}>
          <Box>
            <Typography className={style.main}>Ticket Selling</Typography>
            <Typography className={style.sub}>
              {defaultTotalBudget} Tickets
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <CustomButton
              icon={
                <CalendarMonthIcon
                  sx={{ fontSize: "20px", color: "#bfbfbf" }}
                />
              }
              bgColor="#323232"
              text="2023"
              marginRight="20px"
              onClick={() => {}}
            />
          </Box>
        </Box>
        <Box
          sx={{
            maxHeight: { xs: "auto", md: "auto", lg: "11rem" },
            width: "100%",
          }}
        >
          <Line options={options} data={data} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default BudgetGraph;
