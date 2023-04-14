export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["ag-grid.css","ag-grid.css.map","app.css","app.css.map","favicon.png","olympic-winners.json","quote.json","search.json","smui.css"]),
	mimeTypes: {".css":"text/css",".map":"application/json",".png":"image/png",".json":"application/json"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.18697ac7.js","imports":["_app/immutable/entry/start.18697ac7.js","_app/immutable/chunks/index.17362ed5.js","_app/immutable/chunks/singletons.e4a882b3.js","_app/immutable/chunks/index.f658b48a.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.08f3db13.js","imports":["_app/immutable/entry/app.08f3db13.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.17362ed5.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/grid",
				pattern: /^\/grid\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/snacks",
				pattern: /^\/snacks\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
