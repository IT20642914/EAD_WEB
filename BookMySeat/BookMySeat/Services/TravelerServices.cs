using BookMySeat.IService;
using BookMySeat.Models;
using MongoDB.Driver;
using System.Collections.Generic;

namespace BookMySeat.Services
{
    /// <summary>
    /// Service for managing Traveler entities in the database.
    /// </summary>
    public class TravelerService : ITravelerService
    {
        private readonly IMongoCollection<Traveler> _travelers;

        public TravelerService(IBookMySeatStoreDatabaseSettings settings, IMongoClient mongoClient)
        {
            var database = mongoClient.GetDatabase(settings.DatabaseName);
            _travelers = database.GetCollection<Traveler>(settings.TravelerCollectionName);
        }

        /// <summary>
        /// Creates a new Traveler entity in the database.
        /// </summary>
        /// <param name="traveler">The Traveler object to be created.</param>
        /// <returns>The created Traveler object.</returns>
        public Traveler Create(Traveler traveler)
        {
            _travelers.InsertOne(traveler);
            return traveler;
        }

        /// <summary>
        /// Retrieves a list of all Traveler entities from the database.
        /// </summary>
        /// <returns>A list of Traveler objects.</returns>
        public List<Traveler> Get()
        {
            return _travelers.Find(traveler => true).ToList();
        }

        /// <summary>
        /// Retrieves a Traveler entity by its ID from the database.
        /// </summary>
        /// <param name="id">The ID of the Traveler to retrieve.</param>
        /// <returns>The Traveler object with the specified ID, or null if not found.</returns>
        public Traveler Get(string id)
        {
            return _travelers.Find(traveler => traveler.TravelerId == id).FirstOrDefault();
        }

        /// <summary>
        /// Removes a Traveler entity from the database by its ID.
        /// </summary>
        /// <param name="id">The ID of the Traveler to remove.</param>
        public void Remove(string id)
        {
            _travelers.DeleteOne(traveler => traveler.TravelerId == id);
        }

        /// <summary>
        /// Updates a Traveler entity in the database with the specified ID.
        /// </summary>
        /// <param name="id">The ID of the Traveler to update.</param>
        /// <param name="traveler">The updated Traveler object.</param>
        public void Update(string id, Traveler traveler)
        {
            _travelers.ReplaceOne(traveler => traveler.TravelerId == id, traveler);
        }
    }
}
