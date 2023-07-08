import { compile } from "..";

type Compiled = ReturnType<typeof compile>;

export function getExpectSnapshot(result: Compiled) {
  return `
  ${result.css}
  
  ${result.code}
  `;
}
