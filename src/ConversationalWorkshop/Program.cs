using ConversationalWorkshop.Models;
using ConversationalWorkshop.Services;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapPost("/api/completion", async (CompletionRequest request, ILanguageService languageService) =>
{
    var result = await languageService.GetResponseAsync(request.Prompt);
    return new CompletionResponse(result);
});

app.MapFallbackToFile("index.html");
app.Run();