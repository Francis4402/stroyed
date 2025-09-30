import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const services = [
    { name: 'GAME DEVELOPMENT', href: '#' },
    { name: 'ENGINEERING', href: '#' },
    { name: 'ART PRODUCTION', href: '#' },
  ];

  const quickLinks = [
    { name: 'OUR WORKS', href: '#' },
    { name: 'NEWS', href: '#' },
    { name: 'MEDIA KIT', href: '#' },
  ];

  const support = [
    { name: 'CAREERS', href: '#' },
    { name: 'VIRTUOS OFFICES', href: '#' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  // Custom icons for platforms not in lucide-react
  const CustomIcon = ({ type, className }: { type: string; className?: string }) => {
    if (type === 'artstation') {
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 17.723l2.027 3.505h.001a2.424 2.424 0 0 0 2.164 1.333h13.457l-2.792-4.838H0zm24 .025c0-.484-.143-.935-.388-1.314L15.728 2.728a2.424 2.424 0 0 0-2.142-1.289H9.419L21.598 22.54l1.92-3.325c.378-.637.482-.919.482-1.467zM9.419 13.533L5.415 6.673 1.41 13.533h8.009z"/>
        </svg>
      );
    }
    if (type === 'wechat') {
      return (
        <MessageCircle className={className} />
      );
    }
    if (type === 'weibo') {
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M10.098 20.323c-3.977.391-7.414-1.406-7.672-4.02-.259-2.609 2.759-5.047 6.74-5.441 3.979-.394 7.413 1.404 7.671 4.018.259 2.6-2.759 5.049-6.739 5.443zm8.979-8.944c-.337-.107-.562-.18-.389-.652.391-.991.435-1.845.012-2.456-.791-1.145-2.958-1.086-5.438-.035 0 0-.779.338-.579-.275.382-1.215.323-2.229-.174-2.818-.931-1.09-3.408.042-5.534 2.529-1.591 1.857-2.526 3.82-2.526 5.583 0 3.289 4.247 5.291 8.406 5.291 5.447 0 9.077-3.147 9.077-5.639.001-1.51-1.269-2.362-2.855-2.528zM4.756 17.555c.369.386 1.003.436 1.423.114.396-.305.524-.887.156-1.273-.356-.377-.986-.427-1.382-.11-.407.304-.555.881-.197 1.269zm15.591-6.601c.268.082.433.137.298.5-.301.754-.259 1.403-.009 1.867.604.88 2.255.829 4.145.024 0 0 .594-.257.441.208-.292.924-.247 1.695.132 2.143.71.836 2.601-.031 4.218-1.924 1.214-1.413 1.927-2.91 1.927-4.255 0-2.506-3.244-4.03-6.422-4.03-2.631 0-4.918 1.197-6.096 2.959l3.366 5.508z"/>
        </svg>
      );
    }
    if (type === 'twitter') {
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      );
    }
    if (type === 'discord') {
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
        </svg>
      );
    }
    if (type === 'tiktok') {
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      );
    }
    return null;
  };

  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-gray-300 mt-10">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16">
          {/* Get in Touch Section */}
          <div className="lg:col-span-1">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 uppercase tracking-tight">
              Get in Touch
            </h2>
            
            {/* Social Media Icons */}
            <div className="flex flex-wrap gap-4 mb-8">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <social.icon className="w-6 h-6" />
                </Link>
              ))}
              <Link href="#" aria-label="ArtStation" className="text-gray-400 hover:text-white transition-colors duration-200">
                <CustomIcon type="artstation" className="w-6 h-6" />
              </Link>
              <Link href="#" aria-label="WeChat" className="text-gray-400 hover:text-white transition-colors duration-200">
                <CustomIcon type="wechat" className="w-6 h-6" />
              </Link>
              <Link href="#" aria-label="Weibo" className="text-gray-400 hover:text-white transition-colors duration-200">
                <CustomIcon type="weibo" className="w-6 h-6" />
              </Link>
              <Link href="#" aria-label="Twitter/X" className="text-gray-400 hover:text-white transition-colors duration-200">
                <CustomIcon type="twitter" className="w-6 h-6" />
              </Link>
              <Link href="#" aria-label="Discord" className="text-gray-400 hover:text-white transition-colors duration-200">
                <CustomIcon type="discord" className="w-6 h-6" />
              </Link>
              <Link href="#" aria-label="TikTok" className="text-gray-400 hover:text-white transition-colors duration-200">
                <CustomIcon type="tiktok" className="w-6 h-6" />
              </Link>
            </div>

            <Link
              href="#"
              className="inline-block text-orange-400 hover:text-orange-300 font-semibold uppercase tracking-wide transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">
              Services
            </h3>
            <ul className="space-y-4">
              {services.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-white hover:text-orange-400 transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-white hover:text-orange-400 transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">
              Support
            </h3>
            <ul className="space-y-4">
              {support.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-white hover:text-orange-400 transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <span className="text-gray-400">© 2025 VIRTUOS</span>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                PRIVACY POLICY
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                CAREER PRIVACY NOTICE
              </Link>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;