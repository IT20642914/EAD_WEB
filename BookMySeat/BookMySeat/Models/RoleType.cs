using MongoDB.Bson.Serialization.Attributes;

namespace BookMySeat.Models
{
    public class RoleType
    {
        [BsonElement("roleId")]
        public int RoleID { get; set; } = 1; // Set the default value to "1"
        [BsonElement("roleName")]
        public string RoleName { get; set; } = "user";
    }
}
