import { registerTheme } from "echarts";

const baseColors = [
  "#4E83FD",
  "#50CEFB",
  "#935AF6",
  "#F76964",
  "#FAD355",
  "#37A2DA",
  "#32C5E9",
  "#67E0E3",
];
// const position = {
//   function(point, params, dom, rect, size) {
//     return [point[0], point[1] - size.contentSize[1]];
//   },
// };
const customTheme = {
  color: baseColors,
  backgroundColor: "#FFFFFF",
  title: {
    textStyle: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#1F2329",
    },
    subtextStyle: {
      fontSize: 12,
      color: "#646A73",
    },
    left: "center",
    top: 20,
  },
  tooltip: {
    show: true,
    position: function (point, params, dom, rect, size) {
      return [point[0], point[1] - size.contentSize[1]];
    },
    formatter: function (params) {
      console.log(params);
      return `
        <div style="font-weight:bold;margin-bottom:6px; font-size:12px; font-color:#1F2329">${params.name}</div>
        <div>
          <span style="display:inline-block;width:10px;height:10px;border-radius:50%;background-color:${params.color};margin-right:5px;font-color:"#646A73"></span>
          ${params.seriesName}: ${params.value}
        </div>
      `;
    },
  },
  legend: {
    bottom: 0,
    icon: "rect",
    itemGap: 16,
    height: 16,
    formatter: function (name) {
      return name.length > 8 ? name.substring(0, 8) + "..." : name;
    },
    type: "scroll",
    pageButtonItemGap: 5,
    pageButtonPosition: "end",
    pageFormatter: "{current}/{total}",
    pageIconColor: "#333",
    pageIconInactiveColor: "#aaa",
    pageTextStyle: { color: "#666" },
    left: "center",
    orient: "horizontal",
    textStyle: {
      color: "#646A73",
      fontSize: 12,
    },
  },
  grid: {
    left: "24px",
    right: "24px",
    bottom: "24px",
    top: "24px",
    containLabel: true,
  },
  valueAxis: {
    type: "value",
    axisLabel: { color: "#646A73", fontSize: 12 },
    splitLine: {
      lineStyle: { color: "#1F23291A", type: "dashed", lineWidth: 1 },
    },
  },
  categoryAxis: {
    type: "category",
    axisTick: { show: false },
    axisLine: {
      lineStyle: { color: "#1F232950", type: "solid", lineWidth: 1 },
    },
    axisLabel: { color: "#8F959E", fontSize: 12 },
    tooltip: {
      formatter: function (params) {
        console.log(params);
        return `
        <div style="font-weight:bold;margin-bottom:12px;margin-top:10px font-size:12px; font-color:#1F2329">${params.name}</div>
        <div>
          <span style="display:inline-block;width:10px;height:10px;border-radius:50%;background-color:${params.color};margin-right:5px;font-color:"#646A73"></span>
          ${params.seriesName}: ${params.value}
        </div>
      `;
      },
    },
  },
  dataZoom: [
    {
      type: "slider",
      xAxisIndex: 0,
      show: true,
      start: 0,
      end: 100,
      backgroundColor: "rgba(245, 245, 245, 0.8)",
      borderColor: "#ddd", // 边框颜色
      fillerColor: "rgba(167, 190, 211, 0.5)",
      handleStyle: {
        color: "#fff",
        borderColor: "#888",
        shadowBlur: 2,
        shadowColor: "rgba(0, 0, 0, 0.3)",
      },
    },
  ],
  series: [
    {
      // 折线图配置
      type: "line",
      color: "black",
      itemStyle: {
        color: "#4E83FD",
      },
      lineStyle: {
        width: 2,
      },
      showSymbol: false,
      emphasis: {},
    },
    {
      //柱状图配置
      type: "bar",
      itemStyle: {
        borderRadius: [2, 2, 0, 0],
      },
      barGap: "20%",
    },
    {
      //词云
      type: "wordCloud",
      // itemStyle: {
      //   color: ["#1C4CBA", "#245BDB", "#3370FF", "#82A7FC"],
      // },
      sizeRange: [16, 48], // 词大小范围
      rotationRange: [0, 0],
      textStyle: {
        fontFamily: "Arial, sans-serif",
        fontWeight: "normal",
        fontSize: 14,
      },
      emphasis: {
        textStyle: {
          fontSize: 1.2,
          fontWeight: "bold",
          // shadowBlur: 10,
          // shadowColor: "rgba(0, 0, 0, 0.3)",
        },
      },
      // 词云布局配置
      gridSize: 6,
      drawOutOfBound: false,
      shape: "cardioid",
      layoutAnimation: true,
    },
    {
      //饼图
      type: "pie",
      color: ["#F76964", "#FAD355", "#37A2DA", "#32C5E9", "#67E0E3"],
      itemStyle: {
        borderRadius: 4,
        borderColor: "#FFFFFF",
        borderWidth: 3,
        // border: 1,
      },
      label: {
        show: true,
        position: "outside",
        formatter: "{b}: {d}%",
        color: ["#F76964", "#FAD355", "#37A2DA", "#32C5E9", "#67E0E3"],
        fontSize: 12,
      },
      labelLine: {
        show: true,
        length: 20,
        width: 1,
        smooth: true,
      },
      center: ["50%", "50%"],
      radius: "60%",
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)",
        borderWidth: 1,
        textStyle: { color: "#fff" },
      },
    },
    {
      // 漏斗图配置
      type: "funnel",
      color: ["#1C4CBA", "#245BDB", "#3370FF", "#4E83FD", "#82A7FC"],
      tooltip: {
        show: true,
        backgroundColor: "rgba(255,255,255,0.9)",
        borderColor: "#E6E6E6",
        borderWidth: 1,
        textStyle: { color: "#333" },
        padding: [10, 15],
        formatter: (params) =>
          `${params.name}<br/>数量：${params.value}<br/>转化率：${params.percent}%`,
      },

      label: { color: "#333", fontSize: 14 },
      itemStyle: {
        borderRadius: [8, 8, 0, 0],
        borderColor: "#fff",
        borderWidth: 2,
      },
      emphasis: { itemStyle: { opacity: 0.9 } },
    },
    {
      //散点图
      type: "scatter",
      itemStyle: {
        color: ["#4E83FD", "#50CEFB", "#935AF6", "#FAD355"],
        opacity: 0.8,
        borderWidth: 1,
        borderColor: "transparent",
      },
      symbol: "circle",
      symbolSize: 8,
      emphasis: {
        symbolSize: 18,
        itemStyle: {
          shadowBlur: 10,
          shadowColor: "rgba(0, 0, 0, 0.3)",
        },
      },
      xAxis: {
        splitLine: { show: true },
        axisLine: {
          lineStyle: {
            color: "#1F232926",
          },
        },
      },
    },
    {
      //雷达图
      type: "radar",
      axisLine: {
        lineStyle: {
          color: "#E9E9EA",
          width: 1,
        },
      },
      splitLine: {
        lineStyle: {
          color: "#E9E9EA",
          width: 1,
        },
      },
      splitArea: {
        areaStyle: {
          color: "transparent",
        },
      },
      lineStyle: {
        width: 2.5,
      },
      itemStyle: {
        color: function (params) {
          const colors = ["#4E83FD", "#50CEFB", "#935AF6"];
          return colors[params.seriesIndex % colors.length];
        },
        borderWidth: 2,
      },
      areaStyle: {
        color: function (params) {
          const colors = ["#935AF6", "#4E83FD", "#935AF680"];
          return colors[params.seriesIndex % colors.length];
        },
      },
    },
    {
      //矩阵表
      type: "heatmap",
      itemStyle: {
        borderColor: "#fff",
        borderWidth: 1,
        borderRadius: 2,
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: "#f0f7ff" },
            { offset: 1, color: "#4E83FD" },
          ],
        },
      },
      textStyle: {
        fontSize: 12,
        color: "#333",
        fontWeight: "normal",
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 4,
          shadowColor: "rgba(0,0,0,0.1)",
          borderColor: "#4E83FD",
          borderWidth: 2,
        },
      },
      header: {
        itemStyle: {
          color: "#f5f7fa",
          borderColor: "#e8e8e8",
          borderWidth: 1,
        },
        textStyle: {
          fontWeight: "bold",
          color: "#646A73",
        },
      },
    },
    {
      //环形图
      type: "ring",
      color: ["#F76964", "#FAD355", "#37A2DA", "#32C5E9", "#67E0E3"],
      radius: ["40%", "70%"],
      center: ["50%", "50%"],
      graphic: [
        {
          type: "text",
          left: "center",
          top: "45%",
          style: {
            text: "实际值",
            fontSize: 14,
            fill: "#646A73",
            fontWeight: "normal",
          },
        },
        {
          type: "text",
          left: "center",
          top: "55%",
          style: {
            text: "6820",
            fontSize: 24,
            fill: "#333",
            fontWeight: "bold",
          },
        },
      ],
    },
    {
      // 面积图配置
      type: "area",
      areaStyle: {
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "#4E83FD",
            },
            {
              offset: 1,
              color: `#50CEFB80`,
            },
          ],
        },
      },
    },
    {
      //瀑布图
      type: "waterfall",
      itemStyle: {
        color: function (params) {
          const colors = ["#F76964", "#34C724", "#4E83FD"];
          return colors[params.seriesIndex % colors.length];
        },
        borderRadius: [4, 4, 0, 0],
      },
      label: {
        show: true,
        position: "top",
        fontSize: 12,
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 8,
          shadowColor: "rgba(0, 0, 0, 0.2)",
        },
      },
    },
    {
      type: "stackedArea",
      stack: "total",
    },
    {
      //横向漏斗图
      type: "horizontalFunnel",
      orient: "horizontal",
      left: "10%",
      right: "15%",
      top: "center",
      bottom: "40%",
      height: "60%",
      label: {
        show: true,
        position: "inside",
        textStyle: {
          fontFamily: "Arial, sans-serif",
          fontSize: 14,
          color: "#333333",
        },
      },
    },
    {
      type: "progress",
      itemStyle: {
        color: "#4E83FD",
      },
    },
    {
      //指标卡
      type: "indicator",
      containerStyle: {
        backgroundColor: "#fff",
        borderRadius: 8,
        border: "1px solid #e8e8e8",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
        padding: "16px",
        width: "100%",
        boxSizing: "border-box",
      },
      titleStyle: {
        fontSize: 14,
        color: "#646A73",
        marginBottom: 4,
        fontWeight: "normal",
      },
      subTitleStyle: {
        fontSize: 12,
        color: "#9CA3AF",
        marginBottom: 8,
      },
      valueStyle: {
        fontSize: 24,
        color: "#333",
        fontWeight: "bold",
        lineHeight: 1.2,
      },
      colorVariants: baseColors,
    },
  ],

  // 图形元素配置
  graphic: {
    elements: [
      {
        type: "text",
        style: {
          fontSize: 14,
          fill: "#646A73",
          fontWeight: "normal",
        },
      },
      {
        type: "text",
        style: {
          fontSize: 24,
          fill: "#333",
          fontWeight: "bold",
        },
      },
    ],
  },
};

registerTheme("customTheme", customTheme);

export default customTheme;
