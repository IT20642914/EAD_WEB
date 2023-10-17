using BookMySeat.Dtos;
using BookMySeat.IService;
using BookMySeat.Models;
using Microsoft.AspNetCore.Mvc;

namespace BookMySeat.Controllers
{
    /// <summary>
    /// Controller for managing traveler-related operations in the BookMySeat application.
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class TravelerController : ControllerBase
    {
        private readonly ITravelerService TravelerService;

        public TravelerController(ITravelerService TravelerService)
        {
            this.TravelerService = TravelerService;
        }

        /// <summary>
        /// Retrieves a list of all travelers.
        /// </summary>
        [HttpGet]
        public ActionResult<List<Traveler>> Get()
        {
            return TravelerService.Get();
        }

        /// <summary>
        /// Retrieves traveler details by its unique identifier.
        /// </summary>
        [HttpGet("getTravelerById")]
        public ActionResult<Traveler> Get(string id)
        {
            var traveler = TravelerService.Get(id);
            if (traveler == null)
            {
                return NotFound($"Traveler with ID={id} not found");
            }
            return traveler;
        }

        /// <summary>
        /// Creates a new traveler record.
        /// </summary>
        [HttpPost]
        public ActionResult<Traveler> CreateA([FromBody] Traveler traveler)
        {
            TravelerService.Create(traveler);
            return CreatedAtAction(nameof(Get), new { id = traveler.TravelerId }, traveler);
        }

        /// <summary>
        /// Creates a new traveler record.
        /// </summary>
        [HttpPost("Login")]
        public ActionResult<LoginResult> LoginByNic( string nic, string password)
        {
            var result = TravelerService.LoginByNic(nic, password);
            if (result.IsSuccess)
            {
                return Ok(result); // HTTP status code 200 (OK)
            }
            else
            {
                return StatusCode(result.StatusCode, result);
            }
        }
        /// <summary>
        /// Updates an existing traveler record by its ID.
        /// </summary>
        [HttpPut("UpdateTravelerById")]
        public ActionResult Put(string id, [FromBody] Traveler traveler)
        {
            var existingTraveler = TravelerService.Get(id);

            if (existingTraveler == null)
            {
                return NotFound($"Traveler with ID={id} not found");
            }
            TravelerService.Update(id, traveler);
            return NoContent();
        }

        /// <summary>
        /// Removes a traveler record by its ID.
        /// </summary>
        [HttpDelete("deleteTravelerById")]
        public ActionResult Delete(string id)
        {
            var traveler = TravelerService.Get(id);

            if (traveler == null)
            {
                return NotFound($"Traveler with ID={id} not found");
            }
            TravelerService.Remove(id);

            return Ok($"Traveler with id={id} deleted");
        }
    }
}
