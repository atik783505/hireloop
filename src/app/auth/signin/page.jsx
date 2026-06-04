"use client";

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const EnvelopeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    <circle cx="12" cy="16" r="1" fill="currentColor" />
  </svg>
);

const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOffIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
    <line x1="2" y1="2" x2="22" y2="22" />
  </svg>
);

const LoaderIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'spin 0.8s linear infinite' }}>
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const AlertIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

export default function SignInPage() {
    const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (!email || !password) {
      setError('Please fill in all required fields.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setIsLoading(true);
    try {
      const { authClient } = await import('@/lib/auth-client');
      const response = await authClient.signIn.email({
        email,
        password,
        rememberMe,
      });
      if (response.error) {
        setError(response.error.message || 'Invalid email or password.');
      } else {
        setSuccess(true);
        router.push('/'); 
      }
    } catch (err) {
      setError(err?.message || 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700&family=DM+Sans:wght@300;400;500&display=swap');
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulseOrb { 0%,100% { opacity: 0.15; transform: scale(1); } 50% { opacity: 0.22; transform: scale(1.06); } }

        .si-root * { box-sizing: border-box; margin: 0; padding: 0; }
        .si-root {
          font-family: 'DM Sans', sans-serif;
          min-height: 100vh;
          background: #07060f;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2.5rem 1rem;
          position: relative;
          overflow: hidden;
        }
        .si-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          animation: pulseOrb 6s ease-in-out infinite;
        }
        .si-orb-1 {
          width: 560px; height: 560px;
          background: radial-gradient(circle, #5c47e0 0%, transparent 65%);
          top: -15%; left: -5%;
          opacity: 0.13;
        }
        .si-orb-2 {
          width: 440px; height: 440px;
          background: radial-gradient(circle, #8b5cf6 0%, transparent 65%);
          bottom: -18%; right: 0%;
          opacity: 0.1;
          animation-delay: -3s;
        }
        .si-orb-3 {
          width: 200px; height: 200px;
          background: radial-gradient(circle, #6366f1 0%, transparent 70%);
          top: 40%; right: 15%;
          opacity: 0.08;
          animation-delay: -1.5s;
        }
        .si-card {
          width: 100%;
          max-width: 440px;
          background: rgba(255,255,255,0.035);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 24px;
          padding: 2.5rem 2.25rem;
          position: relative;
          z-index: 1;
          animation: fadeUp 0.5s ease both;
        }
        .si-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 24px;
          background: linear-gradient(135deg, rgba(92,71,224,0.08) 0%, transparent 60%);
          pointer-events: none;
        }
        .si-logo {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          margin-bottom: 2.25rem;
        }
        .si-logo-badge {
          width: 48px; height: 48px;
          background: linear-gradient(135deg, #5c47e0 0%, #8b5cf6 100%);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px rgba(92,71,224,0.35);
          margin-bottom: 2px;
        }
        .si-logo-badge svg { color: #fff; width: 22px; height: 22px; }
        .si-logo-name {
          font-family: 'Syne', sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.01em;
        }
        .si-logo-sub {
          font-size: 12px;
          color: rgba(255,255,255,0.3);
          letter-spacing: 0.01em;
        }
        .si-heading {
          text-align: center;
          margin-bottom: 1.75rem;
        }
        .si-heading h2 {
          font-family: 'Syne', sans-serif;
          font-size: 20px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 5px;
        }
        .si-heading p {
          font-size: 13px;
          color: rgba(255,255,255,0.32);
        }
        .si-alert {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          border-radius: 12px;
          padding: 11px 14px;
          font-size: 13px;
          margin-bottom: 18px;
          line-height: 1.5;
        }
        .si-alert-err {
          background: rgba(226,75,74,0.1);
          border: 1px solid rgba(226,75,74,0.2);
          color: #f4918b;
        }
        .si-alert-ok {
          background: rgba(29,158,117,0.1);
          border: 1px solid rgba(29,158,117,0.2);
          color: #5ecfab;
        }
        .si-alert svg { margin-top: 1px; flex-shrink: 0; }
        .si-field { display: flex; flex-direction: column; gap: 7px; margin-bottom: 16px; }
        .si-label {
          font-size: 12px;
          font-weight: 500;
          color: rgba(255,255,255,0.5);
          letter-spacing: 0.04em;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .si-req { color: #8b79f5; }
        .si-input-wrap {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 13px;
          height: 48px;
          padding: 0 15px;
          transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
        }
        .si-input-wrap:hover {
          border-color: rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.055);
        }
        .si-input-wrap:focus-within {
          border-color: rgba(139,92,246,0.6);
          background: rgba(92,71,224,0.07);
          box-shadow: 0 0 0 3px rgba(92,71,224,0.12);
        }
        .si-icon {
          color: rgba(255,255,255,0.25);
          flex-shrink: 0;
          transition: color 0.2s;
          display: flex;
          align-items: center;
        }
        .si-input-wrap:focus-within .si-icon { color: rgba(139,92,246,0.85); }
        .si-input-wrap input {
          background: transparent;
          border: none;
          outline: none;
          flex: 1;
          font-size: 14px;
          font-family: 'DM Sans', sans-serif;
          color: #fff;
          min-width: 0;
        }
        .si-input-wrap input::placeholder { color: rgba(255,255,255,0.18); }
        .si-eye {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          display: flex;
          align-items: center;
          color: rgba(255,255,255,0.25);
          transition: color 0.2s;
          flex-shrink: 0;
        }
        .si-eye:hover { color: rgba(255,255,255,0.6); }
        .si-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
          margin-top: -4px;
        }
        .si-remember {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          user-select: none;
        }
        .si-checkbox {
          width: 16px; height: 16px;
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 5px;
          background: rgba(255,255,255,0.04);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: border-color 0.2s, background 0.2s;
          flex-shrink: 0;
        }
        .si-checkbox.checked {
          background: #5c47e0;
          border-color: #5c47e0;
        }
        .si-checkbox svg { color: #fff; width: 10px; height: 10px; }
        .si-remember-label {
          font-size: 12.5px;
          color: rgba(255,255,255,0.4);
        }
        .si-forgot {
          font-size: 12.5px;
          color: #9d8ff7;
          text-decoration: none;
          transition: color 0.15s;
        }
        .si-forgot:hover { color: #bcb3fa; text-decoration: underline; }
        .si-btn {
          width: 100%;
          height: 48px;
          background: linear-gradient(135deg, #5c47e0 0%, #8b5cf6 100%);
          border: none;
          border-radius: 13px;
          color: #fff;
          font-family: 'Syne', sans-serif;
          font-size: 14.5px;
          font-weight: 600;
          cursor: pointer;
          letter-spacing: 0.02em;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: opacity 0.2s, transform 0.15s, box-shadow 0.2s;
          box-shadow: 0 6px 22px rgba(92,71,224,0.3);
        }
        .si-btn:hover:not(:disabled) {
          opacity: 0.9;
          transform: translateY(-1px);
          box-shadow: 0 10px 28px rgba(92,71,224,0.4);
        }
        .si-btn:active:not(:disabled) { transform: scale(0.985); }
        .si-btn:disabled { opacity: 0.45; cursor: not-allowed; box-shadow: none; }
        .si-divider {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 22px 0 18px;
        }
        .si-div-line { flex: 1; height: 1px; background: rgba(255,255,255,0.06); }
        .si-div-text {
          font-size: 11px;
          color: rgba(255,255,255,0.2);
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-weight: 500;
        }
        .si-footer {
          text-align: center;
          font-size: 13px;
          color: rgba(255,255,255,0.32);
        }
        .si-footer a {
          color: #9d8ff7;
          font-weight: 500;
          text-decoration: none;
          transition: color 0.15s;
        }
        .si-footer a:hover { color: #bcb3fa; text-decoration: underline; }
      `}</style>

      <div className="si-root">
        <div className="si-orb si-orb-1" />
        <div className="si-orb si-orb-2" />
        <div className="si-orb si-orb-3" />

        <div className="si-card">
          {/* Logo */}
          <div className="si-logo">
            <div className="si-logo-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 1l4 4-4 4" /><path d="M3 11V9a4 4 0 0 1 4-4h14" />
                <path d="M7 23l-4-4 4-4" /><path d="M21 13v2a4 4 0 0 1-4 4H3" />
              </svg>
            </div>
            <span className="si-logo-name">Hire Loop</span>
            <span className="si-logo-sub">Welcome back</span>
          </div>

          {/* Heading */}
          <div className="si-heading">
            <h2>Sign in to your account</h2>
            <p>Enter your credentials to continue</p>
          </div>

          {/* Alerts */}
          {error && (
            <div className="si-alert si-alert-err">
              <AlertIcon />
              <span>{error}</span>
            </div>
          )}
          {success && (
            <div className="si-alert si-alert-ok">
              <CheckIcon />
              <span>Signed in successfully! Redirecting...</span>
            </div>
          )}

          <form onSubmit={handleSignIn}>
            {/* Email */}
            <div className="si-field">
              <label className="si-label">
                Email address <span className="si-req">*</span>
              </label>
              <div className="si-input-wrap">
                <span className="si-icon"><EnvelopeIcon /></span>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
              </div>
            </div>

            {/* Password */}
            <div className="si-field">
              <label className="si-label">
                Password <span className="si-req">*</span>
              </label>
              <div className="si-input-wrap">
                <span className="si-icon"><LockIcon /></span>
                <input
                  type={isVisible ? 'text' : 'password'}
                  placeholder="Your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="si-eye"
                  onClick={() => setIsVisible(!isVisible)}
                  aria-label="Toggle password visibility"
                >
                  {isVisible ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
            </div>

            {/* Remember me + Forgot password */}
            <div className="si-row">
              <div
                className="si-remember"
                onClick={() => setRememberMe(!rememberMe)}
                role="checkbox"
                aria-checked={rememberMe}
                tabIndex={0}
                onKeyDown={(e) => e.key === ' ' && setRememberMe(!rememberMe)}
              >
                <div className={`si-checkbox ${rememberMe ? 'checked' : ''}`}>
                  {rememberMe && <CheckIcon />}
                </div>
                <span className="si-remember-label">Remember me</span>
              </div>
              <a href="#" className="si-forgot">Forgot password?</a>
            </div>

            {/* Submit */}
            <button type="submit" className="si-btn" disabled={isLoading}>
              {isLoading ? (
                <><LoaderIcon /> Signing in...</>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          <div className="si-divider">
            <div className="si-div-line" />
            <span className="si-div-text">or</span>
            <div className="si-div-line" />
          </div>

          <div className="si-footer">
            Don&apos;t have an account?{' '}
            <a href="/auth/signup">Create one</a>
          </div>
        </div>
      </div>
    </>
  );
}