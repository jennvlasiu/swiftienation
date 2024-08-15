

import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Swifties Nation</Title>
      <h1>The Ultimate Taylor Swift Society </h1>
      <Counter />
      <p>
          Swiftie Nation, join us in belting out our favourite tunes, dancing, trading friendship bracelets, and creating lasting memories as Swifites. Find out when the next Swifties Community Meetup is on {""}
        <a href="https://chatgpt.com/g/g-POSrA6oW8-swifties" target="_blank">
            Join Us
        </a>{""}
        or use our Swiftie AI ChatGPT for virtual fun as we celebrate Tay Tay
      </p>
    </main>
  );
}

