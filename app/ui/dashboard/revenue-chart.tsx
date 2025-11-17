import { generateYAxis } from '@/app/lib/utils';
import { CalendarIcon } from '@heroicons/react/24/outline';

export default async function RevenueChart() {
  // Mock revenue data for demo purposes (no database required)
  const revenue = [
    { month: 'Jan', revenue: 2000 },
    { month: 'Feb', revenue: 1800 },
    { month: 'Mar', revenue: 2200 },
    { month: 'Apr', revenue: 2500 },
    { month: 'May', revenue: 2300 },
    { month: 'Jun', revenue: 3200 },
    { month: 'Jul', revenue: 3500 },
    { month: 'Aug', revenue: 3700 },
    { month: 'Sep', revenue: 2500 },
    { month: 'Oct', revenue: 2800 },
    { month: 'Nov', revenue: 3000 },
    { month: 'Dec', revenue: 4800 },
  ];

  const chartHeight = 350;
  const { yAxisLabels, topLabel } = generateYAxis(revenue);

  if (!revenue || revenue.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  return (
    <div className="w-full">
      <div className="rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 p-4">
        <div className="sm:grid-cols-13 mt-0 grid grid-cols-12 items-end gap-2 rounded-md bg-white p-6 md:gap-4 shadow-sm">
          <div
            className="mb-6 hidden flex-col justify-between text-sm text-gray-400 sm:flex"
            style={{ height: `${chartHeight}px` }}
          >
            {yAxisLabels.map((label) => (
              <p key={label} className="font-medium">{label}</p>
            ))}
          </div>

          {revenue.map((month, index) => (
            <div key={month.month} className="flex flex-col items-center gap-2 group">
              <div className="relative w-full">
                {/* Bar */}
                <div
                  className="w-full rounded-t-lg bg-gradient-to-t from-primary-500 to-primary-400 hover:from-primary-600 hover:to-primary-500 transition-all duration-500 ease-out shadow-md hover:shadow-lg animate-slide-up"
                  style={{
                    height: `${(chartHeight / topLabel) * month.revenue}px`,
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {/* Hover tooltip */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
                    ${month.revenue.toLocaleString()}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
                  </div>
                </div>
              </div>
              <p className="-rotate-90 text-xs text-gray-500 sm:rotate-0 font-medium group-hover:text-primary-600 transition-colors">
                {month.month}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between pt-6 px-2">
          <div className="flex items-center">
            <CalendarIcon className="h-5 w-5 text-gray-500" />
            <h3 className="ml-2 text-sm text-gray-600 font-medium">Last 12 months</h3>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gradient-to-br from-primary-500 to-primary-400 rounded-full"></div>
            <span className="text-xs text-gray-600 font-medium">Revenue</span>
          </div>
        </div>
      </div>
    </div>
  );
}
