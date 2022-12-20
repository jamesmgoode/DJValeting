using DJValeting.Models;
using DJValeting.Services;
using Microsoft.AspNetCore.Mvc;

namespace DJValeting.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class BookingController : Controller
    {
        private readonly IBookingService _bookingService;

        public BookingController(IBookingService bookingService)
        {
            _bookingService = bookingService;
        }

        [HttpPost]
        public async Task SubmitBooking(BookingSubmission bookingSubmission)
        {
            await _bookingService.SaveBooking(bookingSubmission);
        }
    }
}
