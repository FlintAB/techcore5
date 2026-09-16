import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";

import { PageLoader } from "@/shared/ui/page-loader";

import { router } from "./router/router";

export const App = () => (
  <Suspense fallback={<PageLoader />}>
    <RouterProvider router={router} />
  </Suspense>
);
