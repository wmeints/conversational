# Conversational Workshop

Practice your prompt engineering skills without writing any code! This application contains a few exercises to get you
started with using Large Language Models.

- Discover how to change the style and structure of the model output
- Learn how to modify the base instructions for the model
- Use few-shot learning to help improve model performance
- Include external data to get better answers from the model

## Getting started

The content of this repository is meant to be used by trainers and experts to teach others. To use the exercises you
need to deploy the contents of this repository.

## Deployment

TODO: Explain how to set up your own deployment pipeline.

## Development

For local development, you're going to need to get yourself a pro license for [Fontawesome](https://fontawesome.com).
Set the `FONTAWESOME_NPM_AUTH_TOKEN` environment variable with your personal access token so you're able to install the
required packages.

## Documentation

### Used technology

- [Svelte kit](https://kit.svelte.dev/)
- [OpenAI ChatGPT 3.5 Turbo](https://openai.com/)

### Application structure

```text
├─── src
│    ├─── routes                    Defines the routes for the application
│    │    └─── exercises            Defines the location for the excerises
│    │         ├─── exercise-01
│    │         ├─── exercise-02
│    │         ├─── exercise-03
│    │         └─── exercise-04
│    ├─── lib                       Contains shared logic
│    └─── components                Contains shared components
├─── static                         Contains static HTML/CSS/Images
└─── tests                          Contains the unit-tests for the application
```

### Privacy

No data is collected in the application itself. OpenAI is a different matter. As long as you follow the instructions
in the guide you should be good though.