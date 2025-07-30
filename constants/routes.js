import Results from "./../app/results/page";
import EnvironmentalImpact from "../app/environmental-impact/page";
import Challenges from "@/app/challenges/page";

export const routes = [
  
    { route: "/environmental-impact", key: "nav.environmentalImpact", page:<EnvironmentalImpact/>, active: true },
    { route: "/challenges", key: "nav.challenges", page:<Challenges/>, active: true },
    { route: "/results", key: "nav.results", page:<Results/>, active: true },
  ];

export const activeRoutes = routes
  .filter(route => route.active)  // Filtrar solo las rutas activas
