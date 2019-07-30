import BetsRepository from "./BetsRepository";
import StatisticRepository from "./StatisticRepository";
import UsersRepository from "./UsersRepository";

const repositories = {
    bets: BetsRepository,
    statistics: StatisticRepository,
    users: UsersRepository
};

export const RepositoryFactory = {
    get: name => repositories[name]
};
