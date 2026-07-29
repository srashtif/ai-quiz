# AI Quiz Generator

Uses OpenAI's ChatGPT API to generate multiple choice quiz with user defined language, topic, and difficulty.

Features a loading screen with random facts to give the user something to do while the data is retrieved from the API and an ending screen with score-determined gifs and sarcastic messages.



## Tech Used

- Next.js 13.4 (using the new App router)
- Tailwind CSS
- OpenAI's `gpt-3-turbo` API



## Tools ##
- `create-next-app` (development and building)
- Vercel (deployment)

## OpenAI Integration

A custom prompt is created by interpolating user entered form data. Crucially, the response is asked to be returned in JSON format. Light "prompt engineering" was required to ensure the response was consistently in the correct format (for example: explicitly saying what the names of the keys should be).

![prompt](./docs/images/prompt.jpg)

The API is queried. After playing with the available parameters, I found leaving most of them at their default setting worked well.

![api request](./docs/images/api-request.jpg)

## Screenshots

![loading screen](./docs/images/loading-screen.jpg)

![quiz screen](./docs/images/quiz-screen.jpg)

![end-screen](./docs/images/end-screen.jpg)
