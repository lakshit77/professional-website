import Image from "next/image";
import { brand } from "@/lib/branding";

const footerLinks = {
  Product: ["Features", "Pricing", "Integrations", "API"],
  Company: ["About", "Blog", "Careers", "Contact"],
  Resources: ["Documentation", "Help Center", "Community", "Status"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export default function Footer() {
  return (
    <footer className="border-t border-surface-border/50 bg-surface-base">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2.5 mb-5">
              <Image
                src={brand.logo.src}
                alt={brand.logo.alt}
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="font-display font-bold text-lg tracking-[-0.8px]">
                <span className="text-white">Chat</span>
                <span className="text-brand-500">Syncs</span>
              </span>
            </a>
            <p className="text-sm text-[#64748b] font-body leading-relaxed">
              {brand.tagline}
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display font-semibold text-sm text-white mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm font-body text-[#64748b] hover:text-[#94a3b8] transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-surface-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#64748b] font-body">
            &copy; {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy", "Terms", "Cookies"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs text-[#64748b] hover:text-[#94a3b8] font-body transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
