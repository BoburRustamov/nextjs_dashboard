import { ChartBarIcon, TrendingUpIcon, ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/outline';

export default function AnalyticsPage() {
  // Mock analytics data
  const metrics = [
    {
      title: 'Total Sales',
      value: '$125,430',
      change: '+12.5%',
      trend: 'up',
      color: 'success',
    },
    {
      title: 'Conversion Rate',
      value: '3.24%',
      change: '+0.8%',
      trend: 'up',
      color: 'primary',
    },
    {
      title: 'Avg. Order Value',
      value: '$284.50',
      change: '-2.1%',
      trend: 'down',
      color: 'warning',
    },
    {
      title: 'Customer Retention',
      value: '84.2%',
      change: '+5.3%',
      trend: 'up',
      color: 'success',
    },
  ];

  const topProducts = [
    { name: 'Premium Dashboard Template', sales: 1243, revenue: '$62,150' },
    { name: 'Analytics Pro Package', sales: 892, revenue: '$44,600' },
    { name: 'UI Component Library', sales: 654, revenue: '$32,700' },
    { name: 'Design System Bundle', sales: 432, revenue: '$21,600' },
  ];

  return (
    <div className="w-full animate-fade-in">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics</h1>
        <p className="text-gray-600">Track your business performance and insights</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {metrics.map((metric, index) => (
          <div
            key={metric.title}
            className="bg-white rounded-xl shadow-soft p-6 border border-gray-100 hover:shadow-soft-lg transition-all duration-300 animate-scale-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">{metric.title}</h3>
              {metric.trend === 'up' ? (
                <ArrowUpIcon className="h-5 w-5 text-success-600" />
              ) : (
                <ArrowDownIcon className="h-5 w-5 text-danger-600" />
              )}
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</p>
            <div className="flex items-center gap-2">
              <span
                className={`text-sm font-semibold ${
                  metric.trend === 'up' ? 'text-success-600' : 'text-danger-600'
                }`}
              >
                {metric.change}
              </span>
              <span className="text-sm text-gray-500">vs last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid gap-6 lg:grid-cols-2 mb-8">
        {/* Revenue Trend */}
        <div className="bg-white rounded-xl shadow-soft p-6 border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Revenue Trend</h2>
          <div className="space-y-4">
            {[
              { month: 'January', amount: 24500, percent: 85 },
              { month: 'February', amount: 28300, percent: 92 },
              { month: 'March', amount: 22100, percent: 75 },
              { month: 'April', amount: 31200, percent: 100 },
            ].map((item, index) => (
              <div key={item.month} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">{item.month}</span>
                  <span className="text-sm font-bold text-gray-900">${item.amount.toLocaleString()}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-primary-500 to-primary-600 h-2.5 rounded-full transition-all duration-1000"
                    style={{ width: `${item.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-xl shadow-soft p-6 border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Top Products</h2>
          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div
                key={product.name}
                className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-gray-50 to-white border border-gray-100 hover:shadow-md transition-all duration-200 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                    <span className="text-primary-700 font-bold text-sm">{index + 1}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{product.name}</p>
                    <p className="text-xs text-gray-500">{product.sales} sales</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">{product.revenue}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Activity Summary */}
      <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl shadow-soft p-8 border border-primary-100">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-primary-600 flex items-center justify-center">
            <ChartBarIcon className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">Performance Summary</h3>
            <p className="text-gray-600">Your business is performing well this month</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <p className="text-sm text-gray-600 mb-1">Page Views</p>
            <p className="text-2xl font-bold text-gray-900">45.2K</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <p className="text-sm text-gray-600 mb-1">Sessions</p>
            <p className="text-2xl font-bold text-gray-900">12.8K</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <p className="text-sm text-gray-600 mb-1">Bounce Rate</p>
            <p className="text-2xl font-bold text-gray-900">32.4%</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <p className="text-sm text-gray-600 mb-1">Avg. Duration</p>
            <p className="text-2xl font-bold text-gray-900">4:23</p>
          </div>
        </div>
      </div>
    </div>
  );
}
