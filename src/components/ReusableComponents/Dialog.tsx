import React from "react";

import { Dialog as MuiDialog, Typography } from "@mui/material";
import { DialogContainer } from "./styles";

interface IDialog {
  isDialogOpen: boolean;
  handleDialogState: () => void;
  title: string;
  children: React.ReactNode;
}

export const Dialog: React.FC<IDialog> = ({
  isDialogOpen,
  handleDialogState,
  title,
  children,
}) => {
  return (
    <MuiDialog open={isDialogOpen} onClose={handleDialogState}>
      <DialogContainer>
        <Typography variant="h6">{title}</Typography>
        {children}
      </DialogContainer>
    </MuiDialog>
  );
};
