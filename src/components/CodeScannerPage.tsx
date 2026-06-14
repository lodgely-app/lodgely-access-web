import { useState, useRef } from 'react';
import { Camera, Keyboard, CheckCircle, XCircle, RotateCcw, User, Home, Clock, Shield, ArrowLeft } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import logoImg from '../../imports/lodgely_logo.png';

type ScanMode = 'choose' | 'camera' | 'manual';
type VerifyState = 'idle' | 'verifying' | 'success' | 'denied';

const VALID_CODES: Record<string, { tenant: string; unit: string; facility: string; validUntil: string; avatar: string }> = {
  'LDG-A402-2026': { tenant: 'Sarah Johnson', unit: 'Unit A-402', facility: 'Sunrise Towers', validUntil: 'Jun 30, 2026', avatar: 'SJ' },
  'LDG-B305-2026': { tenant: 'Michael Chen', unit: 'Unit B-305', facility: 'Sunrise Towers', validUntil: 'Jun 30, 2026', avatar: 'MC' },
  'LDG-C201-2026': { tenant: 'Emily Rodriguez', unit: 'Unit C-201', facility: 'Sunrise Towers', validUntil: 'May 31, 2026', avatar: 'ER' },
  'LDG-A108-2026': { tenant: 'James Wilson', unit: 'Unit A-108', facility: 'Sunrise Towers', validUntil: 'Jul 31, 2026', avatar: 'JW' },
};

