import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => {
  const dark = theme.colorScheme === "dark";
  const primary = theme.colors.primary;
  const orange = theme.colors.orange;
  const textDark = theme.other.textDark;
  const textLight = theme.other.textLight;
  const backgroundDark = theme.other.backgroundDark;
  const backgroundLight = theme.other.backgroundLight;

  return {
    title: {
      fontSize: "1.7rem",
      lineHeight: 0.8,
      fontWeight: 500,
    },
    features: {
      backgroundColor: dark ? primary[8] : primary[0],
      boxShadow: theme.shadows.xl,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    description: {
      color: dark ? textDark : textLight,
    },
    imageOverlay: {
      borderRadius: "0.5rem",
      border: `1px ${orange[5]} solid`,
      padding: "0",
      [theme.fn.smallerThan("md")]: {
        marginTop: "2rem",
      },
    },
    image: {
      borderRadius: "0.5rem",
    },
    projectIcon: {
      "&:hover": {
        opacity: 0.7,
      },
    },
  };
});

export default useStyles;

