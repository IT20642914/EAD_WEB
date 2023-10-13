using BookMySeat.IService;
using BookMySeat.Models;
using MongoDB.Driver;
using static System.Collections.Specialized.BitVector32;

namespace BookMySeat.Services
{
    public class TrainService : ITrainService
    {
        private readonly IMongoCollection<Train> _train;

        public TrainService(IBookMySeatStoreDatabaseSettings settings, IMongoClient mongoClient) {
            var database = mongoClient.GetDatabase(settings.DatabseName);
            _train = database.GetCollection<Train>(settings.TrainCollectionName);
        }
        public Train Create(Train train)
        {
            _train.InsertOne(train);
            return train;
        }

        public List<Train> GetTrainList()
        {
            return _train.Find(train => true).ToList();
        }

        public Train GetTrainByID(string id)
        {
            return _train.Find(train => train.TrainId == id).FirstOrDefault();
        }

        public void Remove(string id)
        {
           _train.DeleteOne(train => train.TrainId == id);
        }

        public void Update(string id, Train train)
        {
            _train.ReplaceOne(train => train.TrainId == id, train);
        }
    }
}
