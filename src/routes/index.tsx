

import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Swifties Nation</Title>
      <h1>All things Taylor Swift, Easter Eggs and more! </h1>
      <Counter />
      <p>
        Visit our OpenAI{" "}
        <a href="https://chat.openai.com/g/g-POSrA6oW8-tortured-poets-department" target="_blank">
            Taylor inspired Copilot
        </a>{" "}
        to interact with your ultimate Taylor AI companion.
      </p>
    </main>
  );
}

