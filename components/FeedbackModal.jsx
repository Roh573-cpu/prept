"use client";

import { RATING_CONFIG } from "@/lib/data";
import { GrayTitle } from "./reusables";
import { StarsBackgroundDemo } from "./demo-components-backgrounds-stars";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import {
  AlertCircle,
  Brain,
  CheckCircle2,
  MessageSquare,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { Badge } from "./ui/badge";

export function FeedbackModal({
  open,
  onOpenChange,
  feedback,
  intervieweeName,
}) {
  if (!feedback) return null;

  const rating = RATING_CONFIG[feedback.overallRating];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-black border border-amber-200/20 text-stone-100 sm:max-w-3xl max-h-[85vh] overflow-y-auto">
        <StarsBackgroundDemo />

        <DialogHeader className="relative">
          <DialogTitle className="font-serif text-2xl tracking-tight">
            <GrayTitle>AI Feedback Report</GrayTitle>
            <DialogDescription className="sr-only">
              Detailed performance evaluation and feedback for the candidate
              session.
            </DialogDescription>
          </DialogTitle>

          {intervieweeName && (
            <p className="text-xs text-stone-500 font-light mt-1">
              Performance analysis for {intervieweeName}
            </p>
          )}
        </DialogHeader>

        <div className="relative flex flex-col gap-5 mt-2">
          {/* Rating */}
          <div
            className={`rounded-2xl border ${rating.className} bg-linear-to-br ${rating.bg} to-transparent p-6 flex items-center justify-between`}
          >
            <div>
              <p className="text-[10px] uppercase tracking-widest opacity-60">
                Overall rating
              </p>
              <p className="font-serif text-3xl">{rating.label}</p>
            </div>

            <span className="text-4xl">{rating.emoji}</span>
          </div>

          {/* Summary */}
          <div className="bg-[#141417] border border-white/8 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles size={13} className="text-amber-400" />
              <p className="text-[10px] uppercase tracking-widest text-stone-500">
                Summary
              </p>
            </div>
            <p className="text-sm text-stone-300">{feedback.summary}</p>
          </div>

          {/* Recommendation */}
          <div className="bg-[#141417] border border-white/8 rounded-xl p-5">
            <p className="text-[10px] uppercase tracking-widest text-stone-500 mb-2">
              Recommendation
            </p>
            <p className="text-sm text-stone-300">{feedback.recommendation}</p>
          </div>

          {/* Sections */}
          <div className="grid gap-3">
            {[
              {
                icon: <Brain size={14} className="text-amber-400" />,
                label: "Technical",
                value: feedback.technical,
              },
              {
                icon: <MessageSquare size={14} className="text-amber-400" />,
                label: "Communication",
                value: feedback.communication,
              },
              {
                icon: <TrendingUp size={14} className="text-amber-400" />,
                label: "Problem Solving",
                value: feedback.problemSolving,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-[#141417] border border-white/8 rounded-xl p-5"
              >
                <div className="flex items-center gap-2 mb-2">
                  {item.icon}
                  <p className="text-[10px] uppercase tracking-widest text-stone-500">
                    {item.label}
                  </p>
                </div>
                <p className="text-sm text-stone-300">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Strengths & Improvements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#141417] border border-white/8 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 size={13} className="text-green-400" />
                <p className="text-[10px] uppercase tracking-widest text-stone-500 font-semibold">
                  Strengths
                </p>
              </div>

              <div className="flex flex-col gap-3">
                {feedback.strengths?.map((s, i) => {
                  const text =
                    typeof s === "object"
                      ? s.point || s.text || JSON.stringify(s)
                      : s;
                  return (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 text-xs text-green-400 border border-green-500/20 bg-green-500/5 rounded-xl px-3.5 py-2.5 leading-relaxed wrap-break-word"
                    >
                      <span className="shrink-0 select-none mt-0.5">✓</span>
                      <span className="wrap-break-word">{text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-[#141417] border border-white/8 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle size={13} className="text-amber-400" />
                <p className="text-[10px] uppercase tracking-widest text-stone-500 font-semibold">
                  To improve
                </p>
              </div>

              <div className="flex flex-col gap-3">
                {feedback.improvements?.map((imp, i) => {
                  const text =
                    typeof imp === "object"
                      ? imp.point || imp.text || JSON.stringify(imp)
                      : imp;
                  return (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 text-xs text-red-400 border border-red-500/20 bg-red-500/5 rounded-xl px-3.5 py-2.5 leading-relaxed wrap-break-word"
                    >
                      <span className="shrink-0 select-none mt-0.5">✓</span>
                      <span className="wrap-break-word">{text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
