import React from 'react';

import {List} from './styles';
import {Heading1, Text3, Text2Bold} from '../../ui-kit/Typography';

interface IPrivacyPolicy {
  title: string;
  description: string[];
  list: {
    title: string;
    list: string[];
  }[];
}

interface IPrivacyPolicyProps {
  data: IPrivacyPolicy;
}

export const PrivacyPolicy: React.FC<IPrivacyPolicyProps> = ({data}) => {
  return (
    <div>
      <Heading1>{data.title}</Heading1>
      <List>
        {data.description.map((item, index) => (
          <li key={index}>
            <Text3>{item}</Text3>
          </li>
        ))}
      </List>
      <ul>
        {data.list.map((item, index) => (
          <li key={index}>
            <Text2Bold>{item.title}</Text2Bold>
            <List>
              {item.list.map((listItem, index) => (
                <Text3 key={index}>{listItem}</Text3>
              ))}
            </List>
          </li>
        ))}
      </ul>
    </div>
  );
};
