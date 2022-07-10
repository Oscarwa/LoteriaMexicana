const useValidator = () => {
  const getActiveTokens = (tokens: Record<number, boolean>): number[] => {
    const result = [];
    for (const value in tokens) {
      if (tokens[value] === true) {
        result.push(+value);
      }
    }
    return result;
  };

  const validateHorizontalLines = (
    schema: number[][],
    tokens: Record<number, boolean>
  ) => {
    const active = getActiveTokens(tokens);
    const result = schema.filter((row) => {
      return row.every((c) => active.includes(c));
    });
    return !!result.length;
  };
  const validateVerticalLines = (
    schema: number[][],
    tokens: Record<number, boolean>
  ) => {
    const active = getActiveTokens(tokens);
    const result = schema.filter((_row, index) => {
      const row = [
        schema[0][index],
        schema[1][index],
        schema[2][index],
        schema[3][index],
      ];
      return row.every((c) => active.includes(c));
    });
    return !!result.length;
  };
  const validateCenter = (
    schema: number[][],
    tokens: Record<number, boolean>
  ) => {
    const active = getActiveTokens(tokens);
    const center = [schema[1][1], schema[1][2], schema[2][1], schema[2][2]];
    return center.every((c) => active.includes(c));
  };
  const validateCorners = (
    schema: number[][],
    tokens: Record<number, boolean>
  ) => {
    const active = getActiveTokens(tokens);
    const corners = [schema[0][0], schema[0][3], schema[3][0], schema[3][3]];
    return corners.every((c) => active.includes(c));
  };
  const validateDiagonals = (
    schema: number[][],
    tokens: Record<number, boolean>
  ) => {
    const active = getActiveTokens(tokens);
    const diagonal1 = [schema[0][0], schema[1][1], schema[2][2], schema[3][3]];
    const diagonal2 = [schema[0][3], schema[1][2], schema[2][1], schema[3][0]];

    const result = [diagonal1, diagonal2].filter((row) => {
      return row.every((c) => active.includes(c));
    });

    return !!result.length;
  };

  const validateLoteria = (
    schema: number[][],
    tokens: Record<number, boolean>
  ) => {
    const active = getActiveTokens(tokens);
    // const result = schema.every((row) => {
    //   return row.every((c) => active.includes(c));
    // });
    return active.length === 16;
  };

  const validate = (schema: number[][],
    tokens: Record<number, boolean>) => {
        return validateHorizontalLines(schema, tokens) ||
        validateVerticalLines(schema, tokens) ||
        validateCenter(schema, tokens) ||
        validateCorners(schema, tokens) ||
        validateDiagonals(schema, tokens) ||
        validateLoteria(schema, tokens);
    }

  return {
    validateHorizontalLines,
    validateVerticalLines,
    validateCenter,
    validateCorners,
    validateDiagonals,
    validateLoteria,
    validate,
  };
};

export default useValidator;
