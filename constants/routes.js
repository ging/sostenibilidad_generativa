import Page from "./../app/page";
import Team from "./../app/team/page";
import Results from "./../app/results/page";
import Contact from "./../app/contact/page";
import EnvironmentalImpact from "../app/environmental-impact/page";
import DesignSystem from "@/app/design-system/page";
import Documentation from "@/app/documentation/page";
import Tools from "@/app/challenges/page";
import Challenges from "@/app/challenges/page";
// import Courses from "@/app/courses/page";
// import Tools from "@/app/tools/page";
// import { Route, Routes } from "react-router-dom";

export const routes = [
  
    { route: "/environmental-impact", key: "nav.environmentalImpact", page:<EnvironmentalImpact/>, active: true },
      { route: "/challenges", key: "nav.challenges", page:<Challenges/>, active: true },
    { route: "/team", key: "nav.item3", page:<Team/>, active: false },
    { route: "/results", key: "nav.results", page:<Results/>, active: true },
    { route: "/contact", key: "nav.item5", page:<Contact/>, active: false },
  ];

export const activeRoutes = routes
  .filter(route => route.active)  // Filtrar solo las rutas activas
