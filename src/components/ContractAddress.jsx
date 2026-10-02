import { useState } from 'react'

export const CONTRACT_ADDRESS = 'Semi19QNnfZyQnQVddwNJT8TD6NwR7CN9Zn8uVnVKfh'
export const BUY_URL = `https://jup.ag/swap/SOL-${CONTRACT_ADDRESS}`
export const EXPLORER_URL = `https://solscan.io/token/${CONTRACT_ADDRESS}`

// copyable contract-address pill: full address on larger screens, truncated on phones
export default function ContractAddress({ className = '' }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div
      className={`inline-flex max-w-full items-center gap-3 rounded-full border border-black/10 bg-black/[0.04] py-1.5 pl-4 pr-1.5 ${className}`}
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist-faint">CA</span>
      <span className="min-w-0 truncate font-mono text-[12px] text-mist">
        <span className="hidden sm:inline">{CONTRACT_ADDRESS}</span>
        <span className="sm:hidden">
          {CONTRACT_ADDRESS.slice(0, 6)}…{CONTRACT_ADDRESS.slice(-6)}
        </span>
      </span>
      <button
        type="button"
        onClick={copy}
        className={`flex-none rounded-full px-3 py-1 text-[11px] font-semibold transition-colors ${
          copied ? 'bg-[#30D158] text-ink-950' : 'bg-mist text-ink-950 hover:bg-mist-dim'
        }`}
      >
        {copied ? 'Copied ✓' : 'Copy'}
      </button>
    </div>
  )
}
