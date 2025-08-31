"use client";

import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";

const EnergyConsumptionChart = () => {
  const { t, i18n } = useTranslation();
  const [hoveredModel, setHoveredModel] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [relativeMousePosition, setRelativeMousePosition] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: Math.min(window.innerWidth * 0.95, 900), // Máximo 900px, más ancho
        height: window.innerHeight * 0.7 // 70vh, más alto
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Datos basados en la gráfica (valores aproximados en Wh)
  const energyData = [
  { model: "Deepseek-R1", company: "DeepSeek", min: 21, q1: 22, median: 26, q3: 28, max: 29, color: "#4DD0E1" },
  { model: "o3", company: "OpenAI", min: 1.9, q1: 4.1, median: 7, q3: 10, max: 18, color: "#4de197ff" },
  { model: "GPT-4o", company: "OpenAI", min: 0.2, q1: 0.3, median: 0.5, q3: 0.6, max: 0.8, color: "#4de197ff" },
  { model: "Llama-3.1-405B", company: "Meta", min: 1.6, q1: 1.7, median: 1.9, q3: 2.2, max: 2.8, color: "#9575CD" },
  { model: "Claude-3.5 Sonnet", company: "Anthropic", min: 0.8, q1: 0.9, median: 1.1, q3: 1.3, max: 1.5, color: "#FFB74D" },
//   { model: "Llama-3-70B", company: "Meta", min: 0.6, q1: 0.9, median: 1.2, q3: 1.6, max: 2.0, color: "#9575CD" },
  { model: "Llama-3.3-70B", company: "Meta", min: 0.2, q1: 0.21, median: 0.22, q3: 0.25, max: 0.3, color: "#9575CD" }
  ];

  const chartWidth = dimensions.width;
  const chartHeight = dimensions.height;
  const margin = { 
    top: chartHeight * 0.1, 
    right: chartWidth * 0.05, 
    bottom: chartHeight * 0.3, 
    left: chartWidth * 0.12 
  };
  const plotWidth = chartWidth - margin.left - margin.right;
  const plotHeight = chartHeight - margin.top - margin.bottom;

  // Escala Y (logarítmica aproximada)
  const maxValue = Math.max(...energyData.map(d => d.max));
  const yScale = (value) => plotHeight - (Math.log10(value + 0.1) / Math.log10(maxValue + 0.1)) * plotHeight;
  
  // Escala X
  const xScale = (index) => (index * plotWidth) / energyData.length + plotWidth / (energyData.length * 2);

  // Valores para el eje Y
  const yTicks = [0.1, 1, 10];

  // No renderizar hasta que las dimensiones estén calculadas
  if (chartWidth === 0 || chartHeight === 0) {
    return (
      <div>
        <h3 className="text-xl font-bold text-center mb-4 text-white">
          Energía (100 token in → 300 token out)
        </h3>
        <div className="flex justify-center items-center h-64">
          <div className="text-white">Cargando...</div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-xl font-bold text-center mb-4 text-white">
        {t("environmentalImpact.fourthSection.chart.title")}
      </h3>
      
      <div className="relative flex justify-center">
        <svg width={chartWidth} height={chartHeight} className="overflow-visible">
          {/* Y axis */}
          <line
            x1={margin.left}
            y1={margin.top}
            x2={margin.left}
            y2={margin.top + yScale(0.1)}
            stroke="#fff"
            strokeWidth="2"
          />

          {/* X axis */}
          <line
            x1={margin.left}
            y1={margin.top + yScale(0.1)}
            x2={margin.left + plotWidth}
            y2={margin.top + yScale(0.1)}
            stroke="#fff"
            strokeWidth="2"
          />

          {/* Y axis ticks and labels */}
          {yTicks.map((tick) => (
            <g key={tick}>
              <line
                x1={margin.left - 5}
                y1={margin.top + yScale(tick)}
                x2={margin.left}
                y2={margin.top + yScale(tick)}
                stroke="#fff"
                strokeWidth="1"
              />
              <text
                x={margin.left - 10}
                y={margin.top + yScale(tick) + 4}
                textAnchor="end"
                fontSize="12"
                fill="#fff"
              >
                {tick}
              </text>
            </g>
          ))}


          {/* Box plots */}
          {energyData.map((data, index) => {
            const x = margin.left + xScale(index);
            const boxWidth = 20;

            return (
              <g
                key={data.model}
                onMouseEnter={(e) => {
                  const svgRect = e.currentTarget.closest('svg').getBoundingClientRect();
                  setHoveredModel(data);
                  setMousePosition({ x: e.clientX, y: e.clientY });
                  setRelativeMousePosition({ 
                    x: e.clientX - svgRect.left, 
                    y: e.clientY - svgRect.top 
                  });
                }}
                onMouseMove={(e) => {
                  const svgRect = e.currentTarget.closest('svg').getBoundingClientRect();
                  setMousePosition({ x: e.clientX, y: e.clientY });
                  setRelativeMousePosition({ 
                    x: e.clientX - svgRect.left, 
                    y: e.clientY - svgRect.top 
                  });
                }}
                onMouseLeave={() => setHoveredModel(null)}
                className="cursor-pointer"
              >
                {/* Whiskers (min-max lines) */}
                <line
                  x1={x}
                  y1={margin.top + yScale(data.min)}
                  x2={x}
                  y2={margin.top + yScale(data.max)}
                  stroke={data.color}
                  strokeWidth="2"
                />

                {/* Min line */}
                <line
                  x1={x - boxWidth/4}
                  y1={margin.top + yScale(data.min)}
                  x2={x + boxWidth/4}
                  y2={margin.top + yScale(data.min)}
                  stroke={data.color}
                  strokeWidth="2"
                />

                {/* Max line */}
                <line
                  x1={x - boxWidth/4}
                  y1={margin.top + yScale(data.max)}
                  x2={x + boxWidth/4}
                  y2={margin.top + yScale(data.max)}
                  stroke={data.color}
                  strokeWidth="2"
                />

                {/* Box (Q1 to Q3) */}
                <rect
                  x={x - boxWidth/2}
                  y={margin.top + yScale(data.q3)}
                  width={boxWidth}
                  height={yScale(data.q1) - yScale(data.q3)}
                  fill={data.color}
                  fillOpacity="0.7"
                  stroke={data.color}
                  strokeWidth="2"
                />

                {/* Median line */}
                <line
                  x1={x - boxWidth/2}
                  y1={margin.top + yScale(data.median)}
                  x2={x + boxWidth/2}
                  y2={margin.top + yScale(data.median)}
                  stroke="#fff"
                  strokeWidth="2"
                />

                {/* X axis labels - above the box plots */}
                <text
                  x={x}
                  y={margin.top + yScale(data.max) - 10}
                  textAnchor="middle"
                  fontSize="12"
                  fill="#fff"
                  transform={`rotate(-45, ${x - 15}, ${margin.top + yScale(data.max) - 30})`}
                >
                  {data.model}
                </text>
              </g>
            );
          })}

          {/* Legend */}
          <g transform={`translate(${margin.left + plotWidth - plotWidth * 0.25}, ${margin.top - 15})`}>
            <text x="0" y="0" fontSize="14" fontWeight="bold" fill="#fff">{t("environmentalImpact.fourthSection.chart.legendLabel")}</text>
            {[
              { company: "DeepSeek", color: "#4DD0E1" },
              { company: "OpenAI", color: "#4de197ff" },
              { company: "Anthropic", color: "#FFB74D" },
              { company: "Meta", color: "#9575CD" }
            ].map((item, index) => (
              <g key={item.company} transform={`translate(0, ${20 + index * 18})`}>
                <rect x="0" y="-8" width="12" height="12" fill={item.color} />
                <text x="18" y="2" fontSize="12" fill="#fff">{item.company}</text>
              </g>
            ))}
          </g>
        </svg>

        {/* Tooltip */}
        {hoveredModel && (
          <div 
            className="fixed bg-gray-800 text-white p-3 rounded shadow-lg pointer-events-none z-50"
            style={{ 
              left: relativeMousePosition.x > chartWidth * 0.5 
                ? `${mousePosition.x - 120}px`  // A la izquierda del ratón
                : `${mousePosition.x + 10}px`,  // A la derecha del ratón
              top: `${mousePosition.y - 10}px`,
              transform: 'translate(0, -100%)'
            }}
          >
            <div className="font-bold">{hoveredModel.model}</div>
            <div className="text-sm">{hoveredModel.company}</div>
            <div className="text-xs mt-1">
              <div>Min: {hoveredModel.min} Wh</div>
              <div>Median: {hoveredModel.median} Wh</div>
              <div>Max: {hoveredModel.max} Wh</div>
            </div>
          </div>
        )}
      </div>

      <div className="text-xs text-white mt-4 text-center">
        
        <span dangerouslySetInnerHTML={{__html: t("environmentalImpact.fourthSection.chart.source")}} />
      </div>
    </div>
  );
};

export default EnergyConsumptionChart;
