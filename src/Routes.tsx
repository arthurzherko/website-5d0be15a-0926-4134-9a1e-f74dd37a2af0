import { Routes as RouterRoutes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Silly } from "./pages/silly";
import { VerySilly } from "./pages/very-silly";
import { MegaSilly } from "./pages/mega-silly";

export function Routes() {
  return (
    <RouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/silly" element={<Silly />} />
      <Route path="/very-silly" element={<VerySilly />} />
      <Route path="/mega-silly" element={<MegaSilly />} />
    </RouterRoutes>
  );
}