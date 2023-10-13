using BookMySeat.Models;

namespace BookMySeat.IService
{
    /// <summary>
    /// Interface for managing station-related operations in the BookMySeat application.
    /// </summary>
    public interface IStationService
    {
        /// <summary>
        /// Retrieves a list of all stations.
        /// </summary>
        /// <returns>A list of station objects.</returns>
        List<Station> Get();

        /// <summary>
        /// Retrieves a station by its unique identifier.
        /// </summary>
        /// <param name="id">The unique identifier of the station to retrieve.</param>
        /// <returns>The station object with the specified ID, or null if not found.</returns>
        Station Get(string id);

        /// <summary>
        /// Creates a new station record.
        /// </summary>
        /// <param name="station">The station object to be created.</param>
        /// <returns>The created station object.</returns>
        Station Create(Station station);

        /// <summary>
        /// Updates an existing station record.
        /// </summary>
        /// <param name="id">The unique identifier of the station to update.</param>
        /// <param name="station">The updated station object.</param>
        void Update(string id, Station station);

        /// <summary>
        /// Removes a station record by its ID.
        /// </summary>
        /// <param name="id">The unique identifier of the station to remove.</param>
        void Remove(string id);
    }
}
