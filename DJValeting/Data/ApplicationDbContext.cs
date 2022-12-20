using DJValeting.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace DJValeting.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options) { }

        public DbSet<Booking> Bookings { get; set; }
    }
}
