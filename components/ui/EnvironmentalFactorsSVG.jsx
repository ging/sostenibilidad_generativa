"use client";

import React, { useState } from 'react';
import { useTranslation } from "react-i18next";


const EnvironmentalFactorsSVG = () => {
  const [selectedSection, setSelectedSection] = useState(null);
  const { t, i18n } = useTranslation();

  // Environmental impact factor details
  const factors = {
    water: {
      question: t("environmentalImpact.thirdSection.environmentalFactors.question1"),
      content: t("environmentalImpact.thirdSection.environmentalFactors.content1")
    },
    carbon: {
      question: t("environmentalImpact.thirdSection.environmentalFactors.question2"),
      content: t("environmentalImpact.thirdSection.environmentalFactors.content2")
    },
    minerals: {
      question: t("environmentalImpact.thirdSection.environmentalFactors.question3"),
      content: t("environmentalImpact.thirdSection.environmentalFactors.content3")
    },
    waste: {
      question: t("environmentalImpact.thirdSection.environmentalFactors.question4"),
      content: t("environmentalImpact.thirdSection.environmentalFactors.content4")
    }
  };

  // Colors used in the design
  const colors = {
    water: '#48C9B0',
    carbon: '#B6FF84',
    minerals: '#3e4b53',
    waste: '#2E7D32'
  };

  return (
    <div>
        <svg 
        viewBox="0 0 800 400" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-5xl mx-auto drop-shadow-lg"
        >
        {/* Background */}
        <rect x="0" y="0" width="800" height="400" rx="10" fill="#0d1f19" fillOpacity="0.1" />
        
        {/* Central server icon */}
        <g transform="translate(400, 200)">
            {/* Círculo de fondo para el servidor central */}
            <circle cx="0" cy="0" r="70" fill="#01e401" />
            {/* imagen PNG del servidor central */}
            <image 
              href="assets/img/icons/robot-icon.png" 
              x="-50" 
              y="-50" 
              width="100" 
              height="100" 
              preserveAspectRatio="xMidYMid meet"
            />
        </g>

        {/* Water consumption */}
        <g 
            className="hover:opacity-90 cursor-pointer" 
            id="water-consumption"
            onClick={() => setSelectedSection(factors.water)}
        >
            <circle cx="200" cy="120" r="60" fill={colors.water} />
            {/* Espacio para imagen PNG */}
            <image 
              href="assets/img/icons/water-icon.png" 
              x="160" 
              y="80" 
              width="80" 
              height="80" 
              preserveAspectRatio="xMidYMid meet"
            />
            <text x="200" y="195" textAnchor="middle" fill="white" fontWeight="bold" fontSize="14">
            {factors.water.question}
            </text>
        </g>

        {/* Carbon footprint */}
        <g 
            className="hover:opacity-90 cursor-pointer" 
            id="carbon-footprint"
            onClick={() => setSelectedSection(factors.carbon)}
        >
            <circle cx="600" cy="120" r="60" fill={colors.carbon} />
            {/* Espacio para imagen PNG */}
            <image 
              href="assets/img/icons/carbon-icon.png" 
              x="560" 
              y="80" 
              width="80" 
              height="80" 
              preserveAspectRatio="xMidYMid meet"
            />
            <text x="600" y="195" textAnchor="middle" fill="white" fontWeight="bold" fontSize="14">
            {factors.carbon.question}
            </text>
        </g>

        {/* Mineral extraction */}
        <g 
            className="hover:opacity-90 cursor-pointer" 
            id="mineral-extraction"
            onClick={() => setSelectedSection(factors.minerals)}
        >
            <circle cx="200" cy="280" r="60" fill={colors.minerals} />
            {/* Espacio para imagen PNG */}
            <image 
              href="assets/img/icons/minerals-icon.png" 
              x="160" 
              y="240" 
              width="80" 
              height="80" 
              preserveAspectRatio="xMidYMid meet"
            />
            <text x="200" y="355" textAnchor="middle" fill="white" fontWeight="bold" fontSize="14">
            {factors.minerals.question}
            </text>
        </g>

        {/* Waste management */}
        <g 
            className="hover:opacity-90 cursor-pointer" 
            id="waste-management"
            onClick={() => setSelectedSection(factors.waste)}
        >
            <circle cx="600" cy="280" r="60" fill={colors.waste} />
            {/* Espacio para imagen PNG */}
            <image 
              href="assets/img/icons/waste-icon.png" 
              x="560" 
              y="240" 
              width="80" 
              height="80" 
              preserveAspectRatio="xMidYMid meet"
            />
            <text x="600" y="355" textAnchor="middle" fill="white" fontWeight="bold" fontSize="14">
            {factors.waste.question}
            </text>
        </g>

        {/* Connection lines */}
        <line x1="250" y1="120" x2="350" y2="160" stroke="#48C9B0" strokeWidth="3" strokeDasharray="5,5" />
        <line x1="550" y1="120" x2="450" y2="160" stroke="#B6FF84" strokeWidth="3" strokeDasharray="5,5" />
        <line x1="250" y1="280" x2="350" y2="240" stroke="#3e4b53" strokeWidth="3" strokeDasharray="5,5" />
        <line x1="550" y1="280" x2="450" y2="240" stroke="#2E7D32" strokeWidth="3" strokeDasharray="5,5" />
        </svg>
        
        {/* Modal que aparece al hacer clic en un factor */}
        <div className="relative">
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
                backgroundColor: 'rgba(13, 31, 25, 0.89)',
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
                >
                {selectedSection.question}
                </h4>
                <p className="text-xl" dangerouslySetInnerHTML={{ __html: selectedSection.content }}>
                </p>
            </div>
            </div>
        )}
        </div>
    </div>
  );
};

export default EnvironmentalFactorsSVG;
