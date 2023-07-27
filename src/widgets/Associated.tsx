import Image from "next/image";
export default function Associated() {
  return (
    <div className="grid grid-cols-6 grid-flow-row max-w-7xl mx-auto items-center my-20 gap-10">
      <div className="rounded-s-full w-36 h-36 relative">
        <Image
          alt="logo"
          src={"/images/fcub.png"}
          fill
          className="object-cover "
        />
      </div>
      <div className="rounded-s-full w-36 h-36 relative">
        <Image
          alt="logo"
          src={"/images/kyoto.png"}
          fill
          className="object-cover "
        />
      </div>
      <div className="rounded-s-full w-36 h-36 relative">
        <Image
          alt="logo"
          src={"/images/sig.png"}
          fill
          className="object-cover "
        />
      </div>
      <div className="rounded-s-full w-36 h-36 relative">
        <Image
          alt="logo"
          src={"/images/umm.png"}
          fill
          className="object-cover "
        />
      </div>
      <div className="rounded-s-full w-36 h-36 relative">
        <Image
          alt="logo"
          src={"/images/usu.png"}
          fill
          className="object-cover "
        />
      </div>
      <div className="rounded-s-full w-36 h-36 relative">
        <Image
          alt="logo"
          src={"/images/ver.png"}
          fill
          className="object-cover "
        />
      </div>
    </div>
  );
}
