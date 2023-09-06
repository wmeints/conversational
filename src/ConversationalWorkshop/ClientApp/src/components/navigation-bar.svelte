<nav class="navbar navbar-expand-lg bg-light shadow-sm mb-4">
	<div class="container">
		<a href="/" class="navbar-brand">APW</a>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarContent"
		>
			<span class="navbar-toggler-icon" />
		</button>
		<div class="collapse navbar-collapse" id="navbarContent">
			<ul class="navbar-nav me-auto mb-2 mb-lg-0">
				<li class="nav-item"><a href="/" class="nav-link">Home</a></li>
				<li class="nav-item dropdown">
					<!-- svelte-ignore a11y-invalid-attribute -->
					<a
						href="#"
						class="nav-link dropdown-toggle"
						role="button"
						data-bs-toggle="dropdown"
						aria-expanded="false">Exercises</a
					>
					<ul class="dropdown-menu">
						<li>
							<a href="/exercises/01-prompt-design/" class="dropdown-item">1. Prompt design</a>
						</li>
						<li>
							<a href="/exercises/02-few-shot-learning/" class="dropdown-item"
								>2. Few shot learning</a
							>
						</li>
						<li>
							<a href="/exercises/03-use-organization-data/" class="dropdown-item"
								>3. Use organization data</a
							>
						</li>
					</ul>
				</li>
				<li class="nav-item"><a href="/resources" class="nav-link">Resources</a></li>
			</ul>
		</div>
	</div>
</nav>
