<script lang="ts">
	import { communities } from '$lib/config/communities';

	// État des sections dépliables
	let organisationOpen = $state(false);
	let comiteOpen = $state(false);
	let assoOpen = $state(false);

	function getSocialIcon(type: string) {
		switch (type) {
			case 'twitter':
				return 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z';
			case 'linkedin':
				return 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z';
			case 'mastodon':
				return 'M21.327 8.566c0-4.339-2.843-5.61-2.843-5.61-1.433-.658-3.894-.935-6.451-.956h-.063c-2.557.021-5.016.298-6.45.956 0 0-2.843 1.272-2.843 5.61 0 .993-.019 2.181.012 3.441.103 4.243.778 8.425 4.701 9.463 1.809.479 3.362.579 4.612.51 2.268-.126 3.541-.809 3.541-.809l-.075-1.646s-1.621.511-3.441.449c-1.804-.062-3.707-.194-3.999-2.409a4.523 4.523 0 01-.04-.621s1.77.433 4.014.536c1.372.063 2.658-.08 3.965-.236 2.506-.299 4.688-1.843 4.962-3.254.434-2.223.398-5.424.398-5.424zm-3.353 5.59h-2.081V9.057c0-1.075-.452-1.62-1.357-1.62-1 0-1.501.647-1.501 1.927v2.791h-2.069V9.364c0-1.28-.501-1.927-1.502-1.927-.905 0-1.357.546-1.357 1.62v5.099H6.026V8.903c0-1.074.273-1.927.823-2.558.566-.631 1.307-.955 2.228-.955 1.065 0 1.872.409 2.405 1.228l.518.869.519-.869c.533-.819 1.34-1.228 2.405-1.228.92 0 1.662.324 2.228.955.549.631.822 1.484.822 2.558v5.253z';
			default:
				return '';
		}
	}

	function getLinkIcon(url: string) {
		if (url.includes('meetup.com')) {
			return 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z';
		}
		// Icône générique de site web
		return 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z';
	}

	// Données de l'équipe d'organisation
	const equipeOrganisation = [
		{ nom: 'Alexandre Thomazo', photo: '/team/alexlg.jpg' },
		{ nom: 'Annelore Bidaux', photo: '/team/annelore-bidaux.jpeg' },
		{ nom: 'Benoit Miedan-Gros', photo: '/team/bmiedangros.jpg' },
		{ nom: 'Caroline Mouden', photo: '/team/CarolineMouden.jpg' },
		{ nom: 'Etienne Besson', photo: '/team/etienne_besson.jpg' },
		{ nom: 'Gaël Salaün', photo: '/team/gsalaun1.jpg' },
		{ nom: 'Hermann Nsounga', photo: '/team/hermann-n.jpeg' },
		{ nom: 'Johanna Duigou', photo: '/team/johanna_duigou.jpg' },
		{ nom: 'Julien Coste', photo: '/team/CosteJulien.png' },
		{ nom: 'Julien Stephan', photo: '/team/julienstephan.jpeg' },
		{ nom: 'Laurent Huet', photo: '/team/lhuet35.png' },
		{ nom: 'Luc Sorel-Giffo', photo: '/team/lucsorelgiffo.jpg' },
		{ nom: 'Marc Audefroy', photo: '/team/MarcAudefroy.jpg' },
		{ nom: 'Maxime Odye', photo: '/team/MaxOdye.jpg' },
		{ nom: 'Nicolas Ledez', photo: '/team/nledez.jpg' },
		{ nom: 'Pascal Le Merrer', photo: '/team/pascallemerrer.jpeg' },
		{ nom: 'Sébastien Chédor', photo: '/team/SebastienChedor.jpg' },
		{ nom: 'Sylvain Révéreault', photo: '/team/srevereault.jpg' },
		{ nom: 'Yoann Dubreuil', photo: '/team/yoanndubreuil.jpg' }
	];

	// Données des membres du bureau avec photos
	const membresBureau = [
		{ nom: 'Sylvain Révéreault', photo: '/team/srevereault.jpg' },
		{ nom: 'Jean-Louis Jouannic', photo: '/team/jljouannic.png' },
		{ nom: 'Julien Coste', photo: '/team/CosteJulien.png' },
		{ nom: 'Laurent Huet', photo: '/team/lhuet35.png' },
		{ nom: 'Johanna Duigou', photo: '/team/johanna_duigou.jpg' },
		{ nom: 'Loïc Guibert', photo: '/team/loicguibert.png' },
		{ nom: 'Nicolas Ledez', photo: '/team/nledez.jpg' },
		{ nom: 'Yoann Dubreuil', photo: '/team/yoanndubreuil.jpg' },
		{ nom: 'Alexandre Thomazo', photo: '/team/alexlg.jpg' }
	];

	// Données des anciens membres du bureau
	const anciensMembresBureau = [
		{ nom: 'Sébastien Brousse', photo: '/team/seb_brousse.jpg' },
		{ nom: 'Nicolas De Loof', photo: '/team/ndeloof.jpg' }
	];
	const comiteProgramme = [
		{ nom: 'Alexandre Thomazo', photo: '/team/alexlg.jpg' },
		{ nom: 'Guillaume Collic', photo: '/team/gcollic.png' },
		{ nom: 'Benoît Masson', photo: '/team/benoitmasson.png' },
		{ nom: 'Gaël Salaün', photo: '/team/gsalaun1.jpg' },
		{ nom: 'Pascal Le Merrer', photo: '/team/pascallemerrer.jpeg' },
		{ nom: 'Nicolas Pennec', photo: '/team/NicoPennec.jpeg' },
		{ nom: 'Sylvain Révéreault', photo: '/team/srevereault.jpg' },
		{ nom: 'Sylvain Guernion', photo: '/team/sguernion.jpg' },
		{ nom: 'Luc Sorel-Giffo', photo: '/team/lucsorelgiffo.jpg' },
		{ nom: 'Caroline Mouden', photo: '/team/CarolineMouden.jpg' },
		{ nom: 'Sylvain Tranchand', photo: '/team/sylvain_tranchand.jpg' },
		{ nom: 'Benoit Miedan-Gros', photo: '/team/bmiedangros.jpg' },
		{ nom: 'Sébastien Chédor', photo: '/team/SebastienChedor.jpg' },
		{ nom: 'Julien Stephan', photo: '/team/julienstephan.jpeg' },
		{ nom: 'Maxime Odye', photo: '/team/MaxOdye.jpg' },
		{ nom: 'Jean-Louis Jouannic', photo: '/team/jljouannic.png' },
		{ nom: 'Christopher Louët', photo: '/team/christopher_louet.jpg' }
	];

	function toggleSection(section: 'organisation' | 'comite' | 'asso') {
		if (section === 'organisation') {
			organisationOpen = !organisationOpen;
		} else if (section === 'comite') {
			comiteOpen = !comiteOpen;
		} else if (section === 'asso') {
			assoOpen = !assoOpen;
		}
	}

	function handleKeydown(event: KeyboardEvent, section: 'organisation' | 'comite' | 'asso') {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			toggleSection(section);
		}
	}
