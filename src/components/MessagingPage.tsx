import { useState } from 'react';
import { MessageSquare, Send, Search, Plus, Paperclip, Image, Smile, MoreVertical, Phone, Video, Star, Archive, Trash2, Bell } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback } from './ui/avatar';
import { ScrollArea } from './ui/scroll-area';

export default function MessagingPage() {
  const [selectedConversation, setSelectedConversation] = useState<number>(1);
  const [messageText, setMessageText] = useState('');

  const conversations = [
    {
      id: 1,
      name: 'Sarah Johnson',
      unit: 'A-402',
      lastMessage: 'Thank you for the quick response!',
      timestamp: '10:24 AM',
      unread: 0,
      online: true,
      initials: 'SJ',
    },
    {
      id: 2,
      name: 'Michael Chen',
      unit: 'B-305',
      lastMessage: 'When will the maintenance be completed?',
      timestamp: 'Yesterday',
      unread: 2,
      online: false,
      initials: 'MC',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      unit: 'C-201',
      lastMessage: 'I sent the payment this morning',
      timestamp: '2 days ago',
      unread: 0,
      online: true,
      initials: 'ER',
    },
    {
      id: 4,
      name: 'James Wilson',
      unit: 'A-108',
      lastMessage: 'Great, see you then!',
      timestamp: '3 days ago',
      unread: 0,
      online: false,
      initials: 'JW',
    },
    {
      id: 5,
      name: 'Lisa Anderson',
      unit: 'B-412',
      lastMessage: 'Regarding the payment...',
      timestamp: '1 week ago',
      unread: 1,
      online: false,
      initials: 'LA',
    },
  ];

  const messages = [
    {
      id: 1,
      sender: 'tenant',
      text: 'Hi! I noticed the AC in my unit is not cooling properly. Could you send someone to check it?',
      timestamp: '9:45 AM',
    },
    {
      id: 2,
      sender: 'manager',
      text: 'Hello Sarah! Thank you for letting us know. I will dispatch a technician to check your AC today.',
      timestamp: '9:50 AM',
    },
    {
      id: 3,
      sender: 'manager',
      text: 'The technician should arrive between 2-4 PM. Will you be available during that time?',
      timestamp: '9:51 AM',
    },
    {
      id: 4,
      sender: 'tenant',
      text: 'Yes, I will be home. Thank you!',
      timestamp: '10:15 AM',
    },
    {
      id: 5,
      sender: 'manager',
      text: 'Perfect! They will call you 15 minutes before arriving.',
      timestamp: '10:18 AM',
    },
    {
      id: 6,
      sender: 'tenant',
      text: 'Thank you for the quick response!',
      timestamp: '10:24 AM',
    },
  ];

  const selectedConv = conversations.find(c => c.id === selectedConversation);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Messages</h2>
          <p className="text-slate-600">Communicate with your tenants</p>
        </div>
        <Button className="bg-teal-500 hover:bg-teal-600 text-white">
          <Plus className="w-4 h-4 mr-2" />
          New Message
        </Button>
      </div>

      {/* Messaging Interface */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Conversations List */}
        <Card className="lg:col-span-1">
          <CardContent className="p-0">
            {/* Search */}
            <div className="p-4 border-b border-slate-200">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input placeholder="Search conversations..." className="pl-10" />
              </div>
            </div>

            {/* Conversation List */}
            <ScrollArea className="h-[600px]">
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  onClick={() => setSelectedConversation(conversation.id)}
                  className={`p-4 border-b border-slate-200 cursor-pointer transition-colors ${
                    selectedConversation === conversation.id ? 'bg-teal-50' : 'hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="relative">
                      <Avatar>
                        <AvatarFallback className="bg-teal-500 text-white">
                          {conversation.initials}
                        </AvatarFallback>
                      </Avatar>
                      {conversation.online && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <div className="font-semibold text-slate-900 truncate">{conversation.name}</div>
                        {conversation.unread > 0 && (
                          <Badge className="bg-teal-500 text-white border-0 h-5 min-w-5 rounded-full text-xs">
                            {conversation.unread}
                          </Badge>
                        )}
                      </div>
                      <div className="text-xs text-slate-600 mb-1">{conversation.unit}</div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-slate-600 truncate flex-1">{conversation.lastMessage}</div>
                        <div className="text-xs text-slate-500 ml-2">{conversation.timestamp}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Chat Window */}
        <Card className="lg:col-span-2">
          <CardContent className="p-0 flex flex-col h-[700px]">
            {/* Chat Header */}
            <div className="p-4 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-teal-500 text-white text-lg">
                      {selectedConv?.initials}
                    </AvatarFallback>
                  </Avatar>
                  {selectedConv?.online && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                  )}
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{selectedConv?.name}</div>
                  <div className="text-sm text-slate-600">Unit {selectedConv?.unit}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm">
                  <Phone className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Video className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Star className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Messages Area */}
            <ScrollArea className="flex-1 p-6">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'manager' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[70%] ${message.sender === 'manager' ? 'order-2' : ''}`}>
                      <div
                        className={`rounded-2xl px-4 py-3 ${
                          message.sender === 'manager'
                            ? 'bg-teal-500 text-white rounded-br-sm'
                            : 'bg-slate-100 text-slate-900 rounded-bl-sm'
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                      </div>
                      <div className={`text-xs text-slate-500 mt-1 ${message.sender === 'manager' ? 'text-right' : ''}`}>
                        {message.timestamp}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Message Input */}
            <div className="p-4 border-t border-slate-200">
              <div className="flex items-end gap-3">
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm">
                    <Paperclip className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Image className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Smile className="w-4 h-4" />
                  </Button>
                </div>
                <Textarea
                  placeholder="Type a message..."
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  className="flex-1 min-h-[44px] max-h-32 resize-none"
                  rows={1}
                />
                <Button className="bg-teal-500 hover:bg-teal-600 text-white">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                <Bell className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-slate-900">Broadcast Announcement</div>
                <div className="text-sm text-slate-600">Send message to all tenants</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                <Archive className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-slate-900">Archived Messages</div>
                <div className="text-sm text-slate-600">View archived conversations</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-orange-600" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-slate-900">Templates</div>
                <div className="text-sm text-slate-600">Manage message templates</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}