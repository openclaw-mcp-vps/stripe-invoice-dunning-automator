export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6">
          Billing Automation
        </span>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Stop Losing Revenue to<br />
          <span className="text-[#58a6ff]">Failed Payments</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Automatically send personalized payment reminder sequences when Stripe invoices fail. Recover more revenue without lifting a finger.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Start Recovering Revenue — $15/mo
        </a>
        <div className="mt-8 flex justify-center gap-8 text-sm text-[#8b949e]">
          <span>✓ Stripe webhook integration</span>
          <span>✓ Custom email templates</span>
          <span>✓ Automated sequences</span>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm mb-2">PRO PLAN</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Stripe webhook listener</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Up to 5 reminder sequences</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Customizable email templates</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Resend email delivery</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Timing controls per step</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Dashboard analytics</li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <h3 className="font-semibold text-white mb-2">How does it connect to Stripe?</h3>
            <p className="text-[#8b949e] text-sm">You add our webhook URL to your Stripe dashboard. We listen for <code className="text-[#58a6ff]">invoice.payment_failed</code> events and automatically trigger your configured reminder sequence.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <h3 className="font-semibold text-white mb-2">Can I customize the reminder emails?</h3>
            <p className="text-[#8b949e] text-sm">Yes. The dashboard lets you edit subject lines, body copy, and timing for each step in your sequence. Use variables like customer name and invoice amount.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <h3 className="font-semibold text-white mb-2">What email provider do you use?</h3>
            <p className="text-[#8b949e] text-sm">We use Resend for reliable transactional email delivery. You can connect your own Resend API key to send from your own domain.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
