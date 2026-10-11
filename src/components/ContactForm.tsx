"use client";

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function PlaneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 1.5c.8 0 1.35.95 1.35 2.1v5.3l8.15 4.6v2.05l-8.15-2.5v5.1l2.3 1.75v1.6L12 20.5l-3.65 1v-1.6l2.3-1.75v-5.1l-8.15 2.5V13.5l8.15-4.6V3.6c0-1.15.55-2.1 1.35-2.1z"
      />
    </svg>
  );
}

function Postmark() {
  const year = new Date().getFullYear();
  return (
    <svg viewBox="0 0 220 120" className="postmark" aria-hidden="true">
      <defs>
        <path id="postmark-arc" d="M60 60 m-38 0 a38 38 0 1 1 76 0 a38 38 0 1 1 -76 0" />
      </defs>
      <circle cx="60" cy="60" r="50" />
      <circle cx="60" cy="60" r="27" />
      <text>
        <textPath href="#postmark-arc" startOffset="0">BOSTON · MASSACHUSETTS · </textPath>
      </text>
      <text x="60" y="65" textAnchor="middle" className="postmark-year">{year}</text>
      {[38, 52, 66, 80].map((y) => (
        <path key={y} d={`M118 ${y} q12 -8 24 0 t24 0 t24 0 t24 0`} />
      ))}
    </svg>
  );
}

function ContactForm() {
  const [state, handleSubmit] = useForm("mrbyjeka");

  if (state.succeeded) {
    return (
      <div className="postcard">
        <div className="postcard-inner postcard-success">
          <Postmark />
          <p className="kicker">Delivered</p>
          <p className="success-title">Thanks for reaching out!</p>
          <p className="success-note">I&apos;ll get back to you soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="postcard">
      <form onSubmit={handleSubmit}>
        <div className="postcard-inner">
          <div className="postcard-msg">
            <label htmlFor="message" className="field-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              className="lined"
              placeholder="Tell me about your project or just say hello!"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              className="field-error"
            />
          </div>

          <div className="postcard-addr">
            <div className="postcard-stamps">
              <Postmark />
              <div className="postage" aria-hidden="true">
                <div className="postage-face">
                  <PlaneIcon className="postage-plane" />
                  <span>Par avion</span>
                </div>
              </div>
            </div>

            <div className="field">
              <label htmlFor="name" className="field-label">
                From
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Your name"
              />
            </div>

            <div className="field">
              <label htmlFor="email" className="field-label">
                Reply to
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="your.email@example.com"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="field-error"
              />
            </div>

            <div className="addr-to">
              <span className="field-label">To</span>
              <span className="addr-name">Smyan Sengupta</span>
              <span className="addr-line">Boston, MA</span>
            </div>
          </div>
        </div>

        <button type="submit" disabled={state.submitting} className="send-btn">
          <span>{state.submitting ? 'Sending...' : 'Send Message'}</span>
          <PlaneIcon className="send-plane" />
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
