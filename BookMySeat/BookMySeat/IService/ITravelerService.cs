using BookMySeat.Models;

namespace BookMySeat.IService
{
    public interface ITravelerService
    {
        List<Traveler> Get();
        Traveler Get(string id);
        Traveler Create(Traveler traveler);
        void Update(string id, Traveler traveler);
        void Remove(string id);
    }
}
