using BookMySeat.Models;

namespace BookMySeat.IService
{
    public interface ITrip
    {
        /// <summary>
        /// Retrieves a list of all trains.
        /// </summary>
        /// <returns>A list of train objects.</returns>
        List<Trip> GetTipList();

        /// <summary>
        /// Creates a new traveler record.
        /// </summary>
        /// <param name="trip">The traveler object to be created.</param>
        /// <returns>The created traveler object.</returns>
        Trip Create(Trip trip);
    }
}
