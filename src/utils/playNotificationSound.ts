// utils/playSound.ts
export const playNotificationSound = () => {
  const audio = new Audio("/notification.mp3");
  audio.play().catch((e) => {
    // Handle autoplay restriction error
    console.warn("Couldn't play sound", e);
  });
};
