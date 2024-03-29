const {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} = require("@remix-run/react");
import Nav from "./components/Nav";
import styles from "./styles/app.css";

export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export function links() {
  return [{ rel: "stylesheet", href: styles }, {
    rel: "manifest",
    href: "/resources/manifest.json",
  },];
}

export default function App() {
  return (
    <html lang="en">
      <head>
      <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <Meta />
        <Links />
      </head>
      <body className="h-full">
          <div className="bg-green-300 px-4">
          <Nav />
          </div>
        <div className="w-[min(640px,_100%)] h-full mx-auto p-4 pt-1">
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
