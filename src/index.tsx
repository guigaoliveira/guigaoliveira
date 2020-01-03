import * as React from "react";
import { render } from "react-dom";
import { IconContext, IconType } from "react-icons";
import {
  FaGithub,
  FaLinkedinIn,
  FaMedium,
  FaSlideshare,
  FaTelegramPlane,
  FaTwitter
} from "react-icons/fa";
import "./styles.css";

interface Link {
  href: string;
  Icon: IconType;
}

const Link: React.FC<Link> = ({ href, Icon }) => {
  return (
    <a href={href} className="link" target="_blank" rel="noopener noreferrer">
      <Icon />
    </a>
  );
};

function App() {
  return (
    <div className="App">
      <main className="container">
        <h1 className="title">Hi, I'm Guilherme Oliveira</h1>
        <h4 className="phrase">
          I like to create amazing things for other people
        </h4>
        <div className="icons">
          <IconContext.Provider
            value={{
              className: "icon"
            }}
          >
            <Link href="https://github.com/guigaoliveira" Icon={FaGithub} />
            <Link href="https://medium.com/@guigaoliveira_" Icon={FaMedium} />
            <Link href="https://twitter.com/d4mmit" Icon={FaTwitter} />
            <Link
              href="https://linkedin.com/in/guilherme-oliveira1/"
              Icon={FaLinkedinIn}
            />
            <Link
              href="https://telegram.me/guigaoliveira"
              Icon={FaTelegramPlane}
            />
            <Link
              href="https://pt.slideshare.net/GuilhermeOliveira540"
              Icon={FaSlideshare}
            />
          </IconContext.Provider>
        </div>
      </main>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
