var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/api/greeting", () => "Hello there");

app.MapFallbackToFile("index.html");
app.Run();