import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { FC, ReactNode } from "react";

interface ReactQueryProvide {
  children: ReactNode;
}
const queryClient = new QueryClient();
const ReactQueryProviders: FC<ReactQueryProvide> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryProviders;
