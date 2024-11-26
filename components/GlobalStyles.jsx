import { Global } from "@mantine/core";

function GlobalStyles({ modelOpened }) {
  return (
    <Global
      styles={(theme) => ({
        body: {
          overflow: modelOpened ? "hidden" : "overlay",
        },

        "::-webkit-scrollbar": {
          width: "15px",
        },

        "::-webkit-scrollbar-thumb": {
          borderRadius: "8px",
          border: "4px solid transparent",
          backgroundClip: "content-box",
          backgroundColor: theme.colors.orange[5],
        },

        "::-webkit-scrollbar-track": {
          backgroundColor: "#232534",
        },

        "::-webkit-scrollbar-thumb:hover": {
          backgroundColor: theme.colors.orange[6],
        },
      })}
    />
  );
}

export default GlobalStyles;

