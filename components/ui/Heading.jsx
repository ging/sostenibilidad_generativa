"use client";

import React from "react";
import clsx from "clsx";

/* 
  ------------------------------------------------------------------
  Componente para los titulos y etiquetas <h> -> jerarquías de texto 
  ------------------------------------------------------------------
*/

const Heading = ({ level = "h1", children, className, id}) => {
  // Determinar el componente HTML según el nivel
  let Component;
  switch (level) {
    case "h1":
      Component = "h1";
      break;
    case "h2":
      Component = "h2";
      break;
    case "h3":
      Component = "h3";
      break;
    case "h4":
      Component = "h4";
      break;
    case "h5":
      Component = "h5";
      break;
    case "h6":
      Component = "h6";
      break;
    case "highlightTitle":
        Component = "h4";
        break;
    default:
      Component = "h1"; // Por defecto, usar h1 si no se especifica nivel válido
      break;
  }

  // clsx, aplica clases según el valor del atributo level de manera dinámica
  const classes = clsx([
    "text-snow  text-pretty",
    {
      "text-40 2xl:text-48 mb-6 font-chaney font-normal ": level === "h1", // Aplicar "adasd" si el nivel es h1
      "text-36 2xl:text-40 mb-4 font-chaney font-normal ": level === "h2",
      "text-36 2xl:text-40 mb-4 font-heebo font-bold tracking-wide": level === "h3",
      "text-28 2xl:text-32 mb-2 font-heebo font-bold tracking-wide": level === "h4",
       "text-28 2xl:text-32 mb-2 font-chaney": level === "highlightTitle",
      "text-24 2xl:text-28 mb-2 font-heebo font-semibold tracking-wide": level === "h5",
      "text-base 2xl:text-20 font-medium uppercase mb-2": level === "h6",

    },
    className
  ])
  if (id) {
    return <Component className={classes} id={id}>{children}</Component>;
  }
  return <Component className={classes}>{children}</Component>;
};

export default Heading;
