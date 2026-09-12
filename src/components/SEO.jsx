import { useEffect } from 'react';

const defaultDescription =
  'Capital BuildTech Engineering provides professional building design, engineering, construction management, site supervision, and project implementation services.';

function setMeta(selector, attribute, value) {
  const element = document.head.querySelector(selector);
  if (element) {
    element.setAttribute(attribute, value);
  }
}

export default function SEO({
  title = 'Capital BuildTech Engineering | Building Design, Engineering & Construction',
  description = defaultDescription,
  image = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
}) {
  useEffect(() => {
    document.title = title;
    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:image"]', 'content', image);
  }, [title, description, image]);

  return null;
}
