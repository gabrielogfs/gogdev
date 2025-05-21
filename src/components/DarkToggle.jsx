import React from "react";
import { Switch } from "antd";
import { SunOutlined, MoonOutlined } from "@ant-design/icons";
import { useTheme } from "../contexts/themeContext";

const DarkToggle = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div>
      <Switch
        onChange={toggleDarkMode}
        checked={darkMode}
        unCheckedChildren={<SunOutlined />}
        checkedChildren={<MoonOutlined />}
        className="ml-4"
      />
    </div>
  );
};
export default DarkToggle;