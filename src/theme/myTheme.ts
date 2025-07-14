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
    position(point, params, dom, rect, size) {
      return [point[0], point[1] - size.contentSize[1]];
    },
    formatter(params) {
      return `
        <div style="font-weight:bold;margin-bottom:6px; font-size:12px; color:#1F2329">${params.name}</div>
        <div>
          <span style="display:inline-block;width:10px;height:10px;border-radius:50%;background-color:${params.color};margin-right:5px;"></span>
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
    itemWidth: 10,
    itemHeight: 10,
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
    tooltip: {
      show: true,
      formatter: function (name) {
        return `
        <div style="display: flex; align-items: center;">
          <span style="
            display:inline-block;
            width:10px;
            height:10px;
            margin-right:6px;
            background-color:#ccc;
            border-radius:2px;
          "></span>
          ${name}
        </div>`;
      },
    },
  },

  grid: {
    left: "24px",
    right: "24px",
    bottom: "24px",
    top: "24px",
    containLabel: true,
  },
  categoryAxis: {
    type: "category",
    axisTick: { show: false },
    axisLine: {
      lineStyle: { color: "#1F232950", type: "solid", width: 1 },
    },
    axisLabel: { color: "#8F959E", fontSize: 12 },
  },
  valueAxis: {
    type: "value",
    axisLabel: { color: "#646A73", fontSize: 12 },
    splitLine: {
      lineStyle: { color: "#1F23291A", type: "dashed", width: 1 },
    },
  },
  dataZoom: [
    {
      type: "slider",
      show: true,
      start: 0,
      end: 100,
      backgroundColor: "rgba(245, 245, 245, 0.8)",
      borderColor: "#ddd",
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
      type: "line",
      itemStyle: { color: "#4E83FD" },
      lineStyle: { width: 2 },
      showSymbol: false,
    },
    {
      type: "bar",
      itemStyle: { borderRadius: [2, 2, 0, 0] },
      barGap: "20%",
    },
    {
      type: "wordCloud",
      sizeRange: [16, 48],
      rotationRange: [0, 0],
      textStyle: {
        fontFamily: "Arial, sans-serif",
        fontSize: 14,
      },
      emphasis: {
        textStyle: {
          fontSize: 1.2,
          fontWeight: "bold",
        },
      },
      gridSize: 6,
      shape: "cardioid",
      layoutAnimation: true,
    },
    {
      type: "pie",
      itemStyle: {
        borderRadius: 4,
        borderColor: "#FFFFFF",
        borderWidth: 3,
      },
      label: {
        show: true,
        position: "outside",
        formatter: "{b}: {d}%",
        fontSize: 12,
      },
      labelLine: {
        show: true,
        length: 20,
        smooth: true,
      },
      center: ["50%", "50%"],
      radius: "60%",
    },
    {
      type: "funnel",
      tooltip: {
        show: true,
        backgroundColor: "rgba(255,255,255,0.9)",
        borderColor: "#E6E6E6",
        borderWidth: 1,
        textStyle: { color: "#333" },
        padding: [10, 15],
        formatter(params) {
          return `${params.name}<br/>数量：${params.value}<br/>转化率：${params.percent}%`;
        },
      },
      label: {
        color: "#333",
        fontSize: 12,
        position: "inside",
        formatter: "{b}\n{c}",
      },
      itemStyle: {
        borderRadius: [8, 8, 0, 0],
        borderColor: "#fff",
        borderWidth: 2,
      },
      emphasis: { itemStyle: { opacity: 0.9 } },
    },
    {
      type: "scatter",
      itemStyle: {
        opacity: 0.8,
        borderWidth: 1,
        borderColor: "transparent",
      },
      symbol: "circle",
      symbolSize: 8,
    },
    {
      type: "radar",
      axisLine: {
        lineStyle: { color: "#E9E9EA", width: 1 },
      },
      splitLine: {
        lineStyle: { color: "#E9E9EA", width: 1 },
      },
      splitArea: {
        areaStyle: { color: "transparent" },
      },
      lineStyle: { width: 2.5 },
      itemStyle: {
        borderWidth: 2,
      },
    },
    {
      type: "heatmap",
      itemStyle: {
        borderColor: "#fff",
        borderWidth: 1,
        borderRadius: 2,
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 4,
          shadowColor: "rgba(0,0,0,0.1)",
          borderColor: "#4E83FD",
          borderWidth: 2,
        },
      },
    },
    {
      type: "ring",
      radius: ["40%", "70%"],
      center: ["50%", "50%"],
    },
    {
      type: "area",
      areaStyle: {
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: "#4E83FD" },
            { offset: 1, color: `#50CEFB80` },
          ],
        },
      },
    },
    {
      type: "waterfall",
      itemStyle: {
        borderRadius: [4, 4, 0, 0],
      },
      label: {
        show: true,
        position: "top",
        fontSize: 12,
      },
    },
    {
      type: "stackedArea",
      stack: "total",
    },
    {
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
        fontSize: 14,
        color: "#333333",
      },
    },
    {
      type: "progress",
      itemStyle: {
        color: "#4E83FD",
      },
    },
    {
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
      },
      colorVariants: baseColors,
    },
  ],
};

registerTheme("customTheme", customTheme);

export default customTheme;
