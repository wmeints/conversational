# Conversational Workshop

Practice your prompt engineering skills without writing any code! This application contains a few exercises to get you
started with using Large Language Models.

- Discover how to change the style and structure of the model output
- Use few-shot learning to help improve model performance

## Getting started

The content of this repository is meant to be used by trainers and experts to teach others. To use the exercises you
need to deploy the contents of this repository.

## Deployment

You can deploy this application to an Azure Web App. Please refer to [.github/workflows/ci.yml](https://github.com/wmeints/conversational/blob/main/.github/workflows/ci.yml)
for a sample on how to set up your own deployment pipeline for the application.

## Development

You'll need to get two pieces of software to work on the code:

- [.NET](https://dot.net)
- [Node](https://nodejs.org)
- [PNPM](https://pnpm.io/)

The code can be edited in any modern code editor.

## Documentation

### Used technology

- [Svelte kit](https://kit.svelte.dev/)
- [OpenAI ChatGPT 3.5 Turbo](https://openai.com/)

### Application structure

This application is made out of two parts:

1. ASP.NET Core application, this hosts the frontend and implements the interface to the LLM.
2. SvelteKit application located in `ClientApp`, this hosts the frontend.

### Privacy

No data is collected in the application itself. OpenAI is a different matter. As long as you follow the instructions
in the guide you should be good though.
