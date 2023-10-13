using BookMySeat.Models;

namespace BookMySeat.IService
{
    public interface ITicketService
    {
        List<Ticket> GetTicketList();
        Ticket GetTicketDetailsByID(string id);
        Ticket Create(Ticket ticket);
        void Update(string id, Ticket ticket);
        void Remove(string id);
    }
}
