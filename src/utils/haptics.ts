/**
 * Web Haptics Utility
 * Provides a standardized way to trigger vibration feedback on supported devices.
 */

export const haptics = {
  /**
   * Tiny click for low-impact events (scrolling, hovering subtle items)
   */
  tiny: () => {
    if ("vibrate" in navigator) {
      navigator.vibrate(5);
    }
  },

  /**
   * Subtle click for minor interactions (button hover, card click)
   */
  light: () => {
    if ("vibrate" in navigator) {
      navigator.vibrate(10);
    }
  },

  /**
   * Standard confirmation for toggle switches or success states
   */
  medium: () => {
    if ("vibrate" in navigator) {
      navigator.vibrate(25);
    }
  },

  /**
   * Distinctive dual pulse for final completion or major successes
   */
  success: () => {
    if ("vibrate" in navigator) {
      navigator.vibrate([15, 50, 15]);
    }
  },

  /**
   * Heavy double pulse for errors or warnings
   */
  error: () => {
    if ("vibrate" in navigator) {
      navigator.vibrate([30, 100, 30, 100, 30]);
    }
  }
};
