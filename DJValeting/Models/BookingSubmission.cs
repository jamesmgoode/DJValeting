namespace DJValeting.Models
{
    public class BookingSubmission
    {
        public string Name { get; set; }

        public DateTime Date { get; set; }

        public int? Flexibility { get; set; }

        public string VehicleSize { get; set; }

        public string ContactNumber { get; set; }

        public string EmailAddress { get; set; }
    }
}
