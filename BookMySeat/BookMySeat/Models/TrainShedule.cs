using MongoDB.Bson.Serialization.Attributes;

namespace BookMySeat.Models
{
    public class TrainShedule
    {
        [BsonElement("stationId")]
        public string StationId { get; set; } = String.Empty;
        [BsonElement("stationName")]// mongo db Accept only trainName this and .net Name Fist letter should capital
        public string StationName { get; set; } = String.Empty;
        [BsonElement("arrivalAt")]
        public string ArrivalAt { get; set; } = String.Empty;
        [BsonElement("departureAt")]
        public string DepartureAt { get; set; } = String.Empty;
        [BsonElement("distanceFromStartPoint")]
        public string DistanceFromStartPoint { get; set; } = String.Empty;
    }
}
