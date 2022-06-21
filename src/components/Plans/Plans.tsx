import { Card } from './Components/Card';
import { plansData } from './data';

export function Plans() {
  return (
    <div>
      {plansData.map((plan) => (
        <Card
          key={plan.name}
          planName={plan.name}
          planDescription={plan.description}
          planPrice={plan.monthPrice}
          planList={plan.list}
          isRecommended={plan.isRecommended}
        />
      ))}
    </div>
  );
}
