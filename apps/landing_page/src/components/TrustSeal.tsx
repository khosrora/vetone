// components/TrustSeal.js
import Link from "next/link";
import Image from "next/image";

const TrustSeal = () => {
  return (
    <Link
      href="https://trustseal.enamad.ir/?id=378684&Code=usJm5unRlUs6NBXNSzWyw9uut1VQGpkS"
      passHref
      referrerPolicy="origin"
      target="_blank"
      rel="noopener noreferrer" // Security best practice
    >
      {/* Anchor tag for external link */}
      <Image
        src="https://trustseal.enamad.ir/logo.aspx?id=378684&Code=usJm5unRlUs6NBXNSzWyw9uut1VQGpkS"
        alt="Trust Seal"
        width={100} // Set based on actual image dimensions
        height={100} // Set based on actual image dimensions
        style={{ cursor: "pointer" }}
        unoptimized // Disable optimization if seal doesn't load
        referrerPolicy="origin"
      />
    </Link>
  );
};

export default TrustSeal;
