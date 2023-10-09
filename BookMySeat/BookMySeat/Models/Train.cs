using MongoDB.Bson.Serialization.Attributes;

namespace BookMySeat.Models
{
    [BsonIgnoreExtraElements]
    public class Train
    {
        [BsonId]
        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public string TrainId { get; set; } = String.Empty;
        [BsonElement("trainType")]// mongo db Accept only trainName this and .net Name Fist letter should capital
        public TrainType TrainType { get; set; } = new TrainType();
        [BsonElement("trainLength")]
        public string TraiLength { get; set; } = String.Empty;
        [BsonElement("isActive")]
        public bool IsActive { get; set; }
        [BsonElement("departureStation")]
        public Station DepartureStation { get; set; } = new Station();
        [BsonElement("arrivalStation")]
        public Station ArrivalStation { get; set; } = new Station();
        [BsonElement("firstClassSeatCount")]
        public string FirstClassSeatCount { get; set; } = String.Empty;

        [BsonElement("secondClassSeatCount")]
        public string SecondClassSeatCount { get; set; } = String.Empty;
        [BsonElement("thirdClassSeatCount")]
        public string ThirdClassSeatCount { get; set; } = String.Empty;

       [BsonElement("trainShedule")]
        public List<TrainShedule> TrainShedule { get; set; } = new List<TrainShedule>();
    }
 
}
