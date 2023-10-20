using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;

namespace BookMySeat.Models
{
    /// <summary>
    /// Represents a train ticket reservation in the system.
    /// </summary>
    [BsonIgnoreExtraElements]
    public class Ticket
    {
        /// <summary>
        /// Unique identifier for the reservation.
        /// </summary>
        [BsonId]
        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public string ReservationID { get; set; } = String.Empty;

        /// <summary>
        /// List of reference IDs associated with the reservation.
        /// </summary>
        [BsonElement("referenceIDs")]
        public List<string> ReferenceIDs { get; set; } = new List<string>();

        /// <summary>
        /// Type of the ticket.
        /// </summary>
        [BsonElement("ticketType")]
        public TicketTypes TicketType { get; set; } =  new TicketTypes();

        /// <summary>
        /// Name of the person who reserved the ticket.
        /// </summary>
        [BsonElement("reservedPersonName")]
        public string ReservedPersonName { get; set; } = String.Empty;

        /// <summary>
        /// National ID of the person who reserved the ticket.
        /// </summary>
        [BsonElement("reserverNationalID")]
        public string ReserverNationalID { get; set; } = String.Empty;


        /// <summary>
        /// Number of tickets reserved in this reservation.
        /// </summary>
        [BsonElement("ticketCount")]
        public int TicketCount { get; set; }


        /// <summary>
        /// Name of the train associated with the reservation.
        /// </summary>
        [BsonElement("trainName")]
        public string TrainName { get; set; } = String.Empty;

        /// <summary>
        /// Date and time of departure for the train.
        /// </summary>
        [BsonElement("departureDate")]
        public string DepartureDate { get; set; } = String.Empty;

        /// <summary>
        /// Departure location for the train.
        /// </summary>
        [BsonElement("departureFrom")]
        public Station DepartureFrom { get; set; } = new Station();
        /// <summary>
        /// Departure Time for the train.
        /// </summary>
        [BsonElement("departureTime")]
        public string DepartureTime { get; set; } = String.Empty;
        /// <summary>
        /// Date and time of arrival for the train.
        /// </summary>
        [BsonElement("arriveTime")]
        public string ArriveTime { get; set; } = String.Empty;


        /// <summary>
        /// Arrival location for the train.
        /// </summary>
        [BsonElement("arriveTo")]
        public Station ArriveTo { get; set; } = new Station();

        /// <summary>
        /// Total price for the reservation.
        /// </summary>
        [BsonElement("totalPrice")]
        public float TotalPrice { get; set; } = 0;

        /// <summary>
        /// dipatureDistance from the station.
        /// </summary>
        [BsonElement("dipatureDistance")]
        public float DipatureDistance { get; set; } = 0;
        /// <summary>
        /// arriveDistance from the station.
        /// </summary>
        [BsonElement("arriveDistance")]
        public float ArriveDistance { get; set; } = 0;

        /// <summary>
        /// arriveDistance from the station.
        /// </summary>
        [BsonElement("isActive")]
        public Boolean IsActive { get; set; } = true;


    }
}
