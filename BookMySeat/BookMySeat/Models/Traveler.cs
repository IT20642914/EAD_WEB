using MongoDB.Bson.Serialization.Attributes;

namespace BookMySeat.Models
{
    /// <summary>
    /// Represents a traveler in the system.
    /// </summary>
    [BsonIgnoreExtraElements]
    public class Traveler
    {
        /// <summary>
        /// Gets or sets the unique identifier for the traveler.
        /// </summary>
        [BsonId]
        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public string TravelerId { get; set; } = String.Empty;

        /// <summary>
        /// Gets or sets the first name of the traveler.
        /// </summary>
        [BsonElement("firstName")]
        public string FirstName { get; set; } = String.Empty;

        /// <summary>
        /// Gets or sets the last name of the traveler.
        /// </summary>
        [BsonElement("lastName")]
        public string LastName { get; set; } = String.Empty;

        /// <summary>
        /// Gets or sets the email address of the traveler.
        /// </summary>
        [BsonElement("email")]
        public string Email { get; set; } = String.Empty;

        /// <summary>
        /// Gets or sets a flag indicating whether the traveler is active.
        /// </summary>
        [BsonElement("isActive")]
        public bool IsActive { get; set; }

        /// <summary>
        /// Gets or sets the home contact information of the traveler.
        /// </summary>
        [BsonElement("contactHome")]
        public string ContactHome { get; set; } = String.Empty;

        /// <summary>
        /// Gets or sets the mobile contact information of the traveler.
        /// </summary>
        [BsonElement("contactMobile")]
        public string ContactMobile { get; set; } = String.Empty;

        /// <summary>
        /// Gets or sets the address of the traveler.
        /// </summary>
        [BsonElement("address")]
        public string Address { get; set; } = String.Empty;

        /// <summary>
        /// Gets or sets the total number of reservations made by the traveler.
        /// </summary>
        [BsonElement("totalReservationCount")]
        public int TotalReservationCount { get; set; }

        /// <summary>
        /// Gets or sets the date when the traveler was created.
        /// </summary>
        [BsonElement("createdDate")]
        public string CreatedDate { get; set; } = String.Empty;

        /// <summary>
        /// Gets or sets the role type of the traveler.
        /// </summary>
        [BsonElement("roleType")]
        public RoleType RoleType { get; set; } = new RoleType();

        /// <summary>
        /// Gets or sets the NIC (National Identity Card) number of the traveler.
        /// </summary>
        [BsonElement("nICNumber")]
        public string NICNumber { get; set; } = String.Empty;

        /// <summary>
        /// Gets or sets the password of the traveler.
        /// </summary>
        [BsonElement("passWord")]
        public string PassWord { get; set; } = String.Empty;
    }
}