export default function CodeScannerPage({ onBack }: { onBack: () => void }) {
  const [mode, setMode] = useState<ScanMode>('choose');
  const [manualCode, setManualCode] = useState('');
  const [verifyState, setVerifyState] = useState<VerifyState>('idle');
  const [tenantInfo, setTenantInfo] = useState<typeof VALID_CODES[string] | null>(null);
  const [cameraScanning, setCameraScanning] = useState(false);
  const cameraTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function verify(code: string) {
    setVerifyState('verifying');
    setTimeout(() => {
      const match = VALID_CODES[code.toUpperCase().trim()];
      if (match) {
        setTenantInfo(match);
        setVerifyState('success');
      } else {
        setTenantInfo(null);
        setVerifyState('denied');
      }
    }, 1000);
  }

  function startCameraScan() {
    setMode('camera');
    setCameraScanning(true);
    // Simulate a barcode being detected after 3 seconds
    cameraTimerRef.current = setTimeout(() => {
      setCameraScanning(false);
      verify('LDG-A402-2026');
    }, 3000);
  }

  function reset() {
    if (cameraTimerRef.current) clearTimeout(cameraTimerRef.current);
    setMode('choose');
    setManualCode('');
    setVerifyState('idle');
    setTenantInfo(null);
    setCameraScanning(false);
  }

  const isResult = verifyState === 'success' || verifyState === 'denied';

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Top bar */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-lg mx-auto px-4 py-4 flex items-center justify-between">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-colors text-sm">
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          <div className="flex items-center gap-2">
            <img src={logoImg} alt="Lodgely" className="w-7 h-7 rounded-md" />
            <span className="font-semibold text-slate-900">Lodgely</span>
          </div>
          <div className="w-16" />
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-10">
        <div className="w-full max-w-md space-y-6">

          {/* Title */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-teal-100 mb-4">
              <Shield className="w-7 h-7 text-teal-600" />
            </div>
            <h1 className="text-2xl font-bold text-slate-900">Access Verification</h1>
            <p className="text-slate-500 mt-1 text-sm">Scan or enter the tenant access code to verify entry</p>
          </div>

          {/* Result State */}
          {isResult && (
            <Card className={`border-2 ${verifyState === 'success' ? 'border-green-400 bg-green-50' : 'border-red-400 bg-red-50'}`}>
              <CardContent className="p-6">
                {verifyState === 'success' && tenantInfo ? (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0" />
                      <div>
                        <div className="font-bold text-green-700">Access Granted</div>
                        <div className="text-sm text-green-600">Code verified successfully</div>
                      </div>
                    </div>
                    <div className="border-t border-green-200 pt-4 space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                          {tenantInfo.avatar}
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">{tenantInfo.tenant}</div>
                          <div className="text-sm text-slate-500">{tenantInfo.facility}</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white rounded-lg p-3 border border-green-200">
                          <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                            <Home className="w-3.5 h-3.5" />
                            Unit
                          </div>
                          <div className="font-semibold text-slate-800 text-sm">{tenantInfo.unit}</div>
                        </div>
                        <div className="bg-white rounded-lg p-3 border border-green-200">
                          <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                            <Clock className="w-3.5 h-3.5" />
                            Valid Until
                          </div>
                          <div className="font-semibold text-slate-800 text-sm">{tenantInfo.validUntil}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <XCircle className="w-8 h-8 text-red-600 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-red-700">Access Denied</div>
                      <div className="text-sm text-red-600">This code is invalid or has expired</div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Verifying State */}
          {verifyState === 'verifying' && (
            <Card>
              <CardContent className="p-8 flex flex-col items-center gap-3">
                <div className="w-10 h-10 rounded-full border-4 border-teal-500 border-t-transparent animate-spin" />
                <p className="text-slate-600 text-sm">Verifying code...</p>
              </CardContent>
            </Card>
          )}

          {/* Mode: Choose */}
          {verifyState === 'idle' && mode === 'choose' && (
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={startCameraScan}
                className="flex flex-col items-center gap-3 p-6 bg-white border-2 border-slate-200 rounded-xl hover:border-teal-400 hover:bg-teal-50 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-slate-100 group-hover:bg-teal-100 flex items-center justify-center transition-colors">
                  <Camera className="w-6 h-6 text-slate-600 group-hover:text-teal-600" />
                </div>
                <div className="text-center">
                  <div className="font-semibold text-slate-800 text-sm">Scan Barcode</div>
                  <div className="text-xs text-slate-500 mt-0.5">Use camera to scan</div>
                </div>
              </button>

              <button
                onClick={() => setMode('manual')}
                className="flex flex-col items-center gap-3 p-6 bg-white border-2 border-slate-200 rounded-xl hover:border-teal-400 hover:bg-teal-50 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-slate-100 group-hover:bg-teal-100 flex items-center justify-center transition-colors">
                  <Keyboard className="w-6 h-6 text-slate-600 group-hover:text-teal-600" />
                </div>
                <div className="text-center">
                  <div className="font-semibold text-slate-800 text-sm">Enter Code</div>
                  <div className="text-xs text-slate-500 mt-0.5">Type alphanumeric code</div>
                </div>
              </button>
            </div>
          )}

          {/* Mode: Camera */}
          {verifyState === 'idle' && mode === 'camera' && (
            <Card>
              <CardContent className="p-0 overflow-hidden rounded-xl">
                {/* Simulated camera viewfinder */}
                <div className="relative bg-slate-900 aspect-square flex items-center justify-center">
                  {/* Scan lines animation */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div
                      className="absolute left-0 right-0 h-0.5 bg-teal-400 opacity-80"
                      style={{ animation: 'scan-line 2s linear infinite', top: '20%' }}
                    />
                  </div>

                  {/* Corner brackets */}
                  {['top-6 left-6', 'top-6 right-6', 'bottom-6 left-6', 'bottom-6 right-6'].map((pos, i) => (
                    <div key={i} className={`absolute ${pos} w-8 h-8`}>
                      <div className={`absolute w-full h-1 bg-teal-400 ${pos.includes('bottom') ? 'bottom-0' : 'top-0'}`} />
                      <div className={`absolute h-full w-1 bg-teal-400 ${pos.includes('right') ? 'right-0' : 'left-0'}`} />
                    </div>
                  ))}

                  {/* Barcode placeholder */}
                  <div className="text-center">
                    <div className="flex gap-0.5 mb-4 justify-center">
                      {Array.from({ length: 24 }).map((_, i) => (
                        <div
                          key={i}
                          className="bg-white opacity-70"
                          style={{ width: i % 3 === 0 ? 3 : 1.5, height: i % 5 === 0 ? 56 : 44 }}
                        />
                      ))}
                    </div>
                    <Badge className="bg-teal-500 text-white border-0 text-xs">
                      {cameraScanning ? 'Scanning...' : 'Detected'}
                    </Badge>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <p className="text-sm text-slate-500">
                    {cameraScanning ? 'Point camera at the barcode' : 'Code detected, processing...'}
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Mode: Manual */}
          {verifyState === 'idle' && mode === 'manual' && (
            <Card>
              <CardContent className="p-6 space-y-4">
                <div>
                  <label className="text-sm font-medium text-slate-700 block mb-1.5">Access Code</label>
                  <Input
                    placeholder="e.g. LDG-A402-2026"
                    value={manualCode}
                    onChange={(e) => setManualCode(e.target.value.toUpperCase())}
                    onKeyDown={(e) => e.key === 'Enter' && manualCode.trim() && verify(manualCode)}
                    className="font-mono tracking-widest text-center"
                    autoFocus
                  />
                  <p className="text-xs text-slate-400 mt-1.5">Enter the code exactly as shown in the tenant portal</p>
                </div>
                <Button
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white"
                  disabled={!manualCode.trim()}
                  onClick={() => verify(manualCode)}
                >
                  Verify Code
                </Button>
                <button
                  onClick={() => setMode('choose')}
                  className="w-full text-sm text-slate-500 hover:text-slate-700 transition-colors"
                >
                  ← Back to options
                </button>
              </CardContent>
            </Card>
          )}

          {/* Try Again / New Scan */}
          {isResult && (
            <Button variant="outline" className="w-full gap-2" onClick={reset}>
              <RotateCcw className="w-4 h-4" />
              Scan Another Code
            </Button>
          )}

          {/* Demo hint */}
          {mode === 'manual' && verifyState === 'idle' && (
            <div className="bg-slate-100 rounded-lg p-3">
              <p className="text-xs text-slate-500 text-center">
                <span className="font-medium text-slate-600">Demo codes: </span>
                LDG-A402-2026 · LDG-B305-2026 · LDG-C201-2026
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Scan line keyframe */}
      <style>{`
        @keyframes scan-line {
          0% { top: 15%; }
          50% { top: 80%; }
          100% { top: 15%; }
        }
      `}</style>
    </div>
  );
}
