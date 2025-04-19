import React from "react";
import { useLoaderData } from "react-router";
import SingleChartData from "./SingleChartData";

const PageToRead = () => {
  const data = useLoaderData();

  return (
    <div>
      <SingleChartData data={data}></SingleChartData>
    </div>
  );
};

export default PageToRead;
