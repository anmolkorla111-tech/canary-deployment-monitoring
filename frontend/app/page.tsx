"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [stats, setStats] = useState({ v1: { load: 100 }, v2: { load: 0 } });
  const [isMounted, setIsMounted] = useState(false);
  const [manualWeight, setManualWeight] = useState(10);
  const [logs, setLogs] = useState<any[]>([]);

  useEffect(() => {
    setIsMounted(true);
    const interval = setInterval(() => {
      const v2Load = manualWeight + (Math.random() * 3 - 1.5);
      setStats({
        v1: { load: Math.max(0, 100 - v2Load).toFixed(1) },
        v2: { load: Math.max(0, v2Load).toFixed(1) }
      });
      const newLog = {
        id: Math.random().toString(36).slice(2, 7).toUpperCase(),
        time: new Date().toLocaleTimeString(),
        latency: (Math.random() * 30 + 10).toFixed(0) + "ms",
        target: Math.random() > 0.5 ? "CLUSTER_A" : "CLUSTER_B"
      };
      setLogs(prev => [newLog, ...prev].slice(0, 10));
    }, 2000);
    return () => clearInterval(interval);
  }, [manualWeight]);

  if (!isMounted) return <div className="bg-[#0a0a0b] min-h-screen" />;

  return (
    <main className="min-h-screen bg-[#0a0a0b] text-[#f0f0f0] font-sans selection:bg-blue-500/30">
      {/* PROFESSIONAL TOP NAV */}
      <nav className="h-14 border-b border-white/[0.05] bg-[#0a0a0b]/80 backdrop-blur-xl flex items-center justify-between px-8 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <div className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
          <h1 className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/90">Canary Control Center</h1>
          <span className="px-2 py-0.5 bg-white/[0.03] border border-white/[0.05] rounded text-[9px] text-gray-500 uppercase">v7.0.2-Stable</span>
        </div>
        <div className="flex gap-6 text-[10px] font-medium text-gray-500">
          <div className="flex items-center gap-2">STATUS: <span className="text-green-500">HEALTHY</span></div>
          <div className="flex items-center gap-2">UPTIME: <span className="text-white/80 font-mono">14:22:04</span></div>
        </div>
      </nav>

      <div className="max-w-[1600px] mx-auto p-8 grid grid-cols-12 gap-6">
        
        {/* LEFT: CLUSTER ORCHESTRATION (The Visual Meat) */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          
          {/* TRAFFIC REDIRECTOR TILE */}
          <section className="bg-white/[0.02] border border-white/[0.05] p-8 rounded-xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-blue-500/40"></div>
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-xs font-bold text-white uppercase tracking-wider">Traffic Orchestration</h3>
                <p className="text-[10px] text-gray-500 mt-1">Adjust real-time load balancing between clusters</p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-mono font-bold text-blue-500">{manualWeight}%</span>
                <p className="text-[9px] text-gray-600 uppercase">Canary Target</p>
              </div>
            </div>
            <input 
              type="range" min="0" max="100" value={manualWeight} 
              onChange={(e) => setManualWeight(parseInt(e.target.value))}
              className="w-full h-1 bg-white/[0.05] rounded-lg appearance-none cursor-pointer accent-blue-500 hover:accent-blue-400 transition-all"
            />
          </section>

          {/* CLUSTER NODES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Cluster A */}
            <div className="bg-[#111112] border border-white/[0.05] p-6 rounded-xl relative">
              <div className="flex justify-between items-start mb-10">
                <div className="space-y-1">
                  <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Stable Release</span>
                  <h4 className="text-xl font-bold text-white tracking-tight italic">Production-Cluster-01</h4>
                </div>
                <div className="bg-blue-500/10 text-blue-400 p-2 rounded-lg text-xs font-mono font-bold">
                  {stats.v1.load}%
                </div>
              </div>
              <div className="h-2 w-full bg-white/[0.03] rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-600 to-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-1000 ease-out" style={{ width: `${stats.v1.load}%` }}></div>
              </div>
              <div className="mt-4 flex justify-between text-[9px] text-gray-600 font-medium">
                <span>HEALTH: 100%</span>
                <span>UPLINK: ACTIVE</span>
              </div>
            </div>

            {/* Cluster B */}
            <div className="bg-[#111112] border border-white/[0.05] p-6 rounded-xl relative">
              <div className="flex justify-between items-start mb-10">
                <div className="space-y-1">
                  <span className="text-[9px] font-bold text-purple-500 uppercase tracking-widest">Canary Beta</span>
                  <h4 className="text-xl font-bold text-white tracking-tight italic">Canary-Cluster-02</h4>
                </div>
                <div className="bg-purple-500/10 text-purple-400 p-2 rounded-lg text-xs font-mono font-bold">
                  {stats.v2.load}%
                </div>
              </div>
              <div className="h-2 w-full bg-white/[0.03] rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-purple-600 to-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-1000 ease-out" style={{ width: `${stats.v2.load}%` }}></div>
              </div>
              <div className="mt-4 flex justify-between text-[9px] text-gray-600 font-medium">
                <span>HEALTH: EXPERIMENTAL</span>
                <span>UPLINK: ACTIVE</span>
              </div>
            </div>
          </div>

          {/* TELEMETRY GRIDS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['CPU Usage', 'RAM Offset', 'I/O Wait', 'Network'].map((m) => (
              <div key={m} className="bg-white/[0.02] border border-white/[0.05] p-4 rounded-xl">
                <p className="text-[10px] text-gray-500 mb-1">{m}</p>
                <div className="flex items-end gap-2">
                  <span className="text-lg font-mono font-bold text-gray-200">{(Math.random() * 20 + 10).toFixed(1)}%</span>
                  <span className="text-[8px] text-green-500 mb-1">↑ 1.2%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: REAL-TIME EVENT STREAM */}
        <div className="col-span-12 lg:col-span-4">
          <div className="bg-[#111112] border border-white/[0.05] rounded-xl flex flex-col h-full overflow-hidden shadow-2xl">
            <div className="p-4 border-b border-white/[0.05] bg-white/[0.01] flex justify-between items-center">
              <span className="text-[10px] font-bold text-white uppercase tracking-widest">Live Event Stream</span>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-[9px] text-gray-600">LISTENING</span>
              </div>
            </div>
            <div className="flex-1 overflow-hidden p-2 space-y-2">
              {logs.map(log => (
                <div key={log.id} className="p-3 bg-white/[0.01] border border-white/[0.03] rounded-lg hover:bg-white/[0.03] transition-all group">
                  <div className="flex justify-between text-[9px] mb-2">
                    <span className="text-blue-400 font-mono">{log.time}</span>
                    <span className="text-gray-700 font-mono group-hover:text-gray-500 italic">#{log.id}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-[10px] text-gray-400 uppercase tracking-tight">Request to {log.target}</p>
                    <span className="text-[9px] font-bold text-green-500/80 px-1.5 py-0.5 bg-green-500/5 rounded">200 OK</span>
                  </div>
                  <p className="text-[9px] text-gray-600 mt-1 font-mono">RTT: {log.latency}</p>
                </div>
              ))}
            </div>
            <div className="p-4 bg-white/[0.01] border-t border-white/[0.05] text-[9px] text-gray-700 font-medium italic text-center">
              Backend synchronized via WSL2 / Docker Engine
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}