using BookMySeat.IService;
using BookMySeat.Models;
using MongoDB.Driver;

namespace BookMySeat.Services
{
    public class TicketService : ITicketService
    {
        private readonly IMongoCollection<Ticket> _ticket;

        public TicketService(IBookMySeatStoreDatabaseSettings settings, IMongoClient mongoClient)
        {
            var database = mongoClient.GetDatabase(settings.DatabaseName);
            _ticket = database.GetCollection<Ticket>(settings.TicketCollectionName);
        }

        public Ticket Create(Ticket ticket)
        {
            _ticket.InsertOne(ticket);
            return ticket;
        }

        public Ticket GetTicketDetailsByID(string id)
        {
            return _ticket.Find(ticket => ticket.ReservationID == id).FirstOrDefault();
        }

        public List<Ticket> GetTicketList()
        {
            return _ticket.Find(train => true).ToList();
        }

        public void Remove(string id)
        {
            _ticket.DeleteOne(train => train.ReservationID == id);
        }

        public void Update(string id, Ticket ticket)
        {
            _ticket.ReplaceOne(train => train.ReservationID == id,ticket);
        }
    }
}
