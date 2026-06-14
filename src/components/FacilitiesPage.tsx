import { useState } from 'react';
import { Building2, Plus, MapPin, Users, TrendingUp, Edit, Trash2, MoreVertical, Search, Filter, Eye, DollarSign, Home, CheckCircle, AlertCircle, Settings as SettingsIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';

export default function FacilitiesPage() {
  const [showAddFacilityModal, setShowAddFacilityModal] = useState(false);
  const [showFacilityDetails, setShowFacilityDetails] = useState(false);
  const [selectedFacility, setSelectedFacility] = useState<any>(null);

  const facilities = [
    {
      id: 1,
      name: 'Riverside Apartments',
      address: '123 River St',
      city: 'New York',
      state: 'NY',
      zip: '10001',
      buildings: 3,
      totalUnits: 150,
      occupiedUnits: 142,
      occupancyRate: 94,
      monthlyRevenue: '$124,500',
      status: 'active',
      manager: 'John Doe',
      phone: '+1 (555) 123-4567',
      email: 'riverside@lodgely.com',
    },
    {
      id: 2,
      name: 'Sunset Heights',
      address: '456 Sunset Blvd',
      city: 'Los Angeles',
      state: 'CA',
      zip: '90028',
      buildings: 2,
      totalUnits: 80,
      occupiedUnits: 75,
      occupancyRate: 94,
      monthlyRevenue: '$89,000',
      status: 'active',
      manager: 'Jane Smith',
      phone: '+1 (555) 234-5678',
      email: 'sunset@lodgely.com',
    },
    {
      id: 3,
      name: 'Downtown Residences',
      address: '789 Main St',
      city: 'Chicago',
      state: 'IL',
      zip: '60601',
      buildings: 1,
      totalUnits: 45,
      occupiedUnits: 42,
      occupancyRate: 93,
      monthlyRevenue: '$52,000',
      status: 'active',
      manager: 'Mike Johnson',
      phone: '+1 (555) 345-6789',
      email: 'downtown@lodgely.com',
    },
  ];

  const stats = [
    { label: 'Total Facilities', value: '3', icon: Building2, color: 'text-blue-600', bgColor: 'bg-blue-100' },
    { label: 'Total Units', value: '275', icon: Home, color: 'text-purple-600', bgColor: 'bg-purple-100' },
    { label: 'Occupied Units', value: '259', icon: CheckCircle, color: 'text-green-600', bgColor: 'bg-green-100' },
    { label: 'Average Occupancy', value: '94%', icon: TrendingUp, color: 'text-teal-600', bgColor: 'bg-teal-100' },
  ];

  const FacilityDetailsModal = () => {
    if (!selectedFacility) return null;

    return (
      <Dialog open={showFacilityDetails} onOpenChange={setShowFacilityDetails}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Facility Details</DialogTitle>
            <DialogDescription>Complete information for {selectedFacility.name}</DialogDescription>
          </DialogHeader>

          <div className="space-y-6">
            {/* Facility Header */}
            <div className="p-6 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg text-white">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{selectedFacility.name}</h3>
                  <div className="flex items-center gap-2 text-sm opacity-90">
                    <MapPin className="w-4 h-4" />
                    <span>{selectedFacility.address}, {selectedFacility.city}, {selectedFacility.state} {selectedFacility.zip}</span>
                  </div>
                </div>
                <Badge className="bg-white/20 text-white border-0">Active</Badge>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-sm opacity-80">Buildings</div>
                  <div className="text-2xl font-bold">{selectedFacility.buildings}</div>
                </div>
                <div>
                  <div className="text-sm opacity-80">Total Units</div>
                  <div className="text-2xl font-bold">{selectedFacility.totalUnits}</div>
                </div>
                <div>
                  <div className="text-sm opacity-80">Occupancy</div>
                  <div className="text-2xl font-bold">{selectedFacility.occupancyRate}%</div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Contact Information</h4>
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="text-sm text-slate-600 mb-1">Manager</div>
                    <div className="font-semibold text-slate-900">{selectedFacility.manager}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="text-sm text-slate-600 mb-1">Email</div>
                    <div className="font-semibold text-slate-900">{selectedFacility.email}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="text-sm text-slate-600 mb-1">Phone</div>
                    <div className="font-semibold text-slate-900">{selectedFacility.phone}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="text-sm text-slate-600 mb-1">Monthly Revenue</div>
                    <div className="font-semibold text-green-600">{selectedFacility.monthlyRevenue}</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Buildings Breakdown */}
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Buildings</h4>
              <div className="space-y-3">
                {['Building A', 'Building B', 'Building C'].slice(0, selectedFacility.buildings).map((building, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="font-medium text-slate-900 mb-2">{building}</div>
                          <div className="flex items-center gap-4 text-sm text-slate-600">
                            <span>50 units</span>
                            <span>•</span>
                            <span>48 occupied</span>
                            <span>•</span>
                            <span className="text-teal-600 font-medium">96% occupancy</span>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <Button className="flex-1 bg-teal-500 hover:bg-teal-600 text-white">
                <Edit className="w-4 h-4 mr-2" />
                Edit Facility
              </Button>
              <Button variant="outline" className="flex-1">
                <SettingsIcon className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  };

  const AddFacilityModal = () => (
    <Dialog open={showAddFacilityModal} onOpenChange={setShowAddFacilityModal}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add New Facility</DialogTitle>
          <DialogDescription>Register a new property to start managing</DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <Label>Facility Name</Label>
            <Input placeholder="e.g., Riverside Apartments" />
          </div>

          <div>
            <Label>Street Address</Label>
            <Input placeholder="123 Main Street" />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1">
              <Label>City</Label>
              <Input placeholder="New York" />
            </div>
            <div className="col-span-1">
              <Label>State</Label>
              <Input placeholder="NY" />
            </div>
            <div className="col-span-1">
              <Label>ZIP Code</Label>
              <Input placeholder="10001" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Number of Buildings</Label>
              <Input type="number" placeholder="3" />
            </div>
            <div>
              <Label>Total Units</Label>
              <Input type="number" placeholder="150" />
            </div>
          </div>

          <div>
            <Label>Facility Manager</Label>
            <Input placeholder="John Doe" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Email</Label>
              <Input type="email" placeholder="facility@lodgely.com" />
            </div>
            <div>
              <Label>Phone</Label>
              <Input type="tel" placeholder="+1 (555) 123-4567" />
            </div>
          </div>

          <div>
            <Label>Description (Optional)</Label>
            <Textarea placeholder="Additional information about the facility..." rows={3} />
          </div>

          <div className="flex gap-3 pt-4">
            <Button className="flex-1 bg-teal-500 hover:bg-teal-600 text-white">
              <Plus className="w-4 h-4 mr-2" />
              Add Facility
            </Button>
            <Button variant="outline" onClick={() => setShowAddFacilityModal(false)}>
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
          <h2 className="text-3xl font-bold text-slate-900">Facilities</h2>
          <p className="text-slate-600">Manage all your properties in one place</p>
        </div>
        <Button className="bg-teal-500 hover:bg-teal-600 text-white" onClick={() => setShowAddFacilityModal(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Add Facility
        </Button>
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

      {/* Facilities Table */}
      <Tabs defaultValue="grid" className="space-y-6">
        <TabsList>
          <TabsTrigger value="grid">Grid View</TabsTrigger>
          <TabsTrigger value="table">Table View</TabsTrigger>
        </TabsList>

        <TabsContent value="grid" className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility) => (
              <Card key={facility.id} className="group hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">{facility.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-slate-600 mb-3">
                        <MapPin className="w-4 h-4" />
                        <span>{facility.city}, {facility.state}</span>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-700 border-0">Active</Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="p-3 bg-slate-50 rounded-lg">
                      <div className="text-xs text-slate-600 mb-1">Buildings</div>
                      <div className="text-lg font-bold text-slate-900">{facility.buildings}</div>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-lg">
                      <div className="text-xs text-slate-600 mb-1">Total Units</div>
                      <div className="text-lg font-bold text-slate-900">{facility.totalUnits}</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-slate-600">Occupancy Rate</span>
                      <span className="font-semibold text-teal-600">{facility.occupancyRate}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-teal-500 to-cyan-500"
                        style={{ width: `${facility.occupancyRate}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                    <div>
                      <div className="text-xs text-slate-600">Monthly Revenue</div>
                      <div className="text-lg font-bold text-slate-900">{facility.monthlyRevenue}</div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setSelectedFacility(facility);
                          setShowFacilityDetails(true);
                        }}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="table">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Facility Name</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Buildings</TableHead>
                    <TableHead>Units</TableHead>
                    <TableHead>Occupancy</TableHead>
                    <TableHead>Revenue</TableHead>
                    <TableHead>Manager</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {facilities.map((facility) => (
                    <TableRow key={facility.id}>
                      <TableCell className="font-medium">{facility.name}</TableCell>
                      <TableCell>{facility.city}, {facility.state}</TableCell>
                      <TableCell>{facility.buildings}</TableCell>
                      <TableCell>
                        {facility.occupiedUnits}/{facility.totalUnits}
                      </TableCell>
                      <TableCell>
                        <span className="font-semibold text-teal-600">{facility.occupancyRate}%</span>
                      </TableCell>
                      <TableCell className="font-semibold">{facility.monthlyRevenue}</TableCell>
                      <TableCell>{facility.manager}</TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-700 border-0">Active</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                              setSelectedFacility(facility);
                              setShowFacilityDetails(true);
                            }}
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
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
      </Tabs>

      {/* Modals */}
      <FacilityDetailsModal />
      <AddFacilityModal />
    </div>
  );
}