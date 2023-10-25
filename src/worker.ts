import { countries } from "@nexisltd/country";
export default {
    async fetch(request: Request): Promise<Response> {
        return Response.json({ countries: countries() });
    },
};
