'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

// Define Attribute type to match next-themes expectations
type Attribute = 'class' | 'data-theme' | 'data-mode';

// Define our own type instead of importing from dist/types
type ThemeProviderProps = {
  attribute?: Attribute | Attribute[];
  defaultTheme?: string;
  enableSystem?: boolean;
  forcedTheme?: string;
  storageKey?: string;
  themes?: string[];
  disableTransitionOnChange?: boolean;
};

export function ThemeProvider({ children, ...props }: React.PropsWithChildren<ThemeProviderProps>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
} 