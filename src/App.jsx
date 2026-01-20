import React, { useState, useEffect } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  AreaChart, Area, PieChart, Pie, Cell
} from 'recharts';
import {
  Users, DollarSign, Target, TrendingUp, Calendar, Mail,
  Search, Download, Plus, Layout, Settings, LogOut,
  ChevronRight, Globe, MessageSquare, GraduationCap,
  ChevronLeft, LayoutDashboard, FileText, Heart, Award,
  Check, Copy, Send, Zap, Eye, X, User, Bot, Minimize2, Maximize2
} from 'lucide-react';
import { translations, useTranslation } from './translations';
import AIChatbot from './AIChatbot';

// Mock Data
const mockStudents = [
  { id: 1, name: 'Alex Johnson', email: 'alex.j@example.com', status: 'Applied', gpa: '3.8', major: 'CS', lastUpdate: '2025-05-18' },
  { id: 2, name: 'Sarah Williams', email: 'sarah.w@example.com', status: 'Review', gpa: '3.9', major: 'Engineering', lastUpdate: '2025-05-17' },
  { id: 3, name: 'Michael Chen', email: 'm.chen@example.com', status: 'Accepted', gpa: '3.7', major: 'Business', lastUpdate: '2025-05-16' },
  { id: 4, name: 'Emma Davis', email: 'emma.d@example.com', status: 'Review', gpa: '3.6', major: 'Psychology', lastUpdate: '2025-05-18' },
];

const mockDonors = [
  { id: 1, name: 'Robert Smith', email: 'r.smith@foundation.org', status: 'Major', lifetime: 50000, lastGift: '2025-03-12', engagement: 'High', gifts: 12 },
  { id: 2, name: 'Elena Rodriguez', email: 'elena.r@corporate.com', status: 'Corporate', lifetime: 25000, lastGift: '2025-04-01', engagement: 'Medium', gifts: 5 },
  { id: 3, name: 'David Wilson', email: 'david.w@alumni.edu', status: 'Alumni', lifetime: 5000, lastGift: '2025-05-02', engagement: 'High', gifts: 8 },
];

const mockCampaigns = [
  { id: 1, name: 'Spring Annual Fund 2025', goal: 500000, raised: 385000, donors: 1240, startDate: '2025-01-01', endDate: '2025-06-30', status: 'Active' },
  { id: 2, name: 'Tech Lab Expansion', goal: 1000000, raised: 750000, donors: 215, startDate: '2024-09-01', endDate: '2025-08-31', status: 'Active' },
];

const revenueData = [
  { month: 'Jan', revenue: 45000, donors: 120 },
  { month: 'Feb', revenue: 52000, donors: 145 },
  { month: 'Mar', revenue: 48000, donors: 130 },
  { month: 'Apr', revenue: 61000, donors: 190 },
  { month: 'May', revenue: 55000, donors: 165 },
];

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

