export default function Home() {
  const faqs = [
    {
      q: "How does the compensation algorithm work?",
      a: "We analyze commits, pull requests, and issues using weighted scoring based on complexity, lines changed, review cycles, and market rate benchmarks for open source work."
    },
    {
      q: "Which GitHub repositories can I analyze?",
      a: "Any public repository and private repositories you have admin access to. Connect your GitHub account and add repos from your dashboard."
    },
    {
      q: "Can I customize the pay rates and weights?",
      a: "Yes. You can set hourly rates, adjust contribution weights, and define custom rules per contributor or contribution type."
    }
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          For open source maintainers with funding
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Calculate fair pay for your{" "}
          <span className="text-[#58a6ff]">open source contributors</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect your GitHub repos, analyze commits, PRs, and issues, and get data-driven compensation suggestions based on impact and market rates.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Start for $9/mo
        </a>
        <p className="text-sm text-[#8b949e] mt-3">Cancel anytime. No setup fees.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-3 gap-4 mb-20">
        {[
          { icon: "⚡", label: "Commit analysis", desc: "Weighted scoring per commit" },
          { icon: "🔀", label: "PR & issue tracking", desc: "Review cycles & complexity" },
          { icon: "📊", label: "Market benchmarks", desc: "Fair rate suggestions" }
        ].map((f) => (
          <div key={f.label} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 text-center">
            <div className="text-2xl mb-2">{f.icon}</div>
            <div className="text-sm font-semibold text-white mb-1">{f.label}</div>
            <div className="text-xs text-[#8b949e]">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$9</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited repositories",
              "Full contribution analytics",
              "Customizable pay weights",
              "CSV export for payroll",
              "GitHub OAuth integration"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff]">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
              <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} GitHub Contributor Payroll Calculator. All rights reserved.
      </footer>
    </main>
  );
}
