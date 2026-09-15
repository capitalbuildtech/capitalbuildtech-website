import './globals.css';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { company } from '@/data/company';

const siteUrl = 'https://capitalbuildtech.vercel.app';
const defaultDescription =
  'Capital BuildTech Engineering provides professional building design, engineering, construction management, site supervision, and project implementation services.';
const ogImage =
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.name} | Building Design, Engineering & Construction`,
    template: `%s | ${company.name}`,
  },
  description: defaultDescription,
  keywords: [
    'Capital BuildTech Engineering',
    'building design',
    'engineering',
    'construction management',
    'site supervision',
    'project implementation',
  ],
  openGraph: {
    type: 'website',
    title: `${company.name} | Building Design, Engineering & Construction`,
    description: defaultDescription,
    images: [ogImage],
    siteName: company.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${company.name} | Building Design, Engineering & Construction`,
    description: defaultDescription,
    images: [ogImage],
  },
};

export const viewport = {
  themeColor: '#171717',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (() => {
                const removeInjectedAttributes = (element) => {
                  element.removeAttribute('bis_skin_checked');
                  element.removeAttribute('bis_register');

                  Array.from(element.attributes).forEach((attribute) => {
                    if (attribute.name.startsWith('__processed_')) {
                      element.removeAttribute(attribute.name);
                    }
                  });
                };

                const cleanTree = (root) => {
                  if (root.nodeType !== Node.ELEMENT_NODE) return;

                  removeInjectedAttributes(root);
                  root.querySelectorAll('*').forEach(removeInjectedAttributes);
                };

                cleanTree(document.documentElement);

                new MutationObserver((mutations) => {
                  mutations.forEach((mutation) => {
                    if (mutation.type === 'attributes') {
                      removeInjectedAttributes(mutation.target);
                    }

                    mutation.addedNodes.forEach(cleanTree);
                  });
                }).observe(document.documentElement, {
                  subtree: true,
                  childList: true,
                  attributes: true,
                });
              })();
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- App Router root layout, not the legacy pages/_document */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning className="min-h-screen bg-brand-white text-brand-ink">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
