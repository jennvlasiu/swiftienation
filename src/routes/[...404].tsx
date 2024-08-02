import { Title } from "solid-start";
import { HttpStatusCode } from "solid-start/server";

export default function UnderConstruction() {
  return (
    <main>
      <Title>Page Under Construction</Title>
      <HttpStatusCode code={404} />
      <h1>Page Under Construction</h1>
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          taylorswift.com
        </a>{" "}
        to view official updates
      </p>
    </main>
  );
}
