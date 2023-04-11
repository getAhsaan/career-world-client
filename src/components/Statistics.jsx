import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    name: "A1",
    Marks: 60,
  },
  {
    name: "A2",
    Marks: 60,
  },
  {
    name: "A3",
    Marks: 60,
  },
  {
    name: "A4",
    Marks: 60,
  },
  {
    name: "A5",
    Marks: 42,
  },
  {
    name: "A6",
    Marks: 60,
  },
  {
    name: "A7",
    Marks: 60,
  },
];

export default function Statistics() {
  return (
    <div className="mt-16">
      <h2 className="text-center font-bold text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
        Assignment Chart
      </h2>
      <div className="text-center flex justify-center mt-8">
        <ResponsiveContainer
          width="95%"
          height={400}
        >
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="Marks"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
