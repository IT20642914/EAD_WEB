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
        public string TicketType { get; set; } = String.Empty;

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
        /// List of individual ticket IDs associated with the reservation.
        /// </summary>
        [BsonElement("ticketIDs")]
        public List<string> TicketIDs { get; set; }

        /// <summary>
        /// Number of tickets reserved in this reservation.
        /// </summary>
        [BsonElement("ticketCount")]
        public int TicketCount { get; set; }

        /// <summary>
        /// List of seat numbers for the tickets in this reservation.
        /// </summary>
        [BsonElement("seatNumbers")]
        public List<string> SeatNumbers { get; set; } = new List<string>();

        /// <summary>
        /// Name of the train associated with the reservation.
        /// </summary>
        [BsonElement("trainName")]
        public string TrainName { get; set; } = String.Empty;

        /// <summary>
        /// Date and time of departure for the train.
        /// </summary>
        [BsonElement("departureFromDateAndTime")]
        public string DepartureFromDateAndTime { get; set; } = String.Empty;

        /// <summary>
        /// Departure location for the train.
        /// </summary>
        [BsonElement("departureFrom")]
        public string DepartureFrom { get; set; } = String.Empty;

        /// <summary>
        /// Date and time of arrival for the train.
        /// </summary>
        [BsonElement("arriveDateAndTime")]
        public string ArriveDateAndTime { get; set; } = String.Empty;

        /// <summary>
        /// Arrival location for the train.
        /// </summary>
        [BsonElement("arriveTo")]
        public string ArriveTo { get; set; } = String.Empty;

        /// <summary>
        /// Total price for the reservation.
        /// </summary>
        [BsonElement("totalPrice")]
        public int TotalPrice { get; set; }
    }
}
