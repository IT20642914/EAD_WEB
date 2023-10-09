using BookMySeat.Models;

namespace BookMySeat.IService
{
    public interface ITrainService
    {
        List<Train> GetTrainList();
        Train GetTrainByID(string id);
        Train Create(Train train);
        void Update(string id, Train train);
        void Remove(string id);
       
    }
}
