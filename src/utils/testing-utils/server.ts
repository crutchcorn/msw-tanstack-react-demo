import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { peopleHandlers, getAbsolutePeoplePath } from "./people-mocks";
import { returnJSON } from "./json";

export const server = setupServer(...peopleHandlers);

export function mockEndpointV5(
  path: string,
  body: object,
  type: "get" | "post" | "put" | "delete" = "get",
) {
  server.use(http[type](getAbsolutePeoplePath(path), returnJSON(body)));
}

export function mockEndpointWithPromiseV5(
  path: string,
  bodyPromise: Promise<object>,
) {
  server.use(
    http.get(getAbsolutePeoplePath(path), async () => {
      const body = await bodyPromise;
      return HttpResponse.json(body);
    }),
  );
}
