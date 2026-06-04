"use client";

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  type ChangeEvent,
} from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface AddonItem {
  id: string;
  name: string;
  desc: string;
  price: number;
  icon: string;
}

interface BasePlan {
  label: string;
  price: number;
}

interface FormData {
  fname: string;
  lname: string;
  email: string;
  phone: string;
  biz: string;
  what: string;
  audience: string;
  tone: string;
  inspo: string;
  goal: string;
  platforms: string[];
  branding: string;
  domain: string;
  notes: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const BASE_PLANS: BasePlan[] = [
  { label: "Establish", price: 1200 },
  { label: "Accelerate", price: 1500 },
  { label: "Dominate", price: 2100 },
];

const ADDONS: AddonItem[] = [
  {
    id: "website",
    name: "Multi-page website",
    desc: "Upgrade from a single landing page to a full 3–5 page site with services, about, and contact pages.",
    price: 500,
    icon: "☐",
  },
  {
    id: "ads",
    name: "Ad management (20 days)",
    desc: "Daily active oversight of your paid ad campaigns across all selected platforms for a full working month.",
    price: 400,
    icon: "▲",
  },
  {
    id: "platform",
    name: "3rd social platform",
    desc: "Add the remaining platform (LinkedIn, Instagram, or Facebook) at the same posting frequency as your base plan.",
    price: 200,
    icon: "+",
  },
  {
    id: "seo",
    name: "SEO setup & on-page optimisation",
    desc: "Meta tags, schema markup, Google Search Console setup, and keyword-aligned copy for every page.",
    price: 300,
    icon: "◆",
  },
  {
    id: "branding",
    name: "Brand identity kit",
    desc: "Logo, colour palette, typography spec, and brand guidelines document delivered as a PDF + source files.",
    price: 350,
    icon: "◆",
  },
  {
    id: "daily",
    name: "Upgrade to daily posts (5×/week)",
    desc: "Boost posting cadence from 3×/week to every weekday across your selected platforms.",
    price: 250,
    icon: "■",
  },
];

const TONE_OPTIONS = [
  "Professional & authoritative",
  "Friendly & approachable",
  "Bold & disruptive",
  "Warm & community-focused",
  "Playful & casual",
  "Luxury & premium",
];

const GOAL_OPTIONS = [
  "Generate leads / enquiries",
  "Build brand awareness",
  "Drive website traffic",
  "Grow social following",
  "Launch a new product or service",
  "Re-establish online presence",
];

const BRANDING_OPTIONS = [
  "Yes — I'll share files",
  "Partial — I have a logo but nothing else",
  "No — starting from scratch",
];

const PLATFORM_OPTIONS = ["LinkedIn", "Instagram", "Facebook"];

const INITIAL_FORM: FormData = {
  fname: "",
  lname: "",
  email: "",
  phone: "",
  biz: "",
  what: "",
  audience: "",
  tone: "",
  inspo: "",
  goal: "",
  platforms: [],
  branding: "",
  domain: "",
  notes: "",
};

const TOTAL_STEPS = 4;

// ─── Checkmark SVG ────────────────────────────────────────────────────────────

const CheckIcon = () => (
  <svg viewBox="0 0 10 8" width={8} height={8}>
    <path
      d="M1 4l3 3 5-6"
      stroke="currentColor"
      strokeWidth={2.5}
      fill="none"
    />
  </svg>
);

// ─── Main Component ───────────────────────────────────────────────────────────

export default function SMAProvider() {
  // Add-on + configurator state
  const [selectedAddons, setSelectedAddons] = useState<Record<string, number>>(
    {},
  );
  const [basePlanIndex, setBasePlanIndex] = useState(1);
  const [adSpend, setAdSpend] = useState(200);

  // Dialog state
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogPlan, setDialogPlan] = useState("");
  const [dialogPrice, setDialogPrice] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Form state
  const [form, setForm] = useState<FormData>(INITIAL_FORM);

