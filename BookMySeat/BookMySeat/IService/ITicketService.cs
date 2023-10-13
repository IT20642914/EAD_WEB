using BookMySeat.Models;

namespace BookMySeat.IService
{
    /// <summary>
    /// Interface for managing ticket-related operations in the BookMySeat application.
    /// </summary>
    public interface ITicketService
    {
        /// <summary>
        /// Retrieves a list of all tickets.
        /// </summary>
        /// <returns>A list of ticket objects.</returns>
        List<Ticket> GetTicketList();

        /// <summary>
        /// Retrieves ticket details by its unique identifier.
        /// </summary>
        /// <param name="id">The unique identifier of the ticket to retrieve.</param>
        /// <returns>The ticket object with the specified ID, or null if not found.</returns>
        Ticket GetTicketDetailsByID(string id);

        /// <summary>
        /// Creates a new ticket record.
        /// </summary>
        /// <param name="ticket">The ticket object to be created.</param>
        /// <returns>The created ticket object.</returns>
        Ticket Create(Ticket ticket);

        /// <summary>
        /// Updates an existing ticket record.
        /// </summary>
        /// <param name="id">The unique identifier of the ticket to update.</param>
        /// <param name="ticket">The updated ticket object.</param>
        void Update(string id, Ticket ticket);

        /// <summary>
        /// Removes a ticket record by its ID.
        /// </summary>
        /// <param name="id">The unique identifier of the ticket to remove.</param>
        void Remove(string id);
    }
}
