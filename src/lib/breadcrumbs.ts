export interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
  disabled?: boolean;
}

export function workBreadcrumbs(current?: { label: string }): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Work', href: current ? '/work' : undefined, active: !current },
  ];

  if (current) {
    items.push({ label: current.label, active: true });
  }

  return items;
}

export function teachingBreadcrumbs(current?: { label: string }): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Teaching', href: current ? '/teaching' : undefined, active: !current },
  ];

  if (current) {
    items.push({ label: current.label, active: true });
  }

  return items;
}
