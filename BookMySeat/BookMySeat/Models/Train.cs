using MongoDB.Bson.Serialization.Attributes;

namespace BookMySeat.Models
{
    /// <summary>
    /// Represents a train in the system.
    /// </summary>
    [BsonIgnoreExtraElements]
    public class Train
    {
        /// <summary>
        /// Gets or sets the unique identifier for the train.
        /// </summary>
        [BsonId]
        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public string TrainId { get; set; } = String.Empty;

        /// <summary>
        /// Gets or sets the name of the train.
        /// </summary>
        [BsonElement("trainName")]
        public string TrainName { get; set; } = String.Empty;

        /// <summary>
        /// Gets or sets the type of the train.
        /// </summary>
        [BsonElement("trainType")]
        public TrainType TrainType { get; set; } = new TrainType();

        /// <summary>
        /// Gets or sets the length of the train.
        /// </summary>
        [BsonElement("trainLength")]
        public string TrainLength { get; set; } = String.Empty;

        /// <summary>
        /// Gets or sets a flag indicating whether the train is active.
        /// </summary>
        [BsonElement("isActive")]
        public bool IsActive { get; set; }

        /// <summary>
        /// Gets or sets the departure station of the train.
        /// </summary>
        [BsonElement("departureStation")]
        public Station DepartureStation { get; set; } = new Station();

        /// <summary>
        /// Gets or sets the arrival station of the train.
        /// </summary>
        [BsonElement("arrivalStation")]
        public Station ArrivalStation { get; set; } = new Station();

        /// <summary>
        /// Gets or sets the count of first-class seats on the train.
        /// </summary>
        [BsonElement("firstClassSeatCount")]
        public string FirstClassSeatCount { get; set; } = String.Empty;

        /// <summary>
        /// Gets or sets the count of second-class seats on the train.
        /// </summary>
        [BsonElement("secondClassSeatCount")]
        public string SecondClassSeatCount { get; set; } = String.Empty;

        /// <summary>
        /// Gets or sets the count of third-class seats on the train.
        /// </summary>
        [BsonElement("thirdClassSeatCount")]
        public string ThirdClassSeatCount { get; set; } = String.Empty;

        /// <summary>
        /// Gets or sets the schedule of the train.
        /// </summary>
        [BsonElement("trainShedule")]
        public List<TrainShedule> TrainShedule { get; set; } = new List<TrainShedule>();
    }
}
