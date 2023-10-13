using BookMySeat.Models;

namespace BookMySeat.IService
{
    /// <summary>
    /// Interface for managing traveler-related operations in the BookMySeat application.
    /// </summary>
    public interface ITravelerService
    {
        /// <summary>
        /// Retrieves a list of all travelers.
        /// </summary>
        /// <returns>A list of traveler objects.</returns>
        List<Traveler> Get();

        /// <summary>
        /// Retrieves a traveler by their unique identifier.
        /// </summary>
        /// <param name="id">The unique identifier of the traveler to retrieve.</param>
        /// <returns>The traveler object with the specified ID, or null if not found.</returns>
        Traveler Get(string id);

        /// <summary>
        /// Creates a new traveler record.
        /// </summary>
        /// <param name="traveler">The traveler object to be created.</param>
        /// <returns>The created traveler object.</returns>
        Traveler Create(Traveler traveler);

        /// <summary>
        /// Updates an existing traveler record.
        /// </summary>
        /// <param name="id">The unique identifier of the traveler to update.</param>
        /// <param name="traveler">The updated traveler object.</param>
        void Update(string id, Traveler traveler);

        /// <summary>
        /// Removes a traveler record by their ID.
        /// </summary>
        /// <param name="id">The unique identifier of the traveler to remove.</param>
        void Remove(string id);
    }
}