  // Plan card animation refs
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // ── IntersectionObserver for plan cards ──
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting)
            (e.target as HTMLElement).classList.add("sma-vis");
        }),
      { threshold: 0.1 },
    );
    cardRefs.current.forEach((c) => {
      if (c) observer.observe(c);
    });
    return () => observer.disconnect();
  }, []);

  // ── Lock body scroll when dialog is open ──
  useEffect(() => {
    document.body.style.overflow = dialogOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [dialogOpen]);

  // ─── Computed values ────────────────────────────────────────────────────────

  const addonTotal = Object.values(selectedAddons).reduce((a, b) => a + b, 0);
  const basePlan = BASE_PLANS[basePlanIndex];
  const serviceTotal = basePlan.price + addonTotal;
  const grandTotal = serviceTotal + adSpend;

  const selectedAddonNames = Object.keys(selectedAddons)
    .map((k) => ADDONS.find((a) => a.id === k)?.name ?? "")
    .filter(Boolean);

  // ─── Handlers ───────────────────────────────────────────────────────────────

  const toggleAddon = useCallback((id: string, price: number) => {
    setSelectedAddons((prev) => {
      const next = { ...prev };
      if (next[id]) delete next[id];
      else next[id] = price;
      return next;
    });
  }, []);

  const openDialog = (plan: string, price: string) => {
    setDialogPlan(plan);
    setDialogPrice(price);
    setCurrentStep(1);
    setSubmitted(false);
    setSubmitting(false);
    setForm(INITIAL_FORM);
    setDialogOpen(true);
  };

  const closeDialog = () => setDialogOpen(false);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) closeDialog();
  };

  const setField = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const togglePlatform = (platform: string) => {
    setForm((prev) => ({
      ...prev,
      platforms: prev.platforms.includes(platform)
        ? prev.platforms.filter((p) => p !== platform)
        : [...prev.platforms, platform],
    }));
  };

  // ── Step validation ──
  const isStepValid = useCallback((): boolean => {
    switch (currentStep) {
      case 1:
        return !!(
          form.fname &&
          form.lname &&
          form.email.includes("@") &&
          form.phone &&
          form.biz
        );
      case 2:
        return !!(form.what.trim().length > 10 && form.audience && form.tone);
      case 3:
        return !!(form.goal && form.branding);
      case 4:
        return true;
      default:
        return false;
    }
  }, [currentStep, form]);

  const stepNext = async () => {
    if (currentStep === TOTAL_STEPS) {
      setSubmitting(true);
      try {
        const res = await fetch("https://formspree.io/f/mqeoakdy", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            plan: dialogPlan,
            price: dialogPrice,
            first_name: form.fname,
            last_name: form.lname,
            email: form.email,
            phone: form.phone,
            business: form.biz,
            what_they_do: form.what,
            audience: form.audience,
            brand_tone: form.tone,
            inspiration: form.inspo,
            goal: form.goal,
            platforms: form.platforms.join(", "),
            existing_branding: form.branding,
            domain: form.domain,
            notes: form.notes,
            selected_addons: Object.keys(selectedAddons).join(", ") || "none",
          }),
        });

        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          // Formspree returns { errors: [...] } on validation failure
          throw new Error(
            (data as { errors?: { message: string }[] }).errors?.[0]?.message ??
              "Submission failed",
          );
        }

        setSubmitted(true);
      } catch (err) {
        // Surface the error without crashing — keeps the form open so the user can retry
        console.error("[SMAPackages] Formspree error:", err);
        alert(
          "Something went wrong submitting your brief. Please try again or email directly.",
        );
      } finally {
        setSubmitting(false);
      }
      return;
    }
    setCurrentStep((s) => s + 1);
  };


  const stepBack = () => setCurrentStep((s) => Math.max(1, s - 1));

  // ─── Render ─────────────────────────────────────────────────────────────────

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      {/* ── Hero ── */}
      <section className="sma-hero">
        <p className="sma-eyebrow">Social Media &amp; Web Packages</p>
        <h1 className="sma-h1">
          Your online presence, <em>handled.</em>
        </h1>
        <p className="sma-lead">
          A complete digital launch — professional website, multi-platform
          content, paid ad setup, and a plain-English owner manual. One flat
          price, no surprises.
        </p>
        <div className="sma-rule" />
      </section>

      {/* ── Always included ── */}
      <section className="sma-always">
        <h2 className="sma-always-heading">Every package includes</h2>
        <div className="sma-pills">
          {[
            "Professional website",
            "Branded ad account setup",
            "Ad page creation",
            "Owner maintenance manual",
            "Content calendar",
            "30-day delivery",
            "1 revision round",
          ].map((t) => (
            <span key={t} className="sma-pill">
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* ── Plans ── */}
      <section className="sma-plans">
        <div className="sma-plan-grid">
          {/* Establish */}
          <div
            className="sma-plan"
            ref={(el) => {
              cardRefs.current[0] = el;
            }}
          >
            <p className="sma-plan-tier">Starter</p>
            <h2 className="sma-plan-name">Establish</h2>
            <p className="sma-plan-tag">
              Get online and consistent. Perfect for a clean, low-maintenance
              presence.
            </p>
            <div className="sma-price-wrap">
              <span className="sma-price">$1,200</span>
            </div>
            <p className="sma-price-note">flat rate — no retainer</p>
            <div className="sma-plan-rule" />
            <ul className="sma-feat-list">
              <PlanFeature>
                <strong>2 platforms</strong> — your choice of LinkedIn,
                Instagram, or Facebook
              </PlanFeature>
              <PlanFeature>
                <strong>1 post per week</strong> per platform (4 posts/month
                each)
              </PlanFeature>
              <PlanFeature>Copy + graphics, brand-aligned</PlanFeature>
              <PlanFeature>Scheduled &amp; published via Buffer</PlanFeature>
              <PlanFeature>Single-page website included</PlanFeature>
            </ul>
            <button
              className="sma-cta"
              onClick={() => openDialog("Establish", "$1,200")}
            >
              Get started
            </button>
          </div>

          {/* Accelerate (featured) */}
          <div
            className="sma-plan sma-plan--feat"
            ref={(el) => {
              cardRefs.current[1] = el;
            }}
          >
            <div className="sma-feat-badge">Most popular</div>
            <p className="sma-plan-tier">Growth</p>
            <h2 className="sma-plan-name">Accelerate</h2>
            <p className="sma-plan-tag">
              The sweet spot. Consistent engagement without exhausting your
              budget.
            </p>
            <div className="sma-price-wrap">
              <span className="sma-price">$1,500</span>
            </div>
            <p className="sma-price-note">flat rate — no retainer</p>
            <div className="sma-plan-rule" />
            <ul className="sma-feat-list">
              <PlanFeature>
                <strong>2 platforms</strong> — your choice of LinkedIn,
                Instagram, or Facebook
              </PlanFeature>
              <PlanFeature>
                <strong>3 posts per week</strong> per platform (12/month each)
              </PlanFeature>
              <PlanFeature>Mix of original + repurposed content</PlanFeature>
              <PlanFeature>Scheduled, published &amp; monitored</PlanFeature>
              <PlanFeature>Single-page website included</PlanFeature>
            </ul>
            <button
              className="sma-cta"
              onClick={() => openDialog("Accelerate", "$1,500")}
            >
              Get started
            </button>
          </div>

          {/* Dominate */}
          <div
            className="sma-plan"
            ref={(el) => {
              cardRefs.current[2] = el;
            }}
          >
            <p className="sma-plan-tier">Pro</p>
            <h2 className="sma-plan-name">Dominate</h2>
            <p className="sma-plan-tag">
              Full-stack social — all three platforms, ad management, daily
              weekday output.
            </p>
            <div className="sma-price-wrap">
              <span className="sma-price">$2,100</span>
            </div>
            <p className="sma-price-note">
              flat rate — ad spend billed separately
            </p>
            <div className="sma-plan-rule" />
            <ul className="sma-feat-list">
              <PlanFeature>
                <strong>All 3 platforms</strong> — LinkedIn, Instagram &amp;
                Facebook
              </PlanFeature>
              <PlanFeature>
                <strong>3 posts per week</strong> per platform (36/month total)
              </PlanFeature>
              <PlanFeature>
                <strong>Active ad management</strong> — 20 working days
              </PlanFeature>
              <PlanFeature>Weekly performance report</PlanFeature>
              <PlanFeature>Single-page website included</PlanFeature>
            </ul>
            <button
              className="sma-cta"
              onClick={() => openDialog("Dominate", "$2,100")}
            >
              Get started
            </button>
          </div>
        </div>
      </section>

      {/* ── Add-ons ── */}
      <section className="sma-addons">
        <div className="sma-section-head">
          <h2 className="sma-section-title">
            Power up your
            <br />
            <em>package</em>
          </h2>
          <p className="sma-section-sub">
            Optional extras you can stack on top of any plan. Mix and match —
            the configurator below calculates your total live.
          </p>
        </div>

        <div className="sma-addons-grid">
          {ADDONS.map((addon) => {
            const isSelected = !!selectedAddons[addon.id];
            return (
              <div
                key={addon.id}
                className={`sma-addon-card${isSelected ? " sma-addon-card--sel" : ""}`}
                onClick={() => toggleAddon(addon.id, addon.price)}
                role="checkbox"
                aria-checked={isSelected}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === " " || e.key === "Enter")
                    toggleAddon(addon.id, addon.price);
                }}
              >
                <div
                  className={`sma-sel-mark${isSelected ? " sma-sel-mark--on" : ""}`}
                />
                <p className="sma-addon-icon">{addon.icon}</p>
                <p className="sma-addon-name">{addon.name}</p>
                <p className="sma-addon-desc">{addon.desc}</p>
                <span className="sma-addon-price">
                  ${addon.price.toLocaleString()}
                </span>
                <span className="sma-addon-price-note"> add-on</span>
              </div>
            );
          })}
        </div>

        {/* Spend configurator */}
        <div className="sma-spend-config">
          <h3 className="sma-spend-title">
            Build your <em>total investment</em>
          </h3>
          <p className="sma-spend-sub">
            Select add-ons above, choose your base plan, and set your ad spend
            budget below.
          </p>

          <div className="sma-slider-label">
            <span>Base package</span>
            <strong>
              ${basePlan.price.toLocaleString()} — {basePlan.label}
            </strong>
          </div>
          <input
            type="range"
            className="sma-range"
            min={0}
            max={2}
            step={1}
            value={basePlanIndex}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setBasePlanIndex(parseInt(e.target.value))
            }
          />

          <div className="sma-slider-label">
            <span>Monthly ad spend (client-owned, billed separately)</span>
            <strong>${adSpend.toLocaleString()}/mo</strong>
          </div>
          <input
            type="range"
            className="sma-range"
            min={0}
            max={1000}
            step={50}
            value={adSpend}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setAdSpend(parseInt(e.target.value))
            }
          />

          <p className="sma-addons-text">
            {selectedAddonNames.length
              ? `Add-ons included: ${selectedAddonNames.join(", ")}.`
              : "No add-ons selected — click the cards above to include them."}
          </p>

          <div className="sma-breakdown">
            <ScItem
              label="Base package"
              value={`$${basePlan.price.toLocaleString()}`}
              sub="service fee"
            />
            <ScItem
              label="Add-ons"
              value={`$${addonTotal.toLocaleString()}`}
              sub="selected extras"
            />
            <ScItem
              label="Your service total"
              value={`$${serviceTotal.toLocaleString()}`}
              sub="one-time fee"
            />
            <ScItem
              label="Ad spend (est.)"
              value={`$${adSpend.toLocaleString()}`}
              sub="per month, separate"
            />
          </div>

          <div className="sma-total-bar">
            <div>
              <p className="sma-total-lbl">
                Total investment (service + 1 month ad spend)
              </p>
              <p className="sma-total-note">
                Ad spend goes directly to the platform — not to us
              </p>
            </div>
            <p className="sma-total-val">${grandTotal.toLocaleString()}</p>
          </div>
        </div>
      </section>

      {/* ── Intake Dialog ── */}
      {dialogOpen && (
        <div
          className="sma-overlay"
          onClick={handleOverlayClick}
          role="presentation"
        >
          <div
            className="sma-dialog"
            role="dialog"
            aria-modal
            aria-labelledby="sma-dlg-title"
          >
            {/* Header */}
            <div className="sma-dlg-header">
              <h2 id="sma-dlg-title" className="sma-dlg-title">
                Let's get <em>started</em>
              </h2>
              <p className="sma-dlg-subtitle">
                Selected:{" "}
                <strong style={{ color: "var(--sma-accent)" }}>
                  {dialogPlan}
                </strong>{" "}
                <span style={{ color: "rgba(245,242,237,.5)" }}>
                  {dialogPrice}
                </span>
              </p>
              <button
                className="sma-dlg-close"
                onClick={closeDialog}
                aria-label="Close dialog"
              >
                &#215;
              </button>
            </div>

            {/* Step dots */}
            {!submitted && (
              <div className="sma-step-dots">
                {Array.from({ length: TOTAL_STEPS }, (_, i) => (
                  <div
                    key={i}
                    className={`sma-dot${i + 1 < currentStep ? " sma-dot--done" : ""}${i + 1 === currentStep ? " sma-dot--active" : ""}`}
                  />
                ))}
              </div>
            )}

            {/* Body */}
            <div className="sma-dlg-body">
              {/* Success */}
              {submitted ? (
                <div className="sma-success">
                  <div className="sma-success-icon">✓</div>
                  <h3 className="sma-success-title">
                    Brief <em>received</em>
                  </h3>
                  <p className="sma-success-msg">
                    Thanks — I&apos;ll review your brief and reach out within 24
                    hours to confirm next steps and arrange the 50% deposit.
                  </p>
                </div>
              ) : (
                <>
                  {/* Step 1 — Contact */}
                  {currentStep === 1 && (
                    <div>
                      <p className="sma-step-label">
                        Step 1 of 4 — Your details
                      </p>
                      <div className="sma-form-grid">
                        <FormRow label="First name">
                          <input
                            type="text"
                            placeholder="Amara"
                            value={form.fname}
                            onChange={(e) => setField("fname", e.target.value)}
                          />
                        </FormRow>
                        <FormRow label="Last name">
                          <input
                            type="text"
                            placeholder="Osei"
                            value={form.lname}
                            onChange={(e) => setField("lname", e.target.value)}
                          />
                        </FormRow>
                      </div>
                      <FormRow label="Email address">
                        <input
                          type="email"
                          placeholder="amara@company.com"
                          value={form.email}
                          onChange={(e) => setField("email", e.target.value)}
                        />
                      </FormRow>
                      <FormRow label="Phone number">
                        <input
                          type="tel"
                          placeholder="+1 (416) 555-0100"
                          value={form.phone}
                          onChange={(e) => setField("phone", e.target.value)}
                        />
                      </FormRow>
                      <FormRow label="Business name">
                        <input
                          type="text"
                          placeholder="Osei Consulting"
                          value={form.biz}
                          onChange={(e) => setField("biz", e.target.value)}
                        />
                      </FormRow>
                    </div>
                  )}

                  {/* Step 2 — Brand brief */}
                  {currentStep === 2 && (
                    <div>
                      <p className="sma-step-label">
                        Step 2 of 4 — Brand brief
                      </p>
                      <FormRow label="What does your business do? (1–2 sentences)">
                        <textarea
                          placeholder="We provide HR consulting for mid-size manufacturing companies in Ontario..."
                          value={form.what}
                          onChange={(e) => setField("what", e.target.value)}
                        />
                      </FormRow>
                      <FormRow label="Who is your target audience?">
                        <input
                          type="text"
                          placeholder="e.g. Business owners, 35–55, Ontario-based"
                          value={form.audience}
                          onChange={(e) => setField("audience", e.target.value)}
                        />
                      </FormRow>
                      <FormRow label="How would you describe your brand tone?">
                        <select
                          value={form.tone}
                          onChange={(e) => setField("tone", e.target.value)}
                        >
                          <option value="">Select a tone...</option>
                          {TONE_OPTIONS.map((t) => (
                            <option key={t}>{t}</option>
                          ))}
                        </select>
                      </FormRow>
                      <FormRow label="Any competitors or brands you admire?">
                        <input
                          type="text"
                          placeholder="e.g. We like how Shopify communicates — clear, no jargon"
                          value={form.inspo}
                          onChange={(e) => setField("inspo", e.target.value)}
                        />
                      </FormRow>
                    </div>
                  )}

                  {/* Step 3 — Goals & platforms */}
                  {currentStep === 3 && (
                    <div>
                      <p className="sma-step-label">
                        Step 3 of 4 — Goals &amp; platforms
                      </p>
                      <FormRow label="Primary goal for this package">
                        <select
                          value={form.goal}
                          onChange={(e) => setField("goal", e.target.value)}
                        >
                          <option value="">Select a goal...</option>
                          {GOAL_OPTIONS.map((g) => (
                            <option key={g}>{g}</option>
                          ))}
                        </select>
                      </FormRow>
                      <FormRow label="Which platforms do you want to focus on?">
                        <div className="sma-check-group">
                          {PLATFORM_OPTIONS.map((p) => (
                            <button
                              key={p}
                              type="button"
                              className={`sma-check-opt${form.platforms.includes(p) ? " sma-check-opt--on" : ""}`}
                              onClick={() => togglePlatform(p)}
                            >
                              {p}
                            </button>
                          ))}
                        </div>
                      </FormRow>
                      <FormRow label="Do you have existing branding? (logo, colours, fonts)">
                        <select
                          value={form.branding}
                          onChange={(e) => setField("branding", e.target.value)}
                        >
                          <option value="">Select...</option>
                          {BRANDING_OPTIONS.map((b) => (
                            <option key={b}>{b}</option>
                          ))}
                        </select>
                      </FormRow>
                      <FormRow label="Website domain (if you have one)">
                        <input
                          type="text"
                          placeholder="e.g. oseiconsulting.ca — or leave blank"
                          value={form.domain}
                          onChange={(e) => setField("domain", e.target.value)}
                        />
                      </FormRow>
                    </div>
                  )}

                  {/* Step 4 — Confirm */}
                  {currentStep === 4 && (
                    <div>
                      <p className="sma-step-label">
                        Step 4 of 4 — Confirm &amp; submit
                      </p>
                      <div className="sma-confirm-box">
                        <p className="sma-confirm-eyebrow">
                          Your submission summary
                        </p>
                        <p className="sma-confirm-name">
                          {form.fname} {form.lname}
                        </p>
                        <p className="sma-confirm-detail">
                          {form.email} · {form.phone}
                        </p>
                        <p
                          className="sma-confirm-detail"
                          style={{ marginBottom: "0.75rem" }}
                        >
                          {form.biz}
                        </p>
                        <div className="sma-confirm-rule" />
                        <p className="sma-confirm-plan">
                          Package: {dialogPlan} ({dialogPrice})
                        </p>
                        <p className="sma-confirm-detail">Goal: {form.goal}</p>
                        <p className="sma-confirm-detail">
                          {form.platforms.length
                            ? `Platforms: ${form.platforms.join(", ")}`
                            : "Platforms: not specified"}
                        </p>
                      </div>
                      <FormRow label="Anything else you'd like me to know?">
                        <textarea
                          placeholder="Budget constraints, timing, specific requests..."
                          style={{ minHeight: "70px" }}
                          value={form.notes}
                          onChange={(e) => setField("notes", e.target.value)}
                        />
                      </FormRow>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Footer */}
            {!submitted && (
              <div className="sma-dlg-footer">
                <button
                  className="sma-btn-back"
                  onClick={stepBack}
                  style={{ visibility: currentStep > 1 ? "visible" : "hidden" }}
                >
                  Back
                </button>
                <span className="sma-progress-text">
                  {currentStep} of {TOTAL_STEPS}
                </span>
                <button
                  className="sma-btn-next"
                  onClick={stepNext}
                  disabled={!isStepValid() || submitting}
                >
                  {submitting
                    ? "Submitting..."
                    : currentStep === TOTAL_STEPS
                      ? "Submit"
                      : "Continue"}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function PlanFeature({ children }: { children: React.ReactNode }) {
  return (
    <li className="sma-feat-item">
      <span className="sma-ck">
        <CheckIcon />
      </span>
      <span>{children}</span>
    </li>
  );
}

function FormRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="sma-form-row">
      <label className="sma-form-label">{label}</label>
      {children}
    </div>
  );
}

function ScItem({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="sma-sc-item">
      <p className="sma-sc-lbl">{label}</p>
      <p className="sma-sc-val">{value}</p>
      <p className="sma-sc-sub">{sub}</p>
    </div>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────
// Scoped with sma- prefix to avoid collisions.
// Move to sma-packages.module.css and import if preferred.

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

:root {
  --sma-ink: #0e0e0e;
  --sma-ink-mid: #3a3a3a;
  --sma-ink-soft: #888;
  --sma-paper: #f5f2ed;
  --sma-paper-dark: #ede9e2;
  --sma-accent: #c8a96e;
  --sma-accent-dark: #a8893e;
  --sma-white: #ffffff;
  --sma-serif: 'Playfair Display', Georgia, serif;
  --sma-sans: 'DM Sans', sans-serif;
  --sma-r: 4px;
  --sma-rl: 12px;
  --sma-rxl: 20px;
}

/* ── Noise texture ── */
.sma-hero { position: relative; }
.sma-hero::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 0;
  opacity: 0.45;
}

/* ── Hero ── */
.sma-hero {
  padding: 5rem 2rem 3.5rem;
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}
.sma-eyebrow {
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--sma-accent-dark);
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: var(--sma-sans);
}
.sma-eyebrow::before {
  content: '';
  display: inline-block;
  width: 2rem;
  height: 1px;
  background: var(--sma-accent-dark);
}
.sma-h1 {
  font-family: var(--sma-serif);
  font-size: clamp(2.6rem, 5.5vw, 4.5rem);
  font-weight: 400;
  line-height: 1.08;
  letter-spacing: -0.01em;
  max-width: 18ch;
  color: var(--sma-ink);
}
.sma-h1 em { font-style: italic; color: var(--sma-accent-dark); }
.sma-lead {
  margin-top: 1.5rem;
  font-size: 1rem;
  font-weight: 300;
  color: var(--sma-ink-mid);
  max-width: 52ch;
  line-height: 1.75;
  font-family: var(--sma-sans);
}
.sma-rule {
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, rgba(14,14,14,.15) 0%, transparent 100%);
  margin-top: 3.5rem;
}

/* ── Always included ── */
.sma-always {
  padding: 3rem 2rem;
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}
.sma-always-heading {
  font-family: var(--sma-serif);
  font-size: 0.95rem;
  font-weight: 400;
  font-style: italic;
  color: var(--sma-ink-soft);
  margin-bottom: 1.25rem;
}
.sma-pills { display: flex; flex-wrap: wrap; gap: 0.65rem; }
.sma-pill {
  background: var(--sma-paper-dark);
  border: 1px solid rgba(14,14,14,.1);
  border-radius: 100px;
  padding: 0.4rem 1rem;
  font-size: 0.8rem;
  font-weight: 400;
  color: var(--sma-ink-mid);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--sma-sans);
}
.sma-pill::before {
  content: '';
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--sma-accent-dark);
  flex-shrink: 0;
}

/* ── Plans ── */
.sma-plans {
  padding: 1rem 2rem 4rem;
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}
.sma-plan-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  align-items: start;
}
@media (max-width: 860px) {
  .sma-plan-grid { grid-template-columns: 1fr; max-width: 480px; }
}
.sma-plan {
  background: var(--sma-white);
  border-radius: var(--sma-rl);
  border: 1px solid rgba(14,14,14,.08);
  padding: 2rem 1.75rem;
  position: relative;
  transition: transform 0.25s, border-color 0.25s;
  opacity: 0;
  transform: translateY(20px);
  font-family: var(--sma-sans);
}
.sma-plan.sma-vis {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.5s ease, transform 0.5s ease, border-color 0.25s;
}
.sma-plan:nth-child(2) { transition-delay: 0.1s; }
.sma-plan:nth-child(3) { transition-delay: 0.2s; }
.sma-plan:hover { transform: translateY(-4px); border-color: rgba(14,14,14,.18); }
.sma-plan.sma-vis:hover { transform: translateY(-4px); }
.sma-plan--feat { background: var(--sma-ink); border-color: var(--sma-ink); color: var(--sma-paper); }
.sma-plan--feat:hover { border-color: var(--sma-accent); }
.sma-feat-badge {
  position: absolute;
  top: -13px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--sma-accent);
  color: var(--sma-ink);
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 0.3rem 0.9rem;
  border-radius: 100px;
  white-space: nowrap;
  font-family: var(--sma-sans);
}
.sma-plan-tier {
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--sma-accent-dark);
  margin-bottom: 0.65rem;
}
.sma-plan--feat .sma-plan-tier { color: var(--sma-accent); }
.sma-plan-name {
  font-family: var(--sma-serif);
  font-size: 1.85rem;
  font-weight: 400;
  line-height: 1.1;
  margin-bottom: 0.45rem;
  color: var(--sma-ink);
}
.sma-plan--feat .sma-plan-name { color: var(--sma-white); }
.sma-plan-tag {
  font-size: 0.83rem;
  font-weight: 300;
  color: var(--sma-ink-soft);
  margin-bottom: 1.5rem;
  line-height: 1.5;
}
.sma-plan--feat .sma-plan-tag { color: rgba(245,242,237,.5); }
.sma-price-wrap { display: flex; align-items: baseline; gap: 0.3rem; margin-bottom: 0.35rem; }
.sma-price {
  font-family: var(--sma-serif);
  font-size: 2.8rem;
  font-weight: 700;
  color: var(--sma-ink);
  line-height: 1;
}
.sma-plan--feat .sma-price { color: var(--sma-white); }
.sma-price-note { font-size: 0.75rem; color: var(--sma-ink-soft); font-weight: 300; }
.sma-plan--feat .sma-price-note { color: rgba(245,242,237,.45); }
.sma-plan-rule {
  width: 100%;
  height: 1px;
  background: rgba(14,14,14,.08);
  margin: 1.4rem 0;
}
.sma-plan--feat .sma-plan-rule { background: rgba(245,242,237,.12); }
.sma-feat-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-bottom: 1.75rem;
  padding: 0;
}
.sma-feat-item {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-size: 0.86rem;
  font-weight: 300;
  color: var(--sma-ink-mid);
  line-height: 1.45;
}
.sma-plan--feat .sma-feat-item { color: rgba(245,242,237,.78); }
.sma-feat-item strong { font-weight: 500; color: var(--sma-ink); }
.sma-plan--feat .sma-feat-item strong { color: var(--sma-white); }
.sma-ck {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: rgba(200,169,110,.15);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 1px;
  color: var(--sma-accent-dark);
}
.sma-plan--feat .sma-ck { background: rgba(200,169,110,.25); color: var(--sma-accent); }
.sma-cta {
  display: block;
  width: 100%;
  padding: 0.875rem 1.5rem;
  border-radius: var(--sma-r);
  font-family: var(--sma-sans);
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  border: 1px solid var(--sma-ink);
  background: transparent;
  color: var(--sma-ink);
  transition: background 0.2s, color 0.2s, transform 0.15s;
}
.sma-cta:hover { background: var(--sma-ink); color: var(--sma-white); transform: translateY(-1px); }
.sma-plan--feat .sma-cta { background: var(--sma-accent); border-color: var(--sma-accent); color: var(--sma-ink); }
.sma-plan--feat .sma-cta:hover { background: var(--sma-accent-dark); border-color: var(--sma-accent-dark); }

