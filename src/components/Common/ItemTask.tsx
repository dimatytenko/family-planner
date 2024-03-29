import {FC, useState, useEffect} from 'react';
import {Dropdown} from 'antd';
import type {MenuProps} from 'antd';
import {useTranslation} from 'react-i18next';

import {
  TaskItemsWrapper,
  FilterItemsWrapper,
  StyledDoneItemIcon,
  StyledTodoItemIcon,
  TaskItemWrapper,
  StyledIconButton,
  ItemTaskTitle,
  StyledCopyIcon,
  StyledCopyFilledIcon,
} from './styles';
import {ITasksItem, itemStatusReqBody} from '../../queries/types/task';
import {StyledFilterIcon, MenuAction} from '../Common/styles';
import {GhostWrapper} from '../../ui-kit/Button';
import {useCopyToClipboard} from '../../hooks/copyToClipboard';

interface IItemTask {
  items?: ITasksItem[];
  taskId?: string;
  updateItemTaskStatus?: (id: string, body: itemStatusReqBody) => void;
  isAssignee?: boolean;
}

export const ItemTask: FC<IItemTask> = ({items, taskId, updateItemTaskStatus, isAssignee}) => {
  const [currentItems, setCurrentItems] = useState(items);
  const [filter, setFilter] = useState<boolean | 'all'>('all');
  const {copied, copy, text} = useCopyToClipboard(10000);

  const changeItemStatus = (name: string) => {
    if (!taskId) return;
    updateItemTaskStatus?.(taskId, {name});
  };

  const onFilter = (filter: boolean | 'all') => {
    if (filter === 'all') {
      setCurrentItems(items);
    } else {
      setCurrentItems(items?.filter((item) => item.status === filter));
    }
  };

  useEffect(() => {
    onFilter(filter);
  }, [items, filter]);

  return (
    <TaskItemsWrapper $isHeight>
      <FilterItemsWrapper>
        <MenuMore onFilter={setFilter} />
      </FilterItemsWrapper>
      {currentItems?.map((item) => (
        <TaskItemWrapper key={item.name} $isFirst>
          <StyledIconButton onClick={() => changeItemStatus(item.name)} disabled={!isAssignee}>
            {item.status ? <StyledDoneItemIcon /> : <StyledTodoItemIcon />}
          </StyledIconButton>
          <ItemTaskTitle>{item.name}</ItemTaskTitle>
          <StyledIconButton onClick={() => copy(item.name)}>
            {copied && text === item.name ? <StyledCopyFilledIcon /> : <StyledCopyIcon />}
          </StyledIconButton>
        </TaskItemWrapper>
      ))}
    </TaskItemsWrapper>
  );
};

export type MenuMoreProps = {
  onFilter?: (filter: boolean | 'all') => void;
};

export const MenuMore: React.FC<MenuMoreProps> = ({onFilter}) => {
  const {t} = useTranslation();

  const items: MenuProps['items'] = [
    {
      key: 1,
      label: <MenuAction onClick={() => onFilter?.(false)}>{t('common:buttons.todo')}</MenuAction>,
    },
    {
      key: 2,
      label: <MenuAction onClick={() => onFilter?.(true)}>{t('common:buttons.done')}</MenuAction>,
    },
    {
      key: 0,
      label: <MenuAction onClick={() => onFilter?.('all')}>{t('common:buttons.reset')}</MenuAction>,
    },
  ];

  return (
    <Dropdown menu={{items}} trigger={['click']}>
      <GhostWrapper>
        <StyledFilterIcon />
      </GhostWrapper>
    </Dropdown>
  );
};
