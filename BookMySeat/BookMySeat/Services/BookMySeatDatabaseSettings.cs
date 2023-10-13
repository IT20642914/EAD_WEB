using BookMySeat.IService;

namespace BookMySeat.Services
{
    /// <summary>
    /// Represents the database settings required for the BookMySeat application.
    /// </summary>
    public class BookMySeatDatabaseSettings : IBookMySeatStoreDatabaseSettings
    {
        /// <summary>
        /// Gets or sets the collection name for stations in the database.
        /// </summary>
        public string StationCollectionName { get; set; } = string.Empty;

        /// <summary>
        /// Gets or sets the collection name for travelers in the database.
        /// </summary>
        public string TravelerCollectionName { get; set; } = string.Empty;

        /// <summary>
        /// Gets or sets the name of the database.
        /// </summary>
        public string DatabaseName { get; set; } = string.Empty;

        /// <summary>
        /// Gets or sets the connection string for the database.
        /// </summary>
        public string ConnectionStrings { get; set; } = string.Empty;

        /// <summary>
        /// Gets or sets the collection name for trains in the database.
        /// </summary>
        public string TrainCollectionName { get; set; } = string.Empty;

        /// <summary>
        /// Gets or sets the collection name for tickets in the database.
        /// </summary>
        public string TicketCollectionName { get; set; } = string.Empty;
    }
}
