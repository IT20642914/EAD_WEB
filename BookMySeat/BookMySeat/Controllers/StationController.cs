using BookMySeat.IService;
using BookMySeat.Models;
using Microsoft.AspNetCore.Mvc;

namespace BookMySeat.Controllers
{
    /// <summary>
    /// Controller for managing station-related operations in the BookMySeat application.
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class StationController : ControllerBase
    {
        private readonly IStationService stationService;

        public StationController(IStationService stationService)
        {
            this.stationService = stationService;
        }

        /// <summary>
        /// Retrieves a list of all stations.
        /// </summary>
        [HttpGet("GetstationList")]
        public ActionResult<List<Station>> Get()
        {
            return stationService.Get();
        }

        /// <summary>
        /// Retrieves a station by its unique identifier.
        /// </summary>
        [HttpGet("GetstationById")]
        public ActionResult<Station> Get(string id)
        {
            var station = stationService.Get(id);
            if (station == null)
            {
                return NotFound($"Station with ID={id} not found");
            }
            return station;
        }

        /// <summary>
        /// Creates a new station record.
        /// </summary>
        [HttpPost]
        public ActionResult<Station> CreateA([FromBody] Station station)
        {
            stationService.Create(station);
            return CreatedAtAction(nameof(Get), new { id = station.StationId }, station);
        }

        /// <summary>
        /// Updates an existing station record by its ID.
        /// </summary>
        [HttpPut("updateById")]
        public ActionResult Put(string id, [FromBody] Station station)
        {
            var existingStation = stationService.Get(id);

            if (existingStation == null)
            {
                return NotFound($"Station with ID={id} not found");
            }
            stationService.Update(id, station);
            return NoContent();
        }

        /// <summary>
        /// Removes a station record by its ID.
        /// </summary>
        [HttpDelete("deleteById")]
        public ActionResult Delete(string id)
        {
            var existingStation = stationService.Get(id);

            if (existingStation == null)
            {
                return NotFound($"Station with ID={id} not found");
            }
            stationService.Remove(id);

            return Ok($"Station with id={id} deleted");
        }
    }
}
