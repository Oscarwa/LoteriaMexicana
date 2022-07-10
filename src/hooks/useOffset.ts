const useOffset = () => {
  const getOffset = (n: number, max: number): number => {
    const gen = n % max;
    return Math.round(gen - max / 2);
  };

  return { getOffset };
};

export default useOffset;
