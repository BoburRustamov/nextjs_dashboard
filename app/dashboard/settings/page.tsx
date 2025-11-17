import {
  UserCircleIcon,
  BellIcon,
  ShieldCheckIcon,
  CreditCardIcon,
  GlobeAltIcon,
  PaintBrushIcon
} from '@heroicons/react/24/outline';

export default function SettingsPage() {
  const settingsSections = [
    {
      icon: UserCircleIcon,
      title: 'Profile Settings',
      description: 'Manage your account information and preferences',
      color: 'primary',
      fields: [
        { label: 'Full Name', value: 'John Doe', type: 'text' },
        { label: 'Email Address', value: 'john@acme.com', type: 'email' },
        { label: 'Phone Number', value: '+1 (555) 123-4567', type: 'tel' },
      ],
    },
    {
      icon: BellIcon,
      title: 'Notifications',
      description: 'Configure how you receive notifications',
      color: 'success',
      fields: [
        { label: 'Email Notifications', value: true, type: 'toggle' },
        { label: 'Push Notifications', value: true, type: 'toggle' },
        { label: 'SMS Alerts', value: false, type: 'toggle' },
      ],
    },
    {
      icon: ShieldCheckIcon,
      title: 'Security',
      description: 'Manage your security and privacy settings',
      color: 'warning',
      fields: [
        { label: 'Two-Factor Authentication', value: true, type: 'toggle' },
        { label: 'Login Alerts', value: true, type: 'toggle' },
        { label: 'Session Timeout', value: '30 minutes', type: 'select' },
      ],
    },
  ];

  return (
    <div className="w-full animate-fade-in">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
        <p className="text-gray-600">Manage your account settings and preferences</p>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {[
          { icon: CreditCardIcon, label: 'Billing', color: 'primary' },
          { icon: GlobeAltIcon, label: 'Language', color: 'success' },
          { icon: PaintBrushIcon, label: 'Appearance', color: 'warning' },
          { icon: ShieldCheckIcon, label: 'Privacy', color: 'danger' },
        ].map((action, index) => (
          <button
            key={action.label}
            className="flex items-center gap-3 p-4 bg-white rounded-xl border-2 border-gray-200 hover:border-primary-500 hover:shadow-md transition-all duration-200 animate-scale-in"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className={`w-10 h-10 rounded-lg bg-${action.color}-100 flex items-center justify-center`}>
              <action.icon className={`h-5 w-5 text-${action.color}-600`} />
            </div>
            <span className="font-semibold text-gray-900">{action.label}</span>
          </button>
        ))}
      </div>

      {/* Settings Sections */}
      <div className="space-y-6">
        {settingsSections.map((section, index) => (
          <div
            key={section.title}
            className="bg-white rounded-xl shadow-soft border border-gray-100 overflow-hidden animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Section Header */}
            <div className="bg-gradient-to-r from-gray-50 to-white p-6 border-b border-gray-100">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${section.color}-100 to-${section.color}-200 flex items-center justify-center`}>
                  <section.icon className={`h-6 w-6 text-${section.color}-600`} />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
                  <p className="text-sm text-gray-600">{section.description}</p>
                </div>
              </div>
            </div>

            {/* Section Content */}
            <div className="p-6">
              <div className="space-y-4">
                {section.fields.map((field, fieldIndex) => (
                  <div
                    key={field.label}
                    className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div>
                      <label className="font-medium text-gray-900 block mb-1">
                        {field.label}
                      </label>
                      {field.type === 'toggle' ? (
                        <span className="text-sm text-gray-500">
                          {field.value ? 'Enabled' : 'Disabled'}
                        </span>
                      ) : (
                        <span className="text-sm text-gray-500">{field.value}</span>
                      )}
                    </div>
                    <div>
                      {field.type === 'toggle' ? (
                        <button
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            field.value ? 'bg-primary-600' : 'bg-gray-300'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              field.value ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      ) : (
                        <button className="px-4 py-2 text-sm font-semibold text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
                          Edit
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Save Button */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <button className="px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Danger Zone */}
      <div className="mt-8 bg-white rounded-xl shadow-soft border-2 border-danger-200 overflow-hidden">
        <div className="bg-gradient-to-r from-danger-50 to-danger-100 p-6 border-b border-danger-200">
          <h2 className="text-xl font-semibold text-danger-900">Danger Zone</h2>
          <p className="text-sm text-danger-700 mt-1">Irreversible actions for your account</p>
        </div>
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-900">Delete Account</h3>
              <p className="text-sm text-gray-600">Permanently delete your account and all data</p>
            </div>
            <button className="px-6 py-2 bg-danger-600 text-white font-semibold rounded-lg hover:bg-danger-700 transition-colors">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
