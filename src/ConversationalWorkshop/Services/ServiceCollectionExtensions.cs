using Azure;
using Azure.AI.OpenAI;

using Microsoft.Extensions.Options;

namespace ConversationalWorkshop.Services;

public static class ServiceCollectionExtensions
{
    public static void AddAzureOpenAI(this IServiceCollection services, IConfigurationRoot configuration)
    {
        services.AddScoped<OpenAIClient>(sp =>
        {
            var options = sp.GetRequiredService<IOptions<LanguageServiceOptions>>();
            return new OpenAIClient(new Uri(options.Value.Endpoint), new AzureKeyCredential(options.Value.ApiKey));
        });

        services.Configure<LanguageServiceOptions>(configuration.GetSection("LanguageService"));
    }
}