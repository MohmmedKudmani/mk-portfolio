import { Global } from "@mantine/core";

function GlobalStyles({ modelOpened }) {
  return (
    <Global
      styles={(theme) => ({
        body: {
          overflow: modelOpened ? "hidden" : "overlay",
          overflowX: "hidden",
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
          backgroundColor: theme.colorScheme === "dark" ? "#232534" : "#fdfdfd",
        },

        "::-webkit-scrollbar-thumb:hover": {
          backgroundColor: theme.colors.orange[6],
        },
      })}
    />
  );
}

export default GlobalStyles;

