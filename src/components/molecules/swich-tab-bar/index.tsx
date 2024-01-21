import { useState } from "react";
import { Box, Typography } from "../../atoms";

export interface SwitchBarDataModel {
  id: number;
  symbol: string;
  title: string;
  route?: string
}

interface IProps {
  tabDataList: SwitchBarDataModel[]
  onChange: (selectedTab: SwitchBarDataModel) => void;
}

const SwichTabBar = ({ onChange, tabDataList }: IProps) => {
  const [activeTab, setActiveTab] = useState(tabDataList[0].title);

  const onchangeSwitchBar = (tab: SwitchBarDataModel) => {
    setActiveTab(tab.title);
    onChange(tab);
  }

  const enableModeStyle = "text-blue-500 bg-white shadow";
  const disableModeStyle = "text-gray-400 bg-gray-50";

  return (
    <Box className="flex justify-center items-center">
      <Box className="flex items-center bg-gray-50 rounded-lg p-1.5">
        {tabDataList.map(tab => (
          <Typography
            key={tab.id}
            type="h4"
            className={`${activeTab === tab.title ? enableModeStyle : disableModeStyle
              } font-semibold p-2 rounded-lg cursor-pointer select-none`}
            onClick={() => onchangeSwitchBar(tab)}
          >
            {tab.title}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default SwichTabBar;
