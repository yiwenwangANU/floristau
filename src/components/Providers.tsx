"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { Theme } from "@radix-ui/themes";
import { store } from "@/redux/store";
import { CartProvider } from "@/contexts/CartContext";
export const Providers = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <CartProvider>
          <Theme>{children}</Theme>
        </CartProvider>
      </Provider>
    </QueryClientProvider>
  );
};
