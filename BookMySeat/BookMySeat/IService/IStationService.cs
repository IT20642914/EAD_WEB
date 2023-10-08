using BookMySeat.Models;

namespace BookMySeat.IService
{
    public interface IStationService
    {
        List<Station> Get();
        Station Get(string id);
        Station Create(Station station);
        void Update(string id, Station station);
        void Remove(string id);

    }
}
