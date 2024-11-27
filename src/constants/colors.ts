export const COLORS = {
  // Main brand color
  PRIMARY: 'rgba(213, 17, 42, 255)',
  PRIMARY_HOVER: 'rgba(193, 15, 38, 255)', // Slightly darker version for hover states
  
  // Text color
  TEXT: 'rgba(32, 12, 0, 255)',
  TEXT_LIGHT: 'rgba(32, 12, 0, 0.7)', // For secondary text
  
  // Background color
  BACKGROUND: 'white',
  BACKGROUND_TRANSPARENT: 'rgba(255, 255, 255, 0.9)',
  
  // Shadow colors
  SHADOW: {
    LIGHT: 'rgba(32, 12, 0, 0.1)',
    MEDIUM: 'rgba(32, 12, 0, 0.15)',
  }
} as const;

// Type for the colors object
export type ColorType = typeof COLORS;

// Helper function to get color with type safety
export const getColor = (color: keyof typeof COLORS) => COLORS[color];
