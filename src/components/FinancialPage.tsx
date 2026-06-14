import { useState } from 'react';
import { DollarSign, TrendingUp, TrendingDown, Download, Filter, Search, Calendar, CreditCard, AlertCircle, CheckCircle, Clock, ArrowUpRight, ArrowDownRight, Plus, MoreVertical, FileText, PieChart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

export default function FinancialPage() {
  const [selectedPeriod, setSelectedPeriod] = useState('this-month');
  const [selectedBuilding, setSelectedBuilding] = useState('all');

  const financialStats = [
    {
      title: 'Total Revenue',
      value: '$124,500',
      change: '+12.5%',
      trend: 'up',
      comparison: 'vs last month',
      icon: DollarSign,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      title: 'Collected',
      value: '$118,200',
      change: '+8.2%',
      trend: 'up',
      comparison: 'vs last month',
      icon: CheckCircle,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      title: 'Outstanding',
      value: '$6,300',
      change: '-15.3%',
      trend: 'down',
      comparison: 'vs last month',
      icon: Clock,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
    },
    {
      title: 'Overdue',
      value: '$2,850',
      change: '+5.2%',
      trend: 'up',
      comparison: 'vs last month',
      icon: AlertCircle,
      color: 'text-red-600',
      bgColor: 'bg-red-100',
    },
  ];

  const revenueByBuilding = [
    { building: 'Building A', revenue: '$52,400', collected: '$49,800', outstanding: '$2,600', occupancy: '96%', units: 50 },
    { building: 'Building B', revenue: '$42,100', collected: '$40,500', outstanding: '$1,600', occupancy: '93%', units: 45 },
    { building: 'Building C', revenue: '$30,000', collected: '$27,900', outstanding: '$2,100', occupancy: '95%', units: 55 },
  ];

  const recentTransactions = [
    { id: 'TXN-001', tenant: 'Sarah Johnson', unit: 'A-402', amount: '$1,850', type: 'Rent Payment', status: 'completed', date: '2026-04-20', time: '10:24 AM', method: 'Credit Card' },
    { id: 'TXN-002', tenant: 'Michael Chen', unit: 'B-305', amount: '$2,100', type: 'Rent Payment', status: 'completed', date: '2026-04-20', time: '09:15 AM', method: 'Bank Transfer' },
    { id: 'TXN-003', tenant: 'Emily Rodriguez', unit: 'C-201', amount: '$1,650', type: 'Rent Payment', status: 'pending', date: '2026-04-19', time: '03:42 PM', method: 'Credit Card' },
    { id: 'TXN-004', tenant: 'James Wilson', unit: 'A-108', amount: '$1,950', type: 'Rent Payment', status: 'completed', date: '2026-04-18', time: '11:30 AM', method: 'ACH' },
    { id: 'TXN-005', tenant: 'Lisa Anderson', unit: 'B-412', amount: '$2,300', type: 'Rent Payment', status: 'failed', date: '2026-04-18', time: '02:15 PM', method: 'Credit Card' },
    { id: 'TXN-006', tenant: 'David Kim', unit: 'A-203', amount: '$500', type: 'Service Charge', status: 'completed', date: '2026-04-17', time: '01:20 PM', method: 'Debit Card' },
    { id: 'TXN-007', tenant: 'Maria Garcia', unit: 'C-308', amount: '$1,750', type: 'Rent Payment', status: 'completed', date: '2026-04-17', time: '09:45 AM', method: 'Bank Transfer' },
    { id: 'TXN-008', tenant: 'Robert Taylor', unit: 'B-201', amount: '$2,050', type: 'Rent Payment', status: 'completed', date: '2026-04-16', time: '04:30 PM', method: 'ACH' },
  ];

  const overduePayments = [
    { tenant: 'Lisa Anderson', unit: 'B-412', amount: '$2,300', dueDate: '2026-04-15', daysOverdue: 8, phone: '+1 (555) 234-5678' },
    { tenant: 'Thomas Brown', unit: 'C-105', amount: '$1,850', dueDate: '2026-04-10', daysOverdue: 13, phone: '+1 (555) 345-6789' },
    { tenant: 'Jennifer Lee', unit: 'A-307', amount: '$1,950', dueDate: '2026-04-08', daysOverdue: 15, phone: '+1 (555) 456-7890' },
  ];

  const monthlyRevenue = [
    { month: 'Oct', revenue: 112000, collected: 108000 },
    { month: 'Nov', revenue: 115000, collected: 111000 },
    { month: 'Dec', revenue: 118000, collected: 114000 },
    { month: 'Jan', revenue: 120000, collected: 116000 },
    { month: 'Feb', revenue: 119000, collected: 115000 },
    { month: 'Mar', revenue: 122000, collected: 118000 },
    { month: 'Apr', revenue: 124500, collected: 118200 },
  ];

  const expenseCategories = [
    { category: 'Maintenance', amount: '$18,500', percentage: 45, color: 'bg-orange-500' },
    { category: 'Utilities', amount: '$12,400', percentage: 30, color: 'bg-blue-500' },
    { category: 'Insurance', amount: '$6,200', percentage: 15, color: 'bg-purple-500' },
    { category: 'Admin & Other', amount: '$4,100', percentage: 10, color: 'bg-slate-500' },
  ];

  const maxRevenue = Math.max(...monthlyRevenue.map(m => m.revenue));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Financials</h2>
          <p className="text-slate-600">Track revenue, payments, and expenses</p>
        </div>
        <div className="flex items-center gap-3">
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="this-week">This Week</SelectItem>
              <SelectItem value="this-month">This Month</SelectItem>
              <SelectItem value="last-month">Last Month</SelectItem>
              <SelectItem value="this-quarter">This Quarter</SelectItem>
              <SelectItem value="this-year">This Year</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-teal-500 hover:bg-teal-600 text-white">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Financial Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {financialStats.map((stat) => (
          <Card key={stat.title}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg ${stat.bgColor} flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                {stat.trend === 'up' ? (
                  <ArrowUpRight className={`w-5 h-5 ${stat.title === 'Overdue' ? 'text-red-600' : 'text-green-600'}`} />
                ) : (
                  <ArrowDownRight className="w-5 h-5 text-green-600" />
                )}
              </div>
              <p className="text-sm text-slate-600 mb-1">{stat.title}</p>
              <p className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</p>
              <div className="flex items-center gap-1">
                <span className={`text-sm font-medium ${stat.trend === 'up' ? (stat.title === 'Overdue' ? 'text-red-600' : 'text-green-600') : 'text-green-600'}`}>
                  {stat.change}
                </span>
                <span className="text-sm text-slate-500">{stat.comparison}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Revenue Chart & Collection Rate */}
      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Revenue Trends</CardTitle>
            <CardDescription>Monthly revenue and collection overview</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {monthlyRevenue.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-slate-700 w-12">{item.month}</span>
                    <div className="flex-1 flex items-center gap-2">
                      <div className="flex-1 h-10 bg-slate-100 rounded-lg overflow-hidden flex">
                        <div
                          className="bg-gradient-to-r from-teal-500 to-teal-400 flex items-center justify-end px-3"
                          style={{ width: `${(item.collected / maxRevenue) * 100}%` }}
                        >
                          <span className="text-xs font-medium text-white">${(item.collected / 1000).toFixed(0)}k</span>
                        </div>
                        <div
                          className="bg-gradient-to-r from-orange-400 to-orange-300 flex items-center justify-end px-3"
                          style={{ width: `${((item.revenue - item.collected) / maxRevenue) * 100}%` }}
                        >
                          {item.revenue - item.collected > 3000 && (
                            <span className="text-xs font-medium text-white">${((item.revenue - item.collected) / 1000).toFixed(0)}k</span>
                          )}
                        </div>
                      </div>
                      <span className="text-sm font-semibold text-slate-900 w-16 text-right">${(item.revenue / 1000).toFixed(0)}k</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-6 mt-6 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-teal-500"></div>
                <span className="text-sm text-slate-600">Collected</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                <span className="text-sm text-slate-600">Outstanding</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Collection Rate</CardTitle>
            <CardDescription>This month's performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center mb-6">
              <div className="relative w-48 h-48">
                <svg className="transform -rotate-90 w-48 h-48">
                  <circle
                    cx="96"
                    cy="96"
                    r="88"
                    stroke="#e2e8f0"
                    strokeWidth="16"
                    fill="none"
                  />
                  <circle
                    cx="96"
                    cy="96"
                    r="88"
                    stroke="url(#gradient)"
                    strokeWidth="16"
                    fill="none"
                    strokeDasharray={`${(118200 / 124500) * 553} 553`}
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#14b8a6" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-bold text-slate-900">95%</span>
                  <span className="text-sm text-slate-600">Collected</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium text-slate-700">Collected</span>
                </div>
                <span className="font-semibold text-slate-900">$118,200</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-orange-600" />
                  <span className="text-sm font-medium text-slate-700">Outstanding</span>
                </div>
                <span className="font-semibold text-slate-900">$6,300</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs for different financial views */}
      <Tabs defaultValue="transactions" className="space-y-6">
        <TabsList>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="buildings">By Building</TabsTrigger>
          <TabsTrigger value="overdue">Overdue Payments</TabsTrigger>
          <TabsTrigger value="expenses">Expenses</TabsTrigger>
        </TabsList>

        {/* Transactions Tab */}
        <TabsContent value="transactions" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Recent Transactions</CardTitle>
                  <CardDescription>All payment transactions across properties</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input placeholder="Search transactions..." className="pl-10 w-64" />
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Transaction ID</TableHead>
                    <TableHead>Tenant</TableHead>
                    <TableHead>Unit</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead>Date & Time</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentTransactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell className="font-mono text-xs text-slate-600">{transaction.id}</TableCell>
                      <TableCell className="font-medium">{transaction.tenant}</TableCell>
                      <TableCell>{transaction.unit}</TableCell>
                      <TableCell className="text-slate-600">{transaction.type}</TableCell>
                      <TableCell className="font-semibold">{transaction.amount}</TableCell>
                      <TableCell className="text-slate-600">{transaction.method}</TableCell>
                      <TableCell className="text-slate-600">
                        <div>{transaction.date}</div>
                        <div className="text-xs text-slate-500">{transaction.time}</div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={transaction.status === 'completed' ? 'default' : transaction.status === 'pending' ? 'secondary' : 'destructive'}
                          className={
                            transaction.status === 'completed'
                              ? 'bg-green-100 text-green-700 hover:bg-green-100'
                              : transaction.status === 'pending'
                              ? 'bg-yellow-100 text-yellow-700 hover:bg-yellow-100'
                              : ''
                          }
                        >
                          {transaction.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* By Building Tab */}
        <TabsContent value="buildings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Revenue by Building</CardTitle>
              <CardDescription>Financial performance across all buildings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {revenueByBuilding.map((building, index) => (
                  <div key={index} className="p-6 border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900">{building.building}</h3>
                        <p className="text-sm text-slate-600">{building.units} units • {building.occupancy} occupied</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-slate-900">{building.revenue}</div>
                        <p className="text-sm text-slate-600">Total Revenue</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="p-4 bg-green-50 rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-slate-600">Collected</span>
                        </div>
                        <div className="text-xl font-semibold text-slate-900">{building.collected}</div>
                      </div>

                      <div className="p-4 bg-orange-50 rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <Clock className="w-4 h-4 text-orange-600" />
                          <span className="text-sm text-slate-600">Outstanding</span>
                        </div>
                        <div className="text-xl font-semibold text-slate-900">{building.outstanding}</div>
                      </div>

                      <div className="p-4 bg-blue-50 rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <PieChart className="w-4 h-4 text-blue-600" />
                          <span className="text-sm text-slate-600">Collection Rate</span>
                        </div>
                        <div className="text-xl font-semibold text-slate-900">
                          {Math.round((parseFloat(building.collected.replace(/[$,]/g, '')) / parseFloat(building.revenue.replace(/[$,]/g, ''))) * 100)}%
                        </div>
                      </div>
                    </div>

                    <Progress
                      value={(parseFloat(building.collected.replace(/[$,]/g, '')) / parseFloat(building.revenue.replace(/[$,]/g, ''))) * 100}
                      className="h-2"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Overdue Payments Tab */}
        <TabsContent value="overdue" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Overdue Payments</CardTitle>
                  <CardDescription>Payments requiring immediate attention</CardDescription>
                </div>
                <Button className="bg-red-500 hover:bg-red-600 text-white">
                  <AlertCircle className="w-4 h-4 mr-2" />
                  Send Reminders
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {overduePayments.map((payment, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border-l-4 border-l-red-500 bg-red-50 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="font-semibold text-slate-900">{payment.tenant}</div>
                        <Badge variant="destructive">{payment.daysOverdue} days overdue</Badge>
                      </div>
                      <div className="text-sm text-slate-600 mb-1">
                        Unit {payment.unit} • Due: {payment.dueDate}
                      </div>
                      <div className="text-sm text-slate-600">{payment.phone}</div>
                    </div>
                    <div className="text-right mr-6">
                      <div className="text-2xl font-bold text-red-600">{payment.amount}</div>
                      <div className="text-sm text-slate-600">Amount Due</div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Contact
                      </Button>
                      <Button size="sm" className="bg-teal-500 hover:bg-teal-600 text-white">
                        Record Payment
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Expenses Tab */}
        <TabsContent value="expenses" className="space-y-4">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Expense Breakdown</CardTitle>
                <CardDescription>Total expenses: $41,200 this month</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {expenseCategories.map((expense, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-700">{expense.category}</span>
                      <span className="text-sm font-semibold text-slate-900">{expense.amount}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${expense.color} rounded-full`}
                          style={{ width: `${expense.percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-slate-600 w-12 text-right">{expense.percentage}%</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Net Income Summary</CardTitle>
                <CardDescription>Revenue vs Expenses (April 2026)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                    <div>
                      <div className="text-sm text-slate-600 mb-1">Total Revenue</div>
                      <div className="text-2xl font-bold text-green-600">$124,500</div>
                    </div>
                    <TrendingUp className="w-8 h-8 text-green-600" />
                  </div>

                  <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                    <div>
                      <div className="text-sm text-slate-600 mb-1">Total Expenses</div>
                      <div className="text-2xl font-bold text-red-600">$41,200</div>
                    </div>
                    <TrendingDown className="w-8 h-8 text-red-600" />
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg text-white">
                    <div>
                      <div className="text-sm opacity-90 mb-1">Net Income</div>
                      <div className="text-3xl font-bold">$83,300</div>
                      <div className="text-sm opacity-80 mt-1">67% profit margin</div>
                    </div>
                    <DollarSign className="w-10 h-10" />
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  <FileText className="w-4 h-4 mr-2" />
                  View Detailed Report
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}