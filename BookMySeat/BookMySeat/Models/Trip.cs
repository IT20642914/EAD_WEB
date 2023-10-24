using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace BookMySeat.Models
{    /// </summary>
    [BsonIgnoreExtraElements]
    public class Trip
    {
        [BsonId]
        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public string TripId { get; set; } = String.Empty;

        [BsonElement("departureDate")]
        public string DepartureDate { get; set; } = String.Empty;

        [BsonElement("train")]
        public TrainDetails Train { get; set; } = new TrainDetails();

        [BsonElement("seatCount")]
        public int SeatCount { get; set; }

        [BsonElement("availableSeatCount")]
        public int AvailableSeatCount { get; set; }


        [BsonElement("availableFirstClassSeatCount")]
        public int AvailableFirstClassSeatCount { get; set; } = 0;
        [BsonElement("availableSecondClassSeatCount")]
        public int AvailableSecondClassSeatCount { get; set; }= 0;

        [BsonElement("availableThirdClassSeatCount")]
        public int AvailableThirdClassSeatCount { get; set; } = 0;

        

        /// <summary>
        /// Departure location for the train.
        /// </summary>
        [BsonElement("departureFrom")]
        public Station DepartureFrom { get; set; } = new Station();

        /// <summary>
        /// Arrival location for the train.
        /// </summary>
        [BsonElement("arriveTo")]
        public Station ArriveTo { get; set; } = new Station();
    }
}
