import React, { useEffect, useMemo, useRef, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
// import style from "./RequestSummaryChart.scss"
import style from "./SummaryChart.module.scss";
import {
  Box,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// import { ApplicationStateDto } from "../../../utilities/models/state.model";
// import { lmSummaryActions } from "../../../redux/actions/lmsummary.action";
Chart.register(ArcElement, Tooltip, Legend);

//TODO SHOULD COME FROM API
const departmentName = " Knitting Department";

const SummaryChart = (props: any) => {
  const [reqData, setReqData] = useState<
    { pending: string; approved: string; rejected: string }[]
  >([{ pending: "2", approved: "2", rejected: "3" }]);
  const [totalRequests, setTotalRequests] = useState<number>(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const data = {
    labels: ["Active", "In Active", ],
    datasets: [
      {
        label: "No of Requests",
        data:[12,12],
        backgroundColor: [
          "rgb(254,206,37)", // Yellow for Pending
          "rgb(105,211,153)", // Green for Approved
          "rgb(242,92,129)", // Pink for Rejected
        ],
        borderColor: [
          "rgb(254,206,37)", // Yellow for Pending
          "rgb(105,211,153)", // Green for Approved
          "rgb(242,92,129)", // Pink for Rejected
        ],
        borderWidth: 1,
      },
    ],
  };

  const getTotal = (data: any) => {
    return data.datasets[0].data.reduce(
      (sum: any, value: any) => sum + value,
      0
    );
  };

  useEffect(() => {
    setReqData(props.summaryChartData);
    const updatedTotal = getTotal(data);
    setTotalRequests(updatedTotal);
  }, [props, data]);

  // Rest of the code...

  const options = {
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        enabled: true, // Disable the tooltip
      },
      datalabels: {
        display: false, // Hide the label details
      },
    },
    elements: {
      arc: {
        borderWidth: 150,
        //  (context: { dataIndex: number; }) => {
        //   return context.dataIndex === 2 ? 0 : 120;
        // },
        borderRadius: (context: { dataIndex: number }) => {
          // Set the border radius based on the label index
          return context.dataIndex === 2 ? 0 : 0;
        },
      },
    },
    maintainAspectRatio: true, // Disable aspect ratio to allow a complete circle
    cutout: 50, // Set the cutout value to 0 for a complete circle
  };

  const [textConfig, setTextConfig] = useState({
    text: ["Total", `${totalRequests}`],
    font: {
      family: "Arial",
      size: 10,
      weight: "bold",
    },
    color: "#ffff",
    textAlign: "center",
    position: "center",
    textBaseline: "middle",
    x: 0, // Adjust the x-coordinate for horizontal alignment
    y: -5, // Adjust the y-coordinate for vertical alignment
  });

  const textConfigRef = useRef(textConfig);

  useEffect(() => {
    textConfigRef.current = textConfig;
  }, [textConfig]);

  const plugins = useMemo(() => {
    return [
      {
        id: "textPlugin",
        beforeDraw: (chart: any) => {
          const ctx = chart.ctx;
          const chartArea = chart.chartArea;
          ctx.save();
          ctx.font = `${textConfigRef.current.font.weight} ${textConfigRef.current.font.size}px ${textConfigRef.current.font.family}`;
          ctx.textAlign = textConfigRef.current.textAlign;
          ctx.textBaseline = textConfigRef.current.textBaseline;
          ctx.fillStyle = textConfigRef.current.color;

          const lines = Array.isArray(textConfigRef.current.text)
            ? textConfigRef.current.text
            : [textConfigRef.current.text];
          const lineHeight = textConfigRef.current.font.size + 2;
          const totalHeight = lineHeight * lines.length;

          const x =
            (chartArea.left + chartArea.right) / 2 + textConfigRef.current.x;
          const y =
            (chartArea.top + chartArea.bottom) / 2 + textConfigRef.current.y;

          lines.forEach((line: any, index: any) => {
            ctx.fillText(line, x, y + lineHeight * index);
          });

          ctx.restore();
        },
      },
    ];
  }, []);

  useEffect(() => {
    setTextConfig((prevTextConfig) => ({
      ...prevTextConfig,
      text: ["Total", `${totalRequests}`],
    }));
  }, [totalRequests]);

  return (
    <Card className={style.summaryCard}>
      <CardContent>
        <Box className={style.summaryCardTitle}>
          <Box>
            <Typography className={style.main}>Travellor Summary</Typography>
            <Typography className={style.sub}>
              
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box></Box>
        </Box>
        <>
          <Box className={style.CardBox}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box className={style.listbox}>
                <List>
                  {data.labels.map((label, index) => (
                    <ListItem key={index}>
                      <ListItemText>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Box
                            sx={{
                              width: "12px",
                              height: "12px",
                              backgroundColor:
                                data.datasets[0].backgroundColor[index],
                              marginRight: "5px",
                            }}
                          />
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              width: "100%",
                            }}
                          >
                            <Typography
                              sx={{ color: "#ffff", fontSize: "0.8rem" }}
                            >
                              {`${label} (${(
                                (data.datasets[0].data[index] / totalRequests) *
                                100
                              ).toFixed(2)}%): `}{" "}
                            </Typography>
                            <Typography
                              sx={{
                                color: "#ffff",
                                paddingLeft: "3rem ",
                                fontSize: "0.8rem",
                              }}
                            >
                              {data.datasets[0].data[index]}
                            </Typography>
                          </Box>
                        </Box>
                      </ListItemText>
                    </ListItem>
                  ))}
                </List>
              </Box>

              <Box
                sx={{ display: "flex", height: "10rem", marginTop: "0.3rem" }}
              >
                <Doughnut data={data} options={options} plugins={plugins} />
              </Box>
            </Box>
          </Box>
        </>
      </CardContent>
    </Card>
  );
};

export default SummaryChart;
