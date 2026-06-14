import { useState } from 'react';
import { Home, CreditCard, Wrench, Bell, User, ChevronRight, ChevronLeft, Plus, Camera, Send, DollarSign, Calendar, MapPin, Phone, Mail, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Progress } from './ui/progress';

export default function TenantMobileApp() {
  const [activeTab, setActiveTab] = useState<'home' | 'payments' | 'maintenance' | 'notifications' | 'profile'>('home');
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showMaintenanceModal, setShowMaintenanceModal] = useState(false);

  // Home Screen
  const HomeScreen = () => (
    <div className="space-y-6">
      {/* Balance Card */}
      <Card className="bg-gradient-to-br from-teal-500 to-cyan-600 border-0 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>
        <CardContent className="p-6 relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="text-sm opacity-90 mb-1">Current Balance</div>
              <div className="text-4xl font-bold">$1,245.00</div>
            </div>
            <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <DollarSign className="w-7 h-7" />
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm opacity-90">Next Payment Due</span>
              <Badge className="bg-white/20 text-white border-0">Upcoming</Badge>
            </div>
            <div className="text-xl font-semibold">May 1, 2026</div>
            <div className="text-sm opacity-80 mt-1">Service Charge - Unit 402</div>
          </div>

          <Button
            className="w-full bg-white text-teal-600 hover:bg-teal-50"
            onClick={() => setShowPaymentModal(true)}
          >
            <CreditCard className="w-4 h-4 mr-2" />
            Make Payment
          </Button>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div>
        <h3 className="font-semibold text-slate-900 mb-3">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-3">
          <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => setShowMaintenanceModal(true)}>
            <CardContent className="p-4 text-center">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-2">
                <Wrench className="w-6 h-6 text-orange-600" />
              </div>
              <div className="text-sm font-medium text-slate-900">Maintenance</div>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-4 text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-2">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-sm font-medium text-slate-900">Lease Details</div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Properties */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-slate-900">My Properties</h3>
          <Button variant="ghost" size="sm" className="text-teal-600">View All</Button>
        </div>

        <Card>
          <CardContent className="p-4">
            <div className="flex gap-4">
              <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-slate-200 to-slate-300 flex-shrink-0"></div>
              <div className="flex-1">
                <div className="font-semibold text-slate-900 mb-1">Riverside Apartments</div>
                <div className="text-sm text-slate-600 flex items-center gap-1 mb-2">
                  <MapPin className="w-3 h-3" />
                  Unit A-402, Building A
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-green-100 text-green-700 border-0 text-xs">Active Lease</Badge>
                  <span className="text-xs text-slate-500">Until Dec 2026</span>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Announcements */}
      <div>
        <h3 className="font-semibold text-slate-900 mb-3">Announcements</h3>
        <div className="space-y-3">
          <Card>
            <CardContent className="p-4">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Bell className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-slate-900 mb-1">Pool Maintenance Schedule</div>
                  <div className="text-sm text-slate-600 mb-2">The pool will be closed for maintenance on April 25-26.</div>
                  <div className="text-xs text-slate-500">2 days ago</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex gap-3">
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
    </div>
  );

  // Payments Screen
  const PaymentsScreen = () => (
    <div className="space-y-6">
      <Card className="bg-gradient-to-br from-slate-900 to-slate-800 text-white border-0">
        <CardContent className="p-6">
          <div className="text-sm opacity-80 mb-2">Outstanding Balance</div>
          <div className="text-3xl font-bold mb-4">$1,245.00</div>
          <Progress value={60} className="h-2 bg-slate-700 mb-2" />
          <div className="text-xs opacity-70">Payment due in 9 days</div>
        </CardContent>
      </Card>

      <div>
        <h3 className="font-semibold text-slate-900 mb-3">Payment History</h3>
        <div className="space-y-3">
          {[
            { month: 'April 2026', amount: '$1,850', status: 'Paid', date: 'Apr 1', color: 'green' },
            { month: 'March 2026', amount: '$1,850', status: 'Paid', date: 'Mar 1', color: 'green' },
            { month: 'February 2026', amount: '$1,850', status: 'Paid', date: 'Feb 1', color: 'green' },
            { month: 'January 2026', amount: '$1,850', status: 'Paid', date: 'Jan 1', color: 'green' },
          ].map((payment, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-medium text-slate-900">{payment.month}</div>
                      <div className="text-sm text-slate-600">{payment.date}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-slate-900">{payment.amount}</div>
                    <Badge className="bg-green-100 text-green-700 border-0 text-xs">{payment.status}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white" onClick={() => setShowPaymentModal(true)}>
        <Plus className="w-4 h-4 mr-2" />
        Make a Payment
      </Button>
    </div>
  );

  // Maintenance Screen
  const MaintenanceScreen = () => (
    <div className="space-y-6">
      <Card className="bg-gradient-to-br from-orange-500 to-red-500 text-white border-0">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm opacity-90 mb-1">Active Requests</div>
              <div className="text-4xl font-bold">2</div>
            </div>
            <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Wrench className="w-7 h-7" />
            </div>
          </div>
        </CardContent>
      </Card>

      <div>
        <h3 className="font-semibold text-slate-900 mb-3">My Requests</h3>
        <div className="space-y-3">
          <Card className="border-l-4 border-l-orange-500">
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-orange-100 text-orange-700 border-0">In Progress</Badge>
                    <Badge variant="outline" className="text-xs">High Priority</Badge>
                  </div>
                  <div className="font-medium text-slate-900 mb-1">AC not cooling properly</div>
                  <div className="text-sm text-slate-600 mb-2">Submitted on Apr 20, 2026</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Clock className="w-4 h-4" />
                <span>Technician assigned - Expected Apr 23</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-blue-100 text-blue-700 border-0">Scheduled</Badge>
                    <Badge variant="outline" className="text-xs">Medium Priority</Badge>
                  </div>
                  <div className="font-medium text-slate-900 mb-1">Leaking faucet in kitchen</div>
                  <div className="text-sm text-slate-600 mb-2">Submitted on Apr 18, 2026</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Calendar className="w-4 h-4" />
                <span>Scheduled for Apr 24, 10:00 AM</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-green-100 text-green-700 border-0">Completed</Badge>
                  </div>
                  <div className="font-medium text-slate-900 mb-1">Light fixture replacement</div>
                  <div className="text-sm text-slate-600 mb-2">Completed on Apr 15, 2026</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <CheckCircle className="w-4 h-4" />
                <span>Work completed successfully</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white" onClick={() => setShowMaintenanceModal(true)}>
        <Plus className="w-4 h-4 mr-2" />
        New Request
      </Button>
    </div>
  );

  // Notifications Screen
  const NotificationsScreen = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold text-slate-900 mb-3">Today</h3>
        <div className="space-y-3">
          <Card>
            <CardContent className="p-4">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Bell className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-slate-900 mb-1">Payment Reminder</div>
                  <div className="text-sm text-slate-600 mb-1">Your payment of $1,245 is due on May 1st</div>
                  <div className="text-xs text-slate-500">2 hours ago</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <Wrench className="w-5 h-5 text-orange-600" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-slate-900 mb-1">Maintenance Update</div>
                  <div className="text-sm text-slate-600 mb-1">Technician has been assigned to your AC repair request</div>
                  <div className="text-xs text-slate-500">4 hours ago</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-slate-900 mb-3">Earlier</h3>
        <div className="space-y-3">
          <Card>
            <CardContent className="p-4">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <Bell className="w-5 h-5 text-purple-600" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-slate-900 mb-1">New Announcement</div>
                  <div className="text-sm text-slate-600 mb-1">Pool maintenance scheduled for April 25-26</div>
                  <div className="text-xs text-slate-500">2 days ago</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-slate-900 mb-1">Payment Confirmed</div>
                  <div className="text-sm text-slate-600 mb-1">Your payment of $1,850 has been received</div>
                  <div className="text-xs text-slate-500">20 days ago</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

  // Profile Screen
  const ProfileScreen = () => (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <Avatar className="w-20 h-20">
              <AvatarFallback className="bg-teal-500 text-white text-2xl">SJ</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="text-xl font-semibold text-slate-900">Sarah Johnson</div>
              <div className="text-sm text-slate-600">Tenant since Jan 2024</div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-slate-700">
              <Mail className="w-5 h-5 text-slate-400" />
              <span>sarah.johnson@email.com</span>
            </div>
            <div className="flex items-center gap-3 text-slate-700">
              <Phone className="w-5 h-5 text-slate-400" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3 text-slate-700">
              <MapPin className="w-5 h-5 text-slate-400" />
              <span>Unit A-402, Riverside Apartments</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Lease Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between">
            <span className="text-slate-600">Lease Start</span>
            <span className="font-medium text-slate-900">Jan 1, 2024</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-600">Lease End</span>
            <span className="font-medium text-slate-900">Dec 31, 2026</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-600">Monthly Rent</span>
            <span className="font-medium text-slate-900">$1,850</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-600">Security Deposit</span>
            <span className="font-medium text-slate-900">$2,500</span>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-2">
        <Button variant="outline" className="w-full justify-start">
          <CreditCard className="w-4 h-4 mr-3" />
          Payment Methods
        </Button>
        <Button variant="outline" className="w-full justify-start">
          <Bell className="w-4 h-4 mr-3" />
          Notification Settings
        </Button>
        <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700">
          Sign Out
        </Button>
      </div>
    </div>
  );

  // Payment Modal
  const PaymentModal = () => (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center p-4">
      <Card className="w-full max-w-md animate-in slide-in-from-bottom duration-300">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Make Payment</CardTitle>
            <Button variant="ghost" size="sm" onClick={() => setShowPaymentModal(false)}>
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium text-slate-700 mb-2 block">Payment Amount</label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input className="pl-10" placeholder="1,245.00" defaultValue="1,245.00" />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700 mb-2 block">Payment Method</label>
            <Card className="cursor-pointer border-2 border-teal-500">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-slate-100 flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-slate-600" />
                    </div>
                    <div>
                      <div className="font-medium text-slate-900">Visa •••• 4242</div>
                      <div className="text-sm text-slate-600">Expires 12/26</div>
                    </div>
                  </div>
                  <div className="w-5 h-5 rounded-full bg-teal-500 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-slate-50 rounded-lg p-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-600">Subtotal</span>
              <span className="font-medium text-slate-900">$1,245.00</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-600">Processing Fee</span>
              <span className="font-medium text-slate-900">$0.00</span>
            </div>
            <div className="border-t border-slate-200 pt-2 flex justify-between">
              <span className="font-semibold text-slate-900">Total</span>
              <span className="font-bold text-slate-900 text-lg">$1,245.00</span>
            </div>
          </div>

          <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white">
            Confirm Payment
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  // Maintenance Request Modal
  const MaintenanceModal = () => (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center p-4">
      <Card className="w-full max-w-md animate-in slide-in-from-bottom duration-300 max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>New Maintenance Request</CardTitle>
            <Button variant="ghost" size="sm" onClick={() => setShowMaintenanceModal(false)}>
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium text-slate-700 mb-2 block">Issue Type</label>
            <div className="grid grid-cols-2 gap-2">
              {['Plumbing', 'Electrical', 'HVAC', 'Appliance', 'Structural', 'Other'].map((type) => (
                <Button
                  key={type}
                  variant="outline"
                  className="justify-start"
                  onClick={(e) => {
                    e.currentTarget.classList.toggle('border-teal-500');
                    e.currentTarget.classList.toggle('bg-teal-50');
                  }}
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700 mb-2 block">Priority</label>
            <div className="grid grid-cols-3 gap-2">
              <Button variant="outline" className="border-red-500 bg-red-50 text-red-700">
                High
              </Button>
              <Button variant="outline">Medium</Button>
              <Button variant="outline">Low</Button>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700 mb-2 block">Description</label>
            <Textarea
              placeholder="Please describe the issue in detail..."
              className="min-h-[100px]"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700 mb-2 block">Photos (Optional)</label>
            <Button variant="outline" className="w-full">
              <Camera className="w-4 h-4 mr-2" />
              Add Photos
            </Button>
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700 mb-2 block">Preferred Time</label>
            <Input type="datetime-local" />
          </div>

          <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
            <Send className="w-4 h-4 mr-2" />
            Submit Request
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Mobile Frame */}
      <div className="max-w-md mx-auto bg-white min-h-screen shadow-2xl relative">
        {/* Status Bar */}
        <div className="bg-slate-900 h-12 flex items-center justify-between px-6 text-white text-xs">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <div className="w-4 h-3 border border-white rounded-sm"></div>
            <div className="w-1 h-2 bg-white rounded-sm"></div>
          </div>
        </div>

        {/* Header */}
        <div className="bg-white border-b border-slate-200 px-6 py-4 sticky top-12 z-10">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-slate-900">
                {activeTab === 'home' && 'Home'}
                {activeTab === 'payments' && 'Payments'}
                {activeTab === 'maintenance' && 'Maintenance'}
                {activeTab === 'notifications' && 'Notifications'}
                {activeTab === 'profile' && 'Profile'}
              </h1>
              <p className="text-sm text-slate-600">Unit A-402</p>
            </div>
            <Avatar>
              <AvatarFallback className="bg-teal-500 text-white">SJ</AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {activeTab === 'home' && <HomeScreen />}
          {activeTab === 'payments' && <PaymentsScreen />}
          {activeTab === 'maintenance' && <MaintenanceScreen />}
          {activeTab === 'notifications' && <NotificationsScreen />}
          {activeTab === 'profile' && <ProfileScreen />}
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white border-t border-slate-200 px-4 py-3">
          <div className="flex items-center justify-around">
            <button
              onClick={() => setActiveTab('home')}
              className={`flex flex-col items-center gap-1 ${
                activeTab === 'home' ? 'text-teal-600' : 'text-slate-400'
              }`}
            >
              <Home className="w-6 h-6" />
              <span className="text-xs font-medium">Home</span>
            </button>
            <button
              onClick={() => setActiveTab('payments')}
              className={`flex flex-col items-center gap-1 ${
                activeTab === 'payments' ? 'text-teal-600' : 'text-slate-400'
              }`}
            >
              <CreditCard className="w-6 h-6" />
              <span className="text-xs font-medium">Payments</span>
            </button>
            <button
              onClick={() => setActiveTab('maintenance')}
              className={`flex flex-col items-center gap-1 ${
                activeTab === 'maintenance' ? 'text-teal-600' : 'text-slate-400'
              }`}
            >
              <Wrench className="w-6 h-6" />
              <span className="text-xs font-medium">Maintenance</span>
            </button>
            <button
              onClick={() => setActiveTab('notifications')}
              className={`flex flex-col items-center gap-1 relative ${
                activeTab === 'notifications' ? 'text-teal-600' : 'text-slate-400'
              }`}
            >
              <Bell className="w-6 h-6" />
              <span className="text-xs font-medium">Alerts</span>
              <span className="absolute top-0 right-3 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button
              onClick={() => setActiveTab('profile')}
              className={`flex flex-col items-center gap-1 ${
                activeTab === 'profile' ? 'text-teal-600' : 'text-slate-400'
              }`}
            >
              <User className="w-6 h-6" />
              <span className="text-xs font-medium">Profile</span>
            </button>
          </div>
        </div>

        {/* Modals */}
        {showPaymentModal && <PaymentModal />}
        {showMaintenanceModal && <MaintenanceModal />}
      </div>
    </div>
  );
}