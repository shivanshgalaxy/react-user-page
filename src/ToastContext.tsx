import React from "react";

export const ToastContext = React.createContext({
  showToast: false,
  setShowToast: (show: boolean) => {},
});
