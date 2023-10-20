using BookMySeat.IService;
using BookMySeat.Models;
using MongoDB.Driver;
using static System.Collections.Specialized.BitVector32;
using System.Linq;

namespace BookMySeat.Services
{
    /// <summary>
    /// Service for managing train-related operations in the BookMySeat application.
    /// </summary>
    public class TrainService : ITrainService
    {
        private readonly IMongoCollection<Train> _train;

        public TrainService(IBookMySeatStoreDatabaseSettings settings, IMongoClient mongoClient)
        {
            // Initialize the TrainService with database settings and a MongoDB client.
            var database = mongoClient.GetDatabase(settings.DatabaseName);
            _train = database.GetCollection<Train>(settings.TrainCollectionName);
        }

        /// <summary>
        /// Creates a new train record in the database.
        /// </summary>
        /// <param name="train">The train object to be created.</param>
        /// <returns>The created train object.</returns>
        public Train Create(Train train)
        {
            _train.InsertOne(train);
            return train;
        }

        /// <summary>
        /// Retrieves a list of all trains from the database.
        /// </summary>
        /// <returns>A list of train objects.</returns>
        public List<Train> GetTrainList()
        {
            return _train.Find(train => true).ToList();
        }

        /// <summary>
        /// Retrieves a train by its unique identifier.
        /// </summary>
        /// <param name="id">The unique identifier of the train to retrieve.</param>
        /// <returns>The train object with the specified ID, or null if not found.</returns>
        public Train GetTrainByID(string id)
        {
            return _train.Find(train => train.TrainId == id).FirstOrDefault();
        }

        /// <summary>
        /// Removes a train record from the database by its ID.
        /// </summary>
        /// <param name="id">The unique identifier of the train to remove.</param>
        public void Remove(string id)
        {
            _train.DeleteOne(train => train.TrainId == id);
        }

        /// <summary>
        /// Updates an existing train record in the database.
        /// </summary>
        /// <param name="id">The unique identifier of the train to update.</param>
        /// <param name="train">The updated train object.</param>
        public void Update(string id, Train train)
        {
            _train.ReplaceOne(train => train.TrainId == id, train);
        }




        public List<Train> GetAvilibaleTrains(string departueStationId, string arriveStationId)
        {
            var allTrains = GetTrainList();

            // Filter the list of trains based on their schedules
            var availableTrains = allTrains.Where(train =>
            {
                var schedule = train.TrainShedule;
                if (schedule != null && schedule.Any())
                {
                    var departureStationFound = schedule.Any(s => s.StationId == departueStationId);
                    var arriveStationFound = schedule.Any(s => s.StationId == arriveStationId);

                    return departureStationFound && arriveStationFound;
                }

                return false;
            }).ToList();

            return availableTrains;
        }
    }
}
