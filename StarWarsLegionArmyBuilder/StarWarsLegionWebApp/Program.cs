using Microsoft.EntityFrameworkCore;

public class Program
{
    public static void Main(string[] args)
    {
        CreateHostBuilder(args).Build().Run();
    }

    public static IHostBuilder CreateHostBuilder(string[] args) =>
        Host.CreateDefaultBuilder(args)
            .ConfigureWebHostDefaults(webBuilder =>
            {
                webBuilder.ConfigureServices(services =>
                {
                    services.AddControllers();

                    services.AddDbContext<AppDbContext>(options =>
                        options.UseSqlServer("Server=localhost;Database=starwarsarmybuilder_database;User Id=lbkenny7;Password=Burrnet7;TrustServerCertificate=True;"));
                    services.AddCors(options =>
                    {
                        options.AddPolicy("AllowLocalhost", builder =>
                            builder.WithOrigins("http://localhost:3000")
                                .AllowAnyMethod()
                                .AllowAnyHeader());
                    });
                });

                webBuilder.Configure(app =>
                {
                    app.UseCors("AllowLocalhost");
                    app.UseRouting();
                    app.UseStaticFiles();
                    app.UseEndpoints(endpoints =>
                    {
                        endpoints.MapControllers();
                    });
                });
            });
}