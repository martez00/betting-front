import BetsRepository from "./BetsRepository";
import StatisticRepository from "./StatisticRepository";
import UsersRepository from "./UsersRepository";
import SportsRepository from "./SportsRepository";

const repositories = {
    bets: BetsRepository,
    statistics: StatisticRepository,
    users: UsersRepository,
    sports: SportsRepository,
};

export const RepositoryFactory = {
    get: name => repositories[name]
};
