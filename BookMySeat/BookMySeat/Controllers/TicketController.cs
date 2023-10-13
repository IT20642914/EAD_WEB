using BookMySeat.IService;
using BookMySeat.Models;
using BookMySeat.Services;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BookMySeat.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TicketController : ControllerBase
    {
        private readonly ITicketService ticketService;

        public TicketController(ITicketService ticketService)
        {
            this.ticketService = ticketService;
        }
        // GET: api/<TicketController>
        [HttpGet("GetTicketbookings")]
        public ActionResult<List<Ticket>> Get()
        {
            return ticketService.GetTicketList();
        }

        // GET api/<TicketController>/5
        [HttpGet("GetTicketById")]
        public ActionResult<Ticket> GetTicketDetailsByID(string id)
        {
            var ticket = ticketService.GetTicketDetailsByID(id);
            if (ticket == null)
            {
                return NotFound($" reservaion  with ID={id} not found");
            }
            return ticket;
        }

        // POST api/<TicketController>
        [HttpPost]
        public ActionResult<Ticket> Post([FromBody] Ticket ticket)
        {
            ticketService.Create(ticket);
            return CreatedAtAction(nameof(GetTicketDetailsByID), new { id = ticket.ReservationID }, ticket);
        }

       

        // PUT api/<TicketController>/5
        [HttpPut("updateTicketById")]
        public ActionResult Put(string id, [FromBody] Ticket ticket)
        {
            var exisitingStaion = ticketService.GetTicketDetailsByID(id);

            if (exisitingStaion == null)
            {
                return NotFound($" Ticket with ID={id} not found");
            }
            ticketService.Update(id, ticket);
            return NoContent();
        }

        // DELETE api/<TicketController>/5
        [HttpDelete("RemeveTicketBooking")]
        public ActionResult Delete(string id)
        {
            var exisitingTrain = ticketService.GetTicketDetailsByID(id);

            if (exisitingTrain == null)
            {
                return NotFound($" Ticket with ID={id} not found");
            }
            ticketService.Remove(id);
            return NoContent();
        }
    }
}
