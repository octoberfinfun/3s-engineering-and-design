'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Logo } from './Logo';
import { mainNavigation } from '@/data/navigation';
import { company } from '@/data/company';

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <div className="utility-bar">
        <div className="site-shell utility-bar__inner">
          <span>Engineering &amp; Design • Midland • Arlington • Katy</span>
          <div className="utility-bar__contact">
            <a href={`tel:${company.phone.replace(/\D/g, '')}`}>{company.phone}</a>
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </div>
        </div>
      </div>
      <header className="site-header">
        <div className="site-shell site-header__inner">
          <Logo />
          <nav className="desktop-nav" aria-label="Primary navigation">
            {mainNavigation.map((item) => {
              if ('children' in item) {
                return (
                  <div className="desktop-nav__group" key={item.title}>
                    <Link className="desktop-nav__link desktop-nav__link--services" href={item.href}>
                      {item.title}<span className="nav-chevron" aria-hidden="true">⌄</span>
                    </Link>
                    <div className="services-menu" role="menu">
                      <div className="services-menu__grid">
                        {item.children.map((child) => (
                          <Link key={child.href} href={child.href} className="services-menu__link" role="menuitem">
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              const active = pathname === item.href;
              return (
                <Link className={`desktop-nav__link${active ? ' is-active' : ''}`} href={item.href} key={item.href}>
                  {item.title}
                </Link>
              );
            })}
          </nav>
          <button
            className={`menu-toggle${mobileOpen ? ' is-open' : ''}`}
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileOpen((value) => !value)}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>
      <div id="mobile-navigation" className={`mobile-nav${mobileOpen ? ' is-open' : ''}`} aria-hidden={!mobileOpen}>
        <div className="mobile-nav__panel">
          {mainNavigation.map((item) => {
            if ('children' in item) {
              return (
                <div className="mobile-nav__services" key={item.title}>
                  <button
                    type="button"
                    className="mobile-nav__toplink mobile-nav__accordion"
                    aria-expanded={servicesOpen}
                    aria-controls="mobile-services"
                    onClick={() => setServicesOpen((value) => !value)}
                  >
                    <span>{item.title}</span><span aria-hidden="true">{servicesOpen ? '−' : '+'}</span>
                  </button>
                  <div id="mobile-services" className={`mobile-nav__submenu${servicesOpen ? ' is-open' : ''}`}>
                    {item.children.map((child) => (
                      <Link href={child.href} key={child.href}>{child.title}</Link>
                    ))}
                  </div>
                </div>
              );
            }
            return <Link className="mobile-nav__toplink" href={item.href} key={item.href}>{item.title}</Link>;
          })}
          <div className="mobile-nav__contact">
            <a href={`tel:${company.phone.replace(/\D/g, '')}`}>{company.phone}</a>
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </div>
        </div>
      </div>
    </>
  );
}
