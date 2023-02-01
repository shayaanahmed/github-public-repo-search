import { fetchPublicRepositories } from "../services/github";
import { Operators } from "../utilities/types";

export const getRepositories = async (req, res) => {
  const DEFAULT_PER_PAGE = 10;
  const DEFAULT_CREATED = new Date().toISOString().split('T')[0];

  const {
    sort,
    perPage: perPage = DEFAULT_PER_PAGE,
    language = undefined,
    created,
  } = req.body;

  const repositories = await fetchPublicRepositories({
    sort: sort || undefined,
    per_page: perPage,
    query: {
      language: {
        value: language,
        op: Operators.EQUALS,
      },
      created: {
        value: created ? created : DEFAULT_CREATED,
        op: created ? Operators.GREATER_THAN : Operators.LESS_THAN,
      },
    },
  });
  res.json(repositories);
};
