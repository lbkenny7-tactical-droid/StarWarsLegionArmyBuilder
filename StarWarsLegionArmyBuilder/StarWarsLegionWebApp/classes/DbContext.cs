using Microsoft.EntityFrameworkCore;

public class AppDbContext : DbContext
{
    public DbSet<SeparatistUnit> separatist_units { get; set; }

    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlServer(
            "Server=localhost;Database=starwarsarmybuilder_database;Trusted_Connection=True;TrustServerCertificate=true;",
            options => options.EnableRetryOnFailure(
                maxRetryCount: 3, // Max retry attempts
                maxRetryDelay: TimeSpan.FromSeconds(5), // Time between retries
                errorNumbersToAdd: null // Error numbers to consider as transient
            )
        );
    }
}