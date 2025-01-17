import { styled } from "@mui/material";
import { ReactNode } from "react";

interface styledButtonProps {
  children: ReactNode;
}

const StyledButton: React.FC<styledButtonProps> = ({ children }) => {
  const StyledButton = styled("button")(({ theme }) => ({
    backgroundColor: "transparent",
    border: `1px ${theme.palette.primary.contrastText}`,
    borderRadius: "3px",
    padding: "5px 15px",
    width: "100%",
    color: theme.palette.primary.contrastText,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  }));

  return (
    <>
      <StyledButton>{children}</StyledButton>
    </>
  );
};

export default StyledButton;
