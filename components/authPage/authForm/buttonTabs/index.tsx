import Button from '@/components/button';
import { ButtonType } from '@/constants/types/global';
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
        const btnTheme = isActive ? 'primary' : 'primaryOutline';
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
