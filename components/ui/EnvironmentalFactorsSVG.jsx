"use client";

import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import { envs } from "@/constants/envs";
const isProd = envs.isProd;
const isCotec = envs.isCotec;


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
    minerals: '#63a7c7',
    waste: '#659683'
  };

  return (
    <div className='overflow-hidden'>
        <svg 
        viewBox="0 0 800 420" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-w-5xl mx-auto drop-shadow-lg scale-[135%] my-10 md:my-0 md:scale-100"
        preserveAspectRatio="xMidYMid slice"
        
        >
           <defs>
    {/* Clip circular */}
    <clipPath id="circleClip">
      <circle cx="600" cy="120" r="68" />
    </clipPath>
    <clipPath id="circleClip2">
      <circle cx="200" cy="120" r="68" />
    </clipPath>
    <clipPath id="circleClip3">
      <circle cx="200" cy="300" r="68" />
    </clipPath>
    <clipPath id="circleClip4">
      <circle cx="600" cy="300" r="68" />
    </clipPath>
  </defs>
        {/* Background */}
        <rect x="0" y="0" fill="#0d1f19" width="800" height="400" rx="10"  fillOpacity="0.1"  />
        
        {/* Central server icon */}
        <g transform="translate(400, 210)">
            {/* Círculo de fondo para el servidor central */}
            <circle cx="0" cy="0" r="45" fill="#000000" />
            {/* imagen PNG del servidor central */}
            {/* <image 
              href="assets/img/icons/robot-icon.png" 
              x="-30" 
              y="-30" 
              width="60" 
              height="60" 
              preserveAspectRatio="xMidYMid meet"
              className='opacity-70'
            /> */}
            <text 
             x="-24" 
             y="10" 
             width="60" 
             height="60" 
             fontSize="32"
             fontWeight="bold"
             fill="#4888db"
            >  {t("environmentalImpact.thirdSection.environmentalFactors.AI")} </text>
        </g>

        {/* Water consumption */}
        <g 
            className="hover:brightness-125 cursor-pointer" 
            id="water-consumption"
            onClick={() => setSelectedSection(factors.water)}
        >
            <circle cx="200" cy="120" r="70" fill={colors.water} />
            {/* Espacio para imagen PNG */}
            <image 
              href={(isCotec || !isProd ? '/' : '') + "assets/img/impact/water_consumption.png"} 
              x="130" 
              y="50" 
              width="140" 
              height="140" 
                    clipPath="url(#circleClip2)"
              preserveAspectRatio="xMidYMid meet"
            />
            <text x="200" y="210" textAnchor="middle" fill="white" fontWeight="bold" fontSize="16">
            {factors.water.question}
            </text>
        </g>

        {/* Carbon footprint */}
        <g 
            className="hover:brightness-125 cursor-pointer rounded-full" 
            id="carbon-footprint"
            onClick={() => setSelectedSection(factors.carbon)}
        >
        
        <circle cx="600" cy="120" r="70" className='rounded-full' fill={colors.carbon}/>
          {/* Espacio para imagen PNG */}
          
        <image  
      href={(isCotec || !isProd ? '/' : '') + "assets/img/impact/carbon_footprint.png"}
           x="530" 
          y="50" 
          width="140" 
          height="140" 
          clipPath="url(#circleClip)"
          preserveAspectRatio="xMidYMid meet"
         />
 
           <text x="600" y="210" textAnchor="middle" fill="white" fontWeight="bold" fontSize="16">
         {factors.carbon.question}
       </text> 
        </g>

        {/* Mineral extraction */}
        <g 
            className="hover:brightness-125 cursor-pointer" 
            id="mineral-extraction"
            onClick={() => setSelectedSection(factors.minerals)}
        >
            <circle cx="200" cy="300" r="70" fill={colors.minerals} />
            {/* Espacio para imagen PNG */}
            <image 
              href={(isCotec || !isProd ? '/' : '') + "assets/img/impact/minerals.png"} 
              x="130" 
              y="230" 
              width="140" 
              height="140" 
                     clipPath="url(#circleClip3)"
              preserveAspectRatio="xMidYMid meet"
            />
            <text x="200" y="390" textAnchor="middle" fill="white" fontWeight="bold" fontSize="16">
            {factors.minerals.question}
            </text>
        </g>

        {/* Waste management */}
        <g 
            className="hover:brightness-125 cursor-pointer" 
            id="waste-management"
            onClick={() => setSelectedSection(factors.waste)}
        >
            <circle cx="600" cy="300" r="70" fill={colors.waste} />
            {/* Espacio para imagen PNG */}
            <image 
              href={(isCotec || !isProd ? '/' : '') + "assets/img/impact/residue.png"} 
              x="530" 
              y="230"  
              width="140" 
              height="140" 
                     clipPath="url(#circleClip4)"
              preserveAspectRatio="xMidYMid meet"
            />
            <text x="600" y="390" textAnchor="middle" fill="white" fontWeight="bold" fontSize="16">
            {factors.waste.question}
            </text>
        </g>

        {/* Connection lines */}
        <line x1="270" y1="130" x2="360" y2="180" stroke="#48C9B0" strokeWidth="3" strokeDasharray="5,5" />
        <line x1="530" y1="130" x2="440" y2="180" stroke="#B6FF84" strokeWidth="3" strokeDasharray="5,5" />
        <line x1="270" y1="290" x2="360" y2="240" stroke="#63a7c7" strokeWidth="3" strokeDasharray="5,5" />
        <line x1="530" y1="290" x2="440" y2="240" stroke="#659683" strokeWidth="3" strokeDasharray="5,5" />
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
