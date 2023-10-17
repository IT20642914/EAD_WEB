using BookMySeat.Dtos;
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
            try
            {
                return _travelers.Find(traveler => traveler.TravelerId == id).FirstOrDefault();
            }
            catch (Exception ex)
            {
                // Handle the exception, log the error, or return an appropriate response.
                // For example:
                Console.WriteLine("Error in Get: " + ex.Message);
                return null; // You might want to return an error response instead of null.
            }

        }

        public LoginResult LoginByNic(string nic, string passWord)
        {
            var result = new LoginResult();

            var filter = Builders<Traveler>.Filter.Eq("nICNumber", nic);
                   Traveler traveler = _travelers.Find(filter).FirstOrDefault();

            if (traveler != null)
            {
                // Extract the hashed password from the Traveler object
                string hashedPassword = traveler.PassWord;

                // You should use a secure password hashing library (e.g., BCrypt) to verify the password
                // For simplicity, we'll use a basic string comparison here, but it's not recommended in production
                if (passWord == hashedPassword)
                {
                    result.IsSuccess = true;
                    result.Traveler = traveler;
                    result.StatusCode = 200;
 
                }
                else
                {
                    // Passwords don't match, handle the error accordingly
                    // Example: DisplayErrorMessage("Incorrect password");  result.IsSuccess = false;
                    result.IsSuccess = false;
                    result.ErrorMessage = "Incorrect password";
                    result.StatusCode = 401; // HTTP status code 401 (Unauthorized)
                 
                }
            }
            else
            {
                // User with the given NIC not found, handle the error accordingly
                // Example: DisplayErrorMessage("User not found");
                result.IsSuccess = false;
                result.ErrorMessage = "User not found";
                result.StatusCode = 404;
                ;
            }

            return result;
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
