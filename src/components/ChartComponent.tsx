import React, { useEffect, useRef, useState } from "react";
import * as echarts from "echarts";
import type { EChartsOption } from "echarts";
import "echarts-wordcloud";

interface EChartsProps {
  option: EChartsOption;
  width?: number | string;
  height?: number | string;
  className?: string;
  theme?: string;
}

const EChartsComponent: React.FC<EChartsProps> = ({
  option,
  width = "100%",
  height = 500,
  className = "",
  theme = "customTheme",
}) => {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<echarts.ECharts | null>(null);
  const [resizeObserver, setResizeObserver] = useState<ResizeObserver | null>(
    null
  );

  // 初始化图表
  useEffect(() => {
    if (!chartRef.current) return;

    // 销毁旧实例
    if (chartInstance.current) {
      chartInstance.current.dispose();
    }

    // 使用指定主题初始化
    chartInstance.current = echarts.init(chartRef.current, theme);

    if (option) {
      chartInstance.current.setOption(option);
    }

    // 响应式处理
    const observer = new ResizeObserver(() => {
      chartInstance.current?.resize();
    });

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }
    setResizeObserver(observer);

    return () => {
      chartInstance.current?.dispose();
      observer.disconnect();
    };
  }, [option, theme]); // 添加theme依赖

  // 更新图表选项
  useEffect(() => {
    if (chartInstance.current && option) {
      chartInstance.current.setOption(option);
    }
  }, [option]);

  // useEffect(() => {
  //   const chart = echarts.init(chartRef.current, "customTheme");
  //   chart.setOption({
  //     series: [{ type: "bar", data: [1, 2, 3] }],
  //   });
  // }, []);

  return <div ref={chartRef} style={{ width, height }} className={className} />;
};

export default EChartsComponent;
