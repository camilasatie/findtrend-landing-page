import { useState } from 'react';
import { H2 } from '@styles/components/Headings';
import { Card } from './Components/Card';
import Switch from './Components/Switch';
import { plansData } from './data';
import * as S from './style';

export function Plans() {
  const [checked, setChecked] = useState(false);
  return (
    <S.Container>
      <H2 color="white" hasMarginBottom>
        Get your best deal
      </H2>
      <Switch
        id="plan"
        leftLabel="Monthly"
        rightLabel="Yearly"
        checked={checked}
        onCheckedChange={(checked) => setChecked(!checked)}
      />
      <S.CardWrapper>
        {plansData.map((plan) => (
          <Card
            key={plan.name}
            planName={plan.name}
            planDescription={plan.description}
            planPrice={checked ? plan.yearPrice : plan.monthPrice}
            planList={plan.list}
            planType={checked ? 'Year' : 'Month'}
            isRecommended={plan.isRecommended}
          />
        ))}
      </S.CardWrapper>
    </S.Container>
  );
}
