// import { Redirect } from "react-router";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./Dashboard";
import HomePage from "./Home";
import { pages } from "./routes";

const AppPages = () => {
    const authorized = true;

    const AuthPages = () => (
        <Routes>
            <Route path={pages.home.pattern} element={<HomePage />} />
            {/* <Redirect to={pages.home.pattern} /> */}
        </Routes>
    );

    const MainPages = () => (
        <Routes>
            <Route path={pages.home.pattern} element={<HomePage />} />
            <Route path={pages.dashboard.pattern} element={<DashboardPage />} />
            {/* <Redirect to={pages.home.pattern} /> */}
        </Routes>
    );

    return (
        <BrowserRouter>
            {authorized ? <MainPages /> : <AuthPages />}
        </BrowserRouter>
    );
};

export default AppPages;
