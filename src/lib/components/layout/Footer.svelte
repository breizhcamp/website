<script>
  // Données pour les liens
  const socialLinks = [
    { 
      name: 'Twitter', 
      url: 'https://twitter.com/breizhcamp', 
      path: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' 
    },
    { 
      name: 'LinkedIn', 
      url: 'https://linkedin.com',
      path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 4a2 2 0 1 1-2 2 2 0 0 1 2-2z' 
    },
    { 
      name: 'YouTube', 
      url: 'https://youtube.com',
      path: 'M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z' 
    },
    { 
      name: 'Mastodon', 
      url: 'https://mastodon.social',
      path: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' 
    }
  ];

  const years = [2024, 2023, 2022, 2019, 2018, 2017, 2016, 2015, 2014, 2013];
</script>

<footer>
  <div class="footer-inner">
    
    <div class="footer-col brand">
      <p class="tagline">La conférence tech de référence en Bretagne depuis 2011.</p>
      
      <div class="socials">
        {#each socialLinks as link (link.name)}
          <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name} class="social-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d={link.path}/>
            </svg>
          </a>
        {/each}
      </div>
    </div>

    <div class="footer-col">
      <h4>Navigation</h4>
      <ul>
        <li><a href="#accueil">Accueil</a></li>
        <li><a href="#programme">Programme</a></li>
        <li><a href="#intervenants">Intervenants</a></li>
        <li><a href="#sponsors">Sponsors</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h4>Informations</h4>
      <ul>
        <li><a href="#code">Code de conduite</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#a11y">Accessibilité : conforme</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h4>Editions précédentes</h4>
      <p class="years-cloud">
        {#each years as year (year)}
          <a href="/{year}" class="year-link">{year}</a>{year !== years[years.length - 1] ? ', ' : ''}
        {/each}
      </p>
      
      <div class="eco-badge-container">
        <span class="eco-badge">EcoIndex A</span>
      </div>
    </div>

  </div>
</footer>

<style>
  footer {
    background-color: #0F172A;
    color: white;
    padding: 4rem 2rem;
    margin-top: auto;
  }

  .footer-inner {
    max-width: 1440px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
    gap: 3rem;
  }

  .tagline {
    color: #CBD5E1;
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    max-width: 280px;
  }

  .socials {
    display: flex;
    gap: 1.25rem;
  }

  .social-icon {
    color: white;
    opacity: 0.8;
    transition: opacity 0.2s;
  }
  
  .social-icon:hover {
    opacity: 1;
  }

  h4 {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: white;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  ul li {
    margin-bottom: 0.75rem;
  }

  a {
    color: #CBD5E1;
    text-decoration: none;
    font-size: 0.95rem;
    transition: color 0.2s;
  }

  a:hover {
    color: white;
    text-decoration: underline;
  }

  .years-cloud {
    color: #CBD5E1;
    font-size: 0.95rem;
    line-height: 1.8;
    margin-bottom: 2rem;
  }

  .year-link {
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 3px;
    color: white;
  }

  .eco-badge {
    display: inline-block;
    background-color: #16A34A;
    color: white;
    font-weight: 600;
    font-size: 0.85rem;
    padding: 0.4rem 1rem;
    border-radius: 9999px;
  }

  @media (max-width: 900px) {
    .footer-inner {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }
    
    .brand {
      border-bottom: 1px solid rgba(255,255,255,0.1);
      padding-bottom: 2rem;
    }
  }
</style>