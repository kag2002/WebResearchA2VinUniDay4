'use client';

import React from 'react';
import { TranscriptSummary } from '../../services/logsApi';
import {
  MessageSquare,
  Clock,
  Cpu,
  Tag,
  ArrowRight,
} from 'lucide-react';

interface TranscriptCardProps {
  transcript: TranscriptSummary;
  onSelect: (t: TranscriptSummary) => void;
  isSelected?: boolean;
}

export const TranscriptCard: React.FC<TranscriptCardProps> = ({
  transcript,
  onSelect,
  isSelected,
}) => {
  return (
    <div
      onClick={() => onSelect(transcript)}
      className={`group relative cursor-pointer rounded-2xl border p-4 transition-all duration-300 hover:scale-[1.01] ${
        isSelected
          ? 'border-violet-500/50 bg-violet-500/5 shadow-lg shadow-violet-500/10 ring-1 ring-violet-500/20'
          : 'bg-[#0e1221]/60 hover:bg-[#111730]/80 border-slate-700/30 shadow-lg shadow-black/10'
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="px-2 py-0.5 text-[10px] font-bold rounded-md bg-violet-600/20 text-violet-300 border border-violet-500/20 uppercase tracking-wider">
            {transcript.version || '—'}
          </span>
        </div>
        <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-slate-700/30 text-[10px] font-bold text-slate-300">
          <MessageSquare className="w-3 h-3 text-violet-400" />
          {transcript.turn_count} turns
        </div>
      </div>

      {/* Info */}
      <p className="text-[11px] text-slate-300 font-medium mb-2 truncate">
        {transcript.transcript_id}
      </p>

      <div className="grid grid-cols-3 gap-2">
        <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
          <Tag className="w-3 h-3 text-slate-500" />
          <span className="truncate">{transcript.provider || '—'}</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
          <Cpu className="w-3 h-3 text-slate-500" />
          <span className="truncate">
            {transcript.model?.split('/').pop() || '—'}
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
          <Clock className="w-3 h-3 text-slate-500" />
          <span className="truncate">
            {transcript.created_at
              ? new Date(transcript.created_at).toLocaleDateString('vi-VN')
              : '—'}
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-3 flex items-center justify-end text-[9px] text-slate-500">
        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 text-violet-400 transition-opacity duration-300" />
      </div>
    </div>
  );
};
