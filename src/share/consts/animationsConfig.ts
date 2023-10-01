export const listAnimationConfig = {
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.25,
    },
  }),
  hidden: { opacity: 0, x: 100 },
};
