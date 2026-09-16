import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

import { LoginPage } from "@/pages/login";
import { NotFoundPage } from "@/pages/not-found";
import { ROUTES } from "@/shared/config/routes";
import { RouteErrorBoundary } from "@/shared/ui/route-error";

import { RootLayout } from "../layouts/RootLayout";

const ProductsPage = lazy(() =>
   import("@/pages/products").then((m) => ({ default: m.ProductsPage }))
);

const ProductDetailsPage = lazy(() =>
   import("@/pages/product-details").then((m) => ({ default: m.ProductDetailsPage }))
);

export const router = createBrowserRouter([
   {
      path: ROUTES.login,
      element: <LoginPage />,
      errorElement: <RouteErrorBoundary />,
   },
   {
      element: <RootLayout />,
      children: [
         { index: true, element: <Navigate to={ROUTES.products} replace />},
         {
            path: ROUTES.products,
            element: <ProductsPage />,
            errorElement: <RouteErrorBoundary />,
         },
         {
            path: ROUTES.productDetails,
            element: <ProductDetailsPage />,
            errorElement: <RouteErrorBoundary />,
         },
         { path: "*", element: <NotFoundPage /> },
      ],
   },
]);