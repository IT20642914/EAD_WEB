using BookMySeat.Models;

namespace BookMySeat.IService
{
    /// <summary>
    /// Interface for managing train-related operations in the BookMySeat application.
    /// </summary>
    public interface ITrainService
    {
        /// <summary>
        /// Retrieves a list of all trains.
        /// </summary>
        /// <returns>A list of train objects.</returns>
        List<Train> GetTrainList();

        /// <summary>
        /// Retrieves a train by its unique identifier.
        /// </summary>
        /// <param name="id">The unique identifier of the train to retrieve.</param>
        /// <returns>The train object with the specified ID, or null if not found.</returns>
        Train GetTrainByID(string id);

        /// <summary>
        /// Creates a new train record.
        /// </summary>
        /// <param name="train">The train object to be created.</param>
        /// <returns>The created train object.</returns>
        Train Create(Train train);

        /// <summary>
        /// Updates an existing train record.
        /// </summary>
        /// <param name="id">The unique identifier of the train to update.</param>
        /// <param name="train">The updated train object.</param>
        void Update(string id, Train train);

        /// <summary>
        /// Removes a train record by its ID.
        /// </summary>
        /// <param name="id">The unique identifier of the train to remove.</param>
        void Remove(string id);
    }
}
