import Image from "next/image";
export default function Logos() {
  return (
    <>
    <div className="flex justify-between items-center px-8 md:px-12 lg:px-28 flex-wrap mt-8 md:h-[139] h-auto">
    <Image src="/img/logo/zap1.png" alt="logo 1" width={100} height={90} objectFit="contain" />
    <Image src="/img/logo/pip2.png" alt="logo 1" width={107} height={109} objectFit="contain" />
    <Image src="/img/logo/cib3.avif" alt="logo 1" width={135} height={139} objectFit="contain" />
    <Image src="/img/logo/z4.png" alt="logo 1" width={63} height={65} objectFit="contain" />
    <Image src="/img/logo/bt5.gif" alt="logo 1" width={98} height={101} objectFit="contain" />
    <Image src="/img/logo/pd6.webp" alt="logo 1" width={113} height={115} objectFit="contain" />
    <Image src="/img/logo/moz7.png" alt="logo 1" width={84} height={87} objectFit="contain" />
    </div>
    </>
  );
}
