"use client";

import React, { useState } from 'react';
import {
  TextField,
  Label,
  Input,
  FieldError,
  Description,
  RadioGroup,
  Radio,
  Button,
} from "@heroui/react";

// ─── Icons ───────────────────────────────────────────────────────────────────
const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
  </svg>
);
const EnvelopeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" />
  </svg>
);
const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /><circle cx="12" cy="16" r="1" fill="currentColor" />
  </svg>
);
const ImageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="m3 15 5-5 4 4" /><path d="m14 13 3-3 4 4" />
  </svg>
);
const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z" /><circle cx="12" cy="12" r="3" />
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
    <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);
// ─────────────────────────────────────────────────────────────────────────────

function getPasswordStrength(pw) {
  if (!pw) return { score: 0, label: '', color: '' };
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  if (score <= 1) return { score: 1, label: 'Weak', color: '#e24b4a' };
  if (score === 2) return { score: 2, label: 'Fair', color: '#ef9f27' };
  return { score: score >= 3 ? 4 : 3, label: score === 3 ? 'Good' : 'Strong', color: '#1d9e75' };
}

const ACCOUNT_TYPES = [
  { value: 'jobseeker', label: 'Job Seeker', desc: 'Find jobs & apply' },
  { value: 'recruiter', label: 'Recruiter', desc: 'Post & manage roles' },
];

