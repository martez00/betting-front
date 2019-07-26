import BetsRepository from "./BetsRepository";

const repositories = {
    bets: BetsRepository,
};

export const RepositoryFactory = {
    get: name => repositories[name]
};
