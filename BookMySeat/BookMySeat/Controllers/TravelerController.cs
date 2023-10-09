using BookMySeat.IService;
using BookMySeat.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BookMySeat.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TravelerController : ControllerBase
    {
        private readonly ITravelerService TravelerService;

        public TravelerController(ITravelerService TravelerService)
        {
            this.TravelerService = TravelerService;
        }


        // GET: api/<TravelerController>
        [HttpGet]
        public ActionResult<List<Traveler>> Get()
        {
            return TravelerService.Get();
        }

        // GET api/<TravelerController>/5
        [HttpGet("{id}")]
        public ActionResult<Traveler> Get(string id)
        {
            var traveler = TravelerService.Get(id);
            if (traveler == null)
            {
                return NotFound($" Traveler with ID={id} not found");
            }
            return traveler;
        }

        // POST api/<TravelerController>
        [HttpPost]
        public ActionResult<Traveler> CreateA([FromBody] Traveler traveler)
        {
            TravelerService.Create(traveler);
            return CreatedAtAction(nameof(Get), new { id = traveler.TravelerId }, traveler);
        }

        // PUT api/<TravelerController>/5
        [HttpPut("{id}")]
        public ActionResult Put(string id, [FromBody] Traveler traveler)
        {
            var exisitingTraveler = TravelerService.Get(id);

            if (exisitingTraveler == null)
            {
                return NotFound($" Traveler with ID={id} not found");
            }
            TravelerService.Update(id, traveler);
            return NoContent();
        }

        // DELETE api/<TravelerController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(string id)
        {
            var Traveler = TravelerService.Get(id);

            if (Traveler == null)
            {
                return NotFound($" Traveler with ID={id} not found");
            }
            TravelerService.Remove(id);

            return Ok($"Traveler with id={id} deleted");
        }
    }
}
