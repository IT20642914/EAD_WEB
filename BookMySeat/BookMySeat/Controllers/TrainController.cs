using BookMySeat.IService;
using BookMySeat.Models;
using BookMySeat.Services;
using Microsoft.AspNetCore.Mvc;
using static System.Collections.Specialized.BitVector32;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BookMySeat.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TrainController : ControllerBase
    {
        private readonly ITrainService trainService;

        public TrainController(ITrainService trainService) {
         this.trainService = trainService;
        }

        // GET: api/<TrainController>
        [HttpGet("GetTrainList")]
        public ActionResult<List<Train>> GetTrainList()
        {
            return trainService.GetTrainList();
        }

        // GET api/<TrainController>/5
        [HttpGet("GetTrainByID")]
        public ActionResult<Train> GetTrainByID(string id)
        {
            var train = trainService.GetTrainByID(id);
            if (train == null)
            {
                return NotFound($" Station with ID={id} not found");
            }
            return train;
        }

        // POST api/<TrainController>
        [HttpPost]
        public ActionResult<Train> CreateTrain([FromBody] Train train)
        {    
            trainService.Create(train);
            return CreatedAtAction(nameof(GetTrainByID), new { id = train.TrainId }, train);
        }

        // PUT api/<TrainController>/5
        [HttpPut("UpdateTrainDetails")]
        public ActionResult UpdateTrainDetails(string id, [FromBody] Train train)
        {
            var exisitingStaion = trainService.GetTrainByID(id);

            if (exisitingStaion == null)
            {
                return NotFound($" Train with ID={id} not found");
            }
            trainService.Update(id, train);
            return NoContent();
        }

        // DELETE api/<TrainController>/5
        [HttpDelete("Delete")]
        public ActionResult Delete(string id)
        {
            var exisitingTrain = trainService.GetTrainByID(id);

            if (exisitingTrain == null)
            {
                return NotFound($" Train with ID={id} not found");
            }
            trainService.Remove(id);
            return NoContent();
        }
    }
}
