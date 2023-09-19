import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import NavigationBar from './navigation-bar.svelte';

describe('NavigationBar', () => {
  it('should render', () => {
    render(NavigationBar);
    expect(screen.getByText('Prompt engineering')).not.toBeNull();
  });
});
