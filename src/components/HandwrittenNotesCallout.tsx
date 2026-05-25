import Image from "next/image";

export default function HandwrittenNotesCallout() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap justify-center gap-8">
        <div
          className="rounded bg-[#f5f0e8] p-3 shadow-lg"
          style={{ transform: "rotate(-2deg)" }}
        >
          <Image
            src="/handwritten/1.jpeg"
            alt="Handwritten planning notes — page 1"
            width={320}
            height={240}
            className="rounded object-cover"
          />
        </div>
        <div
          className="rounded bg-[#f5f0e8] p-3 shadow-lg"
          style={{ transform: "rotate(1.5deg)" }}
        >
          <Image
            src="/handwritten/2.jpeg"
            alt="Handwritten planning notes — page 2"
            width={320}
            height={240}
            className="rounded object-cover"
          />
        </div>
      </div>
      <p className="text-center text-sm italic text-[var(--text-dim)]">
        "These notes were sketched during a planning session — this is how I actually think through projects."
      </p>
    </div>
  );
}
