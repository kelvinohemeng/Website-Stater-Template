import { ReactLenis, useLenis } from "lenis/react";
import App from "./App";

export default function Root() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  return (
    <ReactLenis root>
      <main>
        <App />
      </main>
    </ReactLenis>
  );
}
