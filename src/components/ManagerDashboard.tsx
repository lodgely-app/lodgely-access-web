import { useState } from 'react';
import { Building2, Users, DollarSign, Wrench, Bell, MoreVertical, Clock, CheckCircle, AlertCircle, Send, MessageSquare, Settings, Home, Wallet, Megaphone, Receipt, ChevronDown, ArrowUpRight, Ticket } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import FinancialPage from './FinancialPage';
import TenantsPage from './TenantsPage';
import MessagingPage from './MessagingPage';
import SettingsPage from './SettingsPage';
import FacilitiesPage from './FacilitiesPage';
import WalletsPage from './WalletsPage';

type Page = 'overview' | 'tenants' | 'messages' | 'issues' | 'announcements' | 'finances' | 'expenses' | 'wallet' | 'settings';

export default function ManagerDashboard() {
  const [activePage, setActivePage] = useState<Page>('overview');
  const [issueFilter, setIssueFilter] = useState<'all' | 'high' | 'pending'>('all');

  const tenantBalances = [
    { id: 1, tenant: 'Maddy Adenola', unit: 'FLAT 1', outstanding: '₦65,454.55', status: 'pending' },
    { id: 2, tenant: 'Princess Kota', unit: 'FLAT 2', outstanding: '₦60,000', status: 'pending' },
    { id: 3, tenant: 'Akin Adeshola', unit: 'FLAT 3', outstanding: '₦0', status: 'settled' },
    { id: 4, tenant: 'Aisha Tayo', unit: 'FLAT 4', outstanding: '₦300,000', status: 'pending' },
  ];

  const issueTickets = [
    { id: 1, reporter: 'MitchMay', unit: 'No Unit', issue: 'Burst Central Pipe', priority: 'high', status: 'pending', time: '2 days ago' },
    { id: 2, reporter: 'Sunita Absent', unit: 'No Unit', issue: 'Security Absent from Post', priority: 'high', status: 'pending', time: '3 days ago' },
    { id: 3, reporter: 'Akin Adeshola', unit: 'FLAT 3', issue: 'AC not cooling properly', priority: 'medium', status: 'pending', time: '4 days ago' },
  ];

  const filteredTickets = issueTickets.filter(t => {
    if (issueFilter === 'high') return t.priority === 'high';
    if (issueFilter === 'pending') return t.status === 'pending';
    return true;
  });

  const navItems: { id: Page; label: string; icon: React.ElementType }[] = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'tenants', label: 'Tenants', icon: Users },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
    { id: 'issues', label: 'Issues', icon: Wrench },
    { id: 'announcements', label: 'Announcements', icon: Megaphone },
    { id: 'finances', label: 'Finances', icon: DollarSign },
    { id: 'expenses', label: 'Expenses', icon: Receipt },
    { id: 'wallet', label: 'Wallet', icon: Wallet },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const pageTitle: Record<Page, string> = {
    overview: 'Dashboard',
    tenants: 'Tenants',
    messages: 'Messages',
    issues: 'Issues',
    announcements: 'Announcements',
    finances: 'Finances',
    expenses: 'Expenses',
    wallet: 'Wallet',
    settings: 'Settings',
  };

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="w-56 bg-slate-900 text-white flex flex-col flex-shrink-0">
        {/* Company Header */}
        <div className="p-4 border-b border-slate-800">
          <div className="text-xs text-slate-400 mb-2">Maybach Holdings</div>
          <button className="w-full flex items-center justify-between bg-teal-500 rounded-lg px-3 py-2">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">Sunrise Towers</span>
            </div>
            <ChevronDown className="w-4 h-4 text-white/70" />
          </button>
        </div>

        <nav className="flex-1 p-3 space-y-0.5">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActivePage(id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-sm ${
                activePage === id ? 'bg-teal-500 text-white' : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              <span>{label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-teal-500 flex items-center justify-center text-xs font-semibold text-white flex-shrink-0">L</div>
            <span className="text-xs text-slate-400">Lodgely</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
          <div className="px-8 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold text-slate-900">{pageTitle[activePage]}</h1>
              <div className="flex items-center gap-3">
                <button className="relative p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors">
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                <div className="flex items-center gap-2">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-teal-500 text-white text-xs">MM</AvatarFallback>
                  </Avatar>
                  <div className="text-right">
                    <div className="text-sm font-medium text-slate-900">MitchMay</div>
                    <div className="text-xs text-slate-500">Facility Admin</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-8 space-y-6">
          {activePage === 'finances' ? (
            <FinancialPage />
          ) : activePage === 'tenants' ? (
            <TenantsPage />
          ) : activePage === 'wallet' ? (
            <WalletsPage />
          ) : activePage === 'messages' ? (
            <MessagingPage />
          ) : activePage === 'settings' ? (
            <SettingsPage />
          ) : activePage === 'issues' ? (
            <FacilitiesPage />
          ) : activePage !== 'overview' ? (
            <div className="flex items-center justify-center h-64 text-slate-400">
              <div className="text-center">
                <div className="text-4xl mb-2">🚧</div>
                <div>This page is coming soon</div>
              </div>
            </div>
          ) : (
            <>
              {/* 3 Stat Cards */}
              <div className="grid grid-cols-3 gap-6">
                {/* Current Month Expenditure */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <p className="text-sm text-slate-500">Current Month Expenditure</p>
                      <ArrowUpRight className="w-4 h-4 text-slate-400" />
                    </div>
                    <p className="text-3xl font-bold text-slate-900">₦0</p>
                  </CardContent>
                </Card>

                {/* Ticket Status */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <p className="text-sm text-slate-500">Ticket Status</p>
                      <Ticket className="w-4 h-4 text-slate-400" />
                    </div>
                    <div className="flex items-end gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-slate-900">3</div>
                        <div className="text-xs text-slate-500 mt-0.5">PENDING</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-slate-900">1</div>
                        <div className="text-xs text-slate-500 mt-0.5">ASSIGNED</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-slate-900">0</div>
                        <div className="text-xs text-slate-500 mt-0.5">DONE</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Base Service Charge */}
                <Card className="bg-slate-800 text-white border-0">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <p className="text-sm text-slate-300">Base Service Charge</p>
                      <Building2 className="w-4 h-4 text-slate-400" />
                    </div>
                    <p className="text-3xl font-bold text-white mb-2">₦60,000</p>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-teal-400 flex-shrink-0"></span>
                      <span className="text-xs text-slate-300">For facility row</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Tenant Balances */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Tenant Balances</CardTitle>
                      <CardDescription>Overview of recent tenant ledgers</CardDescription>
                    </div>
                    <Button variant="outline" size="sm">View All</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Tenant</TableHead>
                        <TableHead>Unit</TableHead>
                        <TableHead>Outstanding</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {tenantBalances.map((row) => (
                        <TableRow key={row.id}>
                          <TableCell className="font-medium">{row.tenant}</TableCell>
                          <TableCell className="text-slate-600">{row.unit}</TableCell>
                          <TableCell className="font-medium">{row.outstanding}</TableCell>
                          <TableCell>
                            {row.status === 'settled' ? (
                              <Badge className="bg-green-100 text-green-700 hover:bg-green-100 uppercase text-xs">Settled</Badge>
                            ) : (
                              <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100 uppercase text-xs">Pending</Badge>
                            )}
                          </TableCell>
                          <TableCell>
                            {row.status !== 'settled' && (
                              <Button variant="outline" size="sm" className="gap-1.5">
                                <Send className="w-3 h-3" />
                                Send Reminder
                              </Button>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              {/* Issues Tickets */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Issues Tickets</CardTitle>
                      <CardDescription>Active service requests</CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <Tabs value={issueFilter} onValueChange={(v) => setIssueFilter(v as typeof issueFilter)}>
                        <TabsList>
                          <TabsTrigger value="all">All</TabsTrigger>
                          <TabsTrigger value="high">High Priority</TabsTrigger>
                          <TabsTrigger value="pending">Pending</TabsTrigger>
                        </TabsList>
                      </Tabs>
                      <Button variant="outline" size="sm">View All</Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {filteredTickets.map((ticket) => (
                    <div key={ticket.id} className="flex items-start gap-4 p-4 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="destructive" className="text-xs uppercase">
                            {ticket.priority}
                          </Badge>
                          <Badge
                            variant="outline"
                            className="bg-yellow-50 text-yellow-700 border-yellow-200 text-xs"
                          >
                            <Clock className="w-3 h-3 mr-1" />
                            {ticket.status}
                          </Badge>
                        </div>
                        <div className="font-medium text-slate-900 mb-1">{ticket.issue}</div>
                        <div className="text-sm text-slate-500">
                          {ticket.reporter} • {ticket.unit} • {ticket.time}
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </main>
    </div>
  );
}