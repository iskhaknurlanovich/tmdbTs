import { RouterProvider } from "react-router";
import { router } from "./routes/MainRoutes";
import AntdProviders from "./providers/AntdProviders";
import LanguageProvider from "./constant/language/useLanguage";

const App = () => {
  return (
    <LanguageProvider>
      <AntdProviders>
        <RouterProvider router={router} />
      </AntdProviders>
    </LanguageProvider>
  );
};

export default App;
