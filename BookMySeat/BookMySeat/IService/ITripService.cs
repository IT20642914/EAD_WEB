using BookMySeat.Dtos;
using BookMySeat.Models;

namespace BookMySeat.IService
{
    public interface ITripService
    {
        /// <summary>
        /// Retrieves a list of all trains.
        /// </summary>
        /// <returns>A list of train objects.</returns>
        List<Trip> GetTripList();

        /// <summary>
        /// Creates a new traveler record.
        /// </summary>
        /// <param name="trip">The traveler object to be created.</param>
        /// <returns>The created traveler object.</returns>

        CommonResponse CreateTrip(TripDataDtos trip);

        /// <summary>
        /// Creates a new traveler record.
        /// </summary>
        /// <param name="trip">The traveler object to be created.</param>
        /// <returns>The created traveler object.</returns>

        void UpdateTrip(Trip trip);

        Trip GetTripByDateAndTrain(string date, TrainDetails train);
    }
}
