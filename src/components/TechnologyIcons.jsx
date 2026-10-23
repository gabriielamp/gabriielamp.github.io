import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiBootstrap,
  SiCanva,
  SiCodeigniter,
  SiCss3,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiPhp,
  SiPhpmyadmin,
  SiReact,
  SiSharp,
  SiTailwindcss,
  SiWordpress,
} from "react-icons/si";

const iconClassName = "h-9 w-9";

function BrandIcon({ icon: Icon, color }) {
  return (
    <Icon
      className={iconClassName}
      color={color}
      aria-hidden="true"
      focusable="false"
    />
  );
}

export function HtmlIcon() {
  return <BrandIcon icon={SiHtml5} color="#E34F26" />;
}

export function CssIcon() {
  return <BrandIcon icon={SiCss3} color="#1572B6" />;
}

export function JavaScriptIcon() {
  return <BrandIcon icon={SiJavascript} color="#F7DF1E" />;
}

export function ReactIcon() {
  return <BrandIcon icon={SiReact} color="#61DAFB" />;
}

export function TailwindIcon() {
  return <BrandIcon icon={SiTailwindcss} color="#06B6D4" />;
}

export function BootstrapIcon() {
  return <BrandIcon icon={SiBootstrap} color="#7952B3" />;
}

export function PhpIcon() {
  return <BrandIcon icon={SiPhp} color="#777BB4" />;
}

export function LaravelIcon() {
  return <BrandIcon icon={SiLaravel} color="#FF2D20" />;
}

export function CsharpIcon() {
  return <BrandIcon icon={SiSharp} color="#512BD4" />;
}

export function CodeIgniterIcon() {
  return <BrandIcon icon={SiCodeigniter} color="#EF4223" />;
}

export function MySqlIcon() {
  return <BrandIcon icon={SiMysql} color="#4479A1" />;
}

export function PhpMyAdminIcon() {
  return <BrandIcon icon={SiPhpmyadmin} color="#6C78AF" />;
}

export function GitIcon() {
  return <BrandIcon icon={SiGit} color="#F05032" />;
}

export function GitHubIcon() {
  return <BrandIcon icon={SiGithub} color="#181717" />;
}

export function WordPressIcon() {
  return <BrandIcon icon={SiWordpress} color="#21759B" />;
}

export function PhotoshopIcon() {
  return <BrandIcon icon={SiAdobephotoshop} color="#31A8FF" />;
}

export function IllustratorIcon() {
  return <BrandIcon icon={SiAdobeillustrator} color="#FF9A00" />;
}

export function CanvaIcon() {
  return <BrandIcon icon={SiCanva} color="#00C4CC" />;
}

export function FigmaIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 38 57"
      className="h-9 w-6"
      aria-hidden="true"
      focusable="false"
    >
      <path fill="#F24E1E" d="M19 28.5c0-9.47 7.69-17.16 17.16-17.16 9.48 0 17.16 7.69 17.16 17.16 0 9.47-7.68 17.16-17.16 17.16-9.47 0-17.16-7.69-17.16-17.16z" />
      <path fill="#0ACF83" d="M0 28.5C0 23.25 4.25 19 9.5 19H19v19H9.5C4.25 38 0 33.75 0 28.5z" />
      <path fill="#A259FF" d="M0 9.5C0 4.25 4.25 0 9.5 0H19v19H9.5C4.25 19 0 14.75 0 9.5z" />
      <path fill="#1ABCFE" d="M19 0h9.5c5.25 0 9.5 4.25 9.5 9.5S33.75 19 28.5 19H19V0z" />
      <path fill="#FF7262" d="M0 47.5C0 42.25 4.25 38 9.5 38H19v9.5c0 5.25-4.25 9.5-9.5 9.5S0 52.75 0 47.5z" />
    </svg>
  );
}

