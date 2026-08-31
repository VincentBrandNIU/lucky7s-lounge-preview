import Link from 'next/link';

const concepts = [
  { href: '/', label: '01', name: 'The Velvet Room' },
  { href: '/heritage', label: '02', name: 'Main Street Social' },
  { href: '/after-dark', label: '03', name: 'Lucky After Dark' },
];

export function ConceptSwitcher({ active }: { active: string }) {
  return (
    <div className="concept-bar" aria-label="Website concepts">
      <span className="concept-eyebrow">Lucky 7’s Lounge · Website concepts</span>
      <nav>
        {concepts.map((concept) => (
          <Link key={concept.href} href={concept.href} className={active === concept.href ? 'concept-link is-active' : 'concept-link'} aria-current={active === concept.href ? 'page' : undefined}>
            <span>{concept.label}</span> {concept.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
