"use client";

import { useState } from "react";
import { Send } from "lucide-react";

type Fields = {
  name: string;
  email: string;
  company: string;
  message: string;
};

export default function ContactForm() {
  const [fields, setFields] = useState<Fields>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  const canSubmit = Boolean(serviceId && templateId && publicKey);

  const update =
    (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFields((s) => ({ ...s, [key]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) {
      setStatus("error");
      return;
    }
    try {
      setSubmitting(true);
      setStatus("idle");
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            from_name: fields.name,
            reply_to: fields.email,
            company: fields.company,
            message: fields.message,
          },
        }),
      });
      if (!res.ok) throw new Error("EmailJS request failed");
      setStatus("ok");
      setFields({ name: "", email: "", company: "", message: "" });
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="mt-8 space-y-5">
      {[
        { label: "Full Name", placeholder: "Enter your name", key: "name" as const, type: "text" },
        { label: "Email Address", placeholder: "Enter your email", key: "email" as const, type: "email" },
        { label: "Company", placeholder: "Enter your company", key: "company" as const, type: "text" },
      ].map((field) => (
        <label key={field.key} className="block space-y-2">
          <span className="text-sm font-medium text-zinc-200">{field.label}</span>
          <input
            type={field.type}
            placeholder={field.placeholder}
            value={fields[field.key]}
            onChange={update(field.key)}
            required={field.key !== "company"}
            className="h-14 w-full rounded-2xl border border-white/8 bg-[#060a16] px-4 text-sm text-white outline-none transition-colors duration-300 placeholder:text-zinc-500 focus:border-[#130FF7]/50"
          />
        </label>
      ))}
      <label className="block space-y-2">
        <span className="text-sm font-medium text-zinc-200">Message</span>
        <textarea
          placeholder="Tell us about your project or how we can help..."
          rows={5}
          required
          value={fields.message}
          onChange={update("message")}
          className="w-full rounded-2xl border border-white/8 bg-[#060a16] px-4 py-4 text-sm text-white outline-none transition-colors duration-300 placeholder:text-zinc-500 focus:border-[#130FF7]/50"
        />
      </label>
      <button
        type="submit"
        disabled={!canSubmit || submitting}
        className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-[#130FF7] px-6 py-4 text-sm font-medium text-white shadow-[0_0_30px_rgba(19,15,247,0.25)] disabled:opacity-50"
      >
        <Send className="h-4 w-4" strokeWidth={1.5} />
        {submitting ? "Sending..." : "Send Message"}
      </button>
      {!canSubmit && (
        <p className="text-xs text-zinc-400">
          Set NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, and NEXT_PUBLIC_EMAILJS_PUBLIC_KEY to enable sending.
        </p>
      )}
      {status === "ok" && <p className="text-xs text-emerald-400">Message sent. We’ll get back to you soon.</p>}
      {status === "error" && (
        <p className="text-xs text-rose-400">We couldn’t send your message. Please try again later.</p>
      )}
    </form>
  );
}
