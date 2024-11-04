import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Layout, Navbar } from "nextra-theme-docs";
import "nextra-theme-docs/style.css";
import { Analytics } from "@vercel/analytics/react";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";

import { Button } from "@/components/button";
import { Footer } from "@/components/footer";
import "./globals.css";

export const { viewport } = Head;

export const metadata: Metadata = {
  metadataBase: new URL("https://docs.w3gpt.ai"),
  title: {
    template: "%s - Web3GPT Docs",
    absolute: "Web3GPT Docs",
  },
  description: "Web3GPT Documentation",
  applicationName: "Web3GPT",
  generator: "Next.js",
  appleWebApp: {
    title: "Web3GPT Docs",
  },
  other: {
    "msapplication-TileColor": "#000000",
    "msapplication-TileImage": "/ms-icon-144x144.png",
  },
  twitter: {
    site: "@w3gptai",
    creator: "@0xSoko",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navbar = (
    <Navbar
      logo={
        <Image
          src="/assets/web3gpt-logo.svg"
          alt="Web3GPT"
          width={100}
          height={100}
        />
      }
    >
      <Button asChild size="sm" className="text-sm">
        <Link href="https://w3gpt.ai" target="_blank">
          App
        </Link>
      </Button>
    </Navbar>
  );
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          footer={<Footer />}
          editLink="Edit this page on GitHub"
          docsRepositoryBase="https://github.com/markeljan/web3gpt-docs/tree/main"
          sidebar={{ defaultMenuCollapseLevel: 2 }}
          pageMap={await getPageMap()}
        >
          <div className="max-w-full md:max-w-7xl mx-auto">{children}</div>
        </Layout>
        <Analytics />
      </body>
    </html>
  );
}
