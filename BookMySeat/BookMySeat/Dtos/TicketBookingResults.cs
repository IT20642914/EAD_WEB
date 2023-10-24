using BookMySeat.Models;

namespace BookMySeat.Dtos
{
    public class TicketBookingResults
    {
        public bool IsSuccess { get; set; }
        public string Message { get; set; } = string.Empty;
        public int StatusCode { get; set; }
        public Ticket? Ticket { get; set; } = null;
    }
}