/* ── Add-ons ── */
.sma-addons {
  padding: 0 2rem 5rem;
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}
.sma-section-head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}
.sma-section-title {
  font-family: var(--sma-serif);
  font-size: 2rem;
  font-weight: 400;
  line-height: 1.15;
  color: var(--sma-ink);
}
.sma-section-title em { font-style: italic; color: var(--sma-accent-dark); }
.sma-section-sub {
  font-size: 0.85rem;
  color: var(--sma-ink-soft);
  font-weight: 300;
  max-width: 38ch;
  text-align: right;
  line-height: 1.55;
  font-family: var(--sma-sans);
}
@media (max-width: 600px) { .sma-section-sub { text-align: left; } }
.sma-addons-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
}
@media (max-width: 640px) { .sma-addons-grid { grid-template-columns: 1fr; } }
.sma-addon-card {
  background: var(--sma-white);
  border: 1px solid rgba(14,14,14,.08);
  border-radius: var(--sma-rl);
  padding: 1.5rem;
  cursor: pointer;
  transition: border-color 0.2s, transform 0.2s;
  user-select: none;
  position: relative;
  font-family: var(--sma-sans);
}
.sma-addon-card:hover { border-color: rgba(14,14,14,.2); transform: translateY(-2px); }
.sma-addon-card--sel { border: 2px solid var(--sma-accent-dark) !important; background: rgba(200,169,110,.04); }
.sma-sel-mark {
  position: absolute;
  top: 14px;
  right: 14px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1.5px solid rgba(14,14,14,.2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, border-color 0.2s;
}
.sma-sel-mark--on {
  background: var(--sma-accent-dark);
  border-color: var(--sma-accent-dark);
}
.sma-sel-mark--on::after {
  content: '';
  display: block;
  width: 8px;
  height: 8px;
  background: url("data:image/svg+xml,%3Csvg viewBox='0 0 10 8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 4l3 3 5-6' stroke='white' stroke-width='2' fill='none'/%3E%3C/svg%3E") center / contain no-repeat;
}
.sma-addon-icon { font-size: 1.4rem; margin-bottom: 0.75rem; color: var(--sma-accent-dark); }
.sma-addon-name { font-size: 0.92rem; font-weight: 500; color: var(--sma-ink); margin-bottom: 0.3rem; }
.sma-addon-desc { font-size: 0.8rem; font-weight: 300; color: var(--sma-ink-soft); line-height: 1.5; margin-bottom: 0.75rem; }
.sma-addon-price { font-family: var(--sma-serif); font-size: 1.4rem; font-weight: 700; color: var(--sma-ink); }
.sma-addon-price-note { font-size: 0.72rem; color: var(--sma-ink-soft); font-weight: 300; margin-left: 0.25rem; }

/* ── Spend configurator ── */
.sma-spend-config {
  background: var(--sma-ink);
  border-radius: var(--sma-rxl);
  padding: 2.5rem;
  margin-top: 0.5rem;
  color: var(--sma-paper);
  font-family: var(--sma-sans);
}
.sma-spend-title { font-family: var(--sma-serif); font-size: 1.5rem; font-weight: 400; margin-bottom: 0.4rem; }
.sma-spend-title em { font-style: italic; color: var(--sma-accent); }
.sma-spend-sub { font-size: 0.83rem; color: rgba(245,242,237,.5); font-weight: 300; margin-bottom: 2rem; }
.sma-slider-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}
.sma-slider-label span { font-size: 0.8rem; color: rgba(245,242,237,.6); font-weight: 300; }
.sma-slider-label strong { font-size: 0.85rem; color: var(--sma-accent); font-weight: 500; }
.sma-range {
  width: 100%;
  height: 4px;
  background: rgba(245,242,237,.15);
  border-radius: 2px;
  outline: none;
  -webkit-appearance: none;
  appearance: none;
  margin-bottom: 1.75rem;
  cursor: pointer;
  display: block;
}
.sma-range::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--sma-accent);
  cursor: pointer;
  border: 2px solid var(--sma-ink);
}
.sma-range::-moz-range-thumb {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--sma-accent);
  cursor: pointer;
  border: 2px solid var(--sma-ink);
}
.sma-addons-text { font-size: 0.78rem; color: rgba(245,242,237,.4); margin-top: 1rem; font-weight: 300; min-height: 1.2em; }
.sma-breakdown {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 0.75rem;
  margin-top: 0.5rem;
}
.sma-sc-item { background: rgba(245,242,237,.06); border-radius: var(--sma-r); padding: 1rem; }
.sma-sc-lbl { font-size: 0.7rem; color: rgba(245,242,237,.45); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.4rem; }
.sma-sc-val { font-family: var(--sma-serif); font-size: 1.5rem; font-weight: 700; color: var(--sma-white); }
.sma-sc-sub { font-size: 0.72rem; color: rgba(245,242,237,.4); margin-top: 0.2rem; }
.sma-total-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(245,242,237,.1);
  margin-top: 1.5rem;
  padding-top: 1.25rem;
  flex-wrap: wrap;
  gap: 0.75rem;
}
.sma-total-lbl { font-size: 0.78rem; color: rgba(245,242,237,.5); font-weight: 300; }
.sma-total-note { font-size: 0.72rem; color: rgba(245,242,237,.35); font-weight: 300; margin-top: 2px; }
.sma-total-val { font-family: var(--sma-serif); font-size: 2rem; font-weight: 700; color: var(--sma-accent); }

