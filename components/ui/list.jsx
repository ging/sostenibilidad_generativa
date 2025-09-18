"use client";

import React from "react";
import clsx from "clsx";

/* 
  ------------------------------------------------------------------
  Componente para listas ordenadas y no ordenadas con soporte para HTML
  ------------------------------------------------------------------
*/

const List = ({ type = "ul", textType = "p", styleList, children, className, ...props }) => {
  // Determinar el componente HTML según el tipo
  const Component = type === "ol" ? "ol" : "ul";

  // Determinar el estilo de lista por defecto o personalizado
  const defaultListStyle = type === "ol" ? "list-decimal" : "list-disc";
  const listStyle = styleList || defaultListStyle;

  // Clases base para las listas con tipos de texto del componente Text
  const classes = clsx([
    "font-body font-normal tracking-wide my-6",
    `${listStyle} list-inside space-y-2 ml-4`,
    className
  ]);

  return <Component className={classes} {...props}>{children}</Component>;
};

const ListItem = ({ textType = "p", children, className, dangerouslySetInnerHTML, ...props }) => {
  // Clases base para los elementos de lista con tipos de texto del componente Text
  const classes = clsx([
    "font-body font-normal tracking-wide leading-8",
    {
      "text-24 text-20 2xl:text-24 4xl:text-32 max-w-[60ch] xl:max-w-[63ch] 2xl:max-w-[65ch] text-pretty": textType === "lg-p",
      "text-20 2xl:text-24": textType === "full-p",
      "text-20 sm:text-base 2xl:text-20 max-w-[75ch] xl:max-w-[83ch] 2xl:max-w-[90ch] text-pretty mb-2": textType === "p",
      "text-base sm:text-sm 2xl:text-base": textType === "small",
      "text-sm sm:text-xs 2xl:text-sm": textType === "xs",
      "text-base sm:text-sm 2xl:text-base italic": textType === "source",
      "text-20 sm:text-base 2xl:text-20 max-w-[66ch] xl:max-w-[71ch] 2xl:max-w-[83ch]": textType === "short-p",
    },
    className
  ]);

  return (
    <li className={classes} {...props}>
      {dangerouslySetInnerHTML ? (
        <span dangerouslySetInnerHTML={dangerouslySetInnerHTML} />
      ) : (
        children
      )}
    </li>
  );
};

// Componentes específicos para diferentes tipos de listas
const OrderedList = ({ textType = "p", styleList, children, className, ...props }) => (
  <List type="ol" textType={textType} styleList={styleList} className={className} {...props}>
    {children}
  </List>
);

const UnorderedList = ({ textType = "p", styleList, children, className, ...props }) => (
  <List type="ul" textType={textType} styleList={styleList} className={className} {...props}>
    {children}
  </List>
);

// Hook personalizado para crear listas desde arrays con soporte HTML
const useListFromArray = (items, type = "ul", textType = "p", styleList) => {
  return (
    <List type={type} textType={textType} styleList={styleList}>
      {items.map((item, index) => (
        <ListItem 
          key={index}
          textType={textType}
          dangerouslySetInnerHTML={typeof item === 'string' ? { __html: item } : undefined}
        >
          {typeof item === 'string' ? null : item}
        </ListItem>
      ))}
    </List>
  );
};

export { List, ListItem, OrderedList, UnorderedList, useListFromArray };
