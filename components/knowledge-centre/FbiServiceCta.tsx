import Image from "next/image";
import Link from "next/link";

export default function FbiServiceCta() {
  return (
    <section aria-labelledby="fbi-service-cta" className="my-8 rounded-2xl border border-red-500/25 bg-hive-elevated p-6 sm:p-8">
      <h2 id="fbi-service-cta" className="text-2xl font-bold tracking-tight text-white">
        Need Hive to Handle Your FBI Background Check?
      </h2>
      <p className="mt-4 leading-relaxed text-hive-muted">
        Hive assists with fingerprinting in China, fingerprint quality review and
        electronic FBI processing for eligible applicants through an FBI-approved
        channeler. Typical FBI results are available in 24–48 hours after an
        acceptable submission is confirmed; timing is not guaranteed.
      </p>
      <p className="mt-3 leading-relaxed text-hive-muted">
        Federal apostille assistance, translation coordination and international
        document delivery support are available where needed. Confirm the report
        and recipient requirements with Hive before processing.
      </p>
      <Link href="/contact/" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-red-600 px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-red-500 sm:w-auto">
        Start Your FBI Background Check
      </Link>
      <div className="mt-6 flex flex-col gap-5 border-t border-hive-border pt-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm">
          <a href="https://wa.me/8613764322474" className="text-red-400 underline underline-offset-4 hover:text-red-300">WhatsApp</a>
          <a href="mailto:sales@hiverelo.com" className="break-all text-red-400 underline underline-offset-4 hover:text-red-300">sales@hiverelo.com</a>
        </div>
        <figure className="flex items-center gap-3">
          <Image src="/wechat-qr.jpg" alt="WeChat QR code to contact Hive" width={96} height={96} className="shrink-0 rounded-xl border border-hive-border" />
          <figcaption className="max-w-32 text-xs leading-relaxed text-hive-muted">Scan to contact Hive on WeChat</figcaption>
        </figure>
      </div>
    </section>
  );
}
