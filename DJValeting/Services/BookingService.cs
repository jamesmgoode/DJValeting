using DJValeting.Data;
using DJValeting.Models;

namespace DJValeting.Services
{
    public class BookingService : IBookingService
    {
        private readonly ApplicationDbContext _dbContext;

        public BookingService(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task SaveBooking(BookingSubmission bookingSubmission)
        {
            var booking = new Booking
            {
                Name = bookingSubmission.Name,
                Date = bookingSubmission.Date,
                Flexibility = bookingSubmission.Flexibility,
                VehicleSize = bookingSubmission.VehicleSize,
                ContactNumber = bookingSubmission.ContactNumber,
                EmailAddress = bookingSubmission.EmailAddress,
                Approved = false
            };

            //using var dbContext = new ApplicationDbContext();
            await _dbContext.Bookings.AddAsync(booking);
            await _dbContext.SaveChangesAsync();
        }
    }
}
