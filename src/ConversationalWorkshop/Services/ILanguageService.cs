namespace ConversationalWorkshop.Services;

public interface ILanguageService
{
    Task<string> GetResponseAsync(string prompt);
}