import {
  Line,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { useEffect, useState } from "react";
import axios from "axios";

export default function RechartsExample() {
  useEffect(() => {
    // para componentes funcionais
    axios
      .get(
        "https://raw.githubusercontent.com/alexanderboliva/test/main/api_example.json"
      )
      .then((response) => {
        console.log(response.data); // ou faça algo com os dados recebidos da API
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const data = [
    { name: "2017", react: 32, angular: 87, vue: 2 },
    { name: "2018", react: 62, angular: 47, vue: 20 },
    { name: "2019", react: 45, angular: 37, vue: 30 },
    { name: "2020", react: 62, angular: 24, vue: 40 },
    { name: "2021", react: 75, angular: 33, vue: 50 },
    { name: "2022", react: 99, angular: 5, vue: 60 },
  ];

  return (
    <div>
      <h1>RechartsExample</h1>
      <LineChart className="line-chart" width={600} height={300} data={data}>
        <CartesianGrid stroke="#e1e1e1" strokeDasharray="3 3" />
        <Line
          type="monotone"
          dataKey="react"
          stroke="#00e8e8"
          strokeWidth={1}
        />
        <Line
          type="monotone"
          dataKey="angular"
          stroke="#f32121"
          strokeWidth={1}
        />
        <Line type="monotone" dataKey="vue" stroke="#00e226" strokeWidth={1} />

        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
    </div>
  );
}
