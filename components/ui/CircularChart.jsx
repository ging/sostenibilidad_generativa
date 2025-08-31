"use client";

import React, { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import Image from "../ui/image";

/* 
  ------------------------------------------------------------------
  Componente de gráfico circular interactivo con tooltips
  ------------------------------------------------------------------
*/

const CircularChart = ({ data, size = 500, className }) => {
  const [responsiveSize, setResponsiveSize] = useState(size);
  const containerRef = useRef(null);
  
  // Función para calcular el tamaño responsivo
  const calculateResponsiveSize = () => {
    if (typeof window !== 'undefined') {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const minDimension = Math.min(viewportWidth, viewportHeight);
      const maxSize = Math.min(size, minDimension * 0.9); // 90% del tamaño de la pantalla como máximo
      setResponsiveSize(maxSize);
    }
  };
  
  // Calcular el tamaño al montar y cuando cambia el tamaño de la ventana
  useEffect(() => {
    calculateResponsiveSize();
    window.addEventListener('resize', calculateResponsiveSize);
    return () => {
      window.removeEventListener('resize', calculateResponsiveSize);
    };
  }, [size]);
  const [selectedSection, setSelectedSection] = useState(null);

  const center = responsiveSize / 2;
  const radius = responsiveSize / 2 - 40; // Margen para texto
  const circumference = 2 * Math.PI * radius;

  // Calcular ángulos para cada sección
  let currentAngle = 0;
  const sections = data.map((item, index) => {
    const angle = (360 / data.length);
    const startAngle = currentAngle;
    const endAngle = currentAngle + angle;
    currentAngle += angle;

    // Calcular coordenadas para el arco SVG
    const startAngleRad = (startAngle * Math.PI) / 180;
    const endAngleRad = (endAngle * Math.PI) / 180;

    const x1 = center + radius * Math.cos(startAngleRad);
    const y1 = center + radius * Math.sin(startAngleRad);
    const x2 = center + radius * Math.cos(endAngleRad);
    const y2 = center + radius * Math.sin(endAngleRad);

    const largeArcFlag = angle > 180 ? 1 : 0;

    const pathData = [
      `M ${center} ${center}`,
      `L ${x1} ${y1}`,
      `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
      'Z'
    ].join(' ');

    // Posición para el texto
    const textAngle = (startAngle + endAngle) / 2;
    const textAngleRad = (textAngle * Math.PI) / 180;
    const textRadius = radius * 0.7;
    const textX = center + textRadius * Math.cos(textAngleRad);
    const textY = center + textRadius * Math.sin(textAngleRad);

    return {
      ...item,
      pathData,
      textX,
      textY,
      index
    };
  });

  const colors = [
    '#B6FF84',
    '#48C9B0',
    '#3e4b53',
    '#2E7D32',
    '#9B59B6' 
  ];



  const classes = clsx([
    "relative inline-block",
    className
  ]);

  return (
    <div className={classes} ref={containerRef}>
      <svg 
        width={responsiveSize} 
        height={responsiveSize}
        className="drop-shadow-lg"
      >
        {sections.map((section, index) => (
          <g key={index}>
            <path
              d={section.pathData}
              fill={colors[index % colors.length]}
              stroke="white"
              strokeWidth="2"
              className="cursor-pointer transition-all duration-200 hover:brightness-110"
              onClick={() => setSelectedSection(section)}
            />
            <text
              x={section.textX}
              y={section.textY}
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-white font-bold text-xl pointer-events-none"
              style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}
            >
              {section.question}
            </text>
          </g>
        ))}
      </svg>

      {/* Modal que aparece al hacer clic */}
      {selectedSection && (
      <div
      className="fixed z-50 text-white p-4 rounded-lg shadow-xl flex items-center justify-center"
      style={{
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        overflowY: 'auto',
        overflowX: 'hidden',
        backgroundColor: 'rgba(13, 31, 25, 0.89)', // 80% transparencia
      }}
    >
      <div className="text-center max-w-lg">
                  {/* Botón de cierre */}
          <div className="flex justify-end">
            <button 
              className="text-white text-xl font-bold"
              onClick={() => setSelectedSection(null)}
            >×</button>
          </div>
        <h4 
          className="font-bold text-xl mb-2" 
          dangerouslySetInnerHTML={{ __html: selectedSection.question }} 
        />
        <p 
          className="text-xl" 
          dangerouslySetInnerHTML={{ __html: selectedSection.content }} 
        />
        {selectedSection.image && (
          <div className="flex items-center justify-center h-96" style={{ maxWidth: '60%', height: 'auto', margin: '5px auto 0' }}>
            <Image 
              src={selectedSection.image} 
              className="rounded-lg shadow-lg" 
              alt={selectedSection.question}
              layout="center"
              copyright={selectedSection.copyright || ""}
            />
          </div>
        )}
      </div>
    </div>

      )}
    </div>
  );
};

export default CircularChart;
