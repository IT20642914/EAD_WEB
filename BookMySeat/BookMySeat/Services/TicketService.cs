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

        public TicketService(IBookMySeatStoreDatabaseSettings settings, IMongoClient mongoClient)
        {
            var database = mongoClient.GetDatabase(settings.DatabaseName);
            _ticket = database.GetCollection<Ticket>(settings.TicketCollectionName);
        }

  
        /// <summary>
        /// Creates a new Ticket entity in the database.
        /// </summary>
        /// <param name="ticket">The Ticket object to be created.</param>
        /// <returns>The created Ticket object.</returns>
        public Ticket Create(Ticket ticket)
        {
            Random random = new Random();
            for (int i = 0; i < ticket.TicketCount; i++)
            {
                ticket.ReservationIDs.Add(random.Next().ToString());
            }

            _ticket.InsertOne(ticket);


            return ticket;
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
