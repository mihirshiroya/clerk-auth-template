import { UserButton, useUser } from '@clerk/clerk-react';
import Header from '../components/Header';
import MetricCard from '../components/MetricCard';

const Dashboard = () => {
  const { user } = useUser();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Welcome back, {user.firstName}!
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Here's what's happening with your account today
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Account Status"
            value="Active"
            icon="✅"
            color="bg-green-100 dark:bg-green-900"
          />
          <MetricCard
            title="Security Level"
            value="High"
            icon="🛡️"
            color="bg-blue-100 dark:bg-blue-900"
          />
          <MetricCard
            title="Connected Devices"
            value={user.externalAccounts.length}
            icon="🔗"
            color="bg-purple-100 dark:bg-purple-900"
          />
          <MetricCard
            title="Last Login"
            value={new Date(user.lastSignInAt).toLocaleDateString()}
            icon="⏱️"
            color="bg-yellow-100 dark:bg-yellow-900"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Profile Information</h3>
            <div className="flex items-start gap-6">
              <img
                src={user.imageUrl}
                alt={user.fullName}
                className="w-24 h-24 rounded-2xl border-4 border-white dark:border-gray-700 shadow"
              />
              <div className="space-y-2">
                <p className="text-lg font-medium">{user.fullName}</p>
                <p className="text-gray-600 dark:text-gray-400">
                  {user.primaryEmailAddress?.emailAddress}
                </p>
                <div className="flex gap-2 mt-4">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Edit Profile
                  </button>
                  <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    View Activity
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Security Card */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Security Overview</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <span>Two-Factor Authentication</span>
                <button className="text-blue-600 dark:text-blue-400 hover:underline">
                  Enable
                </button>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <span>Password Strength</span>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-16 bg-green-200 rounded-full">
                    <div className="h-2 w-full bg-green-500 rounded-full" />
                  </div>
                  <span className="text-green-500">Strong</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard; 