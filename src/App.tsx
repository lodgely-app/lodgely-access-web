import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Keyboard, ShieldCheck, ShieldAlert, XCircle, RefreshCw, CheckCircle, Clock, Home, ArrowLeft } from 'lucide-react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import axios from 'axios';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5005/api';

function ScannerPage() {
  const [code, setCode] = useState('');
  const [verifying, setVerifying] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [accessGrantedThisSession, setAccessGrantedThisSession] = useState(false);

  useEffect(() => {
    let scanner: Html5QrcodeScanner | null = null;
    
    if (!result) {
      const element = document.getElementById('reader');
      if (element) element.innerHTML = '';
      
      scanner = new Html5QrcodeScanner(
        "reader",
        { fps: 10, qrbox: {width: 250, height: 250}, aspectRatio: 1.0 },
        false
      );
      
      scanner.render((decodedText) => {
        scanner?.pause(true);
        verifyCode(decodedText);
      }, () => {});
    }

    return () => {
      if (scanner) {
        scanner.clear().catch(e => console.error("Failed to clear scanner", e));
      }
    };
  }, [result]);

  const verifyCode = async (accessCode: string) => {
    if (!accessCode) return;
    setVerifying(true);
    setError(null);
    setAccessGrantedThisSession(false);
    try {
      const res = await axios.get(`${API_URL}/access/verify/${accessCode}`);
      setResult(res.data.data);
    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.message || 'Invalid or unreadable access code');
      setResult({ status: 'Error', error: true });
    } finally {
      setVerifying(false);
    }
  };

  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    verifyCode(code);
  };

  const grantAccess = async () => {
    if (!result?.code) return;
    setVerifying(true);
    try {
      const res = await axios.post(`${API_URL}/access/grant/${result.code}`);
      setResult(res.data.data);
      setAccessGrantedThisSession(true);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to grant access');
    } finally {
      setVerifying(false);
    }
  };

  const resetScanner = () => {
    setResult(null);
    setCode('');
    setError(null);
    setAccessGrantedThisSession(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Header */}
      <header className="w-full bg-white border-b border-slate-100 p-4 flex items-center justify-center shadow-sm">
        <div className="flex items-center gap-2">
          <div className="rounded-md p-1">
            <img src="/lodgely_logo.png" className="w-10 h-10" alt="" />
          </div>
          <h1 className="font-extrabold text-slate-900 tracking-tight">Lodgely Access</h1>
        </div>
      </header>

      <main className="flex-1 w-full max-w-md mx-auto p-6 flex flex-col items-center">
        {verifying ? (
          <div className="flex-1 flex flex-col items-center justify-center space-y-4">
            <div className="w-12 h-12 border-4 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-slate-500 font-medium">Verifying code...</p>
          </div>
        ) : result ? (
          <div className="w-full flex flex-col items-center mt-4">
            <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center mb-4">
              <ShieldCheck className="w-7 h-7 text-teal-500" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Access Verification</h2>

            <div className={cn(
              "w-full bg-white rounded-2xl shadow-sm p-6 mb-6",
              result.status === 'Active' ? "border border-green-400" :
              result.status === 'Used' ? "border border-amber-400" : "border border-red-400"
            )}>
              <div className="flex items-center gap-3 mb-2">
                {result.status === 'Active' ? <CheckCircle className="w-6 h-6 text-green-500" /> :
                 (result.status === 'Used' && accessGrantedThisSession) ? <CheckCircle className="w-6 h-6 text-green-500" /> :
                 result.status === 'Used' ? <ShieldAlert className="w-6 h-6 text-amber-500" /> :
                 <XCircle className="w-6 h-6 text-red-500" />}
                <h3 className={cn(
                  "font-bold text-lg",
                  result.status === 'Active' ? "text-green-600" :
                  (result.status === 'Used' && accessGrantedThisSession) ? "text-green-600" :
                  result.status === 'Used' ? "text-amber-600" : "text-red-600"
                )}>
                  {result.status === 'Active' ? 'Valid Pass' :
                   (result.status === 'Used' && accessGrantedThisSession) ? 'Access Granted' :
                   result.status === 'Used' ? 'Already Used' : 'Invalid / Expired'}
                </h3>
              </div>
              <p className={cn(
                "text-sm mb-6",
                result.status === 'Active' ? "text-green-500/80" :
                (result.status === 'Used' && accessGrantedThisSession) ? "text-green-500/80" :
                result.status === 'Used' ? "text-amber-500/80" : "text-red-500/80"
              )}>
                {error || (result.status === 'Active' ? 'Code verified successfully' : 
                  (result.status === 'Used' && accessGrantedThisSession) ? 'Visitor has been logged in' : 'This code cannot be used')}
              </p>

              <div className="border-t border-slate-100 pt-6">
                {(result.status === 'Active' || (result.status === 'Used' && accessGrantedThisSession)) && !result.error && (
                  <>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-10 h-10 rounded-full bg-teal-400 text-white flex items-center justify-center font-bold text-sm">
                        {result.visitorName?.split(' ').map((n: string) => n[0]).join('').substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">{result.visitorName}</h4>
                        <p className="text-sm text-slate-500">
                          {result.tenantId?.name || 'Unknown Tenant'} 
                          {result.tenantId?.buildingId?.name && ` • ${result.tenantId.buildingId.name}`}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white border border-slate-200 rounded-xl p-3 flex flex-col justify-center">
                        <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                          <Home className="w-3.5 h-3.5" />
                          <span className="text-xs font-semibold">Unit</span>
                        </div>
                        <span className="font-bold text-slate-900 text-sm">{result.tenantId?.apartmentId || 'N/A'}</span>
                      </div>
                      <div className="bg-white border border-slate-200 rounded-xl p-3 flex flex-col justify-center">
                        <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                          <Clock className="w-3.5 h-3.5" />
                          <span className="text-xs font-semibold">Valid Until</span>
                        </div>
                        <span className="font-bold text-slate-900 text-sm">
                          {new Date(result.expiresOn).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' })}
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {result.status === 'Active' && !result.error && (
                <div className="mt-6">
                  <button 
                    onClick={grantAccess}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3.5 rounded-xl transition-colors shadow-sm shadow-green-500/20"
                  >
                    Mark as Entered
                  </button>
                </div>
              )}
            </div>

            <button 
              onClick={resetScanner}
              className="w-full bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <RefreshCw className="w-4 h-4" /> Scan Another Code
            </button>
          </div>
        ) : (
          <div className="w-full flex flex-col items-center mt-4">
            <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center mb-4">
              <ShieldCheck className="w-7 h-7 text-teal-500" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Access Verification</h2>
            <p className="text-slate-400 text-sm text-center mb-8">Scan or enter the tenant access code to verify entry</p>

            <div className="w-full max-w-[280px] aspect-square rounded-2xl overflow-hidden bg-slate-300 flex items-center justify-center relative shadow-lg">
              <div id="reader" className="w-full h-full object-cover"></div>
            </div>

            <div className="flex items-center justify-center gap-4 my-8 w-full">
              <div className="h-px bg-slate-200 flex-1"></div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">OR</span>
              <div className="h-px bg-slate-200 flex-1"></div>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 w-full flex flex-col items-center">
              <h2 className="text-md font-bold text-slate-800 mb-1 flex items-center gap-2">
                <Keyboard className="w-4 h-4 text-teal-500" />
                Manual Entry
              </h2>
              <p className="text-slate-400 text-xs mb-6 text-center">Enter the 6-character code provided by the visitor.</p>
              
              <form onSubmit={handleManualSubmit} className="w-full">
                <div className="mb-4">
                  <input 
                    type="text" 
                    required
                    value={code}
                    onChange={e => setCode(e.target.value.toUpperCase())}
                    maxLength={6}
                    placeholder="X7R2W9"
                    className="w-full text-center text-lg font-bold tracking-widest uppercase bg-slate-50 border-none focus:ring-2 focus:ring-teal-500 rounded-xl py-3.5 placeholder:text-slate-300 placeholder:tracking-normal transition-colors"
                  />
                </div>
                
                <button type="submit" disabled={code.length < 6} className="w-full bg-teal-300 hover:bg-teal-400 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed text-teal-900 font-bold py-3.5 rounded-xl text-sm transition-colors mb-4">
                  Verify Code
                </button>

                {/* <button type="button" className="w-full text-center text-xs font-semibold text-slate-500 hover:text-slate-700 flex items-center justify-center gap-1">
                  <ArrowLeft className="w-3 h-3" /> Back to options
                </button> */}
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ScannerPage />} />
      </Routes>
    </BrowserRouter>
  );
}
