import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "Propmtopia",
  description: "Discover & Share AI Prompts",
};

const Rootlayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="name">
          <div className="gradient" />
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default Rootlayout;
