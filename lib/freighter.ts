// Wallet connection via the Freighter browser extension. See ARCHITECTURE.md,
// "Wallet Integration" — all signing goes through Freighter, no private keys
// touch the frontend.
import {
  getAddress,
  isAllowed,
  isConnected,
  requestAccess,
} from "@stellar/freighter-api";

export class FreighterNotInstalledError extends Error {
  constructor() {
    super("Freighter extension isn't installed.");
    this.name = "FreighterNotInstalledError";
  }
}

export class FreighterConnectionError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "FreighterConnectionError";
  }
}

/** Prompts the user to connect Freighter and returns their wallet address. */
export async function connectFreighter(): Promise<string> {
  const connected = await isConnected();
  if (connected.error || !connected.isConnected) {
    throw new FreighterNotInstalledError();
  }

  const access = await requestAccess();
  if (access.error || !access.address) {
    throw new FreighterConnectionError(
      access.error?.message ?? "Freighter connection was rejected."
    );
  }

  return access.address;
}

/**
 * Returns the already-authorized wallet address without prompting, or null
 * if Freighter isn't installed or this site hasn't been granted access yet.
 */
export async function getConnectedAddress(): Promise<string | null> {
  const connected = await isConnected();
  if (connected.error || !connected.isConnected) return null;

  const allowed = await isAllowed();
  if (allowed.error || !allowed.isAllowed) return null;

  const { address, error } = await getAddress();
  if (error || !address) return null;
  return address;
}
