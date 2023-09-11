using Azure.AI.OpenAI;

using Microsoft.Extensions.Options;

namespace ConversationalWorkshop.Services;

public class LanguageService : ILanguageService
{
    private OpenAIClient _client;
    private LanguageServiceOptions _settings;
    private ILogger<LanguageService> _logger;

    public LanguageService(OpenAIClient client, ILogger<LanguageService> logger, IOptions<LanguageServiceOptions> settings)
    {
        _logger = logger;
        _client = client;
        _settings = settings.Value;
    }

    public async Task<string> GetResponseAsync(string prompt)
    {
        _logger.LogInformation("Getting completion for prompt: {Prompt}", prompt);

        var requestOptions = new ChatCompletionsOptions();

        requestOptions.Temperature = 0.7f;
        requestOptions.MaxTokens = 800;
        requestOptions.ChoiceCount = 1;
        requestOptions.FrequencyPenalty = 0.0f;
        requestOptions.PresencePenalty = 0.0f;
        requestOptions.NucleusSamplingFactor = 0.95f;

        requestOptions.Messages.Add(new ChatMessage(ChatRole.User, prompt));

        try
        {
            var response = await _client.GetChatCompletionsAsync(_settings.DeploymentName, requestOptions);
            return response.Value?.Choices.First().Message.Content ?? "";
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error getting completion for prompt: {Prompt}", prompt);
            throw;
        }
    }
}