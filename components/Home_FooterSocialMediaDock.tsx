import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";
import { links } from "@/lib/utils";
import Link from "next/link";

export const FooterSocialMediaDock = () => {

  return (
    <div className="flex items-center mt-10 justify-center w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
        desktopClassName="max-sm:hidden"
      />
      <div className="sm:hidden flex justify-center items-center gap-2 mb-4">
        {/* social media link on circles mapp  */}
        {links.map((link, index) => (
          <div>
            <Link href={link.href} key={index}>
            <Image src={link.icon} height={10} width={20} alt={link.title} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

// export  FooterSocialMediaDock