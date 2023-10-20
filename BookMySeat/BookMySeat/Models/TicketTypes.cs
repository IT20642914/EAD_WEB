using BookMySeat.Models;
using MongoDB.Bson.Serialization.Attributes;

namespace BookMySeat.Models
{
    public class TicketTypes
    {
        [BsonElement("ticketTypeID")]
        public int TicketTypeID { get; set; } = 3;

        [BsonElement("ticketTypeName")]
        public string TicketTypeName{ get; set; } = "Third Class";
    }
}
