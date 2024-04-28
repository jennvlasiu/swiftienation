import { Title } from "solid-start";
import { HttpStatusCode } from "solid-start/server";

export default function NotFound() {
  return (
    <main>
      <Title>Not Found</Title>
      <HttpStatusCode code={404} />
      <h1>Swifties x AI </h1>
      <p>
        Generative Pre-trained Transformers, commonly known as GPT, are a family of neural network models that uses the transformer architecture and is a key advancement in artificial intelligence (AI) powering generative AI applications such as ChatGPT. GPT models give applications the ability to create human-like text and content (images, music, and more), and answer questions in a conversational manner. Organizations across industries are using GPT models and generative AI for Q&A bots, text summarization, content generation, and search.This GPT, named Swiftie Nation x Tortured Poets, is designed to integrate Taylor Swift Easter eggs into conversations subtly and engagingly. It will offer fans playful references, detailed discussions about her lyrics, music, and personal trivia. The GPT will maintain a tone reminiscent of Taylor Swift's style—witty, heartfelt, and occasionally reflective, perfect for engaging with fans on a personal level. It avoids any negative comments about Taylor Swift and ensures all discussions are respectful and celebratory of her work. Visit {" "}
        <a href="https://chat.openai.com/g/g-POSrA6oW8-tortured-poets-department" target="_blank">
          tortured poets department
        </a>{" "}
        to get started with your own Tay Tay Copilot
      </p>
    </main>
  );
}
