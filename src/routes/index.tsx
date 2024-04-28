

import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Swifties Nation</Title>
      <h1>The Ultimate AI Swiftie Companion </h1>
      <Counter />
      <p>
          Swiftie Nation, we've designed the ultimate AI on all things Tay Tay. From playful references, detailed discussions about her lyrics,to music, and personal trivia. We maintain a tone reminiscent of Taylor Swift's style—witty, heartfelt, and occasionally reflective, perfect for engaging with you on a personal level and spreading positivity. We avoid negative comments about Taylor Swift and ensures all discussions are respectful and celebratory of her work. {""}
        <a href="https://chat.openai.com/g/g-POSrA6oW8-tortured-poets-department" target="_blank">
            Visit Tortured Poets Department
        </a>{""}
        to interact with your ultimate Taylor AI-enabled Swiftie Companion
      </p>
    </main>
  );
}

