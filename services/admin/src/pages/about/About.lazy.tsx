import { lazy } from "react";

export const LazyAbout = lazy(() => import("./About"));
export default LazyAbout;
