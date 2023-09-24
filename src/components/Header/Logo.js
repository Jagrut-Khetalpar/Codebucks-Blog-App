import Link from "next/link";
import Image from "next/image";

import profileImg from "../../../project files/profile-img.png";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light">
      <div className="w-16 rounded-full overflow-hidden border border-solid border-dark mr-4">
        <Image
          src={profileImg}
          alt="Codebucks"
          className="w-full h-auto rounded-full"
        />
      </div>
      <span className="font-bol text-xl">CodeBucks</span>
    </Link>
  );
};

export default Logo;