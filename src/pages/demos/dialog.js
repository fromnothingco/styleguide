import React, { useState } from "react";
import Button from "../../components/generics/button";
import Dialog from "../../components/generics/dialog";

const DialogDemo = () => {
  const [dialogState, setDialogState] = useState(false);
  const toggleDialog = () => setDialogState(!dialogState);
  return (
    <>
      <Button onClick={toggleDialog}>Show Modal</Button>
      <Dialog active={dialogState} toggleDialog={toggleDialog}>
        somecontent
      </Dialog>
    </>
  );
};

export default DialogDemo;