</script>

<svelte:head>
	<title>Équipe - BreizhCamp 2027</title>
	<meta
		name="description"
		content="Découvrez l'équipe de bénévoles qui organise le BreizhCamp et l'association qui porte l'événement."
	/>
	<meta property="og:title" content="Équipe - BreizhCamp 2027" />
	<meta
		property="og:description"
		content="Découvrez l'équipe de bénévoles qui organise le BreizhCamp et l'association qui porte l'événement."
	/>
	<meta property="og:type" content="website" />
</svelte:head>

<main class="main-content">
	<div class="container">
		<!-- En-tête -->
		<header class="page-header">
			<h1>L'équipe BreizhCamp</h1>
			<p class="page-description">
				Découvrez les bénévoles passionnés qui organisent le BreizhCamp et l'association qui
				porte cet événement.
			</p>
		</header>

		<!-- Section Organisation -->
		<section class="team-section" aria-labelledby="organisation-heading">
			<button
				class="section-toggle"
				onclick={() => toggleSection('organisation')}
				onkeydown={(e) => handleKeydown(e, 'organisation')}
				aria-expanded={organisationOpen}
				aria-controls="organisation-content"
				type="button"
			>
				<h2 id="organisation-heading">
					<svg
						class="toggle-icon"
						class:rotated={organisationOpen}
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="currentColor"
						aria-hidden="true"
					>
						<path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
					</svg>
					Organisation
				</h2>
				<span
					class="member-count"
					aria-label="{equipeOrganisation.length} membres dans l'équipe d'organisation"
					>{equipeOrganisation.length} membres</span
				>
			</button>

			{#if organisationOpen}
				<div
					class="section-content"
					id="organisation-content"
					role="region"
					aria-labelledby="organisation-heading"
				>
					<p class="section-description">
						Le BreizhCamp est organisé par une équipe de bénévoles survitaminée qui
						s'active en coulisse.
					</p>
					<div class="team-grid" role="list">
						{#each equipeOrganisation as membre (membre.nom)}
							<div class="member-card" role="listitem">
								<div class="member-photo">
									<img
										src={membre.photo}
										alt="Photo de {membre.nom}"
										loading="lazy"
									/>
								</div>
								<h3 class="member-name">{membre.nom}</h3>
							</div>
						{/each}
					</div>
				</div>
			{/if}
		</section>

		<!-- Section Comité Programme -->
		<section class="team-section" aria-labelledby="comite-heading">
			<button
				class="section-toggle"
				onclick={() => toggleSection('comite')}
				onkeydown={(e) => handleKeydown(e, 'comite')}
				aria-expanded={comiteOpen}
				aria-controls="comite-content"
				type="button"
			>
				<h2 id="comite-heading">
					<svg
						class="toggle-icon"
						class:rotated={comiteOpen}
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="currentColor"
						aria-hidden="true"
					>
						<path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
					</svg>
					Comité programme
				</h2>
				<span
					class="member-count"
					aria-label="{comiteProgramme.length} membres dans le comité programme"
					>{comiteProgramme.length} membres</span
				>
			</button>

			{#if comiteOpen}
				<div
					class="section-content"
					id="comite-content"
					role="region"
					aria-labelledby="comite-heading"
				>
					<p class="section-description">
						Le programme est composé à partir des votes des membres des communautés
						techniques de Rennes, pour assurer un programme diversifié et représentatif
						de notre écosystème.
					</p>
					<div class="team-grid" role="list">
						{#each comiteProgramme as membre (membre.nom)}
							<div class="member-card" role="listitem">
								<div class="member-photo">
									<img
										src={membre.photo}
										alt="Photo de {membre.nom}"
										loading="lazy"
									/>
								</div>
								<h3 class="member-name">{membre.nom}</h3>
							</div>
						{/each}
					</div>
				</div>
			{/if}
		</section>

		<!-- Section Association -->
		<section class="team-section" aria-labelledby="asso-heading">
			<button
				class="section-toggle"
				onclick={() => toggleSection('asso')}
				onkeydown={(e) => handleKeydown(e, 'asso')}
				aria-expanded={assoOpen}
				aria-controls="asso-content"
				type="button"
			>
				<h2 id="asso-heading">
					<svg
						class="toggle-icon"
						class:rotated={assoOpen}
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="currentColor"
						aria-hidden="true"
					>
						<path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
					</svg>
					Association
				</h2>
			</button>

			{#if assoOpen}
				<div
					class="section-content"
					id="asso-content"
					role="region"
					aria-labelledby="asso-heading"
				>
					<div class="asso-content">
						<!-- Association principale -->
						<div class="main-association">
							<h3>
								<svg
									class="section-icon"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										d="M12 3L2 12h3v8h14v-8h3L12 3zm0 2.5L18.5 12H17v6H7v-6H5.5L12 5.5z"
									/>
									<rect x="9" y="14" width="2" height="4" />
									<rect x="13" y="14" width="2" height="4" />
								</svg>
								Association principale
							</h3>
							<div class="association-card">
								<div class="association-header">
									<img
										src="/breizhcamp-logo-2026.svg"
										alt="Logo BreizhCamp"
										class="association-logo"
									/>
									<div class="association-info">
										<h4>BreizhCamp</h4>
										<p>
											Association loi 1901 dédiée à l'organisation
											d'événements autour de l'ingénierie informatique
											(conférence annuelle + animation de User Groups locaux).
										</p>
									</div>
								</div>
								<div class="contact-info">
									<a
										href="mailto:contact@breizhcamp.org"
										class="contact-email"
										aria-label="Envoyer un email à contact@breizhcamp.org"
									>
										<svg
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="currentColor"
											aria-hidden="true"
										>
											<path
												d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
											/>
										</svg>
										contact@breizhcamp.org
									</a>
								</div>
							</div>
						</div>

						<!-- Membres du bureau -->
						<div class="bureau-section">
							<h3>
								<svg
									class="section-icon"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"
									/>
									<circle cx="18" cy="8" r="2" fill="var(--orange)" />
									<circle cx="6" cy="8" r="2" fill="var(--orange)" />
								</svg>
								Membres actuels du bureau
							</h3>
							<div class="bureau-grid" role="list">
								{#each membresBureau as membre (membre.nom)}
									<article class="bureau-member-card" role="listitem">
										<div class="bureau-member-photo">
											{#if membre.photo}
												<img
													src={membre.photo}
													alt="Photo de {membre.nom}"
													loading="lazy"
												/>
											{:else}
												<div
													class="photo-placeholder"
													aria-label="Photo non disponible"
												>
													<svg
														width="40"
														height="40"
														viewBox="0 0 24 24"
														fill="currentColor"
														aria-hidden="true"
													>
														<path
															d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
														/>
													</svg>
												</div>
											{/if}
										</div>
										<h4 class="bureau-member-name">{membre.nom}</h4>
									</article>
								{/each}
							</div>
						</div>

						<!-- Anciens membres -->
						<div class="former-members-section">
							<h3>
								<svg
									class="section-icon"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
									/>
								</svg>
								Anciens membres du bureau
							</h3>
							<div class="bureau-grid" role="list">
								{#each anciensMembresBureau as membre (membre.nom)}
									<article class="bureau-member-card former" role="listitem">
										<div class="bureau-member-photo">
											{#if membre.photo}
												<img
													src={membre.photo}
													alt="Photo de {membre.nom}"
													loading="lazy"
												/>
											{:else}
												<div
													class="photo-placeholder"
													aria-label="Photo non disponible"
												>
													<svg
														width="40"
														height="40"
														viewBox="0 0 24 24"
														fill="currentColor"
														aria-hidden="true"
													>
														<path
															d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
														/>
													</svg>
												</div>
											{/if}
										</div>
										<h4 class="bureau-member-name">{membre.nom}</h4>
									</article>
								{/each}
							</div>
						</div>

						<!-- User Groups -->
						<div class="user-groups-section">
							<h3>
								<svg
									class="section-icon"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-1 16H9V7h9v14z"
									/>
								</svg>
								User Groups / Meetups rattachés au BreizhCamp
							</h3>
							<div class="groups-list" role="list">
								{#each communities as community (community.name)}
									<article class="group-item" role="listitem">
										<div class="group-header">
											<img
												src={community.logo}
												alt="Logo {community.name}"
												class="group-logo"
												loading="lazy"
											/>
											<div class="group-info">
												<h4>{community.name}</h4>
												{#if community.text}
													<p class="group-description">
														{community.text}
													</p>
												{/if}
												<a
													href={community.url}
													target="_blank"
													rel="noopener noreferrer"
													class="community-link"
													aria-label="Visiter le site de {community.name} (ouvre dans un nouvel onglet)"
												>
													<svg
														width="16"
														height="16"
														viewBox="0 0 24 24"
														fill="currentColor"
														aria-hidden="true"
													>
														<path d={getLinkIcon(community.url)} />
													</svg>
													{community.url.includes('meetup.com')
														? 'Voir sur Meetup'
														: 'Visiter le site'}
												</a>
											</div>
										</div>
										<div class="group-organizers">
											<span class="organizers-label">Organisateurs :</span>
											<div class="organizers-grid" role="list">
												{#each community.organizers as organizer (organizer.name)}
													<div class="organizer-card" role="listitem">
														<img
															src={organizer.picture}
															alt="Photo de {organizer.name}"
															class="organizer-photo"
															loading="lazy"
														/>
														<div class="organizer-info">
															<span class="organizer-name"
																>{organizer.name}</span
															>
															{#if organizer.social}
																<a
																	href={organizer.social.url}
																	target="_blank"
																	rel="noopener noreferrer"
																	class="social-link"
																	aria-label="Profil {organizer
																		.social
																		.type} de {organizer.name} : @{organizer
																		.social
																		.handle} (ouvre dans un nouvel onglet)"
																>
																	<svg
																		width="14"
																		height="14"
																		viewBox="0 0 24 24"
																		fill="currentColor"
																		aria-hidden="true"
																	>
																		<path
																			d={getSocialIcon(
																				organizer.social
																					.type
																			)}
																		/>
																	</svg>
																	@{organizer.social.handle}
																</a>
															{/if}
														</div>
													</div>
												{/each}
											</div>
										</div>
									</article>
								{/each}
							</div>
						</div>
					</div>
				</div>
			{/if}
		</section>
	</div>
</main>

<style>
	.main-content {
		min-height: calc(100vh - 200px);
		padding: 2rem 0 4rem;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 1rem;
	}

	.page-header {
		text-align: center;
		margin-bottom: 3rem;
	}

	.page-header h1 {
		font-size: 2.5rem;
		font-weight: 700;
		color: var(--violet);
		margin-bottom: 1rem;
	}

	.page-description {
		font-size: 1.125rem;
		color: var(--neutral-700);
		max-width: 600px;
		margin: 0 auto;
		line-height: 1.6;
	}

	.team-section {
		margin-bottom: 2rem;
		border: 1px solid var(--neutral-200);
		border-radius: 12px;
		overflow: hidden;
		background: white;
		box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
	}

	.section-toggle {
		width: 100%;
		padding: 1.5rem;
		background: var(--neutral-50);
		border: none;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: space-between;
		text-align: left;
	}

	.section-toggle:hover {
		background: var(--neutral-100);
	}

	.section-toggle:focus-visible {
		outline: 3px solid var(--violet);
		outline-offset: 2px;
	}

	.section-toggle:focus:not(:focus-visible) {
		outline: none;
	}

	.section-toggle h2 {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		font-size: 1.5rem;
		font-weight: 600;
		color: var(--neutral-900);
		margin: 0;
	}

	.toggle-icon {
		color: var(--violet);
		flex-shrink: 0;
	}

	.toggle-icon.rotated {
		transform: rotate(90deg);
	}

	.member-count {
		font-size: 0.875rem;
		color: var(--neutral-700);
		background: var(--neutral-200);
		padding: 0.25rem 0.75rem;
		border-radius: 20px;
		font-weight: 500;
	}

	.section-content {
		padding: 2rem 1.5rem;
		border-top: 1px solid var(--neutral-200);
	}

	.section-description {
		font-size: 1rem;
		color: var(--neutral-700);
		margin-bottom: 2rem;
		line-height: 1.6;
	}

	.team-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 1.5rem;
	}

	.member-card {
		text-align: center;
		padding: 1rem;
		border-radius: 8px;
		background: var(--neutral-50);
		border: 1px solid var(--neutral-200);
	}

	.member-photo {
		width: 80px;
		height: 80px;
		margin: 0 auto 1rem;
		border-radius: 50%;
		overflow: hidden;
		background: var(--neutral-200);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.member-photo img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.member-name {
		font-size: 0.875rem;
		font-weight: 600;
		color: var(--neutral-900);
		margin: 0;
		line-height: 1.4;
	}

	.asso-content {
		max-width: 900px;
	}

	/* Association principale */
	.main-association {
		margin-bottom: 3rem;
	}

	.main-association h3 {
		font-size: 1.25rem;
		font-weight: 600;
		color: var(--violet);
		margin-bottom: 1.5rem;
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.association-card {
		background: linear-gradient(135deg, var(--neutral-50) 0%, white 100%);
		padding: 2rem;
		border-radius: 12px;
		border: 1px solid var(--neutral-200);
		position: relative;
		overflow: hidden;
	}

	.association-card::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 4px;
		background: linear-gradient(90deg, var(--violet), var(--orange));
	}

	.association-header {
		display: flex;
		align-items: flex-start;
		gap: 1.5rem;
		margin-bottom: 1.5rem;
	}

	.association-logo {
		width: 80px;
		height: 80px;
		flex-shrink: 0;
		object-fit: contain;
	}

	.association-info {
		flex: 1;
	}

	.association-card h4 {
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--violet);
		margin-bottom: 1rem;
	}

	.association-card p {
		font-size: 1rem;
		color: var(--neutral-700);
		line-height: 1.6;
		margin-bottom: 0;
	}

	.contact-info {
		font-size: 1rem;
		color: var(--orange);
		font-weight: 600;
	}

	.contact-email {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		color: var(--orange);
		text-decoration: none;
		font-weight: 600;
		padding: 0.75rem 1rem;
		background: white;
		border: 1px solid var(--orange);
		border-radius: 8px;
		font-size: 0.95rem;
	}

	.contact-email:hover {
		background: var(--orange);
		color: white;
	}

	.contact-email:focus-visible {
		outline: 3px solid var(--violet);
		outline-offset: 2px;
	}

	.contact-email:focus:not(:focus-visible) {
		outline: none;
	}

	/* Membres du bureau */
	.bureau-section,
	.former-members-section {
		margin-bottom: 3rem;
	}

	.bureau-section h3,
	.former-members-section h3,
	.user-groups-section h3 {
		font-size: 1.25rem;
		font-weight: 600;
		color: var(--violet);
		margin-bottom: 1.5rem;
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.section-icon {
		color: var(--orange);
		flex-shrink: 0;
	}

	.bureau-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
		gap: 1.5rem;
	}

	.bureau-member-card {
		background: white;
		padding: 1.5rem;
		border-radius: 12px;
		border: 1px solid var(--neutral-200);
		text-align: center;
		box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
		position: relative;
		overflow: hidden;
	}

	.bureau-member-card::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 4px;
		background: linear-gradient(90deg, var(--violet), var(--orange));
	}

	.bureau-member-card:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px 0 rgb(0 0 0 / 0.15);
	}

	.bureau-member-card.former {
		background: var(--neutral-100);
		opacity: 0.8;
	}

	.bureau-member-photo {
		width: 80px;
		height: 80px;
		margin: 0 auto 1rem;
		border-radius: 50%;
		overflow: hidden;
		background: var(--neutral-200);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.bureau-member-photo img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.photo-placeholder {
		color: var(--neutral-600);
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.bureau-member-name {
		font-size: 0.95rem;
		font-weight: 600;
		color: var(--neutral-900);
		margin: 0;
		line-height: 1.4;
	}

	.bureau-member-card.former .bureau-member-name {
		color: var(--neutral-700);
		font-style: italic;
	}

	/* User Groups */
	.user-groups-section {
		margin-bottom: 2rem;
	}

	.groups-list {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.group-item {
		background: white;
		padding: 2rem;
		border-radius: 12px;
		border: 1px solid var(--neutral-200);
		box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
		position: relative;
		overflow: hidden;
	}

	.group-item::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 4px;
		height: 100%;
		background: var(--violet);
	}

	.group-item:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px 0 rgb(0 0 0 / 0.15);
	}

	.group-header {
		display: flex;
		align-items: flex-start;
		gap: 1.25rem;
		margin-bottom: 1.5rem;
		padding-bottom: 1.5rem;
		border-bottom: 1px solid var(--neutral-200);
	}

	.group-logo {
		width: 100px;
		height: 100px;
		object-fit: contain;
		flex-shrink: 0;
		border-radius: 12px;
		background: var(--neutral-50);
		padding: 0.75rem;
		border: 1px solid var(--neutral-200);
	}

	.group-info {
		flex: 1;
	}

	.group-info h4 {
		font-size: 1.35rem;
		font-weight: 600;
		margin: 0 0 0.5rem 0;
		color: var(--violet);
	}

	.group-description {
		font-size: 0.95rem;
		color: var(--neutral-700);
		margin: 0 0 0.75rem 0;
		line-height: 1.6;
		font-style: italic;
	}

	.community-link {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem 1rem;
		background: var(--violet);
		color: white;
		text-decoration: none;
		border-radius: 6px;
		font-size: 0.875rem;
		font-weight: 500;
		transition: all 0.2s;
	}

	.community-link:hover {
		background: var(--orange);
		transform: translateY(-1px);
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
	}

	.community-link:focus-visible {
		outline: 3px solid var(--neutral-900);
		outline-offset: 2px;
	}

	.community-link:focus:not(:focus-visible) {
		outline: none;
	}

	.community-link svg {
		flex-shrink: 0;
	}

	.group-organizers {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.organizers-label {
		font-size: 0.875rem;
		font-weight: 600;
		color: var(--neutral-700);
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.organizers-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 1rem;
	}

	.organizer-card {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.75rem;
		background: var(--neutral-50);
		border-radius: 8px;
		border: 1px solid var(--neutral-200);
	}

	.organizer-card:hover {
		background: white;
		border-color: var(--violet);
	}

	.organizer-photo {
		width: 48px;
		height: 48px;
		border-radius: 50%;
		object-fit: cover;
		border: 2px solid var(--neutral-200);
		flex-shrink: 0;
	}

	.organizer-info {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		flex: 1;
		min-width: 0;
	}

	.organizer-name {
		font-size: 0.875rem;
		font-weight: 600;
		color: var(--neutral-900);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.social-link {
		display: inline-flex;
		align-items: center;
		gap: 0.25rem;
		font-size: 0.75rem;
		color: var(--neutral-700);
		text-decoration: none;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.social-link:hover {
		color: var(--violet);
	}

	.social-link:focus-visible {
		outline: 2px solid var(--violet);
		outline-offset: 2px;
		border-radius: 3px;
	}

	.social-link:focus:not(:focus-visible) {
		outline: none;
	}

	.social-link svg {
		flex-shrink: 0;
	}

	/* Responsive */
	@media (max-width: 768px) {
		.page-header h1 {
			font-size: 2rem;
		}

		.section-toggle {
			padding: 1rem;
		}

		.section-toggle h2 {
			font-size: 1.25rem;
		}

		.section-content {
			padding: 1.5rem 1rem;
		}

		.team-grid {
			grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
			gap: 1rem;
		}

		.member-card {
			padding: 0.75rem;
		}

		.member-photo {
			width: 60px;
			height: 60px;
		}

		.association-card {
			padding: 1.5rem;
		}

		.association-header {
			flex-direction: column;
			align-items: center;
			text-align: center;
			gap: 1rem;
		}

		.association-logo {
			width: 60px;
			height: 60px;
		}

		.bureau-grid {
			grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
			gap: 1rem;
		}

		.bureau-member-card {
			padding: 1rem;
		}

		.bureau-member-photo {
			width: 60px;
			height: 60px;
		}

		.group-item {
			padding: 1.5rem;
		}

		.group-header {
			flex-direction: column;
			align-items: flex-start;
			gap: 1rem;
		}

		.group-logo {
			width: 80px;
			height: 80px;
		}

		.organizers-grid {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 480px) {
		.section-toggle {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.5rem;
		}

		.team-grid {
			grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
		}

		.group-item {
			padding: 1.25rem;
		}

		.organizer-card {
			padding: 0.5rem;
		}

		.organizer-photo {
			width: 40px;
			height: 40px;
		}
	}
</style>
