import { btnThemes } from '@/constants/uiTypes';
import { ButtonType } from '@/constants/types/global';
import Button from '@/components/button';
import { ButtonGroup } from './styled';

interface Props {
  tabs: ButtonType[];
  activeTab: string;
  clickHandler: (id: string) => void;
}

const ButtonTabs = ({ tabs, activeTab, clickHandler }: Props) => {
  return (
    <ButtonGroup>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        const btnTheme = isActive
          ? btnThemes.primary
          : btnThemes.primaryOutline;
        return (
          <Button
            {...tab}
            key={tab.id}
            btnTheme={btnTheme}
            onClick={() => clickHandler(tab.id)}
          />
        );
      })}
    </ButtonGroup>
  );
};

export default ButtonTabs;
