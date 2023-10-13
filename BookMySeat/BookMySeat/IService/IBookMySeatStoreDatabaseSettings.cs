namespace BookMySeat.IService
{
    public interface IBookMySeatStoreDatabaseSettings
    {
        public string StationCollectionName { get; set; }
        public string TrainCollectionName { get; set; }
        public string DatabseName { get; set; }
        public string ConnectionStrings { get; set; }
        public string TravelerCollectionName { get; set; }
        public string TicketCollectionName { get; set; }
    }
}
