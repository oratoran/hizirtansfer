import type { GetSession, Handle } from '@sveltejs/kit';
import type { ServerRequest } from '@sveltejs/kit/types/endpoint';

const SUPPORTED_LANG = ['en', 'tr'];

function getLanguage({ headers, path }: ServerRequest): string {
	let language = path.split('/')[1];

	// language not in url
	if (SUPPORTED_LANG.indexOf(language) === -1) {
		language = SUPPORTED_LANG[0];

		if (headers['accept-language']) {
			const headerLang = headers['accept-language']
				.split(',')[0]
				.trim()
				.slice(0, 2);

			if (headerLang && headerLang.length > 1) {
				if (SUPPORTED_LANG.indexOf(headerLang) !== -1) language = headerLang;
			}
		}
	}

	return language;
}

export const getSession: GetSession = (req) => {
	return {
		lang: req.locals.lang,
		asdf: 'string'
	};
};

export const handle: Handle = async ({ request, render }) => {
	const language = getLanguage(request);
	request.locals.lang = language;

	const rendered = await render(request);

	if (rendered.headers['content-type'] === 'text/html') {
		return {
			...rendered,
			body: (rendered.body as string).replace('%lang%', language)
		};
	}

	return rendered;
};
