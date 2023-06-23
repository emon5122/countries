
export default {
	async fetch(request: Request, env: any, ctx: ExecutionContext): Promise<Response> {
		if (request.method!=="GET"){
		const {name}:{name:string} = await request.json()
		return new Response(`Hey ${name}! Greetings from Cloudflare serverless.`);
		}else{
			return new Response("Hey Unknown! Greetings from Cloudflare serverless.");
		}
	},
};
