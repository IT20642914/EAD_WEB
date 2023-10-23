using MongoDB.Bson.Serialization.Attributes;

namespace BookMySeat.Models
{
    public class TrainType
    {
        [BsonElement("typeID")]
        public int TypeID { get; set; }

        [BsonElement("typeName")]
        public string TypeName { get; set; } = String.Empty;
    }
}
