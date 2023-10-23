using MongoDB.Bson.Serialization.Attributes;

namespace BookMySeat.Models
{
    public class TrainDetails
    {  
        [BsonElement("trainID")]
        public string TrainId { get; set; } = string.Empty;
          
        [BsonElement("trainName")]
        public string TrainName { get; set; } = string.Empty;

    }
}
