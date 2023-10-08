using MongoDB.Bson.Serialization.Attributes;

namespace BookMySeat.Models
{
    public class Station
    {

        [BsonId]
        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public string StationId { get; set; } = String.Empty;
        [BsonElement("stationName")]
        public string StationName { get; set; } = String.Empty;
    }
}
