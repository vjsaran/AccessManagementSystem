using Microsoft.EntityFrameworkCore;
using SharePointAccessManagementSystem.Models;

namespace SharePointAccessManagementSystem.Repositories
{
    public class AccessDbContext : DbContext
    {
        public AccessDbContext(DbContextOptions<AccessDbContext> options)
            : base(options)
        {
        }
        public DbSet<AccessRequest> AccessRequests { get; set; } = null!;

    }
}
