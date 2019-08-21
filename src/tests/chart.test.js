import ratingChart from '../scripts/components/chart';
import Chart from 'chart.js';

jest.mock('chart.js');

describe('ratingChart', () => {
  beforeEach(() => {
    Chart.mockClear();
  });

  afterEach(() => {});

  it('it should call Chart from library once', () => {
    ratingChart();
    expect(Chart).toHaveBeenCalledTimes(1);
  });
});
