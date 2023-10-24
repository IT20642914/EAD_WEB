using MongoDB.Bson.Serialization.Attributes;

namespace BookMySeat.Models
{
    public class TrainDetails
    {  
        [BsonElement("trainId")]
        public string TrainId { get; set; } = string.Empty;
          
        [BsonElement("trainName")]
        public string TrainName { get; set; } = string.Empty;

    }
}
