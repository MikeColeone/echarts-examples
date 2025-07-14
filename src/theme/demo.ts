// 定义一套主题
const customTheme = {
  backgroundColor: "#ffffff",
  title: {
    textStyle: { color: "#333333", fontSize: 13, fontWeight: 500 },
    subtextStyle: { color: "#333333", fontSize: 12 },
  },
  textStyle: {
    color: "#333333",
    fontSize: 12,
    fontFamily: "Source Han Sans CN,Arial,Microsoft Yahei",
  },
  tooltip: {
    borderWidth: 0,
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    textStyle: { fontSize: 12, color: "#333333" },
    axisPointer: {
      lineStyle: { color: "rgba(51,51,51,0.07)", type: "dotted" },
      type: "line",
      z: 10,
    },
    borderRadius: 2,
    extraCssText: "box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);",
  },
  legend: {
    type: "scroll",
    pageIconColor: "#333333",
    pageIconSize: 12,
    pageTextStyle: { color: "#333333", height: 10 },
    itemWidth: 10,
    itemHeight: 10,
    itemGap: 24,
    textStyle: {
      color: "#333333",
      fontSize: 12,
      lineHeight: 12,
      height: 16,
      rich: { a: { verticalAlign: "middle" } },
      padding: [4, 0, 0, 0],
    },
    pageIconInactiveColor: "rgba(51, 51, 51, 0.3)",
  },
  axisPointer: { link: { xAxisIndex: "all" } },
  // valueAxis 表示坐标轴type为value（数值轴）的样式
  valueAxis: {
    axisLine: { lineStyle: { color: "rgba(51,51,51,0.12)" } },
    axisLabel: { color: "#333333" },
    splitLine: { lineStyle: { color: "rgba(51,51,51,0.07)", type: "dotted" } },
    nameTextStyle: { lineHeight: 30, color: "rgba(51, 51, 51, 0.45)" },
  },
  // timeAxis 表示坐标轴type为time（时间轴）的样式
  timeAxis: {
    axisLine: { lineStyle: { color: "rgba(51,51,51,0.12)" } },
    axisLabel: { color: "#333333" },
    splitLine: { lineStyle: { color: "rgba(51,51,51,0.07)", type: "dotted" } },
    nameTextStyle: { lineHeight: 30, color: "rgba(51, 51, 51, 0.45)" },
  },
  // categoryAxis 表示坐标轴type为category（类目轴）的样式
  categoryAxis: {
    axisLine: { lineStyle: { color: "rgba(51,51,51,0.12)" } },
    axisLabel: { color: "#333333" },
    splitLine: { lineStyle: { color: "rgba(51,51,51,0.07)", type: "dotted" } },
    nameTextStyle: { lineHeight: 30, color: "rgba(51, 51, 51, 0.45)" },
  },
  // logAxis 表示坐标轴type为log（对数轴）的样式
  logAxis: {
    axisLine: { lineStyle: { color: "rgba(51,51,51,0.12)" } },
    axisLabel: { color: "#333333" },
    splitLine: { lineStyle: { color: "rgba(51,51,51,0.07)", type: "dotted" } },
    nameTextStyle: { lineHeight: 30, color: "rgba(51, 51, 51, 0.45)" },
  },
};
