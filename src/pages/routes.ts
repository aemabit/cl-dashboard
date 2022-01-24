export enum Pages {
    Home = "home",
    Dashboard = "dashboard",
}

type RouteByIdParams = {
    id?: string;
};

export const pages = {
    [Pages.Dashboard]: {
        pattern: "/user/dashboard/:id",
        url: ({ id }: RouteByIdParams = {}) => `/user/dashboard/${id || ""}`,
    },
    [Pages.Home]: {
        pattern: "/",
        url: "/",
    },
};
