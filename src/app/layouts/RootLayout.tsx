import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";

import { ROUTES } from "@/shared/config/routes";
import { PageLoader } from "@/shared/ui/page-loader";

export const RootLayout = () => (
   <>
      <header>
         <nav>
            <NavLink to={ROUTES.products}>
               Каталог
            </NavLink>
         </nav>
      </header>

      <main>
         <Suspense fallback={<PageLoader/>}>
            <Outlet />
         </Suspense>
      </main>
   </>
)