// Components
const Header = ({ onLoginClick, language, onLanguageChange }) => {
  const { t } = useTranslation(language);
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <GraduationCap className="w-8 h-8 text-blue-600" />
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">AdmitIQ</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#solutions" className="text-gray-600 hover:text-blue-600 transition">{t('solutions')}</a>
          <a href="#features" className="text-gray-600 hover:text-blue-600 transition">{t('features')}</a>
          <a href="#about" className="text-gray-600 hover:text-blue-600 transition">{t('about')}</a>
          <div className="flex items-center space-x-4">
            <button
              onClick={onLanguageChange}
              className="flex items-center space-x-1 px-3 py-1 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition text-sm"
              title={language === 'en' ? 'Switch to French' : 'Passer à l\'anglais'}
            >
              <Globe className="w-4 h-4" />
              <span>{language ? language.toUpperCase() : 'EN'}</span>
            </button>
            <button onClick={onLoginClick} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-lg shadow-blue-200">
              {t('login')}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Hero = ({ onGetStarted, language }) => {
  const { t } = useTranslation(language);
  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          {t('heroTitlePart1')} <span className="text-blue-600">{t('heroTitleHighlight')}</span> {t('heroTitlePart2')}
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          {t('heroSubtitle')}
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 mb-20">
          <button onClick={onGetStarted} className="w-full md:w-auto px-8 py-4 bg-blue-600 text-white rounded-xl text-lg font-semibold hover:bg-blue-700 transition shadow-xl shadow-blue-200 flex items-center justify-center">
            {t('getStartedFree')} <ChevronRight className="ml-2 w-5 h-5" />
          </button>
          <button className="w-full md:w-auto px-8 py-4 bg-white text-gray-900 border-2 rounded-xl text-lg font-semibold hover:bg-gray-50 transition">
            {t('watchDemo')}
          </button>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-blue-600 blur-3xl opacity-10 rounded-full"></div>
          <div className="relative bg-white p-4 rounded-2xl shadow-2xl border aspect-video overflow-hidden flex items-center justify-center bg-gray-900">
            <div className="text-white text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition">
                <Play fill="white" className="w-8 h-8 ml-1" />
              </div>
              <p className="text-lg font-medium">{t('systemOverviewVideo')}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
          <div>
            <div className="text-3xl font-bold text-blue-600">500+</div>
            <div className="text-sm text-gray-500">{t('institutions')}</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600">1M+</div>
            <div className="text-sm text-gray-500">{t('studentsTracked')}</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600">98%</div>
            <div className="text-sm text-gray-500">{t('satisfaction')}</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600">$2B+</div>
            <div className="text-sm text-gray-500">{t('donationsManaged')}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Play = ({ fill, className }) => (
  <svg className={className} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <path d="M5 3L19 12L5 21V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Solutions = ({ language }) => {
  const { t } = useTranslation(language);
  const solutions = [
    { icon: <Target className="w-8 h-8 text-blue-600" />, title: t('admissionsAI'), desc: t('admissionsAIDesc') },
    { icon: <DollarSign className="w-8 h-8 text-green-600" />, title: t('donorManagement'), desc: t('donorManagementDesc') },
    { icon: <TrendingUp className="w-8 h-8 text-purple-600" />, title: t('financialForecasting'), desc: t('financialForecastingDesc') },
    { icon: <Users className="w-8 h-8 text-orange-600" />, title: t('studentPortal'), desc: t('studentPortalDesc') },
  ];
  return (
    <section id="solutions" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('tailoredSolutions')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t('solutionsSubtitle')}</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {solutions.map((s, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-md border hover:border-blue-500 transition-all hover:-translate-y-1">
              <div className="mb-6 bg-gray-50 w-16 h-16 rounded-xl flex items-center justify-center">{s.icon}</div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-gray-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = ({ language }) => {
  const { t } = useTranslation(language);
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-6">
            <GraduationCap className="w-8 h-8 text-blue-500" />
            <span className="text-2xl font-bold text-white">AdmitIQ</span>
          </div>
          <p className="text-sm">{t('footerDesc')}</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">{t('product')}</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-500">{t('features')}</a></li>
            <li><a href="#" className="hover:text-blue-500">{t('pricing')}</a></li>
            <li><a href="#" className="hover:text-blue-500">{t('security')}</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">{t('company')}</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-500">{t('about')}</a></li>
            <li><a href="#" className="hover:text-blue-500">{t('careers')}</a></li>
            <li><a href="#" className="hover:text-blue-500">{t('contact')}</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">{t('legal')}</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-500">{t('privacy')}</a></li>
            <li><a href="#" className="hover:text-blue-500">{t('terms')}</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-sm text-center">
        © 2025 AdmitIQ Inc. {t('allRightsReserved')}
      </div>
    </footer>
  );
};

// Sidebar Component
const Sidebar = ({ currentPage, onNavigate, language, onLanguageChange, userRole }) => {
  const { t } = useTranslation(language);
  const items = [
    { id: 'overview', icon: <LayoutDashboard className="w-5 h-5" />, label: t('overview'), roles: ['admin', 'applicant'] },
    { id: 'students', icon: <Users className="w-5 h-5" />, label: t('students'), roles: ['admin'] },
    { id: 'donors', icon: <DollarSign className="w-5 h-5" />, label: t('donors'), roles: ['admin'] },
    { id: 'campaigns', icon: <Target className="w-5 h-5" />, label: t('campaigns'), roles: ['admin'] },
    { id: 'email-ai', icon: <Mail className="w-5 h-5" />, label: t('emailAI'), roles: ['admin'] },
    { id: 'analytics', icon: <TrendingUp className="w-5 h-5" />, label: t('analytics'), roles: ['admin'] },
  ].filter(item => item.roles.includes(userRole));

  return (
    <div className="w-64 bg-gray-900 text-gray-400 p-6 flex flex-col min-h-screen">
      <div className="flex items-center space-x-2 mb-10">
        <GraduationCap className="w-8 h-8 text-blue-500" />
        <span className="text-2xl font-bold text-white">AdmitIQ</span>
      </div>

      <nav className="flex-1 space-y-2">
        {items.map(item => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition duration-200 ${currentPage === item.id ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50' : 'hover:bg-gray-800 hover:text-white'
              }`}
          >
            {item.icon}
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto space-y-4 pt-6 border-t border-gray-800">
        <button
          onClick={onLanguageChange}
          className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-gray-800 hover:text-white transition"
        >
          <Globe className="w-5 h-5" />
          <span className="font-medium">{language === 'en' ? 'Passer en Français' : 'Switch to English'}</span>
        </button>
        <div className="bg-gray-800 rounded-xl p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">{t('plan')}</p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-200 font-medium">Enterprise</span>
            <span className="text-[10px] bg-blue-500 text-white px-2 py-0.5 rounded-full uppercase font-bold">Pro</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Sub-components for pages
const OverviewPage = ({ onNavigate, language }) => {
  const { t } = useTranslation(language);
  const [timeRange, setTimeRange] = useState('1m');

  const getDynamicData = (range) => {
    const dataMap = {
      '1d': { stats: { students: 12, donors: 3, rate: 85, raised: 5000 }, chart: revenueData.slice(-1) },
      '1w': { stats: { students: 84, donors: 21, rate: 82, raised: 35000 }, chart: revenueData.slice(-2) },
      '1m': { stats: { students: 342, donors: 86, rate: 78, raised: 125000 }, chart: revenueData },
      '3m': { stats: { students: 1024, donors: 254, rate: 76, raised: 450000 }, chart: revenueData.map(d => ({ ...d, revenue: d.revenue * 3 })) },
      '6m': { stats: { students: 2500, donors: 450, rate: 75, raised: 1200000 }, chart: revenueData.map(d => ({ ...d, revenue: d.revenue * 6 })) },
      '1y': { stats: { students: 4800, donors: 1240, rate: 74, raised: 2500000 }, chart: revenueData.map(d => ({ ...d, revenue: d.revenue * 12 })) }
    };
    return dataMap[range] || dataMap['1m'];
  };

  const dynamicStats = getDynamicData(timeRange);
  const currentStats = dynamicStats.stats;
  const chartData = dynamicStats.chart;

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{t('dashboardOverview')}</h1>
        <div className="flex bg-white rounded-lg p-1 shadow-sm border">
          {['1d', '1w', '1m', '3m', '6m', '1y'].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-4 py-2 rounded-md transition ${timeRange === range ? 'bg-blue-600 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'
                }`}
            >
              {t(range)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard icon={<Users />} title={t('totalStudents')} value={currentStats.students.toLocaleString()} change="+12%" color="blue" />
        <StatsCard icon={<DollarSign />} title={t('activeDonors')} value={currentStats.donors.toLocaleString()} change="+5%" color="green" />
        <StatsCard icon={<Target />} title={t('enrollmentRate')} value={`${currentStats.rate}%`} change="-2%" color="purple" />
        <StatsCard icon={<TrendingUp />} title={t('totalRaised')} value={`$${(currentStats.raised / 1000).toFixed(0)}K`} change="+18%" color="orange" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-md border">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-800">{t('engagementTrends')}</h3>
            <button
              onClick={() => {
                const csvContent = "Month,Revenue,Donors\n" + chartData.map(d => `${d.month},${d.revenue},${d.donors}`).join("\n");
                const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
                const url = URL.createObjectURL(blob);
                const link = document.createElement("a");
                link.setAttribute("href", url);
                link.setAttribute("download", `engagement_report_${timeRange}.csv`);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="flex items-center space-x-2 text-sm text-blue-600 hover:text-blue-700 font-semibold"
            >
              <Download className="w-4 h-4" />
              <span>{t('export')}</span>
            </button>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <Tooltip
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  formatter={(value) => [`$${value.toLocaleString()}`, t('raised')]}
                />
                <Area type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md border">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-800">{t('enrollmentStatus')}</h3>
            <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-400 group relative">
              <Download className="w-5 h-5" />
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 whitespace-nowrap transition">Download Chart</span>
            </button>
          </div>
          <div className="h-64 mb-6">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={[
                    { name: language === 'en' ? 'Applied' : 'Appliqué', value: 400 },
                    { name: language === 'en' ? 'Review' : 'En examen', value: 300 },
                    { name: language === 'en' ? 'Accepted' : 'Accepté', value: 300 },
                    { name: language === 'en' ? 'Enrolled' : 'Inscrit', value: 200 },
                  ]}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {COLORS.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-700 mb-4">{t('quickActions')}</h4>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => onNavigate('campaigns')}
                className="p-3 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition flex flex-col items-center text-center space-y-1"
              >
                <Target className="w-5 h-5" />
                <span className="text-xs font-semibold">{t('sendCampaign')}</span>
              </button>
              <button
                onClick={() => onNavigate('students')}
                className="p-3 bg-green-50 text-green-600 rounded-xl hover:bg-green-100 transition flex flex-col items-center text-center space-y-1"
              >
                <Users className="w-5 h-5" />
                <span className="text-xs font-semibold">{t('addStudent')}</span>
              </button>
              <button
                onClick={() => onNavigate('analytics')}
                className="p-3 bg-purple-50 text-purple-600 rounded-xl hover:bg-purple-100 transition flex flex-col items-center text-center space-y-1"
              >
                <Layout className="w-5 h-5" />
                <span className="text-xs font-semibold">{t('generateReport')}</span>
              </button>
              <button className="p-3 bg-gray-50 text-gray-600 rounded-xl hover:bg-gray-100 transition flex flex-col items-center text-center space-y-1">
                <Settings className="w-5 h-5" />
                <span className="text-xs font-semibold">{t('settings')}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatsCard = ({ icon, title, value, change, color }) => (
  <div className="bg-white p-6 rounded-2xl shadow-md border hover:shadow-lg transition cursor-default group">
    <div className="flex items-center justify-between mb-4">
      <div className={`p-3 rounded-xl bg-${color}-50 text-${color}-600 group-hover:scale-110 transition`}>
        {React.cloneElement(icon, { className: 'w-6 h-6' })}
      </div>
      <span className={`text-sm font-bold ${change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
        {change}
      </span>
    </div>
    <h3 className="text-gray-500 text-sm font-medium mb-1">{title}</h3>
    <div className="text-2xl font-bold text-gray-900">{value}</div>
  </div>
);

const StudentsPage = ({ language }) => {
  const { t } = useTranslation(language);
  const [searchTerm, setSearchTerm] = useState('');
  const filteredStudents = mockStudents.filter(s =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.major.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleExport = () => {
    const csvContent = "Name,Email,Major,GPA,Status,Last Update\n" +
      filteredStudents.map(s => `${s.name},${s.email},${s.major},${s.gpa},${s.status},${s.lastUpdate}`).join("\n");
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "students_list.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{t('studentsTitle')}</h1>
        <div className="flex space-x-3">
          <button
            onClick={handleExport}
            className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
          >
            <Download className="w-5 h-5" />
            <span>{t('export')}</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            <Plus className="w-5 h-5" />
            <span>{t('addNewStudent')}</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md border overflow-hidden">
        <div className="p-4 border-b">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder={t('searchPlaceholder')}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">{t('name')}</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">{t('email')}</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">{t('major')}</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">{t('gpa')}</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">{t('status')}</th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">{t('actions')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredStudents.map(student => (
                <tr key={student.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{student.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.major}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{student.gpa}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-bold rounded-full ${student.status === 'Accepted' ? 'bg-green-100 text-green-700' :
                      student.status === 'Applied' ? 'bg-blue-100 text-blue-700' :
                        'bg-orange-100 text-orange-700'
                      }`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const DonorsPage = ({ language }) => {
  const { t } = useTranslation(language);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDonor, setSelectedDonor] = useState(null);
  const filtered = mockDonors.filter(d => d.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="p-8 text-gray-800">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{t('donors')}</h1>
        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          <Plus className="w-5 h-5" />
          <span>Add New Donor</span>
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {filtered.map(donor => (
          <div key={donor.id} className="bg-white rounded-xl shadow-md p-6 border hover:border-blue-500 transition-all cursor-pointer" onClick={() => setSelectedDonor(donor)}>
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
                {donor.name.charAt(0)}
              </div>
              <span className={`px-3 py-1 text-xs font-bold rounded-full ${donor.status === 'Major' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
                }`}>{donor.status}</span>
            </div>
            <h3 className="text-xl font-bold mb-1">{donor.name}</h3>
            <p className="text-gray-500 text-sm mb-4">{donor.email}</p>
            <div className="grid grid-cols-2 gap-4 pt-4 border-t">
              <div>
                <div className="text-xs text-gray-400 font-semibold uppercase">Lifetime</div>
                <div className="font-bold text-gray-900">${donor.lifetime.toLocaleString()}</div>
              </div>
              <div>
                <div className="text-xs text-gray-400 font-semibold uppercase">Engagement</div>
                <div className="font-bold text-blue-600">{donor.engagement}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedDonor && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setSelectedDonor(null)}>
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl font-bold">{selectedDonor.name}</h2>
              <button onClick={() => setSelectedDonor(null)} className="p-2 hover:bg-gray-100 rounded-lg">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-semibold text-lg mb-3">Contact Information</h3>
                <div className="space-y-2">
                  <div><span className="font-semibold">Name:</span> {selectedDonor.name}</div>
                  <div><span className="font-semibold">Email:</span> {selectedDonor.email}</div>
                  <div><span className="font-semibold">Status:</span> {selectedDonor.status}</div>
                  <div><span className="font-semibold">Engagement:</span> {selectedDonor.engagement}</div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3">Giving History</h3>
                <div className="space-y-2">
                  <div><span className="font-semibold">Last Gift:</span> {selectedDonor.lastGift}</div>
                  <div><span className="font-semibold">Lifetime Total:</span> ${selectedDonor.lifetime.toLocaleString()}</div>
                  <div><span className="font-semibold">Total Gifts:</span> {selectedDonor.gifts}</div>
                  <div><span className="font-semibold">Average Gift:</span> ${Math.round(selectedDonor.lifetime / selectedDonor.gifts).toLocaleString()}</div>
                </div>
              </div>
            </div>
            <div className="flex space-x-3">
              <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Send Email</button>
              <button className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">Request Gift</button>
              <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">Schedule Call</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const CampaignsPage = ({ onNavigate, language }) => {
  const { t } = useTranslation(language);
  const [campaigns, setCampaigns] = useState(mockCampaigns);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [showNewModal, setShowNewModal] = useState(false);
  const [newCampaign, setNewCampaign] = useState({
    name: '', goal: '', startDate: '', endDate: ''
  });

  const handleExport = (campaign) => {
    const csvContent = "Name,Goal,Raised,Donors,Status\n" + `${campaign.name},${campaign.goal},${campaign.raised},${campaign.donors},${campaign.status}`;
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `${campaign.name}_export.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleEmailDonors = () => {
    onNavigate('email-ai');
  };

  const handleAddCampaign = () => {
    if (!newCampaign.name || !newCampaign.goal || !newCampaign.startDate || !newCampaign.endDate) {
      alert('Please fill in all fields');
      return;
    }
    const campaign = {
      id: campaigns.length + 1,
      name: newCampaign.name,
      goal: parseInt(newCampaign.goal),
      raised: 0,
      donors: 0,
      startDate: newCampaign.startDate,
      endDate: newCampaign.endDate,
      status: 'Active'
    };
    setCampaigns([...campaigns, campaign]);
    setNewCampaign({ name: '', goal: '', startDate: '', endDate: '' });
    setShowNewModal(false);
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{t('campaignsTitle')}</h1>
        <button onClick={() => setShowNewModal(true)} className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          <Plus className="w-5 h-5" />
          <span>{t('newCampaign')}</span>
        </button>
      </div>

      <div className="grid gap-6">
        {campaigns.map(c => {
          const progress = Math.round((c.raised / c.goal) * 100);
          return (
            <div key={c.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{c.name}</h3>
                  <p className="text-gray-600">Started: {c.startDate} • Ends: {c.endDate}</p>
                </div>
                <div className="flex space-x-2">
                  <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full font-semibold">{c.status}</span>
                  <button onClick={() => setSelectedCampaign(c)} className="p-2 hover:bg-gray-100 rounded-lg">
                    <Eye className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
              <div className="grid md:grid-cols-4 gap-4 mb-4">
                <div>
                  <div className="text-sm text-gray-600">{t('goal')}</div>
                  <div className="text-2xl font-bold text-gray-900">${(c.goal / 1000).toFixed(0)}K</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">{t('raised')}</div>
                  <div className="text-2xl font-bold text-green-600">${(c.raised / 1000).toFixed(0)}K</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">{t('donorsCount')}</div>
                  <div className="text-2xl font-bold text-blue-600">{c.donors}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">{t('progress')}</div>
                  <div className="text-2xl font-bold text-purple-600">{progress}%</div>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                <div className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full transition-all" style={{ width: `${progress}%` }}></div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={handleEmailDonors}
                  className="flex items-center space-x-1 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 text-sm transition"
                >
                  <Mail className="w-4 h-4" />
                  <span>{t('emailDonors')}</span>
                </button>
                <button
                  onClick={() => handleExport(c)}
                  className="flex items-center space-x-1 px-3 py-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 text-sm transition"
                >
                  <Download className="w-4 h-4" />
                  <span>{t('export')}</span>
                </button>
                <button
                  onClick={() => setSelectedCampaign(c)}
                  className="flex items-center space-x-1 px-3 py-2 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 text-sm transition"
                >
                  <FileText className="w-4 h-4" />
                  <span>{t('report')}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {showNewModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowNewModal(false)}>
          <div className="bg-white rounded-xl p-8 max-w-2xl w-full" onClick={e => e.stopPropagation()}>
            <h2 className="text-2xl font-bold mb-6">{t('createNewCampaign')}</h2>
            <div className="grid gap-4">
              <input type="text" placeholder={t('campaignName')} value={newCampaign.name} onChange={e => setNewCampaign({ ...newCampaign, name: e.target.value })} className="px-4 py-2 border rounded-lg" />
              <input type="number" placeholder={t('goalAmount')} value={newCampaign.goal} onChange={e => setNewCampaign({ ...newCampaign, goal: e.target.value })} className="px-4 py-2 border rounded-lg" />
              <input type="date" value={newCampaign.startDate} onChange={e => setNewCampaign({ ...newCampaign, startDate: e.target.value })} className="px-4 py-2 border rounded-lg" />
              <input type="date" value={newCampaign.endDate} onChange={e => setNewCampaign({ ...newCampaign, endDate: e.target.value })} className="px-4 py-2 border rounded-lg" />
            </div>
            <div className="mt-6 flex space-x-3">
              <button onClick={() => setShowNewModal(false)} className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">{t('cancel')}</button>
              <button onClick={handleAddCampaign} className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">{t('createCampaign')}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const EmailAIPage = ({ language }) => {
  const { t } = useTranslation(language);
  const [prompt, setPrompt] = useState('');
  const [generated, setGenerated] = useState('');
  const [emailType, setEmailType] = useState('donor');
  const [copied, setCopied] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  const templates = {
    donor: language === 'en'
      ? 'Dear [Donor Name],\n\nI hope this message finds you well. Thank you for your continued partnership with our institution.\n\n'
      : 'Cher [Nom du donateur],\n\nJ\'espère que ce message vous trouvera bien. Merci pour votre partenariat continu avec notre institution.\n\n',
    student: language === 'en'
      ? 'Dear [Student Name],\n\nI wanted to reach out to discuss your academic progress and available resources.\n\n'
      : 'Cher [Nom de l\'étudiant],\n\nJe voulais vous contacter pour discuter de vos progrès académiques et des ressources disponibles.\n\n',
    alumni: language === 'en'
      ? 'Dear [Alumni Name],\n\nWe hope you are doing well! We wanted to reconnect and share exciting updates from campus.\n\n'
      : 'Cher [Nom de l\'ancien],\n\nNous espérons que vous allez bien ! Nous voulions renouer le contact et partager des nouvelles passionnantes du campus.\n\n'
  };

  const handleSend = () => {
    if (!generated) {
      alert(t('pleaseGenerateFirst'));
      return;
    }
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setSentSuccess(true);
      setTimeout(() => setSentSuccess(false), 3000);
    }, 2000);
  };

  const handleGenerate = () => {
    const template = templates[emailType];
    setGenerated(`${template}${prompt || 'Your contribution makes a meaningful difference in the lives of our students.'}\n\nBest regards,\n[Your Name]`);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">{t('aiEmailGenerator')}</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">{t('input')}</h2>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">{t('emailType')}</label>
            <div className="flex space-x-2">
              {['donor', 'student', 'alumni'].map(type => (
                <button
                  key={type}
                  onClick={() => setEmailType(type)}
                  className={`px-4 py-2 rounded-lg transition ${emailType === type ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
                >
                  {t(type)}
                </button>
              ))}
            </div>
          </div>
          <textarea
            value={prompt}
            onChange={e => setPrompt(e.target.value)}
            placeholder={t('emailPromptPlaceholder')}
            className="w-full h-64 p-4 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <button onClick={handleGenerate} className="mt-4 w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center justify-center space-x-2 font-bold">
            <Zap className="w-5 h-5" />
            <span>{t('generateEmail')}</span>
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 relative">
          <h2 className="text-xl font-semibold mb-4">{t('generatedEmail')}</h2>
          <div className="w-full h-64 p-4 border bg-gray-50 rounded-lg overflow-y-auto whitespace-pre-wrap">
            {generated || t('generatedPlaceholder')}
          </div>
          {generated && (
            <div className="flex space-x-2 mt-4">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(generated);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
                className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition flex items-center justify-center space-x-2 font-bold"
              >
                {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                <span>{copied ? t('copied') : t('copy')}</span>
              </button>
              <button onClick={handleSend} disabled={isSending} className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center justify-center space-x-2 font-bold">
                {isSending ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /> : <Send className="w-5 h-5" />}
                <span>{isSending ? t('sending') : t('sendEmail')}</span>
              </button>
            </div>
          )}
          {sentSuccess && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-xl shadow-2xl border flex flex-col items-center">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-3">
                <Check className="w-8 h-8" />
              </div>
              <p className="font-bold text-gray-900">{t('emailSent')}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const AnalyticsPage = ({ language }) => {
  const { t } = useTranslation(language);

  const handleExport = (type) => {
    const csvContent = type === 'full'
      ? "Metric,Value\nRevenue Growth,+24.8%\nRetention,89.5%\nSatisfaction,4.7/5.0"
      : "Month,Revenue\n" + revenueData.map(d => `${d.month},${d.revenue}`).join("\n");
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `analytics_${type}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{t('analyticsTitle')}</h1>
        <div className="flex space-x-3">
          <button onClick={() => handleExport('full')} className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <FileText className="w-5 h-5" />
            <span>{t('downloadFullReport')}</span>
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-md border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-600">{t('revenueGrowth')}</h3>
            <TrendingUp className="w-6 h-6 text-green-600" />
          </div>
          <div className="text-3xl font-bold text-green-600 mb-2">+24.8%</div>
          <p className="text-sm text-gray-500">{t('vsLastQuarter')}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-600">{t('donorRetention')}</h3>
            <Heart className="w-6 h-6 text-red-600" />
          </div>
          <div className="text-3xl font-bold text-red-600 mb-2">89.5%</div>
          <p className="text-sm text-gray-500">{t('retentionPeriod')}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-600">{t('studentSatisfaction')}</h3>
            <Award className="w-6 h-6 text-purple-600" />
          </div>
          <div className="text-3xl font-bold text-purple-600 mb-2">4.7/5.0</div>
          <p className="text-sm text-gray-500">{t('avgRating')}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md border mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-6">{t('monthlyRevenueTrend')}</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip />
              <Area type="monotone" dataKey="revenue" stroke="#10b981" fill="#d1fae5" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

const LoginPage = ({ onLogin, language, onLanguageChange }) => {
  const { t } = useTranslation(language);
  const [email, setEmail] = useState(() => localStorage.getItem('rememberedEmail') || '');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('admin');
  const [rememberMe, setRememberMe] = useState(() => !!localStorage.getItem('rememberedEmail'));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rememberMe) {
      localStorage.setItem('rememberedEmail', email);
    } else {
      localStorage.removeItem('rememberedEmail');
    }
    onLogin({ email, password, role });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md relative border">
        <button onClick={onLanguageChange} className="absolute top-4 right-4 flex items-center space-x-1 px-3 py-1 bg-gray-50 rounded-lg hover:bg-gray-100 transition text-sm">
          <Globe className="w-4 h-4" />
          <span>{language === 'en' ? 'FR' : 'EN'}</span>
        </button>
        <div className="flex items-center justify-center space-x-2 mb-8">
          <GraduationCap className="w-10 h-10 text-blue-600" />
          <span className="text-3xl font-bold text-gray-900">AdmitIQ</span>
        </div>
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">{t('welcomeBack')}</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">{t('email')}</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">{t('password')}</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">{t('role')}</label>
            <select value={role} onChange={e => setRole(e.target.value)} className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500">
              <option value="admin">{t('admin')}</option>
              <option value="applicant">{t('applicant')}</option>
            </select>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={e => setRememberMe(e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-900">
              {t('rememberMe')}
            </label>
          </div>
          <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-bold shadow-lg shadow-blue-200">
            {t('signIn')}
          </button>
        </form>
        <p className="text-center text-gray-500 text-sm mt-6">
          {t('demoMessage')}
          <br />
          <span className="text-xs text-blue-500 font-mono mt-1 block">admin@admitiq.edu / any password</span>
        </p>
      </div>
    </div>
  );
};

// Main App
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem('isLoggedIn') === 'true');
  const [userRole, setUserRole] = useState(() => localStorage.getItem('userRole') || 'admin');
  const [currentPage, setCurrentPage] = useState('overview');
  const [showLogin, setShowLogin] = useState(false);
  const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'en');
  const { t } = useTranslation(language);

  console.log('App rendering, language:', language, 'isLoggedIn:', isLoggedIn);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const handleLogin = ({ role }) => {
    setIsLoggedIn(true);
    setUserRole(role);
    setShowLogin(false);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userRole', role);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('overview');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userRole');
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'fr' : 'en');
  };

  if (showLogin) {
    return <LoginPage language={language} onLanguageChange={toggleLanguage} onLogin={handleLogin} />;
  }

  if (isLoggedIn) {
    return (
      <div className="flex bg-gray-50 min-h-screen">
        <Sidebar currentPage={currentPage} onNavigate={setCurrentPage} language={language} onLanguageChange={toggleLanguage} userRole={userRole} />
        <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
          <header className="bg-white shadow-sm h-16 flex items-center justify-between px-8 z-10 border-b">
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 font-medium tracking-wide uppercase text-xs">{t('overview')}</span>
              <span className="text-gray-300">/</span>
              <span className="font-bold text-gray-800 text-sm tracking-tight">{t(currentPage)}</span>
            </div>
            <div className="flex items-center space-x-6">
              <button onClick={toggleLanguage} className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-blue-600 transition font-semibold" title={language === 'en' ? 'Passer en Français' : 'Switch to English'}>
                <Globe className="w-5 h-5" />
                <span>{language.toUpperCase()}</span>
              </button>
              <button onClick={handleLogout} className="flex items-center space-x-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition font-bold border border-transparent hover:border-red-100">
                <LogOut className="w-5 h-5" />
                <span>{t('logout')}</span>
              </button>
            </div>
          </header>
          <main className="flex-1 overflow-y-auto">
            {currentPage === 'overview' && <OverviewPage onNavigate={setCurrentPage} language={language} />}
            {currentPage === 'students' && <StudentsPage language={language} />}
            {currentPage === 'donors' && <DonorsPage language={language} />}
            {currentPage === 'campaigns' && <CampaignsPage onNavigate={setCurrentPage} language={language} />}
            {currentPage === 'email-ai' && <EmailAIPage language={language} />}
            {currentPage === 'analytics' && <AnalyticsPage language={language} />}
          </main>
        </div>
        <AIChatbot userRole={userRole} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <Header onLoginClick={() => setShowLogin(true)} language={language} onLanguageChange={toggleLanguage} />
      <Hero onGetStarted={() => setShowLogin(true)} language={language} />
      <Solutions language={language} />
      <Footer language={language} />
      <AIChatbot userRole="student" />
    </div>
  );
}