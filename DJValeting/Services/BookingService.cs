using DJValeting.Data;
using DJValeting.Models;
using Microsoft.EntityFrameworkCore;

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

            await _dbContext.Bookings.AddAsync(booking);
            await _dbContext.SaveChangesAsync();
        }

        public async Task<IEnumerable<Booking>> GetBookings()
        {
            return await _dbContext.Bookings.ToListAsync();
        }

        public async Task ApproveBooking(int? bookingId)
        {
            Booking? bookingToApprove = await _dbContext.Bookings.FirstOrDefaultAsync(b => b.BookingId == bookingId);

            if (bookingToApprove != null)
            {
                bookingToApprove.Approved = true;
                await _dbContext.SaveChangesAsync();
            }
        }
    }
}
