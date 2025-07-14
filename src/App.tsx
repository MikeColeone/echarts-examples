import React from "react";
import EChartsComponent from "./components/ChartComponent";
import customTheme from "./theme/myTheme";

const App: React.FC = () => {
  const barChartOption = {
    legend: {
      data: ["产品A", "产品B", "产品C"],
    },
    tooltip: { show: true },
    legend: {
      tooltip: {
        show: true,
      },
      bottom: 0,
    },
    xAxis: {
      type: "category",
      data: ["1月", "2月", "3月", "4月", "5月", "6月"],
    },
    yAxis: {
      type: "value",
      name: "销售额(万元)",
    },
    series: [
      {
        type: "bar",
        data: [120, 190, 150, 230, 180, 290],
        name: "产品A",
      },
      {
        type: "bar",
        data: [90, 150, 130, 200, 160, 250],
        name: "产品B",
      },
      {
        type: "bar",
        data: [70, 130, 30, 290, 190, 90],
        name: "产品C",
      },
    ],
  };

  //平滑折线图
  const lineChartOption = {
    title: { text: "用户增长趋势" },
    xAxis: {
      type: "category",
      data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
    },
    yAxis: { type: "value", name: "新增用户" },
    series: [
      {
        type: "line",
        data: [1200, 1900, 1500, 2400, 2100, 3200, 3600],
        smooth: true,
      },
    ],
  };

  //饼图配置
  const pieChartOption = {
    color: customTheme.color,
    title: { text: "用户分布统计", subtext: "2024年数据" },
    // tooltip: { trigger: "item" },
    series: [
      {
        type: "pie",
        data: [
          { name: "A", value: 300 },
          { name: "B", value: 400 },
          { name: "C", value: 500 },
          { name: "D", value: 300 },
          { name: "E", value: 400 },
          { name: "F", value: 500 },
        ],
      },
    ],
  };
  //层叠柱状图
  const barStackChartOption = {
    // color: customTheme.color,
    xAxis: {
      type: "category",
      data: ["1月", "2月", "3月", "4月", "5月", "6月"],
    },
    yAxis: {
      type: "value",
      name: "销售额(万元)",
      min: 0,
    },
    barWidth: 40,

    series: [
      {
        type: "bar",
        data: [120, 190, 150, 230, 180, 290],
        name: "产品A",
        stack: "total",
      },
      {
        type: "bar",
        data: [90, 150, 130, 200, 160, 250],
        name: "产品B",
        stack: "total",
      },
      {
        type: "bar",
        data: [70, 130, 30, 290, 190, 90],
        name: "产品C",
        stack: "total",
        itemStyle: {
          borderRadius: [4, 4, 0, 0],
        },
      },
    ],
  };

  //环图配置
  const ringChartOption = {
    color: customTheme.color,
    title: { text: "用户分布统计", subtext: "2024年数据" },
    tooltip: { trigger: "item" },
    series: [
      {
        type: "pie",
        radius: ["40%", "70%"],
        center: ["50%", "50%"],
        data: [
          { name: "A", value: 300 },
          { name: "B", value: 400 },
          { name: "C", value: 500 },
          { name: "D", value: 300 },
          { name: "E", value: 400 },
          { name: "F", value: 500 },
        ],
      },
    ],
  };

  // 普通折线图
  const lineChartOptionNormal = {
    legend: {},
    title: { text: "用户增长趋势" },
    xAxis: {
      type: "category",
      data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
    },
    yAxis: { type: "value", name: "新增用户" },
    series: [
      {
        type: "line",
        data: [1200, 1900, 1500, 2400, 2100, 3200, 3600],
      },
      {
        type: "line",
        data: [1100, 900, 1900, 1400, 1100, 2200, 1600],
      },
    ],
  };

  //面积图
  const areaChartOption = {
    color: customTheme.color,
    title: { text: "用户增长趋势" },
    tooltip: { trigger: "axis" },
    xAxis: {
      type: "category",
      data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
    },
    yAxis: { type: "value", name: "新增用户" },
    series: [
      {
        type: "line",
        data: [1200, 1900, 1500, 2400, 2100, 3200, 3600],
        areaStyle: customTheme?.area?.areaStyle || {},
      },
    ],
  };

  //堆叠面积图
  const stackedAreaChartOption = {
    color: customTheme.color,
    title: { text: "用户增长趋势" },
    tooltip: { trigger: "axis" },
    xAxis: {
      type: "category",
      data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
    },
    yAxis: { type: "value", name: "新增用户" },
    series: [
      {
        type: "line",
        //多组数据
        data: [1200, 1900, 1500, 2400, 2100, 3200, 3600],
        //多组数据配置
        stackedArea: customTheme?.stackedArea || {},
        areaStyle: customTheme?.area?.areaStyle || {},
      },
      {
        type: "line",
        data: [1000, 1900, 1000, 1400, 2000, 2200, 1600],
        areaStyle: customTheme?.area?.areaStyle || {},
      },
    ],
  };

  //组合图
  const combinedChartOption = {
    color: customTheme.color,
    title: { text: "用户增长趋势" },
    tooltip: { trigger: "axis" },
    xAxis: {
      type: "category",
      data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
    },
    yAxis: { type: "value", name: "新增用户" },
    series: [
      {
        type: "line",
        data: [1200, 1900, 1500, 2400, 2100, 3200, 3600],
      },
      {
        type: "line",
        data: [1000, 1900, 1000, 1400, 2000, 2200, 1600],
      },
      {
        type: "line",
        data: [1000, 1900, 1000, 1400, 2000, 2200, 1600],
      },
      {
        type: "bar",
        data: [120, 190, 150, 230, 180, 290],
        name: "产品A",
      },
      {
        type: "bar",
        data: [90, 150, 130, 200, 160, 250],
        name: "产品B",
      },
      {
        type: "bar",
        data: [70, 130, 30, 290, 190, 90],
        name: "产品C",
      },
    ],
  };

  //漏斗图
  const funnelChartOption = {
    // color: customTheme?.color || [],
    title: { text: "用户增长趋势" },
    tooltip: { trigger: "axis" },
    xAxis: {
      type: "category",
      data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
    },
    yAxis: { type: "value", name: "新增用户" },
    series: [
      {
        type: "funnel",
        data: [
          { value: 1200, name: "周一" },
          { value: 1900, name: "周二" },
          { value: 1500, name: "周三" },
          { value: 2400, name: "周四" },
          { value: 2100, name: "周五" },
          { value: 3200, name: "周六" },
          { value: 3600, name: "周日" },
        ],
      },
    ],
  };

  //进度图
  const progressChartOption = {
    xAxis: {
      type: "value",
      max: 100,
      show: false,
    },
    yAxis: {
      type: "category",
      data: ["进度"],
      show: false,
    },
    series: [
      {
        type: "bar",
        data: [10],
        barWidth: "30px",
        showBackground: true,
        backgroundStyle: {
          color: "#EFF0F1",
        },
        label: {
          show: true,
          position: "right",
          formatter: "{c}%",
        },
      },
    ],
  };

  //指标卡

  //雷达图
  const radarChartOption = {
    radar: {
      indicator: [
        { name: "指标1", max: 100 },
        { name: "指标2", max: 100 },
        { name: "指标3", max: 100 },
        { name: "指标4", max: 100 },
        { name: "指标5", max: 100 },
      ],
    },
    series: [
      {
        type: "radar",
        data: [
          {
            value: [80, 90, 70, 50, 40],
            name: "项目1",
          },
          {
            value: [40, 60, 90, 80, 70],
            name: "项目2",
          },
        ],
      },
    ],
  };

  //散点图

  //瀑布图
  const waterfallChartOption = {
    xAxis: { type: "category", data: ["收入", "成本", "利润"] },
    yAxis: { type: "value" },
    series: [
      {
        type: "bar",
        data: [{ value: 4000 }, { value: -2000 }, { value: 2000 }],
        stack: "total",
        barWidth: 40,
        itemStyle: { borderRadius: [4, 4, 0, 0] },
      },
    ],
  };

  // 词云
  const wordCloudChartOption = {
    tooltip: { show: true },
    series: [
      {
        type: "wordCloud",

        data: [
          { name: "北京", value: 100 },
          { name: "上海", value: 90 },
          { name: "广州", value: 80 },
          { name: "深圳", value: 70 },
          { name: "杭州", value: 60 },
          { name: "成都", value: 50 },
          { name: "武汉", value: 40 },
          { name: "重庆", value: 30 },
          { name: "南京", value: 20 },
          { name: "西安", value: 10 },
          { name: "北京", value: 100 },
          { name: "上海", value: 90 },
          { name: "广州", value: 80 },
          { name: "深圳", value: 70 },
          { name: "杭州", value: 60 },
          { name: "成都", value: 50 },
          { name: "武汉", value: 40 },
          { name: "重庆", value: 30 },
          { name: "南京", value: 20 },
          { name: "西安", value: 10 },
        ],
      },
    ],
  };

  //热力图
  const heatmapChartOption = {
    ...(customTheme.heatmap || {}),
    xAxis: { type: "category", data: ["收入", "成本", "利润"] },
    yAxis: { type: "value" },
    series: [
      {
        type: "bar",

        data: [{ value: 4000 }, { value: -2000 }, { value: 2000 }],
        stack: "total",
        itemStyle: { borderRadius: [4, 4, 0, 0] },
      },
    ],
  };
  return (
    <div
      style={{
        padding: "30px",
        maxWidth: "1500px",
        margin: "0 auto",
        display: "flex",
        flexWrap: "wrap",
        gap: "50px",
      }}
    >
      <div style={{ width: "611px", height: "420px" }}>
        <h2>柱状图</h2>
        <EChartsComponent option={barChartOption as any} height={400} />
      </div>
      <div style={{ width: "611px", height: "400px" }}>
        <h2>平滑折线面积图</h2>
        <EChartsComponent option={lineChartOption as any} height={400} />
      </div>
      <div style={{ width: "611px", height: "400px" }}>
        <h2>饼图</h2>
        <EChartsComponent option={pieChartOption as any} height={400} />
      </div>
      <div style={{ width: "611px", height: "400px" }}>
        <h2>环图</h2>
        <EChartsComponent option={ringChartOption as any} height={400} />
      </div>
      <div style={{ width: "611px", height: "400px" }}>
        <h2>普通折线图</h2>
        <EChartsComponent option={lineChartOptionNormal as any} height={400} />
      </div>
      <div style={{ width: "611px", height: "400px" }}>
        <h2>面积图</h2>
        <EChartsComponent option={areaChartOption as any} height={400} />
      </div>
      <div style={{ width: "611px", height: "400px" }}>
        <h2>堆叠面积图</h2>
        <EChartsComponent option={stackedAreaChartOption as any} height={400} />
      </div>
      <div style={{ width: "611px", height: "400px" }}>
        <h2>组合图</h2>
        <EChartsComponent option={combinedChartOption as any} height={400} />
      </div>
      <div style={{ width: "611px", height: "400px" }}>
        <h2>漏斗图</h2>
        <EChartsComponent option={funnelChartOption as any} height={400} />
      </div>
      <div style={{ width: "611px", height: "400px" }}>
        <h2>进度图</h2>
        <EChartsComponent option={progressChartOption as any} height={400} />
      </div>
      <div style={{ width: "611px", height: "400px" }}>
        <h2>层叠柱状图</h2>
        <EChartsComponent option={barStackChartOption as any} height={400} />
      </div>
      <div style={{ width: "611px", height: "400px" }}>
        <h2>雷达图</h2>
        <EChartsComponent option={radarChartOption as any} height={400} />
      </div>
      <div style={{ width: "611px", height: "400px" }}>
        <h2>瀑布图</h2>
        <EChartsComponent option={waterfallChartOption as any} height={400} />
      </div>
      <div style={{ width: "611px", height: "400px" }}>
        <h2>词云图</h2>
        <EChartsComponent option={wordCloudChartOption as any} height={400} />
      </div>

      <div style={{ width: "611px", height: "400px" }}>
        <h2>热力图</h2>
        <EChartsComponent option={heatmapChartOption as any} height={400} />
      </div>
    </div>
  );
};

export default App;
