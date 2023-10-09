using MongoDB.Bson.Serialization.Attributes;

namespace BookMySeat.Models
{
    [BsonIgnoreExtraElements]
    public class Traveler
    {

        [BsonId]
        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public string TravelerId { get; set; } = String.Empty;
        [BsonElement("firstName")]
        public string FirstName { get; set; } = String.Empty;
        [BsonElement("lastName")]
        public string LastName { get; set; } = String.Empty;
        [BsonElement("email")]
        public string Email { get; set; } = String.Empty;
        [BsonElement("userName")]
        public string UserName { get; set; } = String.Empty;
        [BsonElement("isActive")]
        public Boolean IsActive { get; set; }
        [BsonElement("contactHome")]
        public string ContactHome { get; set; } = String.Empty;
        [BsonElement("contactMobile")]
        public string ContactMobile { get; set; } = String.Empty;
        [BsonElement("address")]
        public string Address { get; set; } = String.Empty;
        [BsonElement("totalReservationCount")]
        public int TotalReservationCount { get; set; }
        [BsonElement("createdDate")]
        public DateTime CreatedDate { get; set; }
    }
}