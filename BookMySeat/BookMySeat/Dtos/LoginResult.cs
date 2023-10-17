using BookMySeat.Models;

namespace BookMySeat.Dtos
{
    public class LoginResult
    {
        public bool IsSuccess { get; set; }
        public string Message { get; set; }= string.Empty;
        public int StatusCode { get; set; }
        public Traveler? Traveler { get; set; } = null;
    }
}
