import { useState } from 'react';
import { Home, CreditCard, Wrench, Bell, User, LogOut, Calendar, DollarSign, CheckCircle, Clock, AlertCircle, Phone, Mail, MapPin, Download, Plus, Send, Camera } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Label } from './ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import logoImg from '../../imports/lodgely_logo.png';

export default function TenantWebApp() {
  const [activePage, setActivePage] = useState<'dashboard' | 'payments' | 'maintenance' | 'profile'>('dashboard');
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showMaintenanceModal, setShowMaintenanceModal] = useState(false);

  // Dashboard Page
  const DashboardPage = () => (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl p-8 text-white">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">Welcome back, Sarah!</h2>
            <p className="text-teal-50">Here's your account overview</p>
          </div>
          <Avatar className="w-16 h-16 border-4 border-white/30">
            <AvatarFallback className="bg-white text-teal-600 text-xl">SJ</AvatarFallback>
          </Avatar>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <DollarSign className="w-5 h-5" />
              </div>
              <div className="text-sm opacity-90">Current Balance</div>
            </div>
            <div className="text-3xl font-bold">$1,245.00</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Calendar className="w-5 h-5" />
              </div>
              <div className="text-sm opacity-90">Next Payment</div>
            </div>
            <div className="text-3xl font-bold">May 1</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Home className="w-5 h-5" />
              </div>
              <div className="text-sm opacity-90">Your Unit</div>
            </div>
            <div className="text-3xl font-bold">A-402</div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setShowPaymentModal(true)}>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <div className="font-semibold text-slate-900">Make Payment</div>
                <div className="text-sm text-slate-600">Pay your rent online</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setShowMaintenanceModal(true)}>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
                <Wrench className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <div className="font-semibold text-slate-900">Submit Request</div>
                <div className="text-sm text-slate-600">Report maintenance issue</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                <Download className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <div className="font-semibold text-slate-900">Download Lease</div>
                <div className="text-sm text-slate-600">View your agreement</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Property Information & Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Property Info */}
        <Card>
          <CardHeader>
            <CardTitle>Property Information</CardTitle>
            <CardDescription>Your current residence details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-4">
              <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-slate-200 to-slate-300"></div>
              <div className="flex-1">
                <div className="font-semibold text-slate-900 mb-1">Riverside Apartments</div>
                <div className="text-sm text-slate-600 flex items-center gap-1 mb-2">
                  <MapPin className="w-3 h-3" />
                  Unit A-402, Building A
                </div>
                <Badge className="bg-green-100 text-green-700 border-0">Active Lease</Badge>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-600">Lease Start</span>
                <span className="font-medium">Jan 1, 2024</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Lease End</span>
                <span className="font-medium">Dec 31, 2026</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Monthly Rent</span>
                <span className="font-medium">$1,850</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Announcements */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Announcements</CardTitle>
            <CardDescription>Stay updated with building news</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-3 p-4 bg-blue-50 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Bell className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="font-medium text-slate-900 mb-1">Pool Maintenance Schedule</div>
                <div className="text-sm text-slate-600 mb-2">The pool will be closed for maintenance on April 25-26.</div>
                <div className="text-xs text-slate-500">2 days ago</div>
              </div>
            </div>

            <div className="flex gap-3 p-4 bg-purple-50 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                <Bell className="w-5 h-5 text-purple-600" />
              </div>
              <div className="flex-1">
                <div className="font-medium text-slate-900 mb-1">Parking Lot Resurfacing</div>
                <div className="text-sm text-slate-600 mb-2">West parking lot will be resurfaced next week.</div>
                <div className="text-xs text-slate-500">5 days ago</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  // Payments Page
  const PaymentsPage = () => (
    <div className="space-y-6">
      {/* Payment Summary */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardContent className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-sm text-slate-600 mb-1">Outstanding Balance</div>
                <div className="text-4xl font-bold text-slate-900">$1,245.00</div>
              </div>
              <Button className="bg-teal-500 hover:bg-teal-600 text-white" onClick={() => setShowPaymentModal(true)}>
                <CreditCard className="w-4 h-4 mr-2" />
                Make Payment
              </Button>
            </div>
            <Progress value={60} className="h-3 mb-2" />
            <div className="text-sm text-slate-600">Payment due in 9 days</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <div className="text-sm text-slate-600 mb-1">Next Payment Due</div>
            <div className="text-3xl font-bold text-slate-900 mb-2">May 1</div>
            <div className="text-sm text-slate-600">Service Charge - $1,245</div>
          </CardContent>
        </Card>
      </div>

      {/* Payment History */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Payment History</CardTitle>
              <CardDescription>Your recent payment transactions</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { date: 'Apr 1, 2026', desc: 'Monthly Rent', amount: '$1,850', method: 'Credit Card', status: 'Paid' },
                { date: 'Mar 1, 2026', desc: 'Monthly Rent', amount: '$1,850', method: 'Credit Card', status: 'Paid' },
                { date: 'Feb 1, 2026', desc: 'Monthly Rent', amount: '$1,850', method: 'Credit Card', status: 'Paid' },
                { date: 'Jan 1, 2026', desc: 'Monthly Rent', amount: '$1,850', method: 'Bank Transfer', status: 'Paid' },
              ].map((payment, index) => (
                <TableRow key={index}>
                  <TableCell>{payment.date}</TableCell>
                  <TableCell className="font-medium">{payment.desc}</TableCell>
                  <TableCell className="font-semibold">{payment.amount}</TableCell>
                  <TableCell className="text-slate-600">{payment.method}</TableCell>
                  <TableCell>
                    <Badge className="bg-green-100 text-green-700 border-0">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      {payment.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );

  // Maintenance Page
  const MaintenancePage = () => (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-slate-600 mb-1">Active Requests</div>
                <div className="text-3xl font-bold text-slate-900">2</div>
              </div>
              <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
                <Wrench className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-slate-600 mb-1">Completed</div>
                <div className="text-3xl font-bold text-slate-900">8</div>
              </div>
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white" onClick={() => setShowMaintenanceModal(true)}>
              <Plus className="w-4 h-4 mr-2" />
              New Request
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Requests */}
      <Tabs defaultValue="active">
        <TabsList>
          <TabsTrigger value="active">Active Requests</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-4">
          <Card className="border-l-4 border-l-orange-500">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-orange-100 text-orange-700 border-0">In Progress</Badge>
                    <Badge variant="outline">High Priority</Badge>
                  </div>
                  <div className="font-semibold text-slate-900 mb-2">AC not cooling properly</div>
                  <div className="text-sm text-slate-600 mb-3">Submitted on Apr 20, 2026</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-slate-400" />
                <span className="text-slate-600">Technician assigned - Expected Apr 23</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-blue-100 text-blue-700 border-0">Scheduled</Badge>
                    <Badge variant="outline">Medium Priority</Badge>
                  </div>
                  <div className="font-semibold text-slate-900 mb-2">Leaking faucet in kitchen</div>
                  <div className="text-sm text-slate-600 mb-3">Submitted on Apr 18, 2026</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4 text-slate-400" />
                <span className="text-slate-600">Scheduled for Apr 24, 10:00 AM</span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="completed">
          <Card>
            <CardContent className="p-6 text-center text-slate-600">
              8 completed maintenance requests
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );

  // Profile Page
  const ProfilePage = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>Manage your account details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-6">
            <Avatar className="w-24 h-24">
              <AvatarFallback className="bg-teal-500 text-white text-3xl">SJ</AvatarFallback>
            </Avatar>
            <div>
              <Button variant="outline">Change Photo</Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label>First Name</Label>
              <Input defaultValue="Sarah" />
            </div>
            <div>
              <Label>Last Name</Label>
              <Input defaultValue="Johnson" />
            </div>
          </div>

          <div>
            <Label>Email Address</Label>
            <Input type="email" defaultValue="sarah.johnson@email.com" />
          </div>

          <div>
            <Label>Phone Number</Label>
            <Input type="tel" defaultValue="+1 (555) 123-4567" />
          </div>

          <Button className="bg-teal-500 hover:bg-teal-600 text-white">
            Save Changes
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Lease Information</CardTitle>
          <CardDescription>Your current lease details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between">
            <span className="text-slate-600">Property</span>
            <span className="font-medium">Riverside Apartments</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-600">Unit</span>
            <span className="font-medium">A-402, Building A</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-600">Lease Start</span>
            <span className="font-medium">Jan 1, 2024</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-600">Lease End</span>
            <span className="font-medium">Dec 31, 2026</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-600">Monthly Rent</span>
            <span className="font-medium">$1,850</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  // Payment Modal
  const PaymentModal = () => (
    <Dialog open={showPaymentModal} onOpenChange={setShowPaymentModal}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Make Payment</DialogTitle>
          <DialogDescription>Complete your rent payment securely</DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <Label>Payment Amount</Label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input className="pl-10" defaultValue="1,245.00" />
            </div>
          </div>

          <div>
            <Label>Payment Method</Label>
            <Card className="cursor-pointer border-2 border-teal-500 mt-2">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-slate-100 flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-slate-600" />
                    </div>
                    <div>
                      <div className="font-medium">Visa •••• 4242</div>
                      <div className="text-sm text-slate-600">Expires 12/26</div>
                    </div>
                  </div>
                  <CheckCircle className="w-5 h-5 text-teal-500" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-slate-50 rounded-lg p-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-600">Subtotal</span>
              <span className="font-medium">$1,245.00</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-600">Processing Fee</span>
              <span className="font-medium">$0.00</span>
            </div>
            <div className="border-t border-slate-200 pt-2 flex justify-between">
              <span className="font-semibold">Total</span>
              <span className="font-bold text-lg">$1,245.00</span>
            </div>
          </div>

          <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white">
            Confirm Payment
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );

  // Maintenance Modal
  const MaintenanceModal = () => (
    <Dialog open={showMaintenanceModal} onOpenChange={setShowMaintenanceModal}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Submit Maintenance Request</DialogTitle>
          <DialogDescription>Describe the issue you're experiencing</DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <Label>Issue Type</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select issue type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="plumbing">Plumbing</SelectItem>
                <SelectItem value="electrical">Electrical</SelectItem>
                <SelectItem value="hvac">HVAC</SelectItem>
                <SelectItem value="appliance">Appliance</SelectItem>
                <SelectItem value="structural">Structural</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Priority</Label>
            <div className="grid grid-cols-3 gap-3">
              <Button variant="outline" className="border-red-500 bg-red-50 text-red-700">
                High
              </Button>
              <Button variant="outline">Medium</Button>
              <Button variant="outline">Low</Button>
            </div>
          </div>

          <div>
            <Label>Description</Label>
            <Textarea placeholder="Please describe the issue in detail..." className="min-h-[100px]" />
          </div>

          <div>
            <Label>Photos (Optional)</Label>
            <Button variant="outline" className="w-full">
              <Camera className="w-4 h-4 mr-2" />
              Upload Photos
            </Button>
          </div>

          <div>
            <Label>Preferred Time</Label>
            <Input type="datetime-local" />
          </div>

          <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
            <Send className="w-4 h-4 mr-2" />
            Submit Request
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col">
        <div className="p-6 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="Lodgely" className="w-10 h-10 rounded-lg" />
            <div>
              <div className="font-semibold text-slate-900">Lodgely</div>
              <div className="text-xs text-slate-600">Tenant Portal</div>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          <button
            onClick={() => setActivePage('dashboard')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activePage === 'dashboard' ? 'bg-teal-500 text-white' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Home className="w-5 h-5" />
            <span>Dashboard</span>
          </button>

          <button
            onClick={() => setActivePage('payments')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activePage === 'payments' ? 'bg-teal-500 text-white' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <CreditCard className="w-5 h-5" />
            <span>Payments</span>
          </button>

          <button
            onClick={() => setActivePage('maintenance')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activePage === 'maintenance' ? 'bg-teal-500 text-white' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Wrench className="w-5 h-5" />
            <span>Maintenance</span>
          </button>

          <button
            onClick={() => setActivePage('profile')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activePage === 'profile' ? 'bg-teal-500 text-white' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <User className="w-5 h-5" />
            <span>Profile</span>
          </button>
        </nav>

        <div className="p-4 border-t border-slate-200">
          <Button variant="ghost" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
            <LogOut className="w-5 h-5 mr-3" />
            Sign Out
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
          <div className="px-8 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-slate-900">
                  {activePage === 'dashboard' ? 'Dashboard' :
                   activePage === 'payments' ? 'Payments' :
                   activePage === 'maintenance' ? 'Maintenance' : 'Profile'}
                </h1>
                <p className="text-slate-600 text-sm">Unit A-402, Riverside Apartments</p>
              </div>
              <Avatar>
                <AvatarFallback className="bg-teal-500 text-white">SJ</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        <div className="p-8">
          {activePage === 'dashboard' && <DashboardPage />}
          {activePage === 'payments' && <PaymentsPage />}
          {activePage === 'maintenance' && <MaintenancePage />}
          {activePage === 'profile' && <ProfilePage />}
        </div>
      </main>

      {/* Modals */}
      <PaymentModal />
      <MaintenanceModal />
    </div>
  );
}