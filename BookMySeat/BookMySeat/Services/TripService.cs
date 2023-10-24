using BookMySeat.Dtos;
using BookMySeat.IService;
using BookMySeat.Models;
using MongoDB.Driver;

namespace BookMySeat.Services
{
    public class TripService : ITripService
    {
        private readonly IMongoCollection<Trip> _trip;
        private readonly ITrainService _trainService;

        public TripService(IBookMySeatStoreDatabaseSettings settings, IMongoClient mongoClient) {

            var database = mongoClient.GetDatabase(settings.DatabaseName);
            _trip = database.GetCollection<Trip>(settings.TripCollectionName);

        }

        public CommonResponse CreateTrip(TripDataDtos tripData)
        {
            Console.WriteLine("Before accessing tripData.Train: " + tripData.Train);
            try
            {
                Trip existingTrip = GetTripByDateAndTrain(tripData.DepartureDate, tripData.Train);

                if (existingTrip == null)
                {
                    Train train = _trainService.GetTrainByID(tripData.Train.TrainId);

                    if (train == null)
                    {
                        return new CommonResponse
                        {
                            IsSuccess = false,
                            Message = "Train Not found in Trips",
                            StatusCode = 404,
                        };
                    }

                    Trip newTrip = new Trip
                    {
                      
                        DepartureDate = tripData.DepartureDate,
                        Train = tripData.Train,
                        AvailableSeatCount = int.Parse(train.FirstClassSeatCount) + int.Parse(train.SecondClassSeatCount) + int.Parse(train.ThirdClassSeatCount),
                        DepartureFrom = tripData.DepartureFrom,
                        ArriveTo = tripData.ArriveTo,
                        AvailableFirstClassSeatCount = int.Parse(train.FirstClassSeatCount),
                        AvailableSecondClassSeatCount = int.Parse(train.SecondClassSeatCount),
                        AvailableThirdClassSeatCount = int.Parse(train.ThirdClassSeatCount),
                        SeatCount = int.Parse(train.FirstClassSeatCount) + int.Parse(train.SecondClassSeatCount) + int.Parse(train.ThirdClassSeatCount),
                    };

                    _trip.InsertOne(newTrip);

                    return new CommonResponse
                    {
                        IsSuccess = true,
                        Message = "Trip Created",
                        StatusCode = 200,
                    };
                }
                else
                {
                    existingTrip.AvailableSeatCount -= tripData.TicketCount;

                    if (tripData.TicketType.TicketTypeID == 1)
                    {
                        existingTrip.AvailableFirstClassSeatCount -= tripData.TicketCount;
                    }
                    else if (tripData.TicketType.TicketTypeID == 2)
                    {
                        existingTrip.AvailableSecondClassSeatCount -= tripData.TicketCount;
                    }
                    else
                    {
                        existingTrip.AvailableThirdClassSeatCount -= tripData.TicketCount;
                    }

                    UpdateTrip(existingTrip);

                    return new CommonResponse
                    {
                        IsSuccess = true,
                        Message = "Trip Updated",
                        StatusCode = 201,
                    };
                }
            }
            catch (Exception ex)
            {
                // Handle the exception here, you can log it or perform any other necessary actions
                CommonResponse errorResponse = new CommonResponse
                {
                    IsSuccess = false,
                    Message = "An error occurred: " + ex.Message,
                    StatusCode = 500, // You can choose an appropriate status code
                };
                return errorResponse;
            }


        }

        public List<Trip> GetTripList()
        {
           return _trip.Find(Trip => true).ToList();

        }

        public void UpdateTrip(Trip trip)
        {
             _trip.ReplaceOne(item => item.TripId == trip.TripId, trip);
        }



        public Trip GetTripByDateAndTrain(string date, TrainDetails train)
        {
            var allTrips = GetTripList(); // Get a list of all trips

            var matchingTrips = allTrips.Where(trip =>
            {
                // Check if DepartureDate matches
                bool isDepartureDateMatch = trip.DepartureDate == date;

                // Check if the Train matches
                bool isTrainMatch = AreTrainsEqual(trip.Train, train);

                return isDepartureDateMatch && isTrainMatch;
            }).ToList();

            if (matchingTrips.Count > 0)
            {
                // Handle matching trips
                // You can return matchingTrips or perform other actions here


                return matchingTrips[0];

            }
            else
            {
                return null;

            }


        }

        private static bool AreTrainsEqual(TrainDetails train1, TrainDetails train2)
        {
            // Define your logic for comparing TrainDetails here
            return train1.TrainId == train2.TrainId && train1.TrainName == train2.TrainName;
        }

      
    }
}
