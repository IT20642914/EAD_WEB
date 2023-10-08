using MongoDB.Bson.Serialization.Attributes;

namespace BookMySeat.Models
{
    [BsonIgnoreExtraElements]// igron the extra feilds from MongoDb
    public class Station
    {

        [BsonId]
        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public string StationId { get; set; } = String.Empty;
        [BsonElement("stationName")]// mongo db Accept only trainName this and .net Name Fist letter should capital
        public string StationName { get; set; } = String.Empty;
    }
}
