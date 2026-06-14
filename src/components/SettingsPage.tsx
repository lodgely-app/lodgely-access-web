import { useState } from 'react';
import { Settings, User, Bell, Lock, CreditCard, Building2, Users, Mail, Shield, Globe, Palette, Database, Save, Check, MoreVertical } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Switch } from './ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Avatar, AvatarFallback } from './ui/avatar';

export default function SettingsPage() {
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Settings</h2>
          <p className="text-slate-600">Manage your account and system preferences</p>
        </div>
        <Button className="bg-teal-500 hover:bg-teal-600 text-white" onClick={handleSave}>
          {saved ? (
            <>
              <Check className="w-4 h-4 mr-2" />
              Saved
            </>
          ) : (
            <>
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </>
          )}
        </Button>
      </div>

      {/* Settings Tabs */}
      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
          <TabsTrigger value="properties">Properties</TabsTrigger>
        </TabsList>

        {/* Profile Settings */}
        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your personal information and profile details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-6">
                <Avatar className="w-24 h-24">
                  <AvatarFallback className="bg-teal-500 text-white text-3xl">JD</AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <Button variant="outline">Upload Photo</Button>
                  <p className="text-sm text-slate-600">JPG, PNG or GIF. Max size 2MB.</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <Label>First Name</Label>
                  <Input defaultValue="John" />
                </div>
                <div>
                  <Label>Last Name</Label>
                  <Input defaultValue="Doe" />
                </div>
              </div>

              <div>
                <Label>Email Address</Label>
                <Input type="email" defaultValue="john.doe@lodgely.com" />
              </div>

              <div>
                <Label>Phone Number</Label>
                <Input type="tel" defaultValue="+1 (555) 123-4567" />
              </div>

              <div>
                <Label>Job Title</Label>
                <Input defaultValue="Facility Manager" />
              </div>

              <div>
                <Label>Bio</Label>
                <Textarea
                  placeholder="Tell us about yourself..."
                  defaultValue="Experienced facility manager with over 10 years in residential property management."
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Preferences</CardTitle>
              <CardDescription>Customize your experience</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <Label>Language</Label>
                  <Select defaultValue="en">
                    <SelectTrigger>
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Timezone</Label>
                  <Select defaultValue="est">
                    <SelectTrigger>
                      <SelectValue placeholder="Select timezone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="est">Eastern Time (ET)</SelectItem>
                      <SelectItem value="cst">Central Time (CT)</SelectItem>
                      <SelectItem value="mst">Mountain Time (MT)</SelectItem>
                      <SelectItem value="pst">Pacific Time (PT)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label>Date Format</Label>
                <Select defaultValue="mdy">
                  <SelectTrigger>
                    <SelectValue placeholder="Select date format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mdy">MM/DD/YYYY</SelectItem>
                    <SelectItem value="dmy">DD/MM/YYYY</SelectItem>
                    <SelectItem value="ymd">YYYY-MM-DD</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notification Settings */}
        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Email Notifications</CardTitle>
              <CardDescription>Choose what updates you want to receive via email</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="font-medium">Payment Notifications</div>
                  <div className="text-sm text-slate-600">Get notified when tenants make payments</div>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="font-medium">Maintenance Requests</div>
                  <div className="text-sm text-slate-600">Receive alerts for new maintenance requests</div>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="font-medium">Lease Renewals</div>
                  <div className="text-sm text-slate-600">Get reminders for upcoming lease expirations</div>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="font-medium">Overdue Payments</div>
                  <div className="text-sm text-slate-600">Alerts when payments become overdue</div>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="font-medium">System Updates</div>
                  <div className="text-sm text-slate-600">News about product updates and features</div>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Push Notifications</CardTitle>
              <CardDescription>Manage mobile and desktop notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="font-medium">Desktop Notifications</div>
                  <div className="text-sm text-slate-600">Show notifications on desktop</div>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="font-medium">Mobile Push Notifications</div>
                  <div className="text-sm text-slate-600">Receive notifications on mobile device</div>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="font-medium">Sound</div>
                  <div className="text-sm text-slate-600">Play sound for notifications</div>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Settings */}
        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Change Password</CardTitle>
              <CardDescription>Update your password to keep your account secure</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Current Password</Label>
                <Input type="password" />
              </div>

              <div>
                <Label>New Password</Label>
                <Input type="password" />
              </div>

              <div>
                <Label>Confirm New Password</Label>
                <Input type="password" />
              </div>

              <Button className="bg-teal-500 hover:bg-teal-600 text-white">
                Update Password
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Two-Factor Authentication</CardTitle>
              <CardDescription>Add an extra layer of security to your account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-medium">Two-Factor Authentication is ON</div>
                    <div className="text-sm text-slate-600">Your account is protected</div>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>

              <Button variant="outline">
                Configure Authenticator App
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Active Sessions</CardTitle>
              <CardDescription>Manage your active login sessions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { device: 'MacBook Pro', location: 'New York, NY', time: 'Current session', active: true },
                { device: 'iPhone 13', location: 'New York, NY', time: '2 hours ago', active: false },
                { device: 'iPad Pro', location: 'New York, NY', time: '1 day ago', active: false },
              ].map((session, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                  <div>
                    <div className="font-medium text-slate-900">{session.device}</div>
                    <div className="text-sm text-slate-600">{session.location} • {session.time}</div>
                  </div>
                  {!session.active && (
                    <Button variant="outline" size="sm">Revoke</Button>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Billing Settings */}
        <TabsContent value="billing" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Current Plan</CardTitle>
              <CardDescription>Manage your subscription and billing</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-6 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg text-white">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-sm opacity-90">Current Plan</div>
                    <div className="text-3xl font-bold">Professional</div>
                  </div>
                  <Button variant="outline" className="bg-white text-teal-600 hover:bg-teal-50">
                    Upgrade
                  </Button>
                </div>
                <div className="text-sm opacity-90">$299/month • Billed annually</div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Next billing date</span>
                  <span className="font-medium">May 1, 2026</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Properties limit</span>
                  <span className="font-medium">3 / Unlimited</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Units limit</span>
                  <span className="font-medium">150 / Unlimited</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payment Method</CardTitle>
              <CardDescription>Manage your payment methods</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border-2 border-teal-500 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded bg-slate-100 flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-slate-600" />
                  </div>
                  <div>
                    <div className="font-medium">Visa •••• 4242</div>
                    <div className="text-sm text-slate-600">Expires 12/2026</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Edit</Button>
                  <Button variant="outline" size="sm">Remove</Button>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                <CreditCard className="w-4 h-4 mr-2" />
                Add Payment Method
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Billing History</CardTitle>
              <CardDescription>View your past invoices and receipts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { date: 'Apr 1, 2026', amount: '$299.00', status: 'Paid' },
                { date: 'Mar 1, 2026', amount: '$299.00', status: 'Paid' },
                { date: 'Feb 1, 2026', amount: '$299.00', status: 'Paid' },
              ].map((invoice, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                  <div>
                    <div className="font-medium text-slate-900">{invoice.date}</div>
                    <div className="text-sm text-slate-600">{invoice.amount}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-green-600">{invoice.status}</span>
                    <Button variant="outline" size="sm">Download</Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Properties Settings */}
        <TabsContent value="properties" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Property Management</CardTitle>
              <CardDescription>Configure your properties and buildings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: 'Riverside Apartments', units: 50, building: 'Building A', occupancy: '96%' },
                { name: 'Riverside Apartments', units: 45, building: 'Building B', occupancy: '93%' },
                { name: 'Riverside Apartments', units: 55, building: 'Building C', occupancy: '95%' },
              ].map((property, index) => (
                <div key={index} className="p-4 border border-slate-200 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="font-semibold text-slate-900">{property.name}</div>
                      <div className="text-sm text-slate-600">{property.building} • {property.units} units</div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="outline" size="sm">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-600">Occupancy:</span>
                    <span className="font-semibold text-teal-600">{property.occupancy}</span>
                  </div>
                </div>
              ))}

              <Button variant="outline" className="w-full">
                <Building2 className="w-4 h-4 mr-2" />
                Add New Property
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Team Members</CardTitle>
              <CardDescription>Manage team access and permissions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: 'John Doe', role: 'Admin', email: 'john.doe@lodgely.com' },
                { name: 'Jane Smith', role: 'Manager', email: 'jane.smith@lodgely.com' },
                { name: 'Mike Johnson', role: 'Maintenance', email: 'mike.j@lodgely.com' },
              ].map((member, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-teal-500 text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-slate-900">{member.name}</div>
                      <div className="text-sm text-slate-600">{member.email}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-slate-700">{member.role}</span>
                    <Button variant="outline" size="sm">Edit</Button>
                  </div>
                </div>
              ))}

              <Button variant="outline" className="w-full">
                <Users className="w-4 h-4 mr-2" />
                Invite Team Member
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}