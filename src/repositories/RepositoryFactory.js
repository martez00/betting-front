import BetsRepository from "./BetsRepository";
import StatisticRepository from "./StatisticRepository";

const repositories = {
    bets: BetsRepository,
    statistics: StatisticRepository
};

export const RepositoryFactory = {
    get: name => repositories[name]
};
