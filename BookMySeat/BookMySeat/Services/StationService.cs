using BookMySeat.IService;
using BookMySeat.Models;
using MongoDB.Driver;

namespace BookMySeat.Services
{
    public class StationService : IStationService
    {
        private readonly IMongoCollection<Station> _stations;

        public StationService(IBookMySeatStoreDatabaseSettings settings, IMongoClient mongoClient)
        {
            var database = mongoClient.GetDatabase(settings.DatabaseName);
            _stations = database.GetCollection<Station>(settings.StationCollectionName);
        }
        public Station Create(Station station)
        {
            _stations.InsertOne(station);
            return station;
        }

        public List<Station> Get()
        {
            return _stations.Find(station => true).ToList();

        }

        public Station Get(string id)
        {
            return _stations.Find(station => station.StationId == id).FirstOrDefault();
        }

        public void Remove(string id)
        {
            _stations.DeleteOne(station => station.StationId == id);
        }

        public void Update(string id, Station station)
        {
            _stations.ReplaceOne(station => station.StationId == id, station);
        }
    }
}
