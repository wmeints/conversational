/// <reference types="vitest-dom/extend-expect" />

import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen, type RenderResult } from '@testing-library/svelte';

import PromptDesigner from './prompt-designer.svelte';

describe('PromptDesigner', () => {
  it('Has a reset button', () => {
    render(PromptDesigner);

    const resetButton = screen.getByTestId('reset-button');

    expect(resetButton).not.toBeNull();
  });

  it('Has a send button', () => {
    render(PromptDesigner);

    const sendButton = screen.getByTestId('send-button');

    expect(sendButton).not.toBeNull();
  });

  describe('When you press the reset button', () => {
    let designer: RenderResult<PromptDesigner>;

    beforeEach(() => {
      designer = render<PromptDesigner>(PromptDesigner);
      screen.getByTestId('reset-button').click();
    });

    it('Resets the prompt', () => {
      const textArea = screen.getByTestId('prompt-textarea');
      expect(textArea).toHaveValue('');
    });

    afterEach(() => {
      cleanup();
    });
  });

  afterEach(() => {
    cleanup();
  });
});
