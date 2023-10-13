using BookMySeat.IService;
using BookMySeat.Models;
using MongoDB.Driver;
using System.Collections.Generic;

namespace BookMySeat.Services
{
    /// <summary>
    /// Service for managing Station entities in the database.
    /// </summary>
    public class StationService : IStationService
    {
        private readonly IMongoCollection<Station> _stations;

        public StationService(IBookMySeatStoreDatabaseSettings settings, IMongoClient mongoClient)
        {
            var database = mongoClient.GetDatabase(settings.DatabaseName);
            _stations = database.GetCollection<Station>(settings.StationCollectionName);
        }

        /// <summary>
        /// Creates a new Station entity in the database.
        /// </summary>
        /// <param name="station">The Station object to be created.</param>
        /// <returns>The created Station object.</returns>
        public Station Create(Station station)
        {
            _stations.InsertOne(station);
            return station;
        }

        /// <summary>
        /// Retrieves a list of all Station entities from the database.
        /// </summary>
        /// <returns>A list of Station objects.</returns>
        public List<Station> Get()
        {
            return _stations.Find(station => true).ToList();
        }

        /// <summary>
        /// Retrieves a Station entity by its StationId from the database.
        /// </summary>
        /// <param name="id">The StationId of the Station to retrieve.</param>
        /// <returns>The Station object with the specified StationId, or null if not found.</returns>
        public Station Get(string id)
        {
            return _stations.Find(station => station.StationId == id).FirstOrDefault();
        }

        /// <summary>
        /// Removes a Station entity from the database by its StationId.
        /// </summary>
        /// <param name="id">The StationId of the Station to remove.</param>
        public void Remove(string id)
        {
            _stations.DeleteOne(station => station.StationId == id);
        }

        /// <summary>
        /// Updates a Station entity in the database with the specified StationId.
        /// </summary>
        /// <param name="id">The StationId of the Station to update.</param>
        /// <param name="station">The updated Station object.</param>
        public void Update(string id, Station station)
        {
            _stations.ReplaceOne(station => station.StationId == id, station);
        }
    }
}
