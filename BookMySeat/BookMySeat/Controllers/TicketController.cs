using BookMySeat.IService;
using BookMySeat.Models;
using BookMySeat.Services;
using Microsoft.AspNetCore.Mvc;

namespace BookMySeat.Controllers
{
    /// <summary>
    /// Controller for managing ticket-related operations in the BookMySeat application.
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class TicketController : ControllerBase
    {
        private readonly ITicketService ticketService;

        public TicketController(ITicketService ticketService)
        {
            this.ticketService = ticketService;
        }

        /// <summary>
        /// Retrieves a list of all ticket bookings.
        /// </summary>
        [HttpGet("GetTicketbookings")]
        public ActionResult<List<Ticket>> Get()
        {
            return ticketService.GetTicketList();
        }

        /// <summary>
        /// Retrieves ticket details by its unique identifier.
        /// </summary>
        [HttpGet("GetTicketById")]
        public ActionResult<Ticket> GetTicketDetailsByID(string id)
        {
            var ticket = ticketService.GetTicketDetailsByID(id);
            if (ticket == null)
            {
                return NotFound($"Reservation with ID={id} not found");
            }
            return ticket;
        }

        /// <summary>
        /// Creates a new ticket booking.
        /// </summary>
        [HttpPost]
        public ActionResult<Ticket> Post([FromBody] Ticket ticket)
        {
            ticketService.Create(ticket);
            return CreatedAtAction(nameof(GetTicketDetailsByID), new { id = ticket.ReservationID }, ticket);
        }

        /// <summary>
        /// Updates an existing ticket booking by its ID.
        /// </summary>
        [HttpPut("updateTicketById")]
        public ActionResult Put(string id, [FromBody] Ticket ticket)
        {
            var existingTicket = ticketService.GetTicketDetailsByID(id);

            if (existingTicket == null)
            {
                return NotFound($"Ticket with ID={id} not found");
            }
            ticketService.Update(id, ticket);
            return NoContent();
        }

        /// <summary>
        /// Removes a ticket booking by its ID.
        /// </summary>
        [HttpDelete("RemoveTicketBooking")]
        public ActionResult Delete(string id)
        {
            var existingTicket = ticketService.GetTicketDetailsByID(id);

            if (existingTicket == null)
            {
                return NotFound($"Ticket with ID={id} not found");
            }
            ticketService.Remove(id);
            return NoContent();
        }
    }
}
