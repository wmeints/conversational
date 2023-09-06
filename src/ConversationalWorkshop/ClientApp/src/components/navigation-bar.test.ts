import { describe, it, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/svelte';
import NavigationBar from './navigation-bar.svelte';

describe('NavigationBar', () => {
	it('should render', () => {
		const result = render(NavigationBar);
	});
});
