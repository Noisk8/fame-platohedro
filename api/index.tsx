import { Button, Frog } from "frog";
import { devtools } from "frog/dev";
import { serveStatic } from "frog/serve-static";
import { pinata } from "frog/hubs";
import { handle } from "frog/vercel";

// Uncomment to use Edge Runtime.
// export const config = {
//   runtime: 'edge',
// }

export const app = new Frog({
  assetsPath: "/",
  basePath: "/api",
  title: "Platohedro",
  hub: pinata(),
  //  hub: neynar({ apiKey: "NEYNAR_FROG_FM" }),
});

app.frame("/", (c) => {
  const {} = c;
  return c.res({
    image:
    '/public/fachada4.jpg',

  
    intents: [
      <Button.Link href="https://platohedro.org/">Platohedro.org</Button.Link>,
      <Button.Link href="https://www.patreon.com/platohedro">
        Patreon
      </Button.Link>,
      <Button.Link href="https://platohedro.org/donaciones/">
        Donaciones
      </Button.Link>,
    ],
  });
});
// @ts-ignore
const isEdgeFunction = typeof EdgeFunction !== "undefined";
const isProduction = isEdgeFunction || import.meta.env?.MODE !== "development";
devtools(app, isProduction ? { assetsPath: "/.frog" } : { serveStatic });

export const GET = handle(app);
export const POST = handle(app);
