// ECharts自定义主题配置
const customTheme = {
  color: [
    "#37A2DA",
    "#32C5E9",
    "#67E0E3",
    "#9FE6B8",
    "#FFDB5C",
    "#ff9f7f",
    "#fb7293",
    "#E062AE",
    "#E690D1",
    "#e7bcf3",
    "#9d96f5",
    "#8378EA",
    "#96BFFF",
  ],
  backgroundColor: "rgba(255, 255, 255, 0)",
  textStyle: {},
  title: {
    textStyle: {
      color: "#333",
    },
    subtextStyle: {
      color: "#666",
    },
  },
  line: {
    symbol: "circle",
    symbolSize: 4,
  },
  radar: {
    axisLine: {
      lineStyle: {
        color: "rgba(255, 255, 255, 0.5)",
      },
    },
    splitLine: {
      lineStyle: {
        color: "rgba(255, 255, 255, 0.5)",
      },
    },
    splitArea: {
      areaStyle: {
        color: [],
      },
    },
  },
  bar: {
    itemStyle: {
      barBorderRadius: 3,
    },
  },
  pie: {
    itemStyle: {
      borderWidth: 1,
      borderColor: "#fff",
    },
  },
  graph: {
    itemStyle: {
      color: "#37A2DA",
    },
    linkStyle: {
      color: "#1c86ee",
    },
  },
  gauge: {
    axisLine: {
      lineStyle: {
        color: [
          [0.2, "#37A2DA"],
          [0.8, "#67E0E3"],
          [1, "#FFDB5C"],
        ],
        width: 8,
      },
    },
  },
  toolbox: {
    iconStyle: {
      normal: {
        borderColor: "#999",
      },
      emphasis: {
        borderColor: "#666",
      },
    },
  },
  grid: {
    containLabel: true,
    left: "3%",
    right: "4%",
    bottom: "3%",
  },
  categoryAxis: {
    axisLine: {
      lineStyle: {
        color: "#999",
      },
    },
    splitLine: {
      show: false,
    },
  },
  valueAxis: {
    axisLine: {
      show: false,
    },
    splitLine: {
      lineStyle: {
        color: ["#eee"],
      },
    },
  },
  timeline: {
    lineStyle: {
      color: "#37A2DA",
    },
    itemStyle: {
      color: "#37A2DA",
      borderColor: "#37A2DA",
    },
    label: {
      color: "#37A2DA",
    },
    controlStyle: {
      color: "#37A2DA",
      borderColor: "#37A2DA",
    },
  },
};

// 注册主题
if (typeof echarts !== "undefined") {
  echarts.registerTheme("customTheme", customTheme);
} else {
  console.error("ECharts未加载，主题注册失败");
}

// 设置为默认主题（需要在创建图表前调用）
function setDefaultEChartsTheme() {
  if (typeof echarts !== "undefined") {
    // 保存原始init方法
    const originalInit = echarts.init;

    // 重写init方法，自动应用主题
    echarts.init = function (dom, theme, opts) {
      return originalInit.apply(this, [dom, "customTheme", opts]);
    };

    // 同时保留原始init方法
    echarts.originalInit = originalInit;

    console.log("ECharts默认主题已设置为customTheme");
  } else {
    console.error("ECharts未加载，无法设置默认主题");
  }
}

// setDefaultEChartsTheme();
