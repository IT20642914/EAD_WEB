using BookMySeat.IService;
using BookMySeat.Models;
using MongoDB.Driver;

namespace BookMySeat.Services
{
    public class TravelerService : ITravelerService
    {
        private readonly IMongoCollection<Traveler> _travelers;

        public TravelerService(IBookMySeatStoreDatabaseSettings settings, IMongoClient mongoClient)
        {
            var database = mongoClient.GetDatabase(settings.DatabseName);
            _travelers = database.GetCollection<Traveler>(settings.TravelerCollectionName);
        }
        public Traveler Create(Traveler traveler)
        {
            _travelers.InsertOne(traveler);
            return traveler;
        }

        public List<Traveler> Get()
        {
            return _travelers.Find(traveler => true).ToList();

        }

        public Traveler Get(string id)
        {
            return _travelers.Find(traveler => traveler.TravelerId == id).FirstOrDefault();
        }

        public void Remove(string id)
        {
            _travelers.DeleteOne(traveler => traveler.TravelerId == id);
        }

        public void Update(string id, Traveler traveler)
        {
            _travelers.ReplaceOne(traveler => traveler.TravelerId == id, traveler);
        }
    }
}

