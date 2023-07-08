import { describe, test, expect } from "vitest";
import { compile } from "../compile";
import { getExpectSnapshot } from "./testUtils";

describe("", () => {
  test("", () => {
    // Arrange
    const code = `
        import { Box } from '@kuma-ui/core'

        const App = () => {
            return <Box color='red'>hello world</Box>
        }
        `;
    const result = compile(code, "test", { Box: "Box" });
    expect(getExpectSnapshot(result)).toMatchSnapshot();
  });
});
