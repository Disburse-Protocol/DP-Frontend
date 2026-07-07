const STEPS = [
  {
    title: "Setup Organization",
    description:
      "Connect your Stellar wallet and define your employee roster and salary structures.",
  },
  {
    title: "Fund Vault",
    description:
      "Deposit USDC or XLM into the secure Disburse smart contract vault to cover the pay period.",
  },
  {
    title: "Automate & Settle",
    description:
      "Smart contracts execute the distribution. Funds arrive in employee wallets in under 5 seconds.",
  },
];

export function HowItWorks() {
  return (
    <section className="px-4 py-24 md:px-10">
      <div className="mx-auto max-w-360">
        <h2 className="mb-16 text-center text-[32px] font-bold leading-10 tracking-[-0.01em] text-[#241915]">
          How It Works
        </h2>
        <div className="relative grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="absolute left-0 top-12 -z-10 hidden h-0.5 w-full bg-[#dec0b7]/20 md:block" />
          {STEPS.map((step, index) => (
            <div
              key={step.title}
              className="flex flex-col items-center space-y-4 text-center"
            >
              <div className="flex size-16 items-center justify-center rounded-full bg-[#a03c11] text-[24px] font-semibold leading-8 text-white shadow-lg">
                {index + 1}
              </div>
              <h5 className="text-[24px] font-semibold leading-8">
                {step.title}
              </h5>
              <p className="text-[16px] leading-6 text-[#57423b]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
