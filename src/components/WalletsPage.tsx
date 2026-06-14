import { useState } from 'react';
import { Wallet, Download, Plus, CreditCard, DollarSign } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
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

export default function WalletsPage() {
  const [showPayoutModal, setShowPayoutModal] = useState(false);
  const [showBankModal, setShowBankModal] = useState(false);
  const [payoutAmount, setPayoutAmount] = useState('');
  const [selectedBank, setSelectedBank] = useState<string>('');

  const bankAccounts = [
    {
      id: 1,
      bankName: 'OPay Digital Services Limited (OPay)',
      accountType: 'Test Bank Account',
      accountNumber: '******1565',
      isPrimary: true,
    },
  ];

  const processingFee = payoutAmount ? (parseFloat(payoutAmount) * 0.02).toFixed(2) : '0.00';
  const finalAmount = payoutAmount ? (parseFloat(payoutAmount) - parseFloat(processingFee)).toFixed(2) : '0.00';

  return (
    <div className="flex gap-6 items-start">
      {/* Left column: balance + history */}
      <div className="flex-1 space-y-4">
        {/* Action buttons row */}
        <div className="flex justify-end gap-3">
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Export
          </Button>
          <Button
            className="bg-teal-500 hover:bg-teal-600 text-white gap-2"
            onClick={() => setShowPayoutModal(true)}
          >
            <Wallet className="w-4 h-4" />
            Payout
          </Button>
        </div>

        {/* Available Balance */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500 mb-1">Available balance</p>
                <p className="text-4xl font-bold text-slate-900">₦294,000</p>
                <p className="text-sm text-slate-500 mt-2">Ledger Balance: ₦310,000</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center">
                <Wallet className="w-6 h-6 text-slate-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Wallet History */}
        <Card>
          <CardHeader>
            <CardTitle>Wallet History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4">
                <Wallet className="w-8 h-8 text-slate-400" />
              </div>
              <p className="text-slate-600 mb-1">No transaction history</p>
              <p className="text-sm text-slate-400">Your payouts will appear here.</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Right column: Banks */}
      <div className="w-64 flex-shrink-0">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Banks</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button
              variant="outline"
              className="w-full gap-2"
              onClick={() => setShowBankModal(true)}
            >
              <Plus className="w-4 h-4" />
              Add Bank
            </Button>

            {bankAccounts.map((account) => (
              <div key={account.id} className="p-3 border border-slate-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CreditCard className="w-4 h-4 text-slate-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-sm font-medium text-slate-900 leading-tight">{account.bankName}</p>
                    </div>
                    {account.isPrimary && (
                      <Badge className="bg-slate-700 text-white text-xs mb-1 hover:bg-slate-700">PRIMARY</Badge>
                    )}
                    <p className="text-xs text-slate-500">{account.accountType}</p>
                    <p className="text-xs text-slate-500">{account.accountNumber}</p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Request Payout Modal */}
      <Dialog open={showPayoutModal} onOpenChange={setShowPayoutModal}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Request Payout</DialogTitle>
            <DialogDescription>Transfer funds from your wallet to your bank account</DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="text-sm text-green-700 mb-1">Available Balance</div>
              <div className="text-3xl font-bold text-green-600">₦294,000</div>
            </div>

            <div>
              <Label>Payout Amount</Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  className="pl-10"
                  placeholder="0.00"
                  type="number"
                  value={payoutAmount}
                  onChange={(e) => setPayoutAmount(e.target.value)}
                />
              </div>
            </div>

            <div>
              <Label>Bank Account</Label>
              <Select value={selectedBank} onValueChange={setSelectedBank}>
                <SelectTrigger>
                  <SelectValue placeholder="Select bank account" />
                </SelectTrigger>
                <SelectContent>
                  {bankAccounts.map((account) => (
                    <SelectItem key={account.id} value={account.id.toString()}>
                      {account.bankName} {account.accountNumber}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {payoutAmount && parseFloat(payoutAmount) > 0 && (
              <div className="p-4 bg-slate-50 rounded-lg space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Payout Amount</span>
                  <span className="font-semibold">₦{parseFloat(payoutAmount).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Processing Fee (2%)</span>
                  <span className="font-semibold text-red-600">-₦{processingFee}</span>
                </div>
                <div className="pt-2 border-t border-slate-200 flex justify-between">
                  <span className="font-semibold">You'll Receive</span>
                  <span className="font-bold text-teal-600">₦{finalAmount}</span>
                </div>
              </div>
            )}

            <div className="flex gap-3 pt-4">
              <Button variant="outline" onClick={() => setShowPayoutModal(false)} className="flex-1">Cancel</Button>
              <Button
                className="flex-1 bg-teal-500 hover:bg-teal-600 text-white"
                disabled={!payoutAmount || parseFloat(payoutAmount) <= 0 || !selectedBank}
              >
                Request Payout
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Add Bank Account Modal */}
      <Dialog open={showBankModal} onOpenChange={setShowBankModal}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Add Bank Account</DialogTitle>
            <DialogDescription>Add a new bank account for payouts</DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div>
              <Label>Bank Name</Label>
              <Input placeholder="Enter bank name" />
            </div>
            <div>
              <Label>Account Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select account type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="checking">Checking</SelectItem>
                  <SelectItem value="savings">Savings</SelectItem>
                  <SelectItem value="business">Business Checking</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Account Holder Name</Label>
              <Input placeholder="Enter account holder name" />
            </div>
            <div>
              <Label>Account Number</Label>
              <Input placeholder="Enter account number" type="password" />
            </div>
            <div>
              <Label>Confirm Account Number</Label>
              <Input placeholder="Re-enter account number" />
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="primary" className="w-4 h-4 text-teal-500" />
              <Label htmlFor="primary" className="cursor-pointer">Set as primary account</Label>
            </div>
            <div className="flex gap-3 pt-4">
              <Button variant="outline" onClick={() => setShowBankModal(false)} className="flex-1">Cancel</Button>
              <Button className="flex-1 bg-teal-500 hover:bg-teal-600 text-white">Add Bank Account</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
