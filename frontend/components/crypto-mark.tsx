import Image from "next/image";

export default function CryptoMark() {
  return (
    <span className="brand-icon" aria-hidden="true">
      <Image src="/crypto-mark.svg" alt="" width={40} height={40} />
    </span>
  );
}
