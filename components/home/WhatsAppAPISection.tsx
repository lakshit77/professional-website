"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Zap,
  Users,
  BarChart3,
  MessageCircle,
  Globe,
} from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";

const highlights = [
  { icon: Shield, label: "Enterprise-grade security" },
  { icon: Zap, label: "High-volume delivery" },
  { icon: Users, label: "Personalized at scale" },
  { icon: BarChart3, label: "Real-time analytics" },
  { icon: MessageCircle, label: "Rich media messaging" },
  { icon: Globe, label: "Seamless integrations" },
];

const chatMessages = [
  { from: "customer", text: "Hi, I placed an order yesterday. Can I get a status update?" },
  { from: "bot", text: "Hello! 👋 Let me check that for you. Could you share your order ID?" },
  { from: "customer", text: "It's #ORD-48291" },
  { from: "bot", text: "Your order #ORD-48291 was shipped today! 📦 Estimated delivery: March 15." },
  { from: "customer", text: "That's great, thanks!" },
  { from: "bot", text: "Happy to help! Rate your experience: ⭐⭐⭐⭐⭐" },
];

export default function WhatsAppAPISection() {
  return (
    <section className="relative py-24 md:py-32 section-glow">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              title="An end-to-end connection to customer satisfaction"
              highlightedWord="customer satisfaction"
              centered={false}
            />
            <p className="text-[#94a3b8] font-body leading-relaxed mb-8 -mt-8">
              ChatSyncs is powered by the official WhatsApp Business API —
              giving your business access to enterprise-grade messaging
              capabilities with full compliance and reliability.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0">
                    <item.icon size={16} className="text-brand-500" />
                  </div>
                  <span className="text-sm text-[#94a3b8] font-body">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Chat */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-brand-500/5 rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl border border-surface-border overflow-hidden bg-surface-floating p-6">
              {/* Chat header */}
              <div className="flex items-center gap-3 pb-4 mb-4 border-b border-surface-border/50">
                <div className="w-10 h-10 rounded-full bg-brand-500/20 flex items-center justify-center">
                  <MessageCircle size={18} className="text-brand-500" />
                </div>
                <div>
                  <div className="text-sm font-display font-semibold text-white">ChatSyncs Bot</div>
                  <div className="text-xs text-brand-500">Online</div>
                </div>
              </div>

              <div className="space-y-3">
                {chatMessages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.from === "bot" ? "justify-start" : "justify-end"}`}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm font-body leading-relaxed ${
                        msg.from === "bot"
                          ? "bg-surface-card border border-surface-border text-[#cccce0] rounded-bl-md"
                          : "bg-brand-500/15 border border-brand-500/25 text-brand-100 rounded-br-md"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-3 flex items-center gap-1.5 px-4 py-2.5 bg-surface-card border border-surface-border rounded-2xl rounded-bl-md w-fit">
                <div className="w-1.5 h-1.5 bg-brand-500/60 rounded-full animate-pulse" />
                <div className="w-1.5 h-1.5 bg-brand-500/60 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }} />
                <div className="w-1.5 h-1.5 bg-brand-500/60 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
