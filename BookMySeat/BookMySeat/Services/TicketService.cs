using BookMySeat.Dtos;
using BookMySeat.IService;
using BookMySeat.Models;
using MongoDB.Driver;
using System.Collections.Generic;

namespace BookMySeat.Services
{
    /// <summary>
    /// Service for managing Ticket entities in the database.
    /// </summary>
    public class TicketService : ITicketService
    {
        private readonly IMongoCollection<Ticket> _ticket;
        private readonly ITripService _tripService;

        public TicketService (ITripService tripService, IMongoClient mongoClient, IBookMySeatStoreDatabaseSettings settings)
        {
            var database = mongoClient.GetDatabase(settings.DatabaseName);
            _ticket = database.GetCollection<Ticket>(settings.TicketCollectionName);
            _tripService = tripService;
        }
     


        /// <summary>
        /// Creates a new Ticket entity in the database.
        /// </summary>
        /// <param name="ticket">The Ticket object to be created.</param>
        /// <returns>The created Ticket object.</returns>
        public TicketBookingResults Create(Ticket ticket)
        {
            try
            {
                if (ticket == null)
                {
                    return new TicketBookingResults
                    {
                        IsSuccess = false,
                        Message = "Invalid ticket data",
                        StatusCode = 400,
                    };
                }

                Random random = new Random();
                if (ticket.ReservationIDs == null)
                {
                    ticket.ReservationIDs = new List<string>();
                }
                for (int i = 0; i < ticket.TicketCount; i++)
                {
                    ticket.ReservationIDs.Add(random.Next().ToString());
                }

                TripDataDtos tripData = new TripDataDtos
                {
                    DepartureDate = ticket.DepartureDate,
                    Train = ticket.Train,
                    TicketType = ticket.TicketType,
                    TicketCount = ticket.TicketCount,
                    DepartureFrom = ticket.DepartureFrom,
                    ArriveTo = ticket.ArriveTo,
                };
                if (tripData.Train == null || tripData.TicketType == null)
                {
                    return new TicketBookingResults
                    {
                        IsSuccess = false,
                        Message = "Invalid trip data",
                        StatusCode = 400,
                    };
                }

                if (_tripService == null)
                {
                    return new TicketBookingResults
                    {
                        IsSuccess = false,
                        Message = "Trip service is not initialized",
                        StatusCode = 500, // You can choose an appropriate status code
                    };
                }

                CommonResponse response = _tripService.CreateTrip(tripData);

                if (response.IsSuccess)
                {
                    _ticket.InsertOne(ticket);
                }

                TicketBookingResults response2 = new TicketBookingResults
                {
                    IsSuccess = response.IsSuccess,
                    StatusCode = response.StatusCode,
                    Message = response.Message,
                };

                return response2;
            }
            catch (Exception ex)
            {
                // Handle the exception here, you can log it or perform any other necessary actions
                TicketBookingResults errorResponse = new TicketBookingResults
                {
                    IsSuccess = false,
                    Message = ex.Message
                };
                return errorResponse;
            }
        }


        /// <summary>
        /// Retrieves a Ticket entity by its ReservationID from the database.
        /// </summary>
        /// <param name="id">The ReservationID of the Ticket to retrieve.</param>
        /// <returns>The Ticket object with the specified ReservationID, or null if not found.</returns>
        public Ticket GetTicketDetailsByID(string id)
        {
            return _ticket.Find(ticket => ticket.ReferenceID == id).FirstOrDefault();
        }

        /// <summary>
        /// Retrieves a list of all Ticket entities from the database.
        /// </summary>
        /// <returns>A list of Ticket objects.</returns>
        public List<Ticket> GetTicketList()
        {
            return _ticket.Find(train => true).ToList();
        }

        /// <summary>
        /// Removes a Ticket entity from the database by its ReservationID.
        /// </summary>
        /// <param name="id">The ReservationID of the Ticket to remove.</param>
        public void Remove(string id)
        {
            _ticket.DeleteOne(train => train.ReferenceID == id);
        }

        /// <summary>
        /// Updates a Ticket entity in the database with the specified ReservationID.
        /// </summary>
        /// <param name="id">The ReservationID of the Ticket to update.</param>
        /// <param name="ticket">The updated Ticket object.</param>
        public void Update(string id, Ticket ticket)
        {
            _ticket.ReplaceOne(train => train.ReferenceID == id, ticket);
        }

        public CommonResponse CancleBooking(string id)
        {
            var filter = Builders<Ticket>.Filter.Eq("ReservationID", id);
            var update = Builders<Ticket>.Update.Set("isActive", false);

            var result = _ticket.UpdateOne(filter, update);
             var response = new CommonResponse();

            if (result.ModifiedCount == 1)
            {

                response.IsSuccess = true;
                response.Message = "Booking Cancele";
                response.StatusCode = 200;

              
            }
            else
            {
                response.IsSuccess = false;
                response.Message = "Booking Cancele Failed";
                response.StatusCode = 403;

         

            }
            return response;

        }

    }
}
