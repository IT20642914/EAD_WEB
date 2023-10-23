namespace BookMySeat.IService
{
    /// <summary>
    /// Interface defining settings for the BookMySeat application's database collections and connection strings.
    /// </summary>
    public interface IBookMySeatStoreDatabaseSettings
    {
        /// <summary>
        /// Gets or sets the name of the collection for storing station data.
        /// </summary>
        public string StationCollectionName { get; set; }

        /// <summary>
        /// Gets or sets the name of the collection for storing train data.
        /// </summary>
        public string TrainCollectionName { get; set; }

        /// <summary>
        /// Gets or sets the name of the database where data is stored.
        /// </summary>
        public string DatabaseName { get; set; }

        /// <summary>
        /// Gets or sets the connection string for connecting to the database.
        /// </summary>
        public string ConnectionStrings { get; set; }

        /// <summary>
        /// Gets or sets the name of the collection for storing traveler data.
        /// </summary>
        public string TravelerCollectionName { get; set; }

        /// <summary>
        /// Gets or sets the name of the collection for storing ticket data.
        /// </summary>
        public string TicketCollectionName { get; set; }

        public string TripCollectionName { get; set; }
    }
}