export default function SignUpPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [accountType, setAccountType] = useState('jobseeker');
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const pwStrength = getPasswordStrength(password);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    if (!name || !email || !password) { setError('Please fill in all required fields.'); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError('Please enter a valid email address.'); return; }
    if (password.length < 8) { setError('Password must be at least 8 characters.'); return; }
    setIsLoading(true);
    try {
      const { authClient } = await import('@/lib/auth-client');
      const response = await authClient.signUp.email({
        email, password, name,
        image: imageUrl || undefined,
        callbackURL: '/dashboard',
        accountType,
      });
      if (response.error) {
        setError(response.error.message || 'An error occurred during registration.');
      } else {
        setSuccess(true);
        setName(''); setEmail(''); setPassword(''); setImageUrl(''); setAccountType('jobseeker');
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
        @keyframes spin     { to { transform: rotate(360deg); } }
        @keyframes fadeUp   { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
        @keyframes pulseOrb { 0%,100%{opacity:.15;transform:scale(1);} 50%{opacity:.22;transform:scale(1.06);} }

        .su-root * { box-sizing:border-box; margin:0; padding:0; }
        .su-root {
          font-family:'DM Sans',sans-serif;
          min-height:100vh; background:#07060f;
          display:flex; align-items:center; justify-content:center;
          padding:2.5rem 1rem; position:relative; overflow:hidden;
        }
        .su-orb { position:absolute; border-radius:50%; pointer-events:none; animation:pulseOrb 6s ease-in-out infinite; }
        .su-orb-1 { width:560px;height:560px;background:radial-gradient(circle,#5c47e0 0%,transparent 65%);top:-15%;left:-5%;opacity:.13; }
        .su-orb-2 { width:440px;height:440px;background:radial-gradient(circle,#8b5cf6 0%,transparent 65%);bottom:-18%;right:0%;opacity:.1;animation-delay:-3s; }
        .su-orb-3 { width:200px;height:200px;background:radial-gradient(circle,#6366f1 0%,transparent 70%);top:40%;right:15%;opacity:.08;animation-delay:-1.5s; }

        .su-card {
          width:100%; max-width:440px;
          background:rgba(255,255,255,.035);
          border:1px solid rgba(255,255,255,.08);
          border-radius:24px; padding:2.5rem 2.25rem;
          position:relative; z-index:1; animation:fadeUp .5s ease both;
        }
        .su-card::before {
          content:''; position:absolute; inset:0; border-radius:24px;
          background:linear-gradient(135deg,rgba(92,71,224,.08) 0%,transparent 60%);
          pointer-events:none;
        }
        .su-logo { display:flex; flex-direction:column; align-items:center; gap:8px; margin-bottom:2.25rem; }
        .su-logo-badge {
          width:48px; height:48px;
          background:linear-gradient(135deg,#5c47e0 0%,#8b5cf6 100%);
          border-radius:14px; display:flex; align-items:center; justify-content:center;
          box-shadow:0 8px 24px rgba(92,71,224,.35); margin-bottom:2px;
        }
        .su-logo-badge svg { color:#fff; width:22px; height:22px; }
        .su-logo-name { font-family:'Syne',sans-serif; font-size:22px; font-weight:700; color:#fff; letter-spacing:.01em; }
        .su-logo-sub  { font-size:12px; color:rgba(255,255,255,.3); }
        .su-heading   { text-align:center; margin-bottom:1.75rem; }
        .su-heading h2{ font-family:'Syne',sans-serif; font-size:20px; font-weight:600; color:#fff; margin-bottom:5px; }
        .su-heading p { font-size:13px; color:rgba(255,255,255,.32); }

        .su-alert { display:flex; align-items:flex-start; gap:9px; border-radius:12px; padding:11px 14px; font-size:13px; margin-bottom:18px; line-height:1.5; }
        .su-alert-err { background:rgba(226,75,74,.1); border:1px solid rgba(226,75,74,.2); color:#f4918b; }
        .su-alert-ok  { background:rgba(29,158,117,.1); border:1px solid rgba(29,158,117,.2); color:#5ecfab; }
        .su-alert svg { margin-top:1px; flex-shrink:0; }

        /* ── HeroUI TextField overrides — same dark glass look ── */
        .su-field { display:flex; flex-direction:column; gap:7px; margin-bottom:16px; }

        /* Label: reuse .su-label style via className */
        .su-label {
          font-size:12px !important; font-weight:500 !important;
          color:rgba(255,255,255,.5) !important;
          letter-spacing:.04em !important;
          display:flex !important; align-items:center !important; gap:4px !important;
        }
        .su-req { color:#8b79f5; }

        /* The glass input wrapper */
        .su-input-wrap {
          display:flex; align-items:center; gap:10px;
          background:rgba(255,255,255,.04);
          border:1px solid rgba(255,255,255,.08);
          border-radius:13px; height:48px; padding:0 15px;
          transition:border-color .2s, background .2s, box-shadow .2s;
        }
        .su-input-wrap:hover { border-color:rgba(255,255,255,.14); background:rgba(255,255,255,.055); }
        .su-input-wrap:focus-within {
          border-color:rgba(139,92,246,.6);
          background:rgba(92,71,224,.07);
          box-shadow:0 0 0 3px rgba(92,71,224,.12);
        }
        .su-input-wrap.invalid { border-color:rgba(226,75,74,.5); background:rgba(226,75,74,.05); }

        .su-icon { color:rgba(255,255,255,.25); flex-shrink:0; transition:color .2s; display:flex; align-items:center; }
        .su-input-wrap:focus-within .su-icon { color:rgba(139,92,246,.85); }

        /* HeroUI <Input> reset — let the wrapper do all styling */
        .su-native-input {
          all:unset !important;
          flex:1 !important; font-size:14px !important;
          font-family:'DM Sans',sans-serif !important;
          color:#fff !important; min-width:0 !important;
        }
        .su-native-input::placeholder { color:rgba(255,255,255,.18) !important; }

        .su-eye { background:none; border:none; cursor:pointer; padding:0; display:flex; align-items:center; color:rgba(255,255,255,.25); transition:color .2s; flex-shrink:0; }
        .su-eye:hover { color:rgba(255,255,255,.6); }

        .su-field-error { font-size:11.5px; color:#f4918b; padding-left:2px; }
        .su-hint        { font-size:11.5px; color:rgba(255,255,255,.22); }

        .su-pw-bars { display:flex; gap:5px; }
        .su-pw-bar  { height:3px; flex:1; border-radius:99px; background:rgba(255,255,255,.08); transition:background .3s; }

        /* ── HeroUI RadioGroup overrides ── */
        /* hide default RadioGroup wrapper styles */
        .su-radio-group-root { all:unset; display:flex; flex-direction:column; gap:7px; margin-bottom:16px; width:100%; }
        .su-radio-options    { display:flex; gap:8px; width:100%; }

        /* Each Radio card */
        .su-radio-card {
          flex:1; display:flex; align-items:center; gap:10px;
          background:rgba(255,255,255,.04);
          border:1px solid rgba(255,255,255,.08);
          border-radius:13px; padding:11px 13px;
          cursor:pointer;
          transition:border-color .2s, background .2s, box-shadow .2s;
          user-select:none;
        }
        .su-radio-card:hover { border-color:rgba(255,255,255,.14); background:rgba(255,255,255,.06); }
        /* selected state via [data-selected] that HeroUI Radio sets */
        .su-radio-card[data-selected] {
          border-color:rgba(139,92,246,.6);
          background:rgba(92,71,224,.1);
          box-shadow:0 0 0 3px rgba(92,71,224,.1);
        }

        /* Custom radio dot via Radio.Control + Radio.Indicator */
        .su-radio-control {
          width:16px; height:16px; border-radius:50%; flex-shrink:0;
          border:1.5px solid rgba(255,255,255,.25);
          display:flex; align-items:center; justify-content:center;
          transition:border-color .2s, background .2s;
        }
        .su-radio-card[data-selected] .su-radio-control {
          border-color:#8b5cf6; background:#8b5cf6;
        }
        .su-radio-indicator {
          width:6px; height:6px; border-radius:50%;
          background:#fff; opacity:0; transition:opacity .15s;
          display:block;
        }
        .su-radio-card[data-selected] .su-radio-indicator { opacity:1; }

        /* Text inside radio */
        .su-radio-content { display:flex; flex-direction:column; gap:1px; }
        .su-radio-label-text { font-size:12.5px; font-weight:500; color:rgba(255,255,255,.75); line-height:1.3; }
        .su-radio-desc-text  { font-size:11px; color:rgba(255,255,255,.3); line-height:1.3; }
        .su-radio-card[data-selected] .su-radio-label-text { color:#fff; }
        .su-radio-card[data-selected] .su-radio-desc-text  { color:rgba(255,255,255,.45); }

        /* ── Submit button ── */
        .su-btn {
          width:100%; height:48px; margin-top:8px;
          background:linear-gradient(135deg,#5c47e0 0%,#8b5cf6 100%) !important;
          border:none !important; border-radius:13px !important; color:#fff !important;
          font-family:'Syne',sans-serif !important; font-size:14.5px !important; font-weight:600 !important;
          cursor:pointer; letter-spacing:.02em;
          display:flex !important; align-items:center !important; justify-content:center !important; gap:8px !important;
          transition:opacity .2s, transform .15s, box-shadow .2s;
          box-shadow:0 6px 22px rgba(92,71,224,.3) !important;
        }
        .su-btn:hover:not([disabled]) { opacity:.9; transform:translateY(-1px); box-shadow:0 10px 28px rgba(92,71,224,.4) !important; }
        .su-btn:active:not([disabled]){ transform:scale(.985); }
        .su-btn[disabled]             { opacity:.45; cursor:not-allowed; box-shadow:none !important; }

        .su-divider  { display:flex; align-items:center; gap:12px; margin:22px 0 18px; }
        .su-div-line { flex:1; height:1px; background:rgba(255,255,255,.06); }
        .su-div-text { font-size:11px; color:rgba(255,255,255,.2); text-transform:uppercase; letter-spacing:.12em; font-weight:500; }
        .su-footer   { text-align:center; font-size:13px; color:rgba(255,255,255,.32); }
        .su-footer a { color:#9d8ff7; font-weight:500; text-decoration:none; transition:color .15s; }
        .su-footer a:hover { color:#bcb3fa; text-decoration:underline; }
      `}</style>

      <div className="su-root">
        <div className="su-orb su-orb-1" />
        <div className="su-orb su-orb-2" />
        <div className="su-orb su-orb-3" />

        <div className="su-card">

          {/* Logo */}
          <div className="su-logo">
            <div className="su-logo-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 1l4 4-4 4" /><path d="M3 11V9a4 4 0 0 1 4-4h14" />
                <path d="M7 23l-4-4 4-4" /><path d="M21 13v2a4 4 0 0 1-4 4H3" />
              </svg>
            </div>
            <span className="su-logo-name">Hire Loop</span>
            <span className="su-logo-sub">Trusted by 15,000+ job seekers</span>
          </div>

          {/* Heading */}
          <div className="su-heading">
            <h2>Create your account</h2>
            <p>Start your free developer account today</p>
          </div>

          {/* Alerts */}
          {error && (
            <div className="su-alert su-alert-err"><AlertIcon /><span>{error}</span></div>
          )}
          {success && (
            <div className="su-alert su-alert-ok"><CheckIcon /><span>Account created successfully! You can now sign in.</span></div>
          )}

          <form onSubmit={handleSignUp}>

            {/* ── Full Name ── HeroUI TextField */}
            <TextField
              value={name}
              onChange={setName}
              isRequired
              autoComplete="name"
              className="su-field"
            >
              <Label className="su-label">Full name <span className="su-req">*</span></Label>
              <div className="su-input-wrap">
                <span className="su-icon"><UserIcon /></span>
                <Input className="su-native-input" placeholder="Your full name" />
              </div>
            </TextField>

            {/* ── Email ── HeroUI TextField */}
            <TextField
              type="email"
              value={email}
              onChange={setEmail}
              isRequired
              autoComplete="email"
              className="su-field"
            >
              <Label className="su-label">Email address <span className="su-req">*</span></Label>
              <div className="su-input-wrap">
                <span className="su-icon"><EnvelopeIcon /></span>
                <Input className="su-native-input" placeholder="you@example.com" />
              </div>
            </TextField>

            {/* ── Password ── HeroUI TextField */}
            <TextField
              type={isVisible ? 'text' : 'password'}
              value={password}
              onChange={setPassword}
              isRequired
              autoComplete="new-password"
              className="su-field"
            >
              <Label className="su-label">Password <span className="su-req">*</span></Label>
              <div className="su-input-wrap">
                <span className="su-icon"><LockIcon /></span>
                <Input className="su-native-input" placeholder="Create a password" />
                <button type="button" className="su-eye" onClick={() => setIsVisible(!isVisible)} aria-label="Toggle password visibility">
                  {isVisible ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
            </TextField>

            {/* Password strength bars */}
            {password && (
              <div className="su-field" style={{ marginTop: '-10px' }}>
                <div className="su-pw-bars">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="su-pw-bar" style={{ background: i <= pwStrength.score ? pwStrength.color : undefined }} />
                  ))}
                </div>
                <span className="su-hint" style={{ color: pwStrength.color }}>{pwStrength.label} password</span>
              </div>
            )}

            {/* ── Account Type ── HeroUI RadioGroup (v3 composition API) */}
            <RadioGroup
              name="accountType"
              value={accountType}
              onChange={setAccountType}
              className="su-radio-group-root"
            >
              <Label className="su-label">Account type <span className="su-req">*</span></Label>
              <div className="su-radio-options">
                {ACCOUNT_TYPES.map((opt) => (
                  <Radio key={opt.value} value={opt.value} className="su-radio-card">
                    <Radio.Control className="su-radio-control">
                      <Radio.Indicator className="su-radio-indicator" />
                    </Radio.Control>
                    <Radio.Content className="su-radio-content">
                      <Label className="su-radio-label-text">{opt.label}</Label>
                      <Description className="su-radio-desc-text">{opt.desc}</Description>
                    </Radio.Content>
                  </Radio>
                ))}
              </div>
            </RadioGroup>

            {/* ── Profile Image URL ── HeroUI TextField */}
            <TextField
              type="url"
              value={imageUrl}
              onChange={setImageUrl}
              className="su-field"
            >
              <Label className="su-label">
                Profile image URL{' '}
                <span style={{ color: 'rgba(255,255,255,0.22)', fontWeight: 400 }}>(optional)</span>
              </Label>
              <div className="su-input-wrap">
                <span className="su-icon"><ImageIcon /></span>
                <Input className="su-native-input" placeholder="https://example.com/avatar.jpg" />
              </div>
              <Description className="su-hint">Leave blank to use initials as avatar</Description>
            </TextField>

            {/* ── Submit ── HeroUI Button */}
            <Button
              type="submit"
              isDisabled={isLoading}
              className="su-btn"
            >
              {isLoading ? <><LoaderIcon /> Creating account...</> : 'Create Account'}
            </Button>

          </form>

          <div className="su-divider">
            <div className="su-div-line" /><span className="su-div-text">or</span><div className="su-div-line" />
          </div>

          <div className="su-footer">
            Already have an account?{' '}<a href="/signin">Sign in</a>
          </div>

        </div>
      </div>
    </>
  );
}