"use client";

import React from "react";
import clsx from "clsx";
import { Badge } from "./badge";

const Image = ({
  fit = "cover",
  src,
  alt = "",
  className,
  layout = "top-right",
  hasBadge = false,
  badgeVariant = "",
  badgeSize = "",
  badgeContent = "badge",
  isSvg = false, // prop para detectar SVG
  svgCode = "",  // SVG en formato de código
  copyright = "", // texto de copyright (puede incluir HTML)
  fitProperty = "true"
}) => {
  const imageContainerClasses = clsx(
    "relative flex w-full h-full overflow-hidden",
    className 
  );

  const imageClasses = clsx(
    "w-full  flex items-center justify-center ", 
    {
      "object-cover": fit === "cover",
      "object-contain": fit === "contain",
    }
  );

  const fitPropertyClass = clsx(

    {
      "h-full": fitProperty === "true",
      "": fitProperty === "false",
    }
  );

  const badgeLayout = clsx(
    "absolute", 
    {
      "top-2 left-2": layout === "top-left",
      "top-2 right-2": layout === "top-right",
      "bottom-2 left-2": layout === "bottom-left",
      "bottom-2 right-2": layout === "bottom-right",
      "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2": layout === "center",
    }
  );

  return (
    <div>
      <div className={imageContainerClasses}>
        {isSvg ? (
          <div
            className={imageClasses + ""}
            dangerouslySetInnerHTML={{ __html: svgCode }} // Renderizamos SVG
          />
        ) : (
          <img src={src} alt={alt} className={imageClasses + " " + fitPropertyClass}/>
        )}
        {hasBadge && (
          <Badge className={badgeLayout} variant={badgeVariant} size={badgeSize}>
            {badgeContent}
          </Badge>
        )}
        </div>
      
      {copyright && (
        <p 
          style={{ fontSize: '0.8rem', color: 'gray', margin: '4px 0 0 0' }} 
          dangerouslySetInnerHTML={{ __html: copyright }}
        />
      )}
    </div>
  );
};

export default Image;
