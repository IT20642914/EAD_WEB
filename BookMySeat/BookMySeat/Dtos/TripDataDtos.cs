using BookMySeat.Models;

namespace BookMySeat.Dtos
{
    public class TripDataDtos
    {
        public string DepartureDate { get; set; }= string.Empty;
        public TrainDetails Train { get; set; } = new TrainDetails ();
        public TicketTypes TicketType { get; set; } = new TicketTypes();
        public int TicketCount { get; set; } = 0;
        public Station DepartureFrom { get; set; } = new Station ();
        public Station ArriveTo { get; set; } = new Station();
    }
}
