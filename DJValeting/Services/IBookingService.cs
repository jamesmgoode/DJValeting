using DJValeting.Models;

namespace DJValeting.Services
{
    public interface IBookingService
    {
        public Task SaveBooking(BookingSubmission bookingSubmission);
    }
}
