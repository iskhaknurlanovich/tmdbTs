import { ConfigProvider, type ThemeConfig } from "antd";
import type { FC, ReactNode } from "react";

interface IAntdProvidersProps {
  children: ReactNode;
}

const config: ThemeConfig = {
  token: {},
  components: {
    Button: {
      borderRadius: 5,
      colorBgContainer:
        "linear-gradient(to right,rgba(23, 94, 43, 1), rgb(0, 224, 63))",
      colorText: "#fff",
      colorPrimaryHover: "white",
    },
    Input: {
      colorTextPlaceholder: "#2d2d2d",
    },
  },
};
const AntdProviders: FC<IAntdProvidersProps> = ({ children }) => {
  return <ConfigProvider theme={config}>{children}</ConfigProvider>;
};

export default AntdProviders;
