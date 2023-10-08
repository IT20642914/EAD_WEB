﻿using BookMySeat.IService;

namespace BookMySeat.Services
{
    public class BookMySeatDatabaseSettings : IBookMySeatStoreDatabaseSettings
    {
        public string StationCollectionName { get; set; } = String.Empty;
        public string DatabseName { get; set; } = String.Empty;
        public string ConnectionStrings { get; set; } = String.Empty;
    }
}