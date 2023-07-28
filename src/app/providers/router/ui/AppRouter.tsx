import { getUserAuthData } from 'entities/User';
import { Suspense, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';

export default function AppRouter() {
    const isAuth = useSelector(getUserAuthData);

    const routes = useMemo(() => Object.values(routeConfig).filter((route) => {
        if (route.authOnly && !isAuth) {
            return false;
        }
        return true;
    }), [isAuth]);

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {routes.map(({ element, path }) => (
                    <Route
                        key={path}
                        element={(
                            <Suspense fallback={<PageLoader />}>
                                <div className="page-wrapper">{element}</div>
                            </Suspense>
                        )}
                        path={path}
                    />
                ))}
            </Routes>
        </Suspense>
    );
}
