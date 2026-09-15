import {
  Building2,
  Cable,
  Construction,
  DraftingCompass,
  Droplets,
  HardHat,
} from 'lucide-react';

const icons = {
  DraftingCompass,
  Building2,
  Cable,
  Droplets,
  HardHat,
  Construction,
};

export default function ServiceIcon({ name, className = 'h-5 w-5' }) {
  const Icon = icons[name] || DraftingCompass;
  return <Icon className={className} aria-hidden="true" />;
}
