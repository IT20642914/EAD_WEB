using BookMySeat.IService;
using BookMySeat.Models;
using BookMySeat.Services;
using Microsoft.AspNetCore.Mvc;
using static System.Collections.Specialized.BitVector32;

namespace BookMySeat.Controllers
{
    /// <summary>
    /// Controller for managing train-related operations in the BookMySeat application.
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class TrainController : ControllerBase
    {
        private readonly ITrainService trainService;
        private readonly ITripService tripService;

        public TrainController(ITrainService trainService, ITripService tripService)
        {
            
            this.trainService = trainService;
            this.tripService = tripService;
        }

        /// <summary>
        /// Retrieves a list of all trains.
        /// </summary>
        [HttpGet("GetTrainList")]
        public ActionResult<List<Train>> GetTrainList()
        {
            return trainService.GetTrainList();
        }

        /// <summary>
        /// Retrieves train details by its unique identifier.
        /// </summary>
        [HttpGet("GetTrainByID")]
        public ActionResult<Train> GetTrainByID(string id)
        {
            var train = trainService.GetTrainByID(id);
            if (train == null)
            {
                return NotFound($"Train with ID={id} not found");
            }
            return train;
        }

        /// <summary>
        /// Creates a new train record.
        /// </summary>
        [HttpPost]
        public ActionResult<Train> CreateTrain([FromBody] Train train)
        {
            trainService.Create(train);
            return CreatedAtAction(nameof(GetTrainByID), new { id = train.TrainId }, train);
        }

        /// <summary>
        /// Updates an existing train record by its ID.
        /// </summary>
        [HttpPut("UpdateTrainDetailsById")]
        public ActionResult UpdateTrainDetails(string id, [FromBody] Train train)
        {
            var existingTrain = trainService.GetTrainByID(id);

            if (existingTrain == null)
            {
                return NotFound($"Train with ID={id} not found");
            }
            trainService.Update(id, train);
            return NoContent();
        }

        /// <summary>
        /// Removes a train record by its ID.
        /// </summary>
        [HttpDelete("DeleteById")]
        public ActionResult Delete(string id)
        {
            var existingTrain = trainService.GetTrainByID(id);

            if (existingTrain == null)
            {
                return NotFound($"Train with ID={id} not found");
            }
            trainService.Remove(id);
            return NoContent();
        }
        [HttpGet("GetAvilibleTrainList")]
        public ActionResult<List<Train>> GetAvilibleTrainList(string departueStationId,string arriveStationId)
        {
            var existingTrains = trainService.GetAvilibaleTrains(departueStationId, arriveStationId);

            if (existingTrains == null)
            {
                return NotFound($"Trains  not found");
            }
      
            return existingTrains;
        }

        [HttpGet("getTripDetails")]
        public ActionResult<List<Trip>> GetTripList()
        {
            var Trips = tripService.GetTripList();

            if (Trips == null)
            {
                return NotFound($"Trips  not found");
            }

            return Trips;
        }
    }
}
