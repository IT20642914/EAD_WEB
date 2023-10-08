namespace BookMySeat.IService
{
    public interface IBookMySeatStoreDatabaseSettings
    {
        public string StationCollectionName { get; set; }
        public string DatabseName { get; set; }
        public string ConnectionStrings { get; set; }
    }
}
