import { Building2, ChevronRight, Plus, Users, TrendingUp, MapPin, Settings } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback } from './ui/avatar';
import logoImg from '../../imports/lodgely_logo.png';

interface FacilitiesSelectionPageProps {
  onSelectFacility: (facilityId: number) => void;
  onAddFacility: () => void;
}

export default function FacilitiesSelectionPage({ onSelectFacility, onAddFacility }: FacilitiesSelectionPageProps) {
  const facilities = [
    {
      id: 1,
      name: 'Riverside Apartments',
      location: '123 River St, New York, NY 10001',
      buildings: 3,
      totalUnits: 150,
      occupiedUnits: 142,
      occupancyRate: 94,
      monthlyRevenue: '$124,500',
      status: 'active',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop',
    },
    {
      id: 2,
      name: 'Sunset Heights',
      location: '456 Sunset Blvd, Los Angeles, CA 90028',
      buildings: 2,
      totalUnits: 80,
      occupiedUnits: 75,
      occupancyRate: 94,
      monthlyRevenue: '$89,000',
      status: 'active',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop',
    },
    {
      id: 3,
      name: 'Downtown Residences',
      location: '789 Main St, Chicago, IL 60601',
      buildings: 1,
      totalUnits: 45,
      occupiedUnits: 42,
      occupancyRate: 93,
      monthlyRevenue: '$52,000',
      status: 'active',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <img src={logoImg} alt="Lodgely" className="w-10 h-10 rounded-lg" />
              <span className="text-xl font-semibold text-slate-900">Lodgely</span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <Avatar>
                <AvatarFallback className="bg-teal-500 text-white">JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Select a Facility</h1>
          <p className="text-xl text-slate-600">Choose which property you'd like to manage today</p>
        </div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {facilities.map((facility) => (
            <Card
              key={facility.id}
              className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-2 hover:border-teal-500"
              onClick={() => onSelectFacility(facility.id)}
            >
              <CardContent className="p-0">
                {/* Facility Image */}
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-green-500 text-white border-0">
                      {facility.status === 'active' ? 'Active' : 'Inactive'}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-xl font-bold text-white mb-1">{facility.name}</h3>
                    <div className="flex items-center gap-1 text-white/90 text-sm">
                      <MapPin className="w-3 h-3" />
                      <span>{facility.location}</span>
                    </div>
                  </div>
                </div>

                {/* Facility Stats */}
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-sm text-slate-600 mb-1">Buildings</div>
                      <div className="text-2xl font-bold text-slate-900">{facility.buildings}</div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-600 mb-1">Total Units</div>
                      <div className="text-2xl font-bold text-slate-900">{facility.totalUnits}</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">Occupancy</span>
                      <span className="font-semibold text-teal-600">{facility.occupancyRate}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full"
                        style={{ width: `${facility.occupancyRate}%` }}
                      ></div>
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <div>
                        <div className="text-xs text-slate-600">Monthly Revenue</div>
                        <div className="text-lg font-bold text-slate-900">{facility.monthlyRevenue}</div>
                      </div>
                      <div className="flex items-center gap-1 text-green-600 text-sm">
                        <TrendingUp className="w-4 h-4" />
                        <span>+12%</span>
                      </div>
                    </div>
                  </div>

                  {/* Enter Button */}
                  <Button className="w-full mt-4 bg-teal-500 hover:bg-teal-600 text-white group-hover:bg-teal-600">
                    Enter Dashboard
                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Add New Facility Card */}
          <Card
            className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-2 border-dashed border-slate-300 hover:border-teal-500"
            onClick={onAddFacility}
          >
            <CardContent className="p-0 h-full min-h-[500px] flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 rounded-full bg-teal-100 flex items-center justify-center mb-4 group-hover:bg-teal-500 transition-colors">
                <Plus className="w-10 h-10 text-teal-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Add New Facility</h3>
              <p className="text-slate-600 px-6">Register a new property to start managing</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm text-slate-600">Total Properties</div>
                  <div className="text-2xl font-bold text-slate-900">{facilities.length}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <div className="text-sm text-slate-600">Total Units</div>
                  <div className="text-2xl font-bold text-slate-900">
                    {facilities.reduce((acc, f) => acc + f.totalUnits, 0)}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-sm text-slate-600">Average Occupancy</div>
                  <div className="text-2xl font-bold text-slate-900">
                    {Math.round(facilities.reduce((acc, f) => acc + f.occupancyRate, 0) / facilities.length)}%
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}