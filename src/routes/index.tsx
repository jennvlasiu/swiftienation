

import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Swifties Nation</Title>
      <h1>All things Taylor Swift, Easter Eggs and more! </h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://chat.openai.com/g/g-POSrA6oW8-tortured-poets-department" target="_blank">
          Swifties, get started with Open AI's Tortured Poets Department GPT
        </a>{" "}
        to interact with the ultimate Taylor AI.
      </p>
    </main>
  );
}

