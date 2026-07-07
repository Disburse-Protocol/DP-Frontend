const FOOTER_COLUMNS = [
  {
    title: "Platform",
    links: ["Pricing", "Features", "Security"],
  },
  {
    title: "Resources",
    links: ["Documentation", "API Reference", "SDKs"],
  },
  {
    title: "Company",
    links: ["Privacy", "Terms", "Security"],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[#dec0b7] bg-[#fff1ec]">
      <div className="mx-auto flex w-full max-w-360 flex-col items-center gap-8 px-4 py-12 md:flex-row md:justify-between md:px-10">
        <div className="flex flex-col gap-2">
          <span className="font-mono text-[14px] font-bold leading-5 tracking-[0.02em] text-[#241915]">
            Disburse
          </span>
          <p className="max-w-xs text-[14px] leading-5 text-[#57423b]">
            Programmable payroll infrastructure for the decentralized
            economy.
          </p>
          <div className="mt-4 flex w-fit items-center gap-2 rounded-[6px] border border-[#dec0b7] bg-white px-3 py-1">
            <div className="flex size-5 items-center justify-center rounded-full bg-black">
              <div className="size-3 rotate-45 bg-white" />
            </div>
            <span className="font-mono text-[12px] leading-4 tracking-wider">
              Built on Stellar Protocol
            </span>
          </div>
        </div>
        <div className="flex flex-wrap gap-12">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title} className="space-y-4">
              <h6 className="font-mono text-[14px] font-bold leading-5 tracking-[0.02em]">
                {column.title}
              </h6>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[14px] leading-5 text-[#57423b] transition-colors hover:text-[#a03c11]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-360 items-center justify-between border-t border-[#dec0b7]/10 px-4 py-6 md:px-10">
        <span className="font-mono text-[12px] leading-4 tracking-wider text-[#57423b]">
          © {new Date().getFullYear()} Disburse Labs. All rights reserved.
        </span>
        <div className="flex gap-4">
          <span className="material-symbols-outlined cursor-pointer text-[#57423b] hover:text-[#a03c11]">
            public
          </span>
          <span className="material-symbols-outlined cursor-pointer text-[#57423b] hover:text-[#a03c11]">
            terminal
          </span>
        </div>
      </div>
    </footer>
  );
}
