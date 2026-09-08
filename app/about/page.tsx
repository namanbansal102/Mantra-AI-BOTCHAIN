import React from "react";

const Page = () => {
  const features = [
    {
      title: "Wallet Risk Scoring",
      description:
        "Analyze wallet activity and generate intelligent risk scores based on transaction behavior and network connections.",
      icon: "🛡️",
    },
    {
      title: "Fraud Detection",
      description:
        "Detect suspicious wallets and potentially fraudulent transaction patterns using behavioral analytics.",
      icon: "🔍",
    },
    {
      title: "Transaction Analysis",
      description:
        "Analyze transaction history, transfer patterns, frequency, and unusual blockchain activity.",
      icon: "📊",
    },
    {
      title: "Wallet Network Graph",
      description:
        "Visualize wallet relationships and trace connections between addresses across the blockchain.",
      icon: "🕸️",
    },
    {
      title: "AI & Hybrid Detection",
      description:
        "Combine rule-based intelligence with AI and machine learning models for smarter fraud detection.",
      icon: "🤖",
    },
    {
      title: "Real-Time Trust Intelligence",
      description:
        "Provide actionable risk insights that can help users and applications identify suspicious activity.",
      icon: "⚡",
    },
  ];

  const partnerships = [
    {
      number: "01",
      title: "Native BOT Chain Deployment",
      description:
        "Deploy Mantra AI on BOT Chain Mainnet as an AI-powered fraud detection and blockchain trust intelligence platform.",
    },
    {
      number: "02",
      title: "AI-Powered Risk Detection",
      description:
        "Use hybrid AI models and behavioral analytics to detect suspicious wallets and generate explainable risk scores.",
    },
    {
      number: "03",
      title: "Real-Time Trust Layer",
      description:
        "Provide APIs and risk intelligence for BOT Chain dApps, DeFi protocols, and users to identify risky wallets.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            About Mantra AI
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Building the{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Trust Layer
            </span>{" "}
            for Blockchain.
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            Mantra AI is an AI-powered blockchain fraud detection and wallet
            risk intelligence platform. We analyze wallet behavior,
            transactions, and blockchain networks to identify suspicious
            activity and generate explainable risk insights.
          </p>
        </div>
      </section>

      {/* Vision */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
                Our Vision
              </p>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Transforming blockchain data into trust intelligence.
              </h2>
            </div>

            <p className="text-lg leading-8 text-gray-400">
              Blockchain transactions are transparent, but fraud often hides
              within complex patterns and wallet connections. Mantra AI helps
              transform raw transaction data into meaningful risk intelligence
              that users, dApps, and protocols can understand and act upon.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16">
        <div className="mb-14 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
            Core Features
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            Blockchain intelligence powered by AI.
          </h2>

          <p className="mt-5 text-gray-400">
            Mantra AI combines behavioral analytics, wallet network analysis,
            and hybrid AI models to provide intelligent fraud detection.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:border-purple-500/50 hover:bg-purple-500/[0.05]"
            >
              <div className="mb-5 text-3xl">{feature.icon}</div>

              <h3 className="text-xl font-semibold">{feature.title}</h3>

              <p className="mt-3 leading-7 text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="border-y border-white/10 bg-gradient-to-b from-purple-950/20 to-transparent">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16">
          <div className="mb-14 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
              How It Works
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              From transactions to intelligence.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {[
              ["01", "Collect Data", "Fetch blockchain and wallet transaction data."],
              ["02", "Analyze Behavior", "Analyze transaction patterns and wallet activity."],
              ["03", "Detect Risk", "Apply AI and behavioral risk detection models."],
              ["04", "Generate Insights", "Provide risk scores and network intelligence."],
            ].map(([number, title, description]) => (
              <div
                key={number}
                className="rounded-2xl border border-white/10 bg-black/30 p-6"
              >
                <span className="text-sm font-bold text-purple-400">
                  {number}
                </span>

                <h3 className="mt-4 text-xl font-semibold">{title}</h3>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16">
        <div className="mb-14 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
            BOT Chain Partnership
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            Building trust infrastructure for BOT Chain.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {partnerships.map((partnership) => (
            <div
              key={partnership.number}
              className="rounded-2xl border border-purple-500/20 bg-gradient-to-b from-purple-500/10 to-transparent p-7"
            >
              <span className="text-3xl font-bold text-purple-400">
                {partnership.number}
              </span>

              <h3 className="mt-6 text-xl font-semibold">
                {partnership.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                {partnership.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center md:px-10 lg:px-16">
          <h2 className="text-3xl font-bold md:text-5xl">
            Know the risk before you interact.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Mantra AI is building the intelligence layer for a safer and more
            trustworthy blockchain ecosystem.
          </p>

          <button className="mt-8 rounded-xl bg-purple-600 px-7 py-3 font-semibold transition hover:bg-purple-500">
            Explore Mantra AI
          </button>
        </div>
      </section>
    </main>
  );
};

export default Page;