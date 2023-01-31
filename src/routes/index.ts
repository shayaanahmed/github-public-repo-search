import { Router } from "express";
import repositoryRouter from "./repository";

export const registerRoutes = () => {
    const router = Router();

    router.use('/repository', repositoryRouter);

    return router;
}
