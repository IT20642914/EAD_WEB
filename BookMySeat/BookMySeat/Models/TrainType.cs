using MongoDB.Bson.Serialization.Attributes;

namespace BookMySeat.Models
{
    public class TrainType
    {
        [BsonElement("typeID")]
        public string TypeID { get; set; } = String.Empty;

        [BsonElement("TypeName")]
        public string TypeName { get; set; } = String.Empty;
    }
}
