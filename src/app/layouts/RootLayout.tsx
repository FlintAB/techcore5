import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";

import { ROUTES } from "@/shared/config/routes";
import { PageLoader } from "@/shared/ui/page-loader";

import styles from './RootLayout.module.css'

export const RootLayout = () => (
   <div className={styles.layout}>
      <header className={styles.header}>
         <div className={styles.headerContent}>
            <NavLink
               className={styles.logo}
               to={ROUTES.products}
               aria-label="Перейти в каталог"
            >
               TECHCORE5
            </NavLink>

            <nav className={styles.navigation} aria-label="Основная навигация">
               <NavLink
                  className={({ isActive }) =>
                     `${styles.navigationLink} ${
                        isActive ? styles.activeLink : ''
                     }`
                  }
                  to={ROUTES.products}
               >
                  Каталог
               </NavLink>
            </nav>
         </div>
      </header>

      <main className={styles.main}>
         <Suspense fallback={<PageLoader />}>
            <Outlet />
         </Suspense>
      </main>
   </div>
)