import { useState } from 'react';
import { Users, Search, Filter, Plus, Mail, Phone, MapPin, Calendar, DollarSign, MoreVertical, Download, Edit, Trash2, Eye, CheckCircle, Clock, AlertCircle, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback } from './ui/avatar';
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Label } from './ui/label';

export default function TenantsPage() {
  const [selectedBuilding, setSelectedBuilding] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [showAddTenantModal, setShowAddTenantModal] = useState(false);
  const [showTenantDetails, setShowTenantDetails] = useState(false);
  const [selectedTenant, setSelectedTenant] = useState<any>(null);

  const tenants = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.j@email.com',
      phone: '+1 (555) 123-4567',
      unit: 'A-402',
      building: 'Building A',
      leaseStart: '2024-01-01',
      leaseEnd: '2026-12-31',
      rent: '$1,850',
      balance: '$0',
      status: 'active',
      lastPayment: '2026-04-01',
      initials: 'SJ',
    },
    {
      id: 2,
      name: 'Michael Chen',
      email: 'mchen@email.com',
      phone: '+1 (555) 234-5678',
      unit: 'B-305',
      building: 'Building B',
      leaseStart: '2025-03-15',
      leaseEnd: '2027-03-14',
      rent: '$2,100',
      balance: '$0',
      status: 'active',
      lastPayment: '2026-04-01',
      initials: 'MC',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      email: 'emily.r@email.com',
      phone: '+1 (555) 345-6789',
      unit: 'C-201',
      building: 'Building C',
      leaseStart: '2023-06-01',
      leaseEnd: '2026-05-31',
      rent: '$1,650',
      balance: '$1,650',
      status: 'pending',
      lastPayment: '2026-03-01',
      initials: 'ER',
    },
    {
      id: 4,
      name: 'James Wilson',
      email: 'jwilson@email.com',
      phone: '+1 (555) 456-7890',
      unit: 'A-108',
      building: 'Building A',
      leaseStart: '2024-08-01',
      leaseEnd: '2026-07-31',
      rent: '$1,950',
      balance: '$0',
      status: 'active',
      lastPayment: '2026-04-01',
      initials: 'JW',
    },
    {
      id: 5,
      name: 'Lisa Anderson',
      email: 'l.anderson@email.com',
      phone: '+1 (555) 567-8901',
      unit: 'B-412',
      building: 'Building B',
      leaseStart: '2025-01-01',
      leaseEnd: '2027-12-31',
      rent: '$2,300',
      balance: '$2,300',
      status: 'overdue',
      lastPayment: '2026-03-01',
      initials: 'LA',
    },
    {
      id: 6,
      name: 'David Kim',
      email: 'dkim@email.com',
      phone: '+1 (555) 678-9012',
      unit: 'A-203',
      building: 'Building A',
      leaseStart: '2024-11-01',
      leaseEnd: '2026-10-31',
      rent: '$1,800',
      balance: '$0',
      status: 'active',
      lastPayment: '2026-04-01',
      initials: 'DK',
    },
    {
      id: 7,
      name: 'Maria Garcia',
      email: 'mgarcia@email.com',
      phone: '+1 (555) 789-0123',
      unit: 'C-308',
      building: 'Building C',
      leaseStart: '2023-09-01',
      leaseEnd: '2026-08-31',
      rent: '$1,750',
      balance: '$0',
      status: 'active',
      lastPayment: '2026-04-01',
      initials: 'MG',
    },
    {
      id: 8,
      name: 'Robert Taylor',
      email: 'rtaylor@email.com',
      phone: '+1 (555) 890-1234',
      unit: 'B-201',
      building: 'Building B',
      leaseStart: '2025-02-01',
      leaseEnd: '2027-01-31',
      rent: '$2,050',
      balance: '$0',
      status: 'active',
      lastPayment: '2026-04-01',
      initials: 'RT',
    },
  ];

  const stats = [
    { label: 'Total Tenants', value: '142', icon: Users, color: 'text-blue-600', bgColor: 'bg-blue-100' },
    { label: 'Active Leases', value: '136', icon: CheckCircle, color: 'text-green-600', bgColor: 'bg-green-100' },
    { label: 'Pending Payments', value: '8', icon: Clock, color: 'text-yellow-600', bgColor: 'bg-yellow-100' },
    { label: 'Overdue', value: '3', icon: AlertCircle, color: 'text-red-600', bgColor: 'bg-red-100' },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-100 text-green-700 border-0">Active</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-700 border-0">Pending Payment</Badge>;
      case 'overdue':
        return <Badge variant="destructive">Overdue</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const TenantDetailsModal = () => {
    if (!selectedTenant) return null;

    return (
      <Dialog open={showTenantDetails} onOpenChange={setShowTenantDetails}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Tenant Details</DialogTitle>
            <DialogDescription>Complete information for {selectedTenant.name}</DialogDescription>
          </DialogHeader>

          <div className="space-y-6">
            {/* Tenant Header */}
            <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-lg">
              <Avatar className="w-16 h-16">
                <AvatarFallback className="bg-teal-500 text-white text-xl">
                  {selectedTenant.initials}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-semibold text-slate-900">{selectedTenant.name}</h3>
                  {getStatusBadge(selectedTenant.status)}
                </div>
                <div className="space-y-1 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{selectedTenant.unit}, {selectedTenant.building}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>{selectedTenant.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>{selectedTenant.phone}</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit
                </Button>
                <Button variant="outline" size="sm">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </Button>
              </div>
            </div>

            {/* Lease Information */}
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Lease Information</h4>
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="text-sm text-slate-600 mb-1">Lease Start</div>
                    <div className="font-semibold text-slate-900">{selectedTenant.leaseStart}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="text-sm text-slate-600 mb-1">Lease End</div>
                    <div className="font-semibold text-slate-900">{selectedTenant.leaseEnd}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="text-sm text-slate-600 mb-1">Monthly Rent</div>
                    <div className="font-semibold text-slate-900">{selectedTenant.rent}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="text-sm text-slate-600 mb-1">Current Balance</div>
                    <div className={`font-semibold ${selectedTenant.balance === '$0' ? 'text-green-600' : 'text-red-600'}`}>
                      {selectedTenant.balance}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Payment History */}
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Recent Payment History</h4>
              <div className="space-y-2">
                {[
                  { date: '2026-04-01', amount: selectedTenant.rent, status: 'Paid' },
                  { date: '2026-03-01', amount: selectedTenant.rent, status: 'Paid' },
                  { date: '2026-02-01', amount: selectedTenant.rent, status: 'Paid' },
                  { date: '2026-01-01', amount: selectedTenant.rent, status: 'Paid' },
                ].map((payment, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-slate-200 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">{payment.date}</div>
                        <div className="text-sm text-slate-600">Rent Payment</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-slate-900">{payment.amount}</div>
                      <Badge className="bg-green-100 text-green-700 border-0 text-xs">{payment.status}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <Button className="flex-1 bg-teal-500 hover:bg-teal-600 text-white">
                <DollarSign className="w-4 h-4 mr-2" />
                Record Payment
              </Button>
              <Button variant="outline" className="flex-1">
                <Calendar className="w-4 h-4 mr-2" />
                Renew Lease
              </Button>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  };

  const AddTenantModal = () => (
    <Dialog open={showAddTenantModal} onOpenChange={setShowAddTenantModal}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Add New Tenant</DialogTitle>
          <DialogDescription>Enter tenant information to create a new lease</DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>First Name</Label>
              <Input placeholder="John" />
            </div>
            <div>
              <Label>Last Name</Label>
              <Input placeholder="Doe" />
            </div>
          </div>

          <div>
            <Label>Email Address</Label>
            <Input type="email" placeholder="john.doe@email.com" />
          </div>

          <div>
            <Label>Phone Number</Label>
            <Input type="tel" placeholder="+1 (555) 123-4567" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Building</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select building" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="a">Building A</SelectItem>
                  <SelectItem value="b">Building B</SelectItem>
                  <SelectItem value="c">Building C</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Unit</Label>
              <Input placeholder="A-402" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Lease Start Date</Label>
              <Input type="date" />
            </div>
            <div>
              <Label>Lease End Date</Label>
              <Input type="date" />
            </div>
          </div>

          <div>
            <Label>Monthly Rent</Label>
            <Input type="number" placeholder="1850" />
          </div>

          <div className="flex gap-3 pt-4">
            <Button className="flex-1 bg-teal-500 hover:bg-teal-600 text-white">
              <Plus className="w-4 h-4 mr-2" />
              Add Tenant
            </Button>
            <Button variant="outline" onClick={() => setShowAddTenantModal(false)}>
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Tenants</h2>
          <p className="text-slate-600">Manage tenant information and leases</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export List
          </Button>
          <Button className="bg-teal-500 hover:bg-teal-600 text-white" onClick={() => setShowAddTenantModal(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Add Tenant
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600 mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 rounded-lg ${stat.bgColor} flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Filters and Search */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input placeholder="Search by name, email, or unit..." className="pl-10" />
            </div>
            <Select value={selectedBuilding} onValueChange={setSelectedBuilding}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="All Buildings" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Buildings</SelectItem>
                <SelectItem value="a">Building A</SelectItem>
                <SelectItem value="b">Building B</SelectItem>
                <SelectItem value="c">Building C</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="All Statuses" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="pending">Pending Payment</SelectItem>
                <SelectItem value="overdue">Overdue</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Tenants Table */}
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Tenants</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="pending">Pending Payment</TabsTrigger>
          <TabsTrigger value="overdue">Overdue</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tenant</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Unit</TableHead>
                    <TableHead>Lease Period</TableHead>
                    <TableHead>Rent</TableHead>
                    <TableHead>Balance</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tenants.map((tenant) => (
                    <TableRow key={tenant.id} className="cursor-pointer hover:bg-slate-50">
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarFallback className="bg-teal-500 text-white">
                              {tenant.initials}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium text-slate-900">{tenant.name}</div>
                            <div className="text-sm text-slate-600">{tenant.building}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex items-center gap-1 text-sm text-slate-600">
                            <Mail className="w-3 h-3" />
                            <span>{tenant.email}</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-slate-600">
                            <Phone className="w-3 h-3" />
                            <span>{tenant.phone}</span>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="font-semibold">{tenant.unit}</TableCell>
                      <TableCell className="text-slate-600">
                        <div>{tenant.leaseStart}</div>
                        <div className="text-sm">to {tenant.leaseEnd}</div>
                      </TableCell>
                      <TableCell className="font-semibold">{tenant.rent}</TableCell>
                      <TableCell>
                        <span className={`font-semibold ${tenant.balance === '$0' ? 'text-green-600' : 'text-red-600'}`}>
                          {tenant.balance}
                        </span>
                      </TableCell>
                      <TableCell>{getStatusBadge(tenant.status)}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                              setSelectedTenant(tenant);
                              setShowTenantDetails(true);
                            }}
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="active">
          <Card>
            <CardContent className="p-6 text-center text-slate-600">
              Showing only active tenants
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pending">
          <Card>
            <CardContent className="p-6 text-center text-slate-600">
              Showing only tenants with pending payments
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="overdue">
          <Card>
            <CardContent className="p-6 text-center text-slate-600">
              Showing only tenants with overdue payments
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Modals */}
      <TenantDetailsModal />
      <AddTenantModal />
    </div>
  );
}