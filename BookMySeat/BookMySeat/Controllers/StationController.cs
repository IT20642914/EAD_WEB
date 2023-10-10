using BookMySeat.IService;
using BookMySeat.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BookMySeat.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StationController : ControllerBase
    {
        private readonly IStationService stationService;

        public StationController(IStationService stationService)
        {
            this.stationService = stationService;
        }


        // GET: api/<StationController>
        [HttpGet("GetstationList")]
        public ActionResult<List<Station>> Get()
        {
            return stationService.Get();
        }

        // GET api/<StationController>/5
        [HttpGet("GetstationById")]
        public ActionResult<Station> Get(string id)
        {
            var station = stationService.Get(id);
            if (station == null)
            {
                return NotFound($" Station with ID={id} not found");
            }
            return station;
        }

        // POST api/<StationController>
        [HttpPost]
        public ActionResult<Station> CreateA([FromBody] Station station)
        {
            stationService.Create(station);
            return CreatedAtAction(nameof(Get), new { id = station.StationId }, station);
        }

        // PUT api/<StationController>/5
        [HttpPut("{id}")]
        public ActionResult Put(string id, [FromBody] Station station)
        {
            var exisitingStaion = stationService.Get(id);

            if (exisitingStaion == null)
            {
                return NotFound($" Station with ID={id} not found");
            }
            stationService.Update(id, station);
            return NoContent();
        }

        // DELETE api/<StationController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(string id)
        {
            var Staion = stationService.Get(id);

            if (Staion == null)
            {
                return NotFound($" Station with ID={id} not found");
            }
            stationService.Remove(id);

            return Ok($"station with id={id} deleted");
        }
    }
}
