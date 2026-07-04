import React from 'react';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'ghost'
  | 'soft'
  | 'dark';

export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. Maps to the Afrimmak button palette. */
  variant?: ButtonVariant;
  /** Padding / font-size scale. */
  size?: ButtonSize;
  /** Optional leading icon (e.g. a Lucide <i> or inline SVG). */
  iconLeft?: React.ReactNode;
  /** Optional trailing icon. */
  iconRight?: React.ReactNode;
  children?: React.ReactNode;
}

export function Button(props: ButtonProps): JSX.Element;
