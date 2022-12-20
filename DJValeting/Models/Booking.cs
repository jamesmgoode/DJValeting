using System.ComponentModel.DataAnnotations.Schema;

namespace DJValeting.Models
{
    public class Booking : BookingSubmission
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int BookingId { get; set; }

        public bool Approved { get; set; }
    }
}
