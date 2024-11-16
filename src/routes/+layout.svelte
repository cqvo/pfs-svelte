<script lang="ts">
	import '../app.postcss';
	import { AppBar, AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import { Drawer, getDrawerStore } from '@skeletonlabs/skeleton';
	import type { DrawerSettings, DrawerStore } from '@skeletonlabs/skeleton';
	import { initializeStores } from '@skeletonlabs/skeleton';
	initializeStores();
	const drawerStore = getDrawerStore();

	import LucideHome from '~icons/lucide/home';
	import LucideLayoutDashboard from '~icons/lucide/layout-dashboard';
	import LucideAlignJustify from '~icons/lucide/align-justify';
	import LucideUsers from '~icons/lucide/users';

	const triggerLeftNav = () => {
		const drawerSettings: DrawerSettings = {
			id: 'leftNav',
			position: 'left',
			width: '100%',
		}
		drawerStore.open(drawerSettings);
	}
</script>
<Drawer>
	{#if $drawerStore.id === 'leftNav'}
		<AppRail>
			<AppRailAnchor href="/" selected={$page.url.pathname === '/'}>
				<LucideLayoutDashboard class="btn-icon"/> Dashboard
			</AppRailAnchor>
			<AppRailAnchor href="/clients" selected={$page.url.pathname === '/clients'}>
				<LucideUsers class="btn-icon"/> Clients
			</AppRailAnchor>
		</AppRail>
		{/if}
</Drawer>
<div class="grid h-screen grid-rows-[auto_1fr_auto]">
	<!-- Header -->
	<header class="">
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
			<button class="btn-icon variant-filled" slot="lead" on:click={() => {triggerLeftNav(); }}>
				<LucideAlignJustify />
			</button>
			<h1>PFS 360</h1>
		</AppBar>
	</header>
	<!-- Grid Columns -->
	<div class="grid grid-cols-1 md:grid-cols[auto_1fr]">
		<!-- Main Content -->
		<main class="space-y-4 p-4">
			<slot />
		</main>

	</div>
	<!-- Footer -->
	<footer></footer>
</div>