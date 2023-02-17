using Microsoft.EntityFrameworkCore;
using server.DbModels.Models.EntityModels;

namespace server.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }
        
        public required DbSet<StoryEntity> Stories { get; set; }
    }
}