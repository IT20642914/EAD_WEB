using BookMySeat.IService;
using BookMySeat.Models;
using MongoDB.Driver;

namespace BookMySeat.Services
{
    public class Trip : ITrip
    {
        private readonly IMongoCollection<Traveler> _trip;

        public Trip(IBookMySeatStoreDatabaseSettings settings, IMongoClient mongoClient) {

            var database = mongoClient.GetDatabase(settings.DatabaseName);
            _trip = database.GetCollection<Trip>(settings.TripCollectionName );

        }

        public Models.Trip Create(Models.Trip trip)
        {
            throw new NotImplementedException();
        }

        public List<Models.Trip> GetTipList()
        {
            throw new NotImplementedException();
        }
    }
}
