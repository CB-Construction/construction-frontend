import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { getUserData, clearAuthCookies, isAuthenticated } from '../utils/cookies';
import {
  Mail,
  Shield,
  LogOut,
  Edit,
  Calendar,
  Settings,
  ArrowLeft,
  HardHat,
  Building,
  Wrench,
  Award,
  Truck,
} from "lucide-react";

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/signin');
    } else {
      const data = getUserData();
      setUser(data);
    }
  }, [navigate]);

  const handleLogout = () => {
    clearAuthCookies();
    navigate('/signin');
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-12 px-4">
      {/* Header with Company Branding */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Dashboard
          </Link>
          <div className="flex items-center gap-3">
            <div className="relative">
              <HardHat className="w-8 h-8 text-cyan-500" />
              <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h2 className="text-lg font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                CB Construction
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Future Building Solutions
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-cyan-100 dark:border-slate-700 relative overflow-hidden">
            {/* Construction-themed decorative elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 opacity-20 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-blue-500 to-slate-500 opacity-20 rounded-full blur-2xl" />

            <div className="flex flex-col items-center relative z-10">
              {/* Avatar with Construction Theme */}
              <div className="relative group">
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-900 dark:to-blue-900 flex items-center justify-center mb-6 shadow-xl border-4 border-cyan-400 dark:border-cyan-500 transition-transform duration-300 group-hover:scale-105">
                  <HardHat className="w-16 h-16 text-cyan-500 dark:text-cyan-400" />
                </div>
                <button className="absolute bottom-2 right-2 w-8 h-8 bg-cyan-500 hover:bg-cyan-600 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 group-hover:opacity-100 opacity-80">
                  <Edit className="w-4 h-4 text-white" />
                </button>
              </div>

              {/* User Info */}
              <h1 className="text-3xl font-bold mb-3 text-gray-900 dark:text-white tracking-tight text-center">
                {user.username}
              </h1>

              {user.role && (
                <span className="inline-flex items-center px-4 py-2 mb-4 rounded-full text-sm font-semibold bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 dark:from-cyan-900 dark:to-blue-900 dark:text-cyan-300 shadow-lg border border-cyan-200 dark:border-cyan-700">
                  <Shield className="w-4 h-4 mr-2" />
                  {user.role} - CB Construction
                </span>
              )}

              {user.email && (
                <div className="flex items-center text-gray-600 dark:text-gray-300 mb-6 bg-gray-50 dark:bg-slate-800 px-4 py-2 rounded-xl border border-gray-200 dark:border-slate-700">
                  <Mail className="w-4 h-4 mr-2 text-cyan-500" />
                  <span className="text-sm">{user.email}</span>
                </div>
              )}

              {/* Company Badge */}
              <div className="w-full mb-6 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/30 dark:to-blue-900/30 rounded-xl border border-cyan-200 dark:border-cyan-700">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Building className="w-5 h-5 text-cyan-600" />
                  <span className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
                    Team Member
                  </span>
                </div>
                <p className="text-xs text-center text-gray-600 dark:text-gray-300">
                  Building the future with innovative construction solutions
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 w-full">
                <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all duration-300 font-semibold transform hover:-translate-y-0.5">
                  <Settings className="w-5 h-5" />
                  Edit Profile
                </button>

                <button
                  onClick={handleLogout}
                  className="w-full px-6 py-3 bg-gradient-to-r from-slate-500 to-gray-600 hover:from-slate-600 hover:to-gray-700 text-white rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all duration-300 font-semibold transform hover:-translate-y-0.5"
                >
                  <LogOut className="w-5 h-5" />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Activity Card */}
          <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Recent Activity
              </h3>
              <Calendar className="w-5 h-5 text-cyan-500" />
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-cyan-50 dark:bg-cyan-900/20 rounded-xl border border-cyan-100 dark:border-cyan-800">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  Logged into CB Construction portal
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  Accessed project dashboard
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-slate-800 rounded-xl">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  Profile viewed
                </span>
              </div>
            </div>
          </div>

          {/* Stats Card */}
          <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Employment Stats
              </h3>
              <Award className="w-5 h-5 text-cyan-500" />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  Member since
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  Today
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  Status
                </span>
                <span className="text-sm font-medium text-green-600 dark:text-green-400">
                  Active Employee
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  Projects
                </span>
                <span className="text-sm font-medium text-cyan-600 dark:text-cyan-400">
                  3 Active
                </span>
              </div>
            </div>
          </div>

          {/* Construction Quick Actions */}
          <div className="md:col-span-2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Construction Hub
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button className="p-4 bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-900/50 dark:to-cyan-800/50 rounded-xl hover:from-cyan-100 hover:to-cyan-200 dark:hover:from-cyan-800/70 dark:hover:to-cyan-700/70 transition-all duration-300 text-left group border border-cyan-200 dark:border-cyan-700">
                <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Building className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                  My Projects
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  View assigned construction projects
                </p>
              </button>

              <button className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/50 dark:to-blue-800/50 rounded-xl hover:from-blue-100 hover:to-blue-200 dark:hover:from-blue-800/70 dark:hover:to-blue-700/70 transition-all duration-300 text-left group border border-blue-200 dark:border-blue-700">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Wrench className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                  Equipment
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Manage tools and equipment
                </p>
              </button>

              <button className="p-4 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900/50 dark:to-slate-800/50 rounded-xl hover:from-slate-100 hover:to-slate-200 dark:hover:from-slate-800/70 dark:hover:to-slate-700/70 transition-all duration-300 text-left group border border-slate-200 dark:border-slate-700">
                <div className="w-10 h-10 bg-slate-500 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Truck className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                  Fleet
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Track vehicles and deliveries
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
