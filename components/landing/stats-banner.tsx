const STATS = [
  { label: "Total Disbursed", value: "$0M" },
  { label: "Active Orgs", value: "0" },
  { label: "Employees Paid", value: "0k" },
  { label: "Avg Settlement", value: "5.2s" },
];

export function StatsBanner() {
  return (
    <section className="bg-[#3a2e29] px-4 py-12 md:px-10">
      <div className="mx-auto grid max-w-360 grid-cols-2 gap-8 md:grid-cols-4 justify-center">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center md:text-left border-l-2 border-l-white pl-4">
            <p className="mb-1 font-mono text-[12px] uppercase leading-4 text-[#f3ded8]/60">
              {stat.label}
            </p>
            <h3 className="font-mono text-[24px] font-semibold leading-8 text-[#ffdbcf]">
              {stat.value}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