/* ── Dialog overlay ── */
.sma-overlay {
  position: fixed;
  inset: 0;
  background: rgba(14,14,14,.7);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}
.sma-dialog {
  background: var(--sma-white);
  border-radius: var(--sma-rxl);
  width: 100%;
  max-width: 560px;
  overflow: hidden;
  font-family: var(--sma-sans);
}
.sma-dlg-header {
  background: var(--sma-ink);
  padding: 2rem 2rem 1.75rem;
  position: relative;
}
.sma-dlg-title {
  font-family: var(--sma-serif);
  font-size: 1.55rem;
  font-weight: 400;
  color: var(--sma-white);
  margin-bottom: 0.35rem;
}
.sma-dlg-title em { font-style: italic; color: var(--sma-accent); }
.sma-dlg-subtitle { font-size: 0.82rem; color: rgba(245,242,237,.5); font-weight: 300; }
.sma-dlg-close {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(245,242,237,.1);
  border: none;
  cursor: pointer;
  color: rgba(245,242,237,.6);
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}
.sma-dlg-close:hover { background: rgba(245,242,237,.2); }
.sma-step-dots {
  display: flex;
  gap: 4px;
  padding: 0.9rem 2rem;
  background: var(--sma-paper-dark);
  border-bottom: 1px solid rgba(14,14,14,.08);
}
.sma-dot {
  flex: 1;
  height: 3px;
  border-radius: 2px;
  background: rgba(14,14,14,.1);
  transition: background 0.3s;
}
.sma-dot--done { background: var(--sma-accent-dark); }
.sma-dot--active { background: var(--sma-ink); }
.sma-dlg-body { padding: 1.75rem 2rem; max-height: 65vh; overflow-y: auto; }
.sma-step-label {
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--sma-accent-dark);
  margin-bottom: 1.25rem;
  display: block;
}
.sma-form-row { margin-bottom: 1.1rem; }
.sma-form-label {
  display: block;
  font-size: 0.78rem;
  font-weight: 500;
  color: var(--sma-ink-mid);
  margin-bottom: 0.45rem;
  letter-spacing: 0.02em;
}
.sma-form-row input,
.sma-form-row select,
.sma-form-row textarea {
  width: 100%;
  background: var(--sma-paper);
  border: 1px solid rgba(14,14,14,.12);
  border-radius: var(--sma-r);
  padding: 0.7rem 0.9rem;
  font-family: var(--sma-sans);
  font-size: 0.88rem;
  font-weight: 300;
  color: var(--sma-ink);
  outline: none;
  transition: border-color 0.2s;
  -webkit-appearance: none;
  box-sizing: border-box;
}
.sma-form-row input:focus,
.sma-form-row select:focus,
.sma-form-row textarea:focus { border-color: var(--sma-accent-dark); }
.sma-form-row textarea { resize: vertical; min-height: 80px; line-height: 1.6; }
.sma-form-row select {
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 10 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23888' stroke-width='1.5' fill='none'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.85rem center;
  background-size: 10px;
  padding-right: 2.5rem;
  background-color: var(--sma-paper);
}
.sma-form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; }
@media (max-width: 480px) { .sma-form-grid { grid-template-columns: 1fr; } }
.sma-check-group { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.sma-check-opt {
  background: var(--sma-paper);
  border: 1px solid rgba(14,14,14,.12);
  border-radius: var(--sma-r);
  padding: 0.5rem 0.85rem;
  cursor: pointer;
  font-size: 0.82rem;
  color: var(--sma-ink-mid);
  transition: border-color 0.2s, background 0.2s;
  font-family: var(--sma-sans);
}
.sma-check-opt--on { background: rgba(168,137,62,.08); border-color: var(--sma-accent-dark); color: var(--sma-ink); }
.sma-confirm-box {
  background: var(--sma-paper);
  border-radius: var(--sma-r);
  padding: 1.1rem 1.25rem;
  margin-bottom: 1.1rem;
}
.sma-confirm-eyebrow {
  font-size: 0.78rem;
  font-weight: 500;
  color: var(--sma-ink-soft);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.65rem;
}
.sma-confirm-name { font-size: 0.9rem; font-weight: 500; color: var(--sma-ink); margin-bottom: 0.2rem; }
.sma-confirm-detail { font-size: 0.82rem; color: var(--sma-ink-mid); font-weight: 300; margin-bottom: 0.2rem; }
.sma-confirm-rule { height: 1px; background: rgba(14,14,14,.08); margin-bottom: 0.75rem; }
.sma-confirm-plan { font-size: 0.82rem; color: var(--sma-ink); font-weight: 500; margin-bottom: 0.2rem; }
.sma-dlg-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 2rem 1.75rem;
  border-top: 1px solid rgba(14,14,14,.07);
}
.sma-btn-back {
  background: transparent;
  border: 1px solid rgba(14,14,14,.15);
  border-radius: var(--sma-r);
  padding: 0.7rem 1.4rem;
  font-family: var(--sma-sans);
  font-size: 0.78rem;
  font-weight: 500;
  cursor: pointer;
  color: var(--sma-ink-soft);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  transition: border-color 0.2s, color 0.2s;
}
.sma-btn-back:hover { border-color: var(--sma-ink); color: var(--sma-ink); }
.sma-btn-next {
  background: var(--sma-ink);
  border: 1px solid var(--sma-ink);
  border-radius: var(--sma-r);
  padding: 0.7rem 1.75rem;
  font-family: var(--sma-sans);
  font-size: 0.78rem;
  font-weight: 500;
  cursor: pointer;
  color: var(--sma-white);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  transition: background 0.2s, transform 0.15s;
}
.sma-btn-next:hover:not(:disabled) { background: var(--sma-accent-dark); border-color: var(--sma-accent-dark); transform: translateY(-1px); }
.sma-btn-next:disabled { opacity: 0.4; cursor: not-allowed; }
.sma-progress-text { font-size: 0.75rem; color: var(--sma-ink-soft); }
.sma-success { text-align: center; padding: 2rem 0; }
.sma-success-icon {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: rgba(168,137,62,.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.25rem;
  font-size: 1.5rem;
  color: var(--sma-accent-dark);
}
.sma-success-title { font-family: var(--sma-serif); font-size: 1.75rem; font-weight: 400; margin-bottom: 0.6rem; color: var(--sma-ink); }
.sma-success-title em { font-style: italic; color: var(--sma-accent-dark); }
.sma-success-msg { font-size: 0.88rem; color: var(--sma-ink-soft); font-weight: 300; line-height: 1.7; max-width: 36ch; margin: 0 auto; }

/* ── Animations ── */
@keyframes smaFadeUp { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
.sma-hero .sma-eyebrow { animation: smaFadeUp 0.6s ease both; }
.sma-hero .sma-h1 { animation: smaFadeUp 0.65s 0.08s ease both; }
.sma-hero .sma-lead { animation: smaFadeUp 0.65s 0.16s ease both; }
.sma-always { animation: smaFadeUp 0.6s 0.24s ease both; }
`;
