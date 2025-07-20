import { type RouteConfig, index, route } from "@react-router/dev/routes";
import path from "path";

export default [
    index("routes/home.tsx"),
    route('/auth','routes/auth.tsx'),
    route('/upload', 'routes/upload.tsx'),
    route('/resume/:id','routes/resume.tsx')
] satisfies RouteConfig;
