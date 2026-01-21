import * as v from 'valibot';

export const jboMupliParamsSchema = v.union([
  v.array(v.string()),
  v.array(v.tuple([v.string(), v.string()])),
]);

export type JboMupliParams = v.InferOutput<typeof jboMupliParamsSchema>;

export type Result<T, E> =
  | {
      success: true;
      value: T;
    }
  | {
      success: false;
      error: E;
    };

export const JsonParseValidate = <TSchema extends v.GenericSchema>(
  text: string,
  schema: TSchema,
): Result<
  v.InferOutput<TSchema>,
  Error | [v.InferIssue<TSchema>, ...v.InferIssue<TSchema>[]]
> => {
  try {
    const p = JSON.parse(text);
    const res = v.safeParse(schema, p);

    if (res.success) {
      return {
        success: true,
        value: res.output,
      };
    } else {
      return {
        success: false,
        error: res.issues,
      };
    }
  } catch (e) {
    return {
      success: false,
      error: e instanceof Error ? e : Error(`${e}`, { cause: e }),
    };
  }
};
