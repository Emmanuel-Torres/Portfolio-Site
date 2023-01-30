using Microsoft.EntityFrameworkCore;
using server.DbModels.Models;

namespace server.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }
        
        public required DbSet<Story> Stories { get; set; }
    }
}