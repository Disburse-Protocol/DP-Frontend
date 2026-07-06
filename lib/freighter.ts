// Wallet connection via the Freighter browser extension. See ARCHITECTURE.md,
// "Wallet Integration" — all signing goes through Freighter, no private keys
// touch the frontend.
//
// Tracked as a Wave issue: "Add Freighter wallet connection with address
// display and disconnect" in WAVE_REPO_STANDARDS.md.
export async function connectFreighter(): Promise<string> {
  throw new Error("not implemented: connectFreighter — see frontend repo issue tracker");
}
