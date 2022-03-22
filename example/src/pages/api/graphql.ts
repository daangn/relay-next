import { StatusCodes } from "http-status-codes";
import { NextApiHandler } from "next";
import { makeSchema } from "../../graphql/makeSchema";

const handler: NextApiHandler = async (req, res) => {
  const { query } = makeSchema();

  if (req.method !== "POST") {
    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: [{ message: "Only POST method is supported" }],
    });
  }
  if (!req.body?.query || req.body.query === "") {
    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: [{ message: "req.body.query not found" }],
    });
  }

  const result = await query({
    query: req.body.query,
    variables: req.body.variables ?? {},
  });

  res.status(StatusCodes.OK).json(result);
};

export default handler;
