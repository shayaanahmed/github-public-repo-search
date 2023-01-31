import { Router } from "express";
import { repository } from "../handlers";

const repositoryRouter = Router();

const { getRepositories } = repository;

repositoryRouter.post("/", getRepositories);

export default repositoryRouter;
