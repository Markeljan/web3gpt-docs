import Link from "next/link";
import { cn } from "@/lib/utils";

import {
  IconGithub,
  IconNextraWide,
  IconTelegram,
  IconX,
} from "@/components/icons";

export const Footer = () => {
  return (
    <div className="flex h-16 max-w-full md:max-w-7xl items-center justify-between px-4 mx-auto mb-4">
      <div className="flex flex-col items-start gap-1 text-xs">
        <Link
          className="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer"
          href="https://x.com/0xsoko"
          target="_blank"
        >
          <p>Maintained by</p>
          soko.eth
        </Link>

        <Link
          className="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer"
          href="https://nextra.site"
          target="_blank"
        >
          <p>Powered by</p>
          <IconNextraWide />
        </Link>
      </div>

      <div className="flex items-center gap-2">
        <Link
          className="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer"
          href="https://github.com/markeljan/web3gpt"
          target="_blank"
        >
          <IconGithub />
        </Link>
        <Link
          className="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer"
          href="https://x.com/web3gpt_app"
          target="_blank"
        >
          <IconX />
        </Link>
        <Link
          className="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer"
          href="https://t.me/w3gptai"
          target="_blank"
        >
          <IconTelegram />
        </Link>
      </div>
    </div>
  );
};
