import { ConnectWalletButton } from "@/components/connect-wallet-button";

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-[#fff8f6] shadow-sm">
      <div className="mx-auto flex h-16 w-full max-w-360 items-center justify-between px-4 md:px-10">
        <div className="flex items-center gap-8">
          <span className="text-[24px] font-bold leading-8 text-[#a03c11]">
            Disburse
          </span>
          <div className="hidden items-center gap-6 md:flex">
            <a
              href="#"
              className="font-mono text-[14px] leading-5 tracking-[0.02em] text-[#57423b] transition-colors hover:text-[#a03c11]"
            >
              About
            </a>
            <a
              href="#"
              className="font-mono text-[14px] leading-5 tracking-[0.02em] text-[#57423b] transition-colors hover:text-[#a03c11]"
            >
              Docs
            </a>
            <a
              href="#"
              className="font-mono text-[14px] leading-5 tracking-[0.02em] text-[#57423b] transition-colors hover:text-[#a03c11]"
            >
              GitHub
            </a>
          </div>
        </div>
        <ConnectWalletButton className="h-auto rounded-[8px] bg-[#a03c11] px-6 py-2 font-mono text-[14px] leading-5 tracking-[0.02em] font-bold text-white transition-all hover:bg-[#a03c11] hover:opacity-80 active:scale-95" />
      </div>
    </nav>
  );
}
