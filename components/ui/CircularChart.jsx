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
    if (typeof window !== "undefined") {
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
    window.addEventListener("resize", calculateResponsiveSize);
    return () => {
      window.removeEventListener("resize", calculateResponsiveSize);
    };
  }, [size]);
  const [selectedSection, setSelectedSection] = useState(null);

  const center = responsiveSize / 2;
  const radius = responsiveSize / 2 - 40; // Margen para texto
  const circumference = 2 * Math.PI * radius;

  // Calcular ángulos para cada sección
  let currentAngle = 0;
  const sections = data.map((item, index) => {
    const angle = 360 / data.length;
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
      "Z",
    ].join(" ");

    // Posición para el texto
    const textAngle = (startAngle + endAngle) / 2;
    const textAngleRad = (textAngle * Math.PI) / 180;
    const textRadius = radius * 0.6;
    const textX = center + textRadius * Math.cos(textAngleRad);
    const textY = center + textRadius * Math.sin(textAngleRad) - 30;

    return {
      ...item,
      pathData,
      textX,
      textY,
      index,
    };
  });

  const colors = ["#c", "#48C9B0", "#3e4b53", "#2E7D32", "#9B59B6"];

  const classes = clsx(["relative inline-block", className]);

  return (
    <div className={classes} ref={containerRef}>
      <svg
        width={responsiveSize}
        height={responsiveSize}
        className="drop-shadow-lg"
      >
        <defs>
          {/* GRADIENTES */}
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3d6361" /> {/* verde */}
            <stop offset="100%" stopColor="#668a7d" /> {/* azul */}
          </linearGradient>
          <radialGradient id="grad1" cx="50%" cy="50%" r="78%">
            <stop offset="0%" stopColor="#334780" /> 
            <stop offset="70%" stopColor="#627096" /> 
          </radialGradient>
          <radialGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
            
            <stop offset="30%" stopColor="#548a6d" /> {/* azul */}
            <stop offset="100%" stopColor="#3dba50" /> {/* verde */}
          </radialGradient>
          <linearGradient id="grad0" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="32%" stopColor="rgba(41, 69, 60, 1)" /> {/* verde */}
            <stop offset="90%" stopColor="rgba(52, 107, 91, 1)" /> {/* azul */}
          </linearGradient>
        </defs>
        {sections.map((section, index) => (
          <g key={index} className="hover:brightness-110 hover:saturate-150 cursor-pointer">
            <path
              d={section.pathData}
              fill={`url(#grad${index}`}
              stroke="#222222"
              strokeWidth="2"
              className=" transition-all duration-200 "
              onClick={() => setSelectedSection(section)}
            />
            <text
              x={section.textX}
              y={section.textY}
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-white text-left font-chaney text-2xl pointer-events-none"
            
            >
              {section.question}
            </text>
          <foreignObject x={section.textX - 70} y={section.textY+20} width="150" height="100">
  <div
    xmlns="http://www.w3.org/1999/xhtml"
    className="text-white/80 font-body text-sm leading-5 text-balance text-center w-[150px] break-words"
    onClick={() => setSelectedSection(section)}
  >
    {section.questionLong}
  </div>
</foreignObject>

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
            width: "100vw",
            height: "100vh",
            overflowY: "auto",
            overflowX: "hidden",
            backgroundColor: "rgba(13, 31, 25, 0.89)", // 80% transparencia
          }}
        >
          <div className="text-center max-w-lg">
            {/* Botón de cierre */}
            <div className="flex justify-end">
              <button
                className="text-white text-xl font-bold"
                onClick={() => setSelectedSection(null)}
              >
                ×
              </button>
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
              <div
                className="flex items-center justify-center h-96"
                style={{
                  maxWidth: "60%",
                  height: "auto",
                  margin: "5px auto 0",
                }}
              >
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
