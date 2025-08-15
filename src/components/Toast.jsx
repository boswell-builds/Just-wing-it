import React from "react";

const ToastContext = React.createContext(null);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const api = React.useMemo(() => ({
    show: (msg, type = "info") => {
      const id = Math.random().toString(36).slice(2);
      setToasts(t => [...t, { id, msg, type }]);
      setTimeout(() => {
        setToasts(t => t.filter(x => x.id !== id));
      }, 3000);
    }
  }), []);

  return (
    <ToastContext.Provider value={api}>
      {children}
      <div className="fixed top-4 right-4 space-y-2 z-[60]">
        {toasts.map(t => (
          <div key={t.id} className="px-4 py-3 rounded-xl border card shadow">
            <div className="font-semibold">
              {t.type === "error" ? "Error" : "Notice"}
            </div>
            <div className="text-sm opacity-80">{t.msg}</div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = React.useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within <ToastProvider/>");
  return ctx;
}
