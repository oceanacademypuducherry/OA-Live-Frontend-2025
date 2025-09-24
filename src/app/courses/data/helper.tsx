import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiOpenai,
  SiJavascript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiCoder,
} from "react-icons/si";
import { FaQuestionCircle } from "react-icons/fa";
import React from "react";
import { DiJava } from "react-icons/di";
import { Code } from "lucide-react";

const iconsMap: Record<
  string,
  React.ComponentType<{ size?: number; color?: string }>
> = {
  react: SiReact,
  "react.js": SiReact,
  node: SiNodedotjs,
  NodeJs: SiNodedotjs,
  express: SiExpress,
  "express.js": SiExpress,
  mongodb: SiMongodb,
  git: SiGit,
  github: SiGithub,
  openai: SiOpenai,
  js: SiJavascript,
  javascript: SiJavascript,
  python: SiPython,
  java: DiJava,
  html: SiHtml5,
  css: SiCss3,
};

export const getTechIcon = (tech: string, size = 16, color = "#fff") => {
  const key = tech.toLowerCase().trim();
  const Icon = iconsMap[key];

  return Icon ? (
    <Icon size={size} color={color} />
  ) : (
    // <SiCoder size={size} color={color} />
    <Code size={size} color={color} />
  );
};
