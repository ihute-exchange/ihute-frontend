import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Rectangle,
} from "recharts";
import Money from "../utils/Money";

function Statistics() {
  const customValues = [
    { in: 1240.20, out: 1200 }, // For today
    { in: 2430, out: 1024.42 }, // For yesterday
    { in: 2420, out: 1042. }, // For 3days ago
    { in: 1033, out: 2822.30 }, // For 4days ago
    { in: 2605, out: 3202.34 }, // For 5days ago
    { in: 3345, out: 1032 }, // For 6days ago
    { in: 2502.43, out: 1024.23 }, // For 7days ago
  ];
  const getLastTenDays = () => {
    const today = new Date();
    const days = [];

  

    for (let i = 0; i < customValues.length; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);

      // Get custom values for 'in' and 'out'
      const { in: incomeValue, out: expenseValue } = customValues[i];

      days.push({
        date: date.toLocaleDateString("en-US"), // Format the date
        in: incomeValue, // Manual income value
        out: expenseValue, // Manual expense value
      });
    }

    return days;
  };

  const income = getLastTenDays();

  const RoundedBar = (props) => {
    const { x, y, width, height, fill } = props;
    const radius = 7;
    return (
      <Rectangle
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
        radius={radius}
      />
    );
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const date = new Date(payload[0].payload.date);
      const options = { day: "numeric", month: "short", year: "numeric" };
      const formattedDate = date.toLocaleDateString("en-US", options);

      return (
        <div
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <p className="text-sm pb-1 font-medium text-lightBlackText/70">
            On {formattedDate}
          </p>
          <p className="text-sm flex items-center justify-start gap-1 pb-1">
            <div className="h-[20px] w-[4px] rounded-md bg-[#026fc7]"></div>
            <div>
              Recieved:{" "}
              <span className="font-semibold">{`$${Money(payload[0].value)}`}</span>
            </div>
          </p>
          <p className="text-sm flex items-center justify-start gap-1 pb-1">
            <div className="h-[20px] w-[4px] rounded-md bg-[#dff976]"></div>
            <div>
              Sent:{" "}
              <span className="font-semibold">{`$${Money(payload[1].value)}`}</span>
            </div>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-fit">
      <ResponsiveContainer width="100%" height={165}>
        <BarChart
          data={income}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          barCategoryGap="0%"
          barSize={40}
        >
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis
            dataKey="date"
            tickFormatter={(date) => {
              const today = new Date();
              const dateObj = new Date(date);
              const options = { weekday: "long" };

              // Check if the date is today or yesterday
              if (dateObj.toDateString() === today.toDateString()) {
                return "Today";
              } else if (
                dateObj.toDateString() ===
                new Date(today.setDate(today.getDate() - 1)).toDateString()
              ) {
                return "Yesterday";
              } else {
                // For other days, return the full weekday name
                return dateObj.toLocaleDateString("en-US", options);
              }
            }}
          />
          <Tooltip content={<CustomTooltip />} cursor={{fill: '#aaaaaa20'}} />
          <Bar
            dataKey="out"
            stackId="a"
            fill="#026fc7"
            shape={<RoundedBar />}
          />
          <Bar dataKey="in" stackId="a" fill="#dff976" shape={<RoundedBar />} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Statistics;
