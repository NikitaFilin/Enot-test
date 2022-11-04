import React, { useContext } from "react";

import { Dialog as MuiDialog, Typography } from "@mui/material";
import { DialogContainer } from "./styles";
import AppContext from "../../context/context";

interface IDialog {
  handleDialogState: () => void;
  title: string;
  children: React.ReactNode;
}

export const Dialog: React.FC<IDialog> = ({
  handleDialogState,
  title,
  children,
}) => {
  const { isDialogOpen } = useContext(AppContext);
  return (
    <MuiDialog open={isDialogOpen} onClose={handleDialogState}>
      <DialogContainer>
        <Typography variant="h6">{title}</Typography>
        {children}
      </DialogContainer>
    </MuiDialog>
  );
};
