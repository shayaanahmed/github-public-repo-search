import { fetchPublicRepositories } from "../services/github";
import { Operators } from "../utilities/types";

export const getRepositories = async (req, res) => {
  const { sort, perPage = undefined, language = undefined, created } = req.body;

  const repositories = await fetchPublicRepositories({
    sort: sort || undefined,
    per_page: perPage,
    query: {
      language: {
        value: language,
        op: Operators.EQUALS,
      },
      created: {
        value: created,
        op: Operators.GREATER_THAN,
      },
    },
  });
  res.json(repositories);
};
