const columns = [
  {
    title: 'Token',
    links: ['Mechanism', 'Tokenomics', 'Distribution History', 'Contract Address'],
  },
  {
    title: 'Verify',
    links: ['Rewards Pool Address', 'Solana Explorer', 'Fee Collection Records', 'xStocks (TSMx)'],
  },
  {
    title: 'Legal',
    links: ['Risk Disclosure', 'Terms of Use', 'Privacy Policy', 'Jurisdiction Notices'],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-black/[0.07] bg-ink-850/60">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <img src="/semi-logo.png" alt="SEMI" className="h-12 w-auto" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-mist-dim">
            The first Solana memecoin to pay TSMx rewards. One mechanism: a
            4% fee on every trade, returned to holders as TSMC xStock every
            time the pool hits $200, split by holdings and publicly verifiable.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 flex max-w-sm overflow-hidden rounded-sm border border-black/10 focus-within:border-black/25"
          >
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="w-full bg-ink-900 px-4 py-3 text-[13px] text-mist placeholder:text-mist-faint focus:outline-none"
            />
            <button
              type="submit"
              className="whitespace-nowrap bg-mist px-5 text-[12px] font-medium text-ink-950 transition-colors hover:bg-mist-dim"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-2 text-[11px] text-mist-faint">
            Mechanism changes and distribution reports. Never price talk.
          </p>

          <div className="mt-8 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-mist-faint">
            <span className="h-1.5 w-1.5 animate-pulseSoft rounded-full bg-azure" />
            Payouts operating normally
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="mb-5 font-mono text-[10px] uppercase tracking-[0.24em] text-mist-faint">
              {col.title}
            </h4>
            <ul className="space-y-3">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-mist-dim transition-colors hover:text-mist">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-black/[0.07] px-6 py-6">
        <div className="mx-auto max-w-7xl">
          <p className="mx-auto max-w-4xl text-center text-[11px] leading-relaxed text-mist-faint">
            SEMI is a memecoin and a speculative digital asset, not an
            investment product, deposit, or income scheme. Payouts are funded
            solely by trading fees, vary with volume, and may be zero for any
            period. Past payouts do not predict future ones. The token’s
            market price can decline regardless of rewards received, and you
            may lose your entire outlay. TSMx is a tokenized representation of
            TSMC stock issued by a third party, not a brokerage holding, and
            carries no shareholder rights; SEMI has no relationship with TSMC
            or its issuer. The project reserve is a treasury, not redemption
            backing. Nothing on this site is financial advice.
          </p>
          <p className="mt-5 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-mist-faint">
            © {new Date().getFullYear()} SEMI
          </p>
        </div>
      </div>
    </footer>
  )
}
