export enum GITHUBRequestType {
  GET = "GET",
}

export enum GITHUBRepositorySortOpts {
  STARS = "stars",
  FORKS = "forks",
  HELP_WANTED_ISSUES = "help-wanted-issues",
  UPDATED = "updated",
}

export enum Operators {
  EQUALS = "EQ",
  GREATER_THAN_EQUALS = "GTE",
  GREATER_THAN = "GT",
  LESS_THAN_EQUALS = "LTE",
  LESS_THAN = "LT",
}

export enum GITHUBRepositoryQueryOps {
  EQ = ":",
  GTE = ":>=",
  GT = ":>",
  LTE = ":<=",
  LT = "<",
}

export type GITHUBRequest = {
  endpoint: string;
  params: string;
  method: GITHUBRequestType;
};

export type GITHUBRepositorySearchParams = {
  sort?: GITHUBRepositorySortOpts;
  per_page?: number;
  query: any;
};